import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/backend/middlewares/auth.middleware";
import { userController } from "@/backend/controllers/user.controller";

const TOKENS_PER_GBP = 100;
const RATES_TO_GBP: Record<string, number> = { GBP: 1, EUR: 1.17, USD: 1.29, NOK: 12.85 };

export async function POST(req: NextRequest) {
    try {
        const payload = await requireAuth(req);
        const body = await req.json();

        if (body.currency && body.amount) {
            const { currency, amount } = body;
            const rate = RATES_TO_GBP[currency];
            if (!rate) {
                return NextResponse.json({ message: "Unsupported currency" }, { status: 400 });
            }

            const gbpEquivalent = amount / rate;
            if (gbpEquivalent < 10) {
                return NextResponse.json({ message: "Minimum top-up is £10 GBP equivalent" }, { status: 400 });
            }

            const tokens = Math.floor(gbpEquivalent * TOKENS_PER_GBP);

            // 🧾 запис транзакції вже всередині userController.buyTokens()
            const user = await userController.buyTokens(payload.sub, tokens);

            return NextResponse.json({ user, info: `Converted ${amount} ${currency} → ${tokens} tokens` });
        }

        const { amount } = body;
        if (!amount || amount <= 0) {
            return NextResponse.json({ message: "Invalid token amount" }, { status: 400 });
        }

        const user = await userController.buyTokens(payload.sub, amount);
        return NextResponse.json({ user });
    } catch (err: any) {
        return NextResponse.json({ message: err.message }, { status: 400 });
    }
}
