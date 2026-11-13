#!/usr/bin/env node

/**
 * CheffMate Payment Gateway Monitor
 * Periodically checks payment gateway health and sends alerts to Telegram.
 */

const rawUrl = process.env.MONITOR_SITE_URL || process.env.APP_URL || "https://www.cheffmate.co.uk";
// Prefer www domain to avoid cross-origin redirect dropping Authorization header
const siteUrl = rawUrl.replace("https://cheffmate.co.uk", "https://www.cheffmate.co.uk").replace(/\/$/, "");
const cronSecret = process.env.CRON_SECRET || "dev-cron-secret";
const checkEndpoint = `${siteUrl}/api/internal/check-payment?secret=${encodeURIComponent(cronSecret)}`;

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "9269400515:AAFgZsnwMW_nNZ-nxk5DkNB2ee5FIYJlJg4";
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "-1003787195851";

async function sendTelegram(htmlText) {
    if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
        console.warn("[PaymentMonitor] Telegram credentials missing, skipping notification");
        return false;
    }

    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: htmlText,
                parse_mode: "HTML",
                disable_web_page_preview: false,
            }),
        });

        const data = await res.json();
        if (!data.ok) {
            console.error("[PaymentMonitor] Telegram API error:", data);
            return false;
        }
        return true;
    } catch (e) {
        console.error("[PaymentMonitor] Failed to send Telegram message:", e.message);
        return false;
    }
}

async function runCheck() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Checking payment gateway at: ${checkEndpoint}`);

    try {
        const res = await fetch(checkEndpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${cronSecret}`,
                "Content-Type": "application/json",
            },
        });

        const data = await res.json().catch(() => ({}));
        console.log(`[${new Date().toISOString()}] Response (${res.status}):`, JSON.stringify(data, null, 2));

        if (!res.ok || !data.success) {
            const errorMsg = data.error || data.message || `HTTP ${res.status}`;
            console.error(`[${new Date().toISOString()}] Check reported failure:`, errorMsg);

            // If the server didn't send Telegram notification, send it from the monitor runner
            if (!data.telegramSent) {
                const alertText = [
                    `🚨 <b>Payment Gateway Alert: Session Creation Failed</b>`,
                    ``,
                    `<b>Status:</b> ❌ FAILED`,
                    `<b>Gateway Error:</b> <code>${errorMsg}</code>`,
                    `<b>Target:</b> <code>${siteUrl}</code>`,
                    `<b>Timestamp:</b> <code>${timestamp}</code>`,
                ].join("\n");

                const sent = await sendTelegram(alertText);
                console.log(`[PaymentMonitor] Fallback Telegram alert sent: ${sent}`);
            }
        } else {
            console.log(`[${new Date().toISOString()}] Check succeeded! Redirect URL:`, data.redirectUrl);

            // If the server didn't send Telegram notification, send success notification
            if (!data.telegramSent) {
                const successText = [
                    `✅ <b>Payment Gateway Monitor: OK</b>`,
                    ``,
                    `<b>Status:</b> 🟢 Operational`,
                    `<b>Redirect URL:</b> <a href="${data.redirectUrl}">Open Payment Page</a>`,
                    `<b>Order Number:</b> <code>${data.orderNumber || "N/A"}</code>`,
                    `<b>Target:</b> <code>${siteUrl}</code>`,
                    `<b>Timestamp:</b> <code>${timestamp}</code>`,
                ].join("\n");

                const sent = await sendTelegram(successText);
                console.log(`[PaymentMonitor] Fallback Telegram success sent: ${sent}`);
            }
        }
    } catch (err) {
        console.error(`[${new Date().toISOString()}] Network error reaching site:`, err.message);

        // Fallback: If site is completely unreachable (e.g. DNS or hosting down)
        const fallbackText = [
            `🚨 <b>CheffMate Site Alert: Unreachable</b>`,
            ``,
            `<b>Status:</b> ❌ DOWN`,
            `<b>Error:</b> <code>${err.message}</code>`,
            `<b>Site URL:</b> <code>${siteUrl}</code>`,
            `<b>Timestamp:</b> <code>${new Date().toISOString()}</code>`,
        ].join("\n");

        const sent = await sendTelegram(fallbackText);
        console.log(`[PaymentMonitor] Site-down Telegram alert sent: ${sent}`);
    }
}

const isDaemon = process.argv.includes("--daemon");

if (isDaemon) {
    const ONE_HOUR_MS = 60 * 60 * 1000;
    console.log(`[Payment Monitor Daemon] Running every 1 hour (interval: ${ONE_HOUR_MS}ms). Site: ${siteUrl}`);
    runCheck();
    setInterval(runCheck, ONE_HOUR_MS);
} else {
    runCheck();
}
