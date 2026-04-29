import crypto from "crypto";
import { ENV } from "@/backend/config/env";
import { connectDB } from "@/backend/config/db";
import { WhitegalloPayment } from "@/backend/models/whitegalloPayment.model";
import { userController } from "@/backend/controllers/user.controller";

const TOKENS_PER_GBP = 100;
const RATES_TO_GBP = { GBP: 1, EUR: 1.17 } as const;

export interface CreateSessionInput {
    userId: string;
    userEmail?: string;
    userName?: string;
    amount: number;
    currency: "GBP" | "EUR";
    title?: string;
}

export interface CallbackPayload {
    id?: string;
    order_number?: string;
    order_amount?: string;
    order_currency?: string;
    order_description?: string;
    order_status?: string;
    status?: string;
    hash?: string;
    trans_id?: string;
}

function roundAmount(value: number): string {
    return value.toFixed(2);
}

function md5ThenSha1Upper(input: string): string {
    const upper = input.toUpperCase();
    const md5 = crypto.createHash("md5").update(upper).digest("hex");
    return crypto.createHash("sha1").update(md5).digest("hex");
}

function getApiHost() {
    const mode = ENV.WHITEGALLO_MODE;
    const host = mode === "PRODUCTION" ? ENV.WHITEGALLO_PRODUCTION_HOST : ENV.WHITEGALLO_STAGING_HOST;
    if (!host) {
        throw new Error(
            mode === "PRODUCTION"
                ? "WHITEGALLO_PRODUCTION_HOST is not configured"
                : "WHITEGALLO_STAGING_HOST is not configured"
        );
    }
    return host;
}

function getMerchantKey() {
    const mode = ENV.WHITEGALLO_MODE;
    const key = mode === "PRODUCTION" ? ENV.WHITEGALLO_PRODUCTION_KEY : ENV.WHITEGALLO_STAGING_KEY;
    if (!key) {
        throw new Error(
            mode === "PRODUCTION"
                ? "WHITEGALLO_PRODUCTION_KEY is not configured"
                : "WHITEGALLO_STAGING_KEY is not configured"
        );
    }
    return key;
}

function getPassword() {
    if (!ENV.WHITEGALLO_PASSWORD) {
        throw new Error("WHITEGALLO_PASSWORD is not configured");
    }
    return ENV.WHITEGALLO_PASSWORD;
}

function buildSessionHash(orderNumber: string, amount: string, currency: string, description: string): string {
    return md5ThenSha1Upper(`${orderNumber}${amount}${currency}${description}${getPassword()}`);
}

function buildReturnOrCallbackHash(
    paymentId: string,
    orderNumber: string,
    amount: string,
    currency: string,
    description: string
): string {
    return md5ThenSha1Upper(`${paymentId}${orderNumber}${amount}${currency}${description}${getPassword()}`);
}

export const whitegalloService = {
    async createCheckoutSession(input: CreateSessionInput) {
        const rate = RATES_TO_GBP[input.currency];
        const gbpAmount = input.amount / rate;
        const tokens = Math.floor(gbpAmount * TOKENS_PER_GBP);

        if (tokens <= 0) {
            throw new Error("Amount is too low for token purchase");
        }

        const orderNumber = `wg-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`;
        const orderAmount = roundAmount(input.amount);
        const orderDescription = `${input.title || "Token top-up"} (${tokens} tokens)`;

        await connectDB();
        await WhitegalloPayment.create({
            userId: input.userId,
            orderNumber,
            amount: input.amount,
            currency: input.currency,
            gbpAmount,
            tokens,
            description: orderDescription,
            status: "pending",
        });

        const apiHost = getApiHost();
        const merchantKey = getMerchantKey();
        const hash = buildSessionHash(orderNumber, orderAmount, input.currency, orderDescription);

        const payload = {
            merchant_key: merchantKey,
            operation: "purchase",
            payment_type: "card",
            order: {
                number: orderNumber,
                amount: orderAmount,
                currency: input.currency,
                description: orderDescription,
            },
            success_url: `${ENV.APP_URL}/api/payments/whitegallo/return?result=success`,
            fail_url: `${ENV.APP_URL}/api/payments/whitegallo/return?result=cancel`,
            callback_url: `${ENV.APP_URL}/api/payments/whitegallo/callback`,
            url_target: "_top",
            hash,
            customer: {
                name: input.userName || "Customer",
                email: input.userEmail || "",
            },
        };

        const fetchUrl = `${apiHost}/api/v1/session`;
        console.log("[Whitegallo] Creating session:", { orderNumber, amount: orderAmount, currency: input.currency });

        const response = await fetch(fetchUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok || !data?.redirect_url) {
            const providerErrors = data?.errors?.map((e: { error_message: string }) => e.error_message).join("; ") || "";
            const providerMsg = data?.error_message || "Unknown gateway error";
            console.error("[Whitegallo] Session creation failed:", { status: response.status, providerMsg, providerErrors });

            if (providerErrors.includes("Protocol mapping not found")) {
                throw new Error(
                    "Payment gateway is not configured yet. Please contact support or try again later."
                );
            }

            throw new Error(providerMsg);
        }

        console.log("[Whitegallo] Session created:", { orderNumber, redirectUrl: data.redirect_url });
        return {
            orderNumber,
            redirectUrl: data.redirect_url as string,
        };
    },

    async finalizeFromReturn(params: {
        paymentId?: string;
        orderId?: string;
        hash?: string;
        transId?: string;
    }) {
        if (!params.paymentId || !params.orderId || !params.hash) {
            return { ok: false, reason: "missing_params" as const };
        }

        await connectDB();

        const payment = await WhitegalloPayment.findOne({ orderNumber: params.orderId });
        if (!payment) return { ok: false, reason: "payment_not_found" as const };

        const expectedHash = buildReturnOrCallbackHash(
            params.paymentId,
            payment.orderNumber,
            roundAmount(payment.amount),
            payment.currency,
            payment.description
        );

        if (expectedHash !== params.hash) {
            return { ok: false, reason: "invalid_hash" as const };
        }

        return this.markAsPaid(payment.orderNumber, params.paymentId, params.transId);
    },

    async finalizeFromCallback(payload: CallbackPayload) {
        if (
            !payload.id ||
            !payload.order_number ||
            !payload.order_amount ||
            !payload.order_currency ||
            !payload.order_description ||
            !payload.hash
        ) {
            return { ok: false, reason: "missing_params" as const };
        }

        const expectedHash = buildReturnOrCallbackHash(
            payload.id,
            payload.order_number,
            payload.order_amount,
            payload.order_currency,
            payload.order_description
        );

        if (expectedHash !== payload.hash) {
            return { ok: false, reason: "invalid_hash" as const };
        }

        if (payload.status !== "success" || payload.order_status !== "settled") {
            await connectDB();
            await WhitegalloPayment.updateOne(
                { orderNumber: payload.order_number, status: { $nin: ["paid", "processing"] } },
                {
                    $set: {
                        status: payload.status === "fail" ? "failed" : "pending",
                        providerPaymentId: payload.id,
                        providerTransId: payload.trans_id,
                    },
                }
            );
            return { ok: true, reason: "non_settled" as const };
        }

        return this.markAsPaid(payload.order_number, payload.id, payload.trans_id);
    },

    async markAsPaid(orderNumber: string, paymentId?: string, transId?: string) {
        await connectDB();

        const payment = await WhitegalloPayment.findOneAndUpdate(
            {
                orderNumber,
                status: { $in: ["pending", "failed", "cancelled"] },
            },
            {
                $set: {
                    status: "processing",
                    providerPaymentId: paymentId,
                    providerTransId: transId,
                },
            },
            { new: true }
        );

        if (!payment) {
            const existing = await WhitegalloPayment.findOne({ orderNumber });
            if (!existing) return { ok: false, reason: "payment_not_found" as const };
            if (existing.status === "paid") return { ok: true, reason: "already_paid" as const };
            return { ok: false, reason: "in_progress" as const };
        }

        try {
            await userController.buyTokens(payment.userId.toString(), payment.tokens);
            await WhitegalloPayment.updateOne(
                { _id: payment._id },
                { $set: { status: "paid", providerPaymentId: paymentId, providerTransId: transId } }
            );
            return { ok: true, reason: "paid" as const };
        } catch (error) {
            await WhitegalloPayment.updateOne({ _id: payment._id }, { $set: { status: "pending" } });
            throw error;
        }
    },
};

