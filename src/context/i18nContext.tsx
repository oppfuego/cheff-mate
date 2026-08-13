"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type LangCode = "en" | "no";

type I18nContextType = {
    lang: LangCode;
    setLang: (l: LangCode) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    // Check if we're on Norwegian domain (cheffmate.org) - force Norwegian
    const isNorwegianDomain =
        typeof window !== "undefined" &&
        (window.location.hostname === "cheffmate.org" ||
            window.location.hostname.includes("cheffmate.org"));

    const [lang, setLangState] = useState<LangCode>("en");

    useEffect(() => {
        try {
            const saved = localStorage.getItem("lang") as LangCode | null;
            // Only accept "en" or "no", ignore old "sv" values
            if (saved === "no" || saved === "en") {
                setLangState(saved);
                return;
            }
            // If old "sv" value exists, migrate to "en"
            if (saved === "sv") {
                localStorage.setItem("lang", "en");
                setLangState("en");
                return;
            }
            // No saved preference: default to Norwegian on the Norwegian domain,
            // otherwise detect from the browser language.
            if (isNorwegianDomain) {
                setLangState("no");
                return;
            }
            const browser = (navigator.language || "").toLowerCase();
            if (browser.startsWith("no") || browser.startsWith("nb") || browser.startsWith("nn")) {
                setLangState("no");
            } else {
                setLangState("en");
            }
        } catch {
            setLangState(isNorwegianDomain ? "no" : "en");
        }
    }, [isNorwegianDomain]);

    useEffect(() => {
        try {
            localStorage.setItem("lang", lang);
        } catch {}
        if (typeof document !== "undefined") {
            document.documentElement.lang = lang;
        }
    }, [lang]);

    const setLang = (l: LangCode) => setLangState(l);
    const value = useMemo(() => ({ lang, setLang }), [lang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
    return ctx;
};