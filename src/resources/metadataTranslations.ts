import { LangCode } from "@/context/i18nContext";
import { COMPANY_NAME } from "./constants";

export type MetadataTranslation = {
    title: string;
    description: string;
    keywords?: string[];
    ogTitle?: string;
    ogDescription?: string;
};

export const metadataTranslations: Record<string, Record<LangCode, MetadataTranslation>> = {
    home: {
        en: {
            title: `${COMPANY_NAME} — Learn to Cook Like a Chef`,
            description: "Choose your path: personal courses written by real professional chefs, or a custom AI-powered cooking plan delivered within 4 hours. No subscriptions. Just learning.",
            keywords: [
                "cooking courses",
                "chef training",
                "AI cooking assistant",
                "culinary learning",
                "professional chefs",
                "cooking classes",
                "recipe generation",
            ],
        },
        no: {
            title: `${COMPANY_NAME} — Lær å Lage Mat Som en Kokk`,
            description: "Velg din vei: personlige kurs skrevet av ekte profesjonelle kokker, eller en tilpasset AI-drevet matlagningsplan levert innen 4 timer. Ingen abonnementer. Bare læring.",
            keywords: [
                "matlagningskurs",
                "kokkutdanning",
                "AI matlagningsassistent",
                "kulinarisk læring",
                "profesjonelle kokker",
                "matlagningsklasser",
                "oppskriftsgenerering",
            ],
        },
    },
    pricing: {
        en: {
            title: `Pricing — ${COMPANY_NAME}`,
            description: "Flexible token-based pricing. Buy tokens once, use them anytime. Choose from chef-written courses or AI-generated cooking plans.",
            keywords: [
                "cooking course pricing",
                "token system",
                "chef courses",
                "AI cooking plans",
                "culinary education pricing",
            ],
        },
        no: {
            title: `Priser — ${COMPANY_NAME}`,
            description: "Fleksibel token-basert prising. Kjøp tokens én gang, bruk dem når som helst. Velg mellom kokk-skrevne kurs eller AI-genererte matlagningsplaner.",
            keywords: [
                "matlagningskurs priser",
                "token system",
                "kokk kurs",
                "AI matlagningsplaner",
                "kulinarisk utdanning priser",
            ],
        },
    },
    about: {
        en: {
            title: `About Us — ${COMPANY_NAME}`,
            description: "Learn about our mission to make professional culinary knowledge accessible to everyone through chef-led courses and AI-powered personalization.",
            keywords: [
                "about cheffmate",
                "culinary education",
                "chef courses",
                "cooking platform",
                "culinary learning",
            ],
        },
        no: {
            title: `Om Oss — ${COMPANY_NAME}`,
            description: "Lær om vår misjon om å gjøre profesjonell kulinarisk kunnskap tilgjengelig for alle gjennom kokk-ledede kurs og AI-drevet personalisering.",
            keywords: [
                "om cheffmate",
                "kulinarisk utdanning",
                "kokk kurs",
                "matlagningsplattform",
                "kulinarisk læring",
            ],
        },
    },
    getStarted: {
        en: {
            title: `Get Started — ${COMPANY_NAME}`,
            description: "Start your culinary journey today. Create an account, buy tokens, and choose your learning path with professional chefs or AI assistance.",
            keywords: [
                "start cooking",
                "culinary courses",
                "chef training",
                "cooking education",
                "learn to cook",
            ],
        },
        no: {
            title: `Kom i Gang — ${COMPANY_NAME}`,
            description: "Start din kulinariske reise i dag. Opprett en konto, kjøp tokens, og velg din læringsvei med profesjonelle kokker eller AI-assistanse.",
            keywords: [
                "starte matlaging",
                "kulinariske kurs",
                "kokkutdanning",
                "matlagningsutdanning",
                "lære å lage mat",
            ],
        },
    },
    chefs: {
        en: {
            title: `Chefs — ${COMPANY_NAME}`,
            description: "Browse professional chefs by cuisine, experience, and teaching style. Learn directly from experts who match your goals.",
            keywords: [
                "professional chefs",
                "chef courses",
                "culinary experts",
                "cooking instructors",
                "chef profiles",
            ],
        },
        no: {
            title: `Kokker — ${COMPANY_NAME}`,
            description: "Bla gjennom profesjonelle kokker etter kjøkken, erfaring og undervisningsstil. Lær direkte fra eksperter som matcher målene dine.",
            keywords: [
                "profesjonelle kokker",
                "kokk kurs",
                "kulinariske eksperter",
                "matlagningsinstruktører",
                "kokk profiler",
            ],
        },
    },
    chefProfile: {
        en: {
            title: `Chef Profile — ${COMPANY_NAME}`,
            description: "Learn from a professional chef. Book a personalized cooking course tailored to your skill level and goals.",
            keywords: [
                "chef profile",
                "professional chef",
                "cooking course",
                "culinary expert",
                "chef training",
            ],
        },
        no: {
            title: `Kokk Profil — ${COMPANY_NAME}`,
            description: "Lær fra en profesjonell kokk. Bestill et personlig matlagningskurs tilpasset ditt ferdighetsnivå og mål.",
            keywords: [
                "kokk profil",
                "profesjonell kokk",
                "matlagningskurs",
                "kulinarisk ekspert",
                "kokkutdanning",
            ],
        },
    },
    joinTeam: {
        en: {
            title: `Join Our Team — ${COMPANY_NAME}`,
            description: "We're building a distributed team of professionals who value quality, independence, and real impact. If you love what you do — we want to hear from you.",
            keywords: [
                "careers",
                "join team",
                "job opportunities",
                "remote work",
                "culinary careers",
            ],
        },
        no: {
            title: `Bli Med i Teamet — ${COMPANY_NAME}`,
            description: "Vi bygger et distribuert team av fagfolk som verdsetter kvalitet, uavhengighet og ekte innvirkning. Hvis du elsker det du gjør — vil vi gjerne høre fra deg.",
            keywords: [
                "karrierer",
                "bli med i teamet",
                "jobbmuligheter",
                "ekstern arbeid",
                "kulinariske karrierer",
            ],
        },
    },
    signIn: {
        en: {
            title: `Sign In — ${COMPANY_NAME}`,
            description: "Login to your kitchen. Continue your culinary journey with AI and master chefs.",
            keywords: [
                "sign in",
                "login",
                "account",
                "culinary dashboard",
            ],
        },
        no: {
            title: `Logg Inn — ${COMPANY_NAME}`,
            description: "Logg inn på ditt kjøkken. Fortsett din kulinariske reise med AI og mesterkokker.",
            keywords: [
                "logg inn",
                "innlogging",
                "konto",
                "kulinarisk dashboard",
            ],
        },
    },
    signUp: {
        en: {
            title: `Sign Up — ${COMPANY_NAME}`,
            description: "Create your account and start your journey toward culinary excellence today.",
            keywords: [
                "sign up",
                "register",
                "create account",
                "culinary learning",
            ],
        },
        no: {
            title: `Registrer Deg — ${COMPANY_NAME}`,
            description: "Opprett din konto og start din reise mot kulinarisk eksellens i dag.",
            keywords: [
                "registrer deg",
                "registrering",
                "opprett konto",
                "kulinarisk læring",
            ],
        },
    },
    contactUs: {
        en: {
            title: `Contact Us — ${COMPANY_NAME}`,
            description: "Get in touch with us. Request SEO services or ask questions about our platform.",
            keywords: [
                "contact",
                "support",
                "help",
                "customer service",
            ],
        },
        no: {
            title: `Kontakt Oss — ${COMPANY_NAME}`,
            description: "Ta kontakt med oss. Be om SEO-tjenester eller still spørsmål om plattformen vår.",
            keywords: [
                "kontakt",
                "støtte",
                "hjelp",
                "kundeservice",
            ],
        },
    },
    profile: {
        en: {
            title: `Profile — ${COMPANY_NAME}`,
            description: "Manage your account, view your orders, transactions, and culinary credits.",
            keywords: [
                "profile",
                "account",
                "dashboard",
                "orders",
                "transactions",
            ],
        },
        no: {
            title: `Profil — ${COMPANY_NAME}`,
            description: "Administrer din konto, se dine ordre, transaksjoner og kulinariske krediter.",
            keywords: [
                "profil",
                "konto",
                "dashboard",
                "ordre",
                "transaksjoner",
            ],
        },
    },
    checkout: {
        en: {
            title: `Checkout — ${COMPANY_NAME}`,
            description: "Complete your purchase securely. Buy tokens to unlock premium chef-led masterclasses and AI recipe generations.",
            keywords: [
                "checkout",
                "purchase",
                "buy tokens",
                "payment",
            ],
        },
        no: {
            title: `Kasse — ${COMPANY_NAME}`,
            description: "Fullfør kjøpet ditt sikkert. Kjøp tokens for å låse opp premium kokk-ledede mesterklasser og AI-oppskriftsgenereringer.",
            keywords: [
                "kasse",
                "kjøp",
                "kjøp tokens",
                "betaling",
            ],
        },
    },
};

export function getMetadataTranslation(pageKey: string, lang: LangCode): MetadataTranslation {
    const pageMetadata = metadataTranslations[pageKey];
    if (!pageMetadata) {
        // Fallback to English if page not found
        return {
            title: COMPANY_NAME ?? "",
            description: "",
        };
    }
    return pageMetadata[lang] || pageMetadata.en;
}
