"use client";

import React, { useEffect, useState } from "react";
import styles from "./AllTransactions.module.scss";

interface Transaction {
    _id: string;
    amount: number;
    type: "add" | "spend";
    balanceAfter: number;
    createdAt: string;
}

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("/api/transactions/get-all", {
                    credentials: "include",
                });
                const data = await res.json();
                if (res.ok) setTransactions(data.transactions);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const formatDate = (date: string) =>
        new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
        });

    if (loading) {
        return <p className={styles.loading}>Loading transactions…</p>;
    }

    if (transactions.length === 0) {
        return (
            <div className={styles.empty}>
                <p>No transactions yet.</p>
            </div>
        );
    }

    return (
        <section className={styles.section}>
            <header className={styles.header}>
                <div>
                    <h3>Transaction History</h3>
                    <p>All balance changes</p>
                </div>
            </header>

            <div className={styles.table}>
                {/* TABLE HEAD */}
                <div className={styles.head}>
                    <span>Date</span>
                    <span>Type</span>
                    <span>Amount</span>
                    <span>Balance After</span>
                </div>

                {/* TABLE ROWS */}
                {transactions.map((t) => (
                    <div className={styles.row} key={t._id}>
                        <span className={styles.date}>
                            {formatDate(t.createdAt)}
                        </span>

                        <span
                            className={
                                t.type === "add"
                                    ? styles.typeAdd
                                    : styles.typeSpend
                            }
                        >
                            {t.type === "add" ? "Top-up" : "Spend"}
                        </span>

                        <span
                            className={
                                t.type === "add"
                                    ? styles.amountAdd
                                    : styles.amountSpend
                            }
                        >
                            {t.type === "add" ? "+" : "-"}
                            {t.amount}
                        </span>

                        <span className={styles.balance}>
                            {t.balanceAfter}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}