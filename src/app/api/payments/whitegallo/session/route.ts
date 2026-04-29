import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { whitegalloService } from "@/backend/services/whitegallo.service";

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = await req.json();

        const amount = Number(body.amount);
        const currency = String(body.currency || "").toUpperCase();

        if (!amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid amount" }, { status: 400 });
        }

        if (!(["GBP", "EUR"] as const).includes(currency as "GBP" | "EUR")) {
            return NextResponse.json({ message: "Unsupported currency" }, { status: 400 });
        }

        const session = await whitegalloService.createCheckoutSession({
            userId: payload.sub,
            userEmail: payload.email,
            userName: body.customerName,
            amount,
            currency: currency as "GBP" | "EUR",
            title: body.title,
        });

        return NextResponse.json(session);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Failed to create session";
        console.error("[Whitegallo Session]", message);
        return NextResponse.json({ message }, { status: 400 });
    }
}
