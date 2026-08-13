"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./Checkout.module.scss";
import { useCurrency } from "@/context/CurrencyContext";
import { useCheckoutStore } from "@/utils/store";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";
import { useAlert } from "@/context/AlertContext";

const Checkout = () => {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).checkout;
    const { plan, setPlan } = useCheckoutStore();
    const [activePlan, setActivePlan] = useState(plan);
    const { currency, sign, convertFromGBP } = useCurrency();
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const { showAlert } = useAlert();

    useEffect(() => {
        if (!plan) {
            const stored = localStorage.getItem("selectedPlan");
            if (stored) {
                const parsed = JSON.parse(stored);
                setPlan(parsed);
                setActivePlan(parsed);
            }
        } else {
            setActivePlan(plan);
        }
    }, [plan, setPlan]);

    const basePrice = useMemo(() => {
        return activePlan ? convertFromGBP(activePlan.price) : 0;
    }, [activePlan, convertFromGBP]);

    const vat = useMemo(() => basePrice * 0.2, [basePrice]);
    const total = useMemo(() => basePrice + vat, [basePrice, vat]);

    const paymentState = searchParams.get("payment");

    const handlePay = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!activePlan || !agreed || loading) return;

        try {
            setLoading(true);

            const res = await fetch("/api/payments/whitegallo/session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currency,
                    amount: total,
                    title: activePlan.title,
                }),
            });

            if (!res.ok) {
                const err = await res.json();
                showAlert("Payment Error", err.message || t.paymentFailed, "error");
                return;
            }

            const data = await res.json();
            if (!data?.redirectUrl) {
                showAlert("Payment Error", t.paymentFailed, "error");
                return;
            }

            window.location.href = data.redirectUrl;
        } catch {
            showAlert("Payment Error", t.paymentFailed, "error");
        } finally {
            setLoading(false);
        }
    };

    if (!activePlan) {
        return (
            <div className={styles.checkoutEmpty}>
                <p>
                    {t.noPlanSelected} <a href="/pricing">{t.pricing}</a>.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.checkout}>
            <div className={styles.header}>
                <h1>{t.title}</h1>
                <p>{t.subtitle}</p>
                {paymentState && paymentState !== "success" && (
                    <p>{t.paymentFailed}</p>
                )}
            </div>

            <div className={styles.main}>
                <div className={styles.summary}>
                    <h2>{t.orderSummary}</h2>

                    <div className={styles.itemRow}>
                        <div className={styles.itemInfo}>
                            <h3>{activePlan.title}</h3>
                            <p>
                                {activePlan.tokens.toLocaleString("en-US")} {t.tokens}
                            </p>
                        </div>
                        <span>
                            {sign}
                            {basePrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.line} />

                    <div className={styles.itemRow}>
                        <p>{t.subtotal}</p>
                        <span>
                            {sign}
                            {basePrice.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.itemRow}>
                        <p>{t.vat}</p>
                        <span>
                            {sign}
                            {vat.toFixed(2)} {currency}
                        </span>
                    </div>

                    <div className={styles.totalRow}>
                        <h3>{t.total}</h3>
                        <h3>
                            {sign}
                            {total.toFixed(2)} {currency}
                        </h3>
                    </div>
                </div>

                <div className={styles.payment}>
                    <h2>{t.paymentDetails}</h2>

                    <form onSubmit={handlePay}>
                        <div className={styles.agreement}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={agreed}
                                    onChange={(e) => setAgreed(e.target.checked)}
                                />{" "}
                                {t.agreeTerms}{" "}
                                <a href="/terms-and-conditions" target="_blank">
                                    {t.termsLink}
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={!agreed || loading}
                            className={styles.payButton}
                        >
                            {loading
                                ? t.processing
                                : `${t.pay} ${sign}${total.toFixed(2)} ${currency}`}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;