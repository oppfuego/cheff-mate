import { ENV } from "@/backend/config/env";
import { connectDB } from "@/backend/config/db";
import { User } from "@/backend/models/user.model";
import { WhitegalloPayment } from "@/backend/models/whitegalloPayment.model";
import { whitegalloService } from "@/backend/services/whitegallo.service";

export async function sendTelegramNotification(htmlMessage: string): Promise<boolean> {
    const token = ENV.TELEGRAM_BOT_TOKEN;
    const targetChatId = ENV.TELEGRAM_CHAT_ID;

    if (!token || !targetChatId) {
        console.warn("[PaymentMonitor] Telegram token or chat ID is not configured");
        return false;
    }

    try {
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        let res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: targetChatId,
                text: htmlMessage,
                parse_mode: "HTML",
                disable_web_page_preview: false,
            }),
        });

        let data = await res.json();

        // Handle automatic migration of group chat to supergroup
        if (!data.ok && data.parameters?.migrate_to_chat_id) {
            const newChatId = data.parameters.migrate_to_chat_id;
            console.log(`[PaymentMonitor] Migrating chat ID to supergroup: ${newChatId}`);
            res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: newChatId,
                    text: htmlMessage,
                    parse_mode: "HTML",
                    disable_web_page_preview: false,
                }),
            });
            data = await res.json();
        }

        if (!res.ok || !data.ok) {
            console.error("[PaymentMonitor] Telegram API error:", data);
            return false;
        }

        return true;
    } catch (err) {
        console.error("[PaymentMonitor] Failed to send Telegram message:", err);
        return false;
    }
}

export interface PaymentCheckResult {
    success: boolean;
    orderNumber?: string;
    redirectUrl?: string;
    error?: string;
    telegramSent: boolean;
    timestamp: string;
}

export const paymentMonitorService = {
    async checkPaymentGateway(): Promise<PaymentCheckResult> {
        const timestamp = new Date().toISOString();
        await connectDB();

        const testEmail = ENV.TEST_USER_EMAIL || "test@example.com";
        let user = await User.findOne({ email: testEmail });

        if (!user) {
            user = await User.findOne();
        }

        if (!user) {
            const errorMsg = `Test user (${testEmail}) not found in database.`;
            const alertText = [
                `🚨 <b>Payment Gateway Monitor Alert</b>`,
                ``,
                `<b>Status:</b> ❌ FAILED (Configuration Error)`,
                `<b>Error:</b> <code>${errorMsg}</code>`,
                `<b>Timestamp:</b> <code>${timestamp}</code>`,
            ].join("\n");

            const telegramSent = await sendTelegramNotification(alertText);
            return { success: false, error: errorMsg, telegramSent, timestamp };
        }

        const gatewayHost =
            ENV.WHITEGALLO_MODE === "PRODUCTION"
                ? ENV.WHITEGALLO_PRODUCTION_HOST
                : ENV.WHITEGALLO_STAGING_HOST;

        try {
            console.log("[PaymentMonitor] Running payment health check...");
            const session = await whitegalloService.createCheckoutSession({
                userId: String(user._id),
                userEmail: user.email,
                userName: `${user.firstName || "Test"} ${user.lastName || "User"}`.trim(),
                amount: 10,
                currency: "GBP",
                title: "Payment Gateway Monitor Health Check",
            });

            // Mark check payment in DB as health_check
            await WhitegalloPayment.updateOne(
                { orderNumber: session.orderNumber },
                { $set: { status: "health_check" } }
            );

            // Verify redirect URL is reachable
            let redirectStatus = "Unknown";
            try {
                const headRes = await fetch(session.redirectUrl, { method: "HEAD" });
                redirectStatus = `HTTP ${headRes.status}`;
            } catch {
                redirectStatus = "Redirect URL generated";
            }

            const successText = [
                `✅ <b>Payment Gateway Monitor: OK</b>`,
                ``,
                `<b>Status:</b> 🟢 Operational`,
                `<b>Redirect URL:</b> <a href="${session.redirectUrl}">Open Payment Page</a>`,
                `<b>Order Number:</b> <code>${session.orderNumber}</code>`,
                `<b>Gateway Mode:</b> <code>${ENV.WHITEGALLO_MODE}</code> (${gatewayHost})`,
                `<b>Gateway Reachability:</b> <code>${redirectStatus}</code>`,
                `<b>Timestamp:</b> <code>${timestamp}</code>`,
            ].join("\n");

            const telegramSent = await sendTelegramNotification(successText);
            return {
                success: true,
                orderNumber: session.orderNumber,
                redirectUrl: session.redirectUrl,
                telegramSent,
                timestamp,
            };
        } catch (err: unknown) {
            const errorMsg = err instanceof Error ? err.message : String(err);
            console.error("[PaymentMonitor] Health check failed:", errorMsg);

            const alertText = [
                `🚨 <b>Payment Gateway Alert: Session Creation Failed</b>`,
                ``,
                `<b>Status:</b> ❌ FAILED`,
                `<b>Gateway Error:</b> <code>${errorMsg}</code>`,
                `<b>Gateway Mode:</b> <code>${ENV.WHITEGALLO_MODE}</code> (${gatewayHost})`,
                `<b>Environment:</b> <code>${ENV.NODE_ENV}</code>`,
                `<b>Timestamp:</b> <code>${timestamp}</code>`,
            ].join("\n");

            const telegramSent = await sendTelegramNotification(alertText);
            return {
                success: false,
                error: errorMsg,
                telegramSent,
                timestamp,
            };
        }
    },
};
