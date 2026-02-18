"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import styles from "./BalanceCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function BalanceCard() {
    const user = useUser();
    const { lang } = useI18n();
    const t = getPageTranslations(lang).profile.balance;

    if (!user) return null;

    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <p className={styles.label}>{t.label}</p>
                <h3 className={styles.amount}>
                    {t.tokensLabel.replace("{amount}", user.tokens.toString())}
                </h3>
                <p className={styles.desc}>
                    {t.description}
                </p>

                <Link href="/pricing">
                    <ButtonUI variant="solid" color="primary" size="lg">
                        {t.buttonText}
                    </ButtonUI>
                </Link>
            </div>

            <div className={styles.icon}>
                T ✦
            </div>
        </section>
    );
}