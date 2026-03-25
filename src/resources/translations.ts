import { LangCode } from "@/context/i18nContext";

export const translations = {
    en: {
        header: {
            logoAlt: "Site Logo",
            links: {
                about: "About",
                howItWorks: "How It Works",
                chefs: "Chefs",
                pricing: "Pricing",
                career: "Career",
                contact: "Contact",
                faq: "Faq",
                dashboard: "Oversikt",
            },
        },
        footer: {
            logoAlt: "Site Logo",
            columns: {
                navigate: "Navigate",
                legal: "Legal",
            },
            links: {
                about: "About",
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
                about: "Om oss",
                howItWorks: "Slik fungerer det",
                chefs: "Kokker",
                pricing: "Priser",
                career: "Karriere",
                contact: "Kontakt",
                faq: "Vanlige spørsmål",
                dashboard: "Dashboard",
            },
        },
        footer: {
            logoAlt: "Nettstedslogo",
            columns: {
                navigate: "Naviger",
                legal: "Juridisk",
            },
            links: {
                about: "Om oss",
                howItWorks: "Slik fungerer det",
                chefs: "Kokker",
                pricing: "Priser",
                career: "Karriere",
                contact: "Kontakt",
                faq: "Vanlige spørsmål",
                terms: "Vilkår og betingelser",
                cookie: "Informasjonskapselpolicy",
                refund: "Refusjonspolicy",
                privacy: "Personvernerklæring",
            },
            copyright: "Alle rettigheter forbeholdt.",
            companyLabel: "Selskap:",
            followUs: "Følg oss",
        },
        auth: {
            signIn: "Logg inn",
            signUp: "Registrer deg",
        },
    },
};

export function getTranslations(lang: LangCode) {
    return translations[lang] || translations.en;
}
