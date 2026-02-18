"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Currency = "GBP" | "EUR" | "USD" | "NOK";

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (val: Currency) => void;
    sign: string;
    rateToGBP: number;
    convertFromGBP: (gbp: number) => number;
    convertToGBP: (val: number) => number;
}

// 💱 Currency symbols
const CURRENCY_SIGNS: Record<Currency, string> = {
    GBP: "£",
    EUR: "€",
    USD: "$",
    NOK: "kr",
};

// 💹 Exchange rates (base currency: GBP)
const RATES: Record<Currency, number> = {
    GBP: 1,      // Base currency
    EUR: 1.17,   // 1 GBP = 1.17 EUR
    USD: 1.29,   // 1 GBP = 1.29 USD
    NOK: 12.85,  // 1 GBP = 12.85 NOK
};

const CurrencyContext = createContext<CurrencyContextType>({
    currency: "GBP",
    setCurrency: () => {},
    sign: "£",
    rateToGBP: 1,
    convertFromGBP: (v) => v,
    convertToGBP: (v) => v,
});

export const useCurrency = () => useContext(CurrencyContext);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    // Check if we're on Norwegian domain (cheffmate.org) - force NOK
    const isNorwegianDomain =
        typeof window !== "undefined" &&
        (window.location.hostname === "cheffmate.org" ||
            window.location.hostname.includes("cheffmate.org"));

    const [currency, setCurrency] = useState<Currency>(() => {
        // On Norwegian domain, default to NOK
        if (isNorwegianDomain) {
            return "NOK";
        }
        return "GBP";
    });

    // Prevent currency change on Norwegian domain
    const handleSetCurrency = (val: Currency) => {
        if (isNorwegianDomain) {
            return; // Don't allow currency change on cheffmate.org
        }
        setCurrency(val);
    };

    const rateToGBP = RATES[currency];
    const sign = CURRENCY_SIGNS[currency];

    return (
        <CurrencyContext.Provider
            value={{
                currency: isNorwegianDomain ? "NOK" : currency, // Force NOK on Norwegian domain
                setCurrency: handleSetCurrency,
                sign,
                rateToGBP,
                convertFromGBP: (gbp) => gbp * rateToGBP,
                convertToGBP: (val) => val / rateToGBP,
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
};
