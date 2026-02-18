import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Konkurrentanalyse — ${COMPANY_NAME}`,
        description: `Forstå konkurransen din med ${COMPANY_NAME}. Vi analyserer SEO-strategier, nøkkelord, backlinks og innhold fra dine topprivaler for å hjelpe deg med å overgå dem.`,
        keywords: [
            "konkurrentanalyse",
            "SEO konkurrentforskning",
            "nøkkelordgapanalyse",
            "backlink sammenligning",
            "SEO-strategi",
            "konkurransedyktig SEO-revisjon",
        ],
        canonical: "/cases/competitor-analysis",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "Konkurrentanalyse",
            highlight: "Kjenn Rivalene Dine. Led Markedet.",
            description: `${COMPANY_NAME} hjelper deg med å forstå nøyaktig hvorfor konkurrentene dine rangerer høyere —  
og hvordan du slår dem. Vi analyserer deres SEO-strategi, backlinks, innhold og nøkkelord for å avdekke vekstmuligheter for merkevaret ditt.`,
            image: "image11",
            align: "right",
            primaryCta: { text: "Bestill Konkurrentrevisjon", link: "/contact-us?service=Competitor%20Analysis&tokens=1700" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor Konkurrentanalyse Betyr Noe",
            description: `Uten å forstå konkurransen din er det lett å kaste bort ressurser på å målrette feil nøkkelord eller innhold.  
Vår analyse gir deg klarhet — viser hva som fungerer i din nisje og hvordan du overgår markedsledere.`,
            bullets: [
                "Identifiser gap i nøkkelord og innhold",
                "Forstå konkurrentenes backlink-profiler",
                "Avslør tekniske og UX-fordeler",
                "Bygg datadrevne SEO-strategier",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Vår Konkurrentanalysprosess",
            steps: [
                {
                    title: "1. Marked & Konkurrentidentifikasjon",
                    description:
                        "Vi bestemmer dine viktigste organiske konkurrenter — ikke bare etter merkevare, men etter nøkkelordene du konkurrerer om.",
                },
                {
                    title: "2. Nøkkelord & Innholdsgaprevisjon",
                    description:
                        "Vi sammenligner din nøkkelorddekning og innholdsdybde med konkurrentenes topprangerende sider.",
                },
                {
                    title: "3. Backlink & Autoritetsanalyse",
                    description:
                        "Vi evaluerer hvor konkurrentene dine får backlinks fra — og finner link building-muligheter for deg.",
                },
                {
                    title: "4. On-Page & UX Sammenligning",
                    description:
                        "Vi analyserer tittel-tags, metadata, struktur og sideopplevelse for å identifisere hva som gir dem en fordel.",
                },
                {
                    title: "5. Strategi & Handlingsrapport",
                    description:
                        "Du mottar en detaljert rapport med konkurrentmetrikker, gap og handlingsrettede anbefalinger for raskere rangeringvekst.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får fra Konkurrentanalyse",
            description:
                "Få en klar visjon av markedslandskapet ditt — og en veikart for å overgå rivalene dine.",
            values: [
                { icon: "🔎", title: "Nøkkelordmuligheter", text: "Oppdag høyt verdsatte nøkkelord konkurrentene dine allerede rangerer for." },
                { icon: "💡", title: "Handlingsrettede Innblikk", text: "Lær hvilke innholdsformater og strategier som presterer best." },
                { icon: "🔗", title: "Link Building Utsikter", text: "Avslør hvor konkurrenter får backlinks fra — og hvordan du får dine der også." },
                { icon: "🚀", title: "Strategisk Veikart", text: "Gjør innsikter til en trinn-for-trinn SEO-handlingsplan." },
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
            title: "Kundesuksess med Konkurrentforskning",
            description: "Våre kunder bruker konkurransedyktig analyse som en springbrett for kraftfulle SEO-strategier.",
            testimonials: [
                {
                    name: "Oleh K.",
                    role: "CEO, Logistikkplattform",
                    image: "review4",
                    text: "Deres konkurrentrapport endret fullstendig vår SEO-strategi — vi oppdaget tapte nøkkelordklynger og overgikk to topprivaler innen 3 måneder.",
                    rating: 5,
                },
                {
                    name: "Yulia R.",
                    role: "Markedsføringssjef, SaaS Startup",
                    image: "review1",
                    text: "Backlink-sammenligningen og nøkkelordgaprevisjonen ga oss klar retning — endelig SEO-beslutninger støttet av data, ikke gjetninger.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Klar til å Overgå Konkurrentene Dine?",
            description: `La ${COMPANY_NAME} analysere dine topprivaler og avdekke SEO-muligheter for å presse merkevaret ditt til toppen.`,
            buttonText: "Få Konkurrentrapport",
            buttonLink: "/contact-us",
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "Gjør Innblikk til SEO-Fordel",
            description: `Konkurrentanalyse er grunnlaget for hver vinnende SEO-strategi.  
Samarbeid med ${COMPANY_NAME} og begynn å ta datadrevne beslutninger i dag.`,
            image: "ctaCompetitor",
        },
    ],
};

export default schema;
