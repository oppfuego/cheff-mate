import { NextRequest, NextResponse } from "next/server";
import { whitegalloService } from "@/backend/services/whitegallo.service";

function formDataToObject(formData: FormData) {
    const out: Record<string, string> = {};
    for (const [key, value] of formData.entries()) {
        out[key] = String(value);
    }
    return out;
}

export async function POST(req: NextRequest) {
    try {
        const contentType = req.headers.get("content-type") || "";
        let payload: Record<string, string>;

        if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
            payload = formDataToObject(await req.formData());
        } else {
            const json = await req.json();
            payload = Object.fromEntries(
                Object.entries(json || {}).map(([k, v]) => [k, String(v)])
            );
        }

        const result = await whitegalloService.finalizeFromCallback(payload);

        return NextResponse.json({ ok: result.ok, reason: result.reason });
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "callback_error";
        console.error("[Whitegallo Callback]", message);
        return NextResponse.json({ ok: false, message });
    }
}

