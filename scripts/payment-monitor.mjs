#!/usr/bin/env node

/**
 * CheffMate Payment Gateway Monitor
 * Periodically checks payment gateway health and sends alerts to Telegram.
 */

const siteUrl = process.env.MONITOR_SITE_URL || process.env.APP_URL || "https://cheffmate.co.uk";
const cronSecret = process.env.CRON_SECRET || "dev-cron-secret";
const checkEndpoint = `${siteUrl.replace(/\/$/, "")}/api/internal/check-payment`;

async function runCheck() {
    console.log(`[${new Date().toISOString()}] Checking payment gateway at: ${checkEndpoint}`);

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

        if (!res.ok) {
            console.error(`[${new Date().toISOString()}] Check reported failure:`, data.error || data.message);
        } else {
            console.log(`[${new Date().toISOString()}] Check succeeded! Redirect URL:`, data.redirectUrl);
        }
    } catch (err) {
        console.error(`[${new Date().toISOString()}] Network error reaching site:`, err.message);

        // Fallback: If site is unreachable (e.g. DNS or hosting down), notify Telegram directly
        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (token && chatId) {
            const fallbackText = [
                `🚨 <b>CheffMate Site Alert: Unreachable</b>`,
                ``,
                `<b>Status:</b> ❌ DOWN`,
                `<b>Error:</b> <code>${err.message}</code>`,
                `<b>Site URL:</b> <code>${siteUrl}</code>`,
                `<b>Timestamp:</b> <code>${new Date().toISOString()}</code>`,
            ].join("\n");

            await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: fallbackText,
                    parse_mode: "HTML",
                }),
            }).catch(() => {});
        }
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
