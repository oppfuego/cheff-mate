"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import styles from "./PricingCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Input from "@mui/joy/Input";
import { useAlert } from "@/context/AlertContext";
import { useUser } from "@/context/UserContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useRouter } from "next/navigation";
import { useCheckoutStore } from "@/utils/store";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

const TOKENS_PER_GBP = 100;
const MIN_GBP = 10;

interface PricingCardProps {
    variant?: "starter" | "pro" | "premium" | "custom";
    title: string;
    priceGBP: number;
    tokens: number;
    description: string;
    features?: string[];
    buttonText: string;
    badgeTop?: string;
    index?: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
                                                     variant = "starter",
                                                     title,
                                                     priceGBP,
                                                     tokens,
                                                     description,
                                                     features = [],
                                                     buttonText,
                                                     badgeTop,
                                                     index = 0,
                                                 }) => {
    const { showAlert } = useAlert();
    const user = useUser();
    const { sign, convertFromGBP, convertToGBP, currency } = useCurrency();
    const { lang } = useI18n();
    const pageTranslations = getPageTranslations(lang);
    const common = pageTranslations.home.common;
    const checkout = pageTranslations.checkout;
    const router = useRouter();
    const { setPlan } = useCheckoutStore();

    const isCustom = variant === "custom";
    const minDisplayAmount = Math.ceil(convertFromGBP(MIN_GBP));
    const [customAmount, setCustomAmount] = useState<number>(minDisplayAmount);

    const convertedPrice = useMemo(() => {
        if (isCustom) return 0;
        return convertFromGBP(priceGBP);
    }, [priceGBP, convertFromGBP, isCustom]);

    const calculatedTokens = useMemo(() => {
        const gbp = convertToGBP(customAmount);
        return Math.floor(gbp * TOKENS_PER_GBP);
    }, [customAmount, convertToGBP]);

    const handleBuy = () => {
        if (!user) {
            showAlert("Sign in required", "Please sign in to continue", "info");
            setTimeout(() => router.push("/sign-in"), 1200);
            return;
        }

        const finalTokens = isCustom ? calculatedTokens : tokens;
        const finalPriceGBP = isCustom ? convertToGBP(customAmount) : priceGBP;

        if (finalPriceGBP < MIN_GBP) {
            showAlert("Minimum amount", `Minimum top-up is ${sign}${minDisplayAmount}`, "info");
            return;
        }

        const plan = {
            title,
            price: finalPriceGBP,
            tokens: finalTokens,
            variant,
            currency,
        };

        setPlan(plan);
        localStorage.setItem("selectedPlan", JSON.stringify(plan));
        router.push("/checkout");
    };

    const quickAmounts = [50, 100, 200].map((v) => Math.max(v, minDisplayAmount));
    const uniqueQuickAmounts = [...new Set(quickAmounts)];

    return (
        <motion.div
            className={`${styles.card} ${styles[variant]}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
        >
            {badgeTop && <span className={styles.badgeTop}>{badgeTop}</span>}
            <h3 className={styles.title}>{title}</h3>

            {!isCustom ? (
                <div className={styles.priceRow}>
                    <span className={styles.price}>
                        {sign}
                        {convertedPrice.toFixed(2)}
                    </span>
                    <span className={styles.tokens}>
                        {tokens.toLocaleString('en-US')} {checkout.tokens}
                    </span>
                </div>
            ) : (
                <div className={styles.customBlock}>
                    <Input
                        type="number"
                        value={customAmount}
                        onChange={(e) =>
                            setCustomAmount(Math.max(minDisplayAmount, Number(e.target.value)))
                        }
                        startDecorator={sign}
                        size="md"
                        slotProps={{ input: { min: minDisplayAmount } }}
                    />

                    <div className={styles.quickAmounts}>
                        {uniqueQuickAmounts.map((v) => (
                            <button
                                key={v}
                                onClick={() => setCustomAmount(v)}
                                className={styles.quickBtn}
                            >
                                {sign}
                                {v}
                            </button>
                        ))}
                    </div>

                    <div className={styles.preview}>
                        <p>
                            {common.youGetLabel}{" "}
                            <span>{calculatedTokens.toLocaleString('en-US')}</span>{" "}
                            {checkout.tokens}
                        </p>
                    </div>
                </div>
            )}

            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((f, i) => (
                    <li key={i}>{f}</li>
                ))}
            </ul>

            <div className={styles.cta}>
                <ButtonUI
                    fullWidth
                    size="md"
                    color="primary"
                    variant="solid"
                    onClick={handleBuy}
                >
                    {user ? buttonText : common.signInToBuyTokens}
                </ButtonUI>
            </div>
        </motion.div>
    );
};

export default PricingCard;
