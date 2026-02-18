import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Lokal SEO — ${COMPANY_NAME}`,
        description: `Få flere lokale kunder med ${COMPANY_NAME}: forbedre din Google Maps-synlighet, lokale sitater og omdømme for å dominere lokalt søk.`,
        keywords: [
            "lokal SEO",
            "Google Maps optimalisering",
            "lokal bedriftsrangering",
            "GMB optimalisering",
            "lokale sitater",
            "anmeldelsesadministrasjon",
        ],
        canonical: "/cases/local-seo",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "Lokal SEO Optimalisering",
            highlight: "Bli Funnet Der Det Betyr Noe",
            description: `${COMPANY_NAME} hjelper lokale bedrifter med å dukke opp høyere i Google Maps og nærliggende søk.  
Vi optimaliserer din Google Business Profile, bygger lokale sitater og øker omdømmet for å tiltrekke kunder nær deg.`,
            image: "image8",
            align: "right",
            primaryCta: { text: "Bestill Lokal Synlighet", link: "/contact-us?service=Local%20SEO%20Optimisation&tokens=1500" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor Lokal SEO Er Viktig",
            description: `80% av kundene leter etter lokale tjenester på nett — hvis bedriften din ikke vises i toppresultatene, får konkurrentene dine de potensielle kundene.  
Vi sikrer at merkevaret ditt er synlig, betrodd og valgt lokalt.`,
            bullets: [
                "Optimalisert Google Business Profile",
                "Konsistente NAP-sitater",
                "Positiv anmeldelsesadministrasjon",
                "Lokal nøkkelordmålretting",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Hvordan Vi Forbedrer Dine Lokale Rangeringer",
            steps: [
                {
                    title: "1. Lokal Revisjon",
                    description:
                        "Vi sjekker din tilstedeværelse i Google Maps, kataloger og analyserer konkurrentenes lokale ytelse.",
                },
                {
                    title: "2. Google Business Optimalisering",
                    description:
                        "Vi forbedrer dine GBP-data — kategorier, nøkkelord, innlegg og visuelle elementer for bedre rangering og engasjement.",
                },
                {
                    title: "3. Sitater & Lokale Lenker",
                    description:
                        "Vi bygger konsistente bedriftsomtaler på tvers av betrodde lokale kataloger og partnernettsteder.",
                },
                {
                    title: "4. Anmeldelser & Omdømmesadministrasjon",
                    description:
                        "Vi hjelper med å samle inn og svare på kundeanmeldelser for å bygge tillit og tiltrekke nye besøkende.",
                },
                {
                    title: "5. Rapportering & Løpende Sporing",
                    description:
                        "Månedlige oppdateringer viser rangeringfremgang, samtaler og trafikkforbedringer.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får fra Lokal SEO",
            description: "Øk lokal trafikk, samtaler og besøk gjennom sterkere kartvisning.",
            values: [
                { icon: "📍", title: "Topp Google Maps Rangeringer", text: "Vis i de 3 beste lokale resultatene for din nisje." },
                { icon: "☎️", title: "Flere Samtaler & Besøk", text: "Gjør nettbaserte søk til virkelige kunder." },
                { icon: "⭐", title: "Bedre Omdømme", text: "Administrer anmeldelser og vis kundetilfredshet." },
                { icon: "🏆", title: "Lokal Autoritet", text: "Vær den go-to bedriften i ditt område." },
            ],
        },

        {
            type: "grid",
            columns: 2,
            gap: "2rem",
            cards: [
                {
                    type: "pricing",
                    variant: "starter",
                    title: "Starter SEO Revisjon",
                    price: "€15",
                    tokens: 1500,
                    badgeTop: "Inngangsplan",
                    description:
                        "Få en fullstendig nettstedskanning, rangeringrapport og 10-siders revisjon med handlingsrettede løsninger.",
                    features: [
                        "Teknisk sjekk",
                        "Mobil ytelse",
                        "Hastighetsanbefalinger",
                        "Grunnleggende nøkkelordanalyse",
                    ],
                    buttonText: "Kjøp Tokens",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "pro",
                    title: "Full SEO Pakke",
                    price: "€45",
                    tokens: 4500,
                    badgeTop: "Populær",
                    description:
                        "Alt du trenger for vekst: revisjon, lenkestrategi og innholdsplan.",
                    features: [
                        "Fullstendig revisjonsrapport",
                        "10 backlinks / måned",
                        "Innholdsstrategi",
                        "Månedlig sporing",
                    ],
                    buttonText: "Start SEO Kampanje",
                    buttonLink: "/pricing",
                },
                {
                    type: "pricing",
                    variant: "premium",
                    title: "Enterprise SEO",
                    price: "€90",
                    tokens: 9000,
                    badgeTop: "Alt-i-ett Plan",
                    description:
                        "For store bedrifter og e-handel. Dedikert team, analyse og kontinuerlig vekst.",
                    features: [
                        "Dedikert SEO-sjef",
                        "20+ backlinks / måned",
                        "Tilpassede dashboards",
                        "Prioritetsstøtte",
                    ],
                    buttonText: "Kontakt for Oppsett",
                    buttonLink: "/contact",
                },
                {
                    type: "pricing",
                    variant: "custom",
                    title: "Tilpassede SEO Løsninger",
                    price: "dynamic",
                    tokens: 0,
                    badgeTop: "Skreddersydd Plan",
                    description:
                        "Trenger du noe spesifikt? Vi lager skreddersydde SEO-strategier for unike behov.",
                    features: [
                        "Personalisert strategi",
                        "Fleksible tjenester",
                        "Skalerbare løsninger",
                        "Dedikert støtte",
                    ],
                    buttonText: "Få Tilbud",
                    buttonLink: "/contact",
                }
            ],
        },

        {
            type: "custom",
            component: "TestimonialsSlider",
            title: "Ekte Lokale Suksesshistorier",
            description: "Se hvordan lokal SEO transformerte bedrifter i byene sine.",
            testimonials: [
                {
                    name: "Marta L.",
                    role: "Eier, Skjønnhetssalong",
                    image: "review3",
                    text: "Vi hoppet inn i topp 3 kartpakke innen 2 måneder — samtaler doblet seg og avtaler fylte seg opp!",
                    rating: 5,
                },
                {
                    name: "Andriy N.",
                    role: "Gründer, Bilservice",
                    image: "review5",
                    text: "De gjenoppbygde våre lokale sitater og optimaliserte Google-profilen — vi er endelig synlige for lokale kunder.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Klar til å Dominere Lokalt Søk?",
            description: `La ${COMPANY_NAME} sette bedriften din på kartet — bokstavelig talt.`,
            buttonText: "Start Lokal SEO",
            buttonLink: "/contact-us",
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "Tiltrekk Lokale Kunder med Sterk SEO",
            description: `${COMPANY_NAME} sikrer at bedriften din vises der folk søker — lokalt.`,
            image: "ctaLocalSeo",
        },
    ],
};

export default schema;
