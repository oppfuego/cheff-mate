import { LangCode } from "@/context/i18nContext";

export const translations = {
    en: {
        header: {
            logoAlt: "Site Logo",
            links: {
                about: "About Our Mission",
                howItWorks: "How It Works",
                chefs: "Chefs",
                pricing: "Pricing",
                career: "Career",
                contact: "Contact",
                faq: "Faq",
            },
        },
        footer: {
            logoAlt: "Site Logo",
            columns: {
                navigate: "Navigate",
                legal: "Legal",
            },
            links: {
                about: "About Our Mission",
                howItWorks: "How It Works",
                chefs: "Chefs",
                pricing: "Pricing",
                career: "Career",
                contact: "Contact",
                faq: "Faq",
                terms: "Terms & Conditions",
                cookie: "Cookie Policy",
                refund: "Refund Policy",
                privacy: "Privacy Policy",
            },
            copyright: "All rights reserved.",
            companyLabel: "Company:",
            followUs: "Follow Us",
        },
        auth: {
            signIn: "Sign In",
            signUp: "Sign Up",
        },
    },
    no: {
        header: {
            logoAlt: "Nettstedslogo",
            links: {
                about: "Om Vår Misjon",
                howItWorks: "Hvordan Det Fungerer",
                chefs: "Kokker",
                pricing: "Priser",
                career: "Karriere",
                contact: "Kontakt",
                faq: "Ofte Stilte Spørsmål",
            },
        },
        footer: {
            logoAlt: "Nettstedslogo",
            columns: {
                navigate: "Naviger",
                legal: "Juridisk",
            },
            links: {
                about: "Om Vår Misjon",
                howItWorks: "Hvordan Det Fungerer",
                chefs: "Kokker",
                pricing: "Priser",
                career: "Karriere",
                contact: "Kontakt",
                faq: "Ofte Stilte Spørsmål",
                terms: "Vilkår og Betingelser",
                cookie: "Informasjonskapselpolicy",
                refund: "Refusjonspolicy",
                privacy: "Personvernpolicy",
            },
            copyright: "Alle rettigheter forbeholdt.",
            companyLabel: "Selskap:",
            followUs: "Følg Oss",
        },
        auth: {
            signIn: "Logg Inn",
            signUp: "Registrer Deg",
        },
    },
};

export function getTranslations(lang: LangCode) {
    return translations[lang] || translations.en;
}
