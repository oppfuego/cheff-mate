import { NextRequest, NextResponse } from "next/server";
import { ENV } from "@/backend/config/env";
import { whitegalloService } from "@/backend/services/whitegallo.service";

function buildRedirect(path: string) {
    return `${ENV.APP_URL}${path}`;
}

export async function GET(req: NextRequest) {
    try {
        const url = req.nextUrl;
        const result = url.searchParams.get("result") || "unknown";

        if (result !== "success") {
            return NextResponse.redirect(buildRedirect("/checkout?payment=cancelled"));
        }

        const finalizeResult = await whitegalloService.finalizeFromReturn({
            paymentId: url.searchParams.get("payment_id") || undefined,
            orderId: url.searchParams.get("order_id") || undefined,
            hash: url.searchParams.get("hash") || undefined,
            transId: url.searchParams.get("trans_id") || undefined,
        });

        if (!finalizeResult.ok) {
            return NextResponse.redirect(buildRedirect(`/checkout?payment=${finalizeResult.reason}`));
        }

        return NextResponse.redirect(buildRedirect("/profile?payment=success"));
    } catch {
        return NextResponse.redirect(buildRedirect("/checkout?payment=failed"));
    }
}

