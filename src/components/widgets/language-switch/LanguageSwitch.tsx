"use client";

import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "@/context/i18nContext";
import styles from "./LanguageSwitch.module.scss";
import { IoMdArrowDropdown } from "react-icons/io";

const LANGUAGES = [
    { code: "en" as const, label: "English" },
    { code: "no" as const, label: "Norsk" },
] as const;

const LanguageSwitch: React.FC = () => {
    const { lang, setLang } = useI18n();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (code: typeof LANGUAGES[number]["code"]) => {
        setLang(code);
        setOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

    return (
        <div className={styles.wrapper} ref={dropdownRef}>
            <button
                className={`${styles.trigger} ${open ? styles.active : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Select language"
            >
                <span className={styles.value}>{currentLang.label}</span>
                <IoMdArrowDropdown className={styles.chevron} />
            </button>

            {open && (
                <div className={styles.menu}>
                    {LANGUAGES.map((langOption) => (
                        <button
                            key={langOption.code}
                            className={`${styles.option} ${
                                lang === langOption.code ? styles.selected : ""
                            }`}
                            onClick={() => handleSelect(langOption.code)}
                        >
                            {langOption.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitch;
