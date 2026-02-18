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

    const [lang, setLangState] = useState<LangCode>(() => {
        // On Norwegian domain, default to Norwegian
        if (isNorwegianDomain) {
            return "no";
        }
        return "en";
    });

    useEffect(() => {
        // If on Norwegian domain, force Norwegian language
        if (isNorwegianDomain) {
            setLangState("no");
            try {
                localStorage.setItem("lang", "no");
            } catch {}
            return;
        }

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
            const browser = (navigator.language || "").toLowerCase();
            if (browser.startsWith("no") || browser.startsWith("nb") || browser.startsWith("nn")) {
                setLangState("no");
            } else {
                setLangState("en"); // Default to English (removed Swedish fallback)
            }
        } catch {
            setLangState("en"); // Default to English on error
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

    // Prevent language change on Norwegian domain
    const setLang = (l: LangCode) => {
        if (isNorwegianDomain) {
            return; // Don't allow language change on cheffmate.org
        }
        setLangState(l);
    };

    // Force Norwegian on Norwegian domain
    const effectiveLang = isNorwegianDomain ? "no" : lang;
    const value = useMemo(() => ({ lang: effectiveLang, setLang }), [effectiveLang, setLang]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
    return ctx;
};