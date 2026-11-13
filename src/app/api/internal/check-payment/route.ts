import { NextRequest, NextResponse } from "next/server";
import { ENV } from "@/backend/config/env";
import { paymentMonitorService } from "@/backend/services/paymentMonitor.service";

export async function GET(req: NextRequest) {
    return handleCheck(req);
}

export async function POST(req: NextRequest) {
    return handleCheck(req);
}

async function handleCheck(req: NextRequest) {
    const authHeader = req.headers.get("authorization");
    const expectedHeader = `Bearer ${ENV.CRON_SECRET}`;
    const urlSecret = req.nextUrl.searchParams.get("secret");

    // Allow authorization via Bearer header (Vercel Cron / GitHub Actions) or ?secret=...
    const isAuthorized =
        authHeader === expectedHeader ||
        (urlSecret && urlSecret === ENV.CRON_SECRET) ||
        ENV.NODE_ENV === "development";

    if (!isAuthorized) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const result = await paymentMonitorService.checkPaymentGateway();
        // Return 200 so external cron services (like cron-job.org) consider the monitoring execution successful
        return NextResponse.json(result, { status: 200 });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Internal server error";
        return NextResponse.json({ message }, { status: 500 });
    }
}
