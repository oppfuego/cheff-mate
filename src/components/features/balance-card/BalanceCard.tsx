"use client";

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import styles from "./BalanceCard.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";

export default function BalanceCard() {
    const user = useUser();

    if (!user) return null;

    return (
        <section className={styles.card}>
            <div className={styles.left}>
                <p className={styles.label}>CULINARY CREDITS</p>
                <h3 className={styles.amount}>
                    {user.tokens} Tokens
                </h3>
                <p className={styles.desc}>
                    Unlock premium chef-led masterclasses and AI recipe generations.
                </p>

                <Link href="/pricing">
                    <ButtonUI variant="solid" color="primary" size="lg">
                        Top-Up Tokens
                    </ButtonUI>
                </Link>
            </div>

            <div className={styles.icon}>
                T ✦
            </div>
        </section>
    );
}