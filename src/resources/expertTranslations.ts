import { LangCode } from "@/context/i18nContext";
import { Expert } from "@/types/expert";

type ExpertTranslations = {
    [expertId: string]: {
        subtitle?: string;
        experience?: string;
        education?: string;
        specialties?: string[];
        philosophy?: string;
    };
};

const expertTranslations: Record<LangCode, ExpertTranslations> = {
    en: {},
    no: {
        "expert_marcus_l": {
            subtitle: "Fransk Kjøkken",
            experience: "15 År",
            education: "Tsuji Kulinarisk Skole",
            specialties: ["Fransk"],
            philosophy: "Mestre teknikk først — kreativitet følger naturlig.",
        },
        "expert_sarah_j": {
            subtitle: "Molekylær Gastronomi",
            experience: "12 År",
            education: "Le Cordon Bleu",
            specialties: ["Molekylær", "Fransk"],
            philosophy: "Nysgjerrighet og eksperimentering driver innovasjon.",
        },
        "expert_kenji_t": {
            subtitle: "Japansk Kjøkken",
            experience: "18 År",
            education: "Tokyo Kulinarisk Institutt",
            specialties: ["Japansk"],
            philosophy: "Respekter prosessen, hedre ingrediensene.",
        },
        "expert_maria_g": {
            subtitle: "Spansk Konditori",
            experience: "10 År",
            education: "Madrid Konditori Akademi",
            specialties: ["Spansk", "Konditori"],
            philosophy: "Dessert skal være vakker og presis.",
        },
        "expert_alex_r": {
            subtitle: "Hjemmelaging",
            experience: "6 År",
            education: "Online Kulinarisk Program",
            specialties: ["Internasjonal"],
            philosophy: "Alle kan lage mat med riktig veiledning.",
        },
        "expert_luca_b": {
            subtitle: "Italiensk Kjøkken",
            experience: "14 År",
            education: "ALMA Kulinarisk Skole",
            specialties: ["Italiensk"],
            philosophy: "Tradisjon utvikler seg, men forsvinner aldri.",
        },
        "expert_emily_c": {
            subtitle: "Asiatisk Fusion",
            experience: "11 År",
            education: "Hong Kong Kulinarisk Akademi",
            specialties: ["Kinesisk", "Fusion"],
            philosophy: "Fusion må respektere opprinnelse.",
        },
        "expert_david_m": {
            subtitle: "BBQ & Grill",
            experience: "16 År",
            education: "Texas BBQ Institutt",
            specialties: ["Amerikansk"],
            philosophy: "Tålmodighet skaper smak.",
        },
        "expert_anna_k": {
            subtitle: "Sunn Kjøkken",
            experience: "9 År",
            education: "Warszawa Ernæringsakademi",
            specialties: ["Polsk", "Europeisk"],
            philosophy: "Helse og glede kan sameksistere.",
        },
        "expert_pierre_d": {
            subtitle: "Fransk Konditori",
            experience: "20 År",
            education: "École Ferrandi",
            specialties: ["Fransk", "Konditori"],
            philosophy: "Presisjon er sjelen i konditori.",
        },
        "expert_sofia_n": {
            subtitle: "Vegetarisk Kjøkken",
            experience: "8 År",
            education: "Plantebasert Kulinarisk Skole",
            specialties: ["Vegetarisk"],
            philosophy: "Planter fortjener kreativitet.",
        },
        "expert_omar_h": {
            subtitle: "Midtøstlig Kjøkken",
            experience: "13 År",
            education: "Beirut Kulinarisk Institutt",
            specialties: ["Midtøstlig"],
            philosophy: "Mat forteller historie.",
        },
        "expert_julia_s": {
            subtitle: "Europeisk Hjemmelaging",
            experience: "7 År",
            education: "Berlin Kulinarisk Studio",
            specialties: ["Tysk", "Europeisk"],
            philosophy: "Mat skal føles som hjemme.",
        },
        "expert_mateo_r": {
            subtitle: "Middelhavskjøkken",
            experience: "15 År",
            education: "Middelhavskjøkken Kulinarisk Akademi",
            specialties: ["Middelhavskjøkken", "Italiensk"],
            philosophy: "Ferskhet er alt.",
        },
        "expert_nina_p": {
            subtitle: "Østeuropeisk Kjøkken",
            experience: "12 År",
            education: "Praha Kulinarisk Institutt",
            specialties: ["Ukrainsk", "Tsjekkisk"],
            philosophy: "Respekter røtter, raffiner utførelse.",
        },
    },
};

export function getTranslatedExpert(expert: Expert, lang: LangCode): Expert {
    if (lang === "en") {
        return expert;
    }

    const translations = expertTranslations[lang]?.[expert.id];
    if (!translations) {
        return expert;
    }

    return {
        ...expert,
        subtitle: translations.subtitle ?? expert.subtitle,
        experience: translations.experience ?? expert.experience,
        education: translations.education ?? expert.education,
        specialties: translations.specialties ?? expert.specialties,
        profile: {
            ...expert.profile,
            philosophy: translations.philosophy ?? expert.profile.philosophy,
        },
    };
}
