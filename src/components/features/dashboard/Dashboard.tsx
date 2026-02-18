"use client";

import React, { useState } from "react";
import AllOrders from "@/components/widgets/all-orders/AllOrders";
import TransactionHistory from "@/components/widgets/all-transactions/AllTransactions";
import styles from "./Dashboard.module.scss";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function Dashboard() {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).profile.dashboard;
    const [activeTab, setActiveTab] = useState<"orders" | "transactions">("orders");

    return (
        <section className={styles.dashboard}>
            <nav className={styles.tabs}>
                <button
                    className={activeTab === "orders" ? styles.active : ""}
                    onClick={() => setActiveTab("orders")}
                >
                    {t.tabs.orders}
                </button>
                <button
                    className={activeTab === "transactions" ? styles.active : ""}
                    onClick={() => setActiveTab("transactions")}
                >
                    {t.tabs.transactions}
                </button>
            </nav>

            <div className={styles.content}>
                {activeTab === "orders" ? <AllOrders /> : <TransactionHistory />}
            </div>
        </section>
    );
}