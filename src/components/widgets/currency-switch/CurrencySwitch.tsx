"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "./CurrencySwitch.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const CURRENCIES = ["GBP", "EUR", "USD"] as const;

const CurrencySwitch: React.FC = () => {
    const { currency, setCurrency } = useCurrency();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (val: typeof CURRENCIES[number]) => {
        setCurrency(val);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={`${styles.trigger} ${open ? styles.active : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                <span className={styles.value}>{currency}</span>
                <IoMdArrowDropdown className={styles.chevron} />
            </button>

            {open && (
                <div className={styles.menu}>
                    {CURRENCIES.map((c) => (
                        <button
                            key={c}
                            className={`${styles.option} ${
                                currency === c ? styles.selected : ""
                            }`}
                            onClick={() => handleSelect(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencySwitch;
