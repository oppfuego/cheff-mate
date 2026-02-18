import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const schema: PageSchema = {
    meta: {
        title: `Teknisk Nettstedsrevisjon — ${COMPANY_NAME}`,
        description: `Omfattende teknisk SEO-revisjon av ${COMPANY_NAME}: finn og fiks problemer som blokkerer rangeringene dine — Core Web Vitals, indeksering, struktur og ytelse.`,
        keywords: [
            "teknisk SEO-revisjon",
            "nettsted SEO-analyse",
            "Core Web Vitals",
            "crawl-feil",
            "SEO nettstedhelse",
            "Google indekseringsproblemer",
        ],
        canonical: "/cases/technical-website-audit",
    },

    blocks: [
        {
            type: "custom",
            component: "HeroSection",
            title: "Teknisk Nettstedsrevisjon",
            highlight: "Finn. Fiks. Ranger.",
            description: `${COMPANY_NAME} gir en fullstendig teknisk SEO-revisjon for å identifisere ytelses-, struktur- og indekseringsproblemer som begrenser din organiske vekst.  
Våre eksperter analyserer nettstedet ditt manuelt og forbereder en detaljert rapport med trinn-for-trinn anbefalinger.`,
            image: "image4",
            align: "right",
            primaryCta: { text: "Bestill Revisjon", link: "/contact-us?service=Technical%20Website%20Audit&tokens=2000" },
        },

        {
            type: "custom",
            component: "InfoBlock",
            title: "Hvorfor Teknisk SEO Betyr Noe",
            description: `Et nettsted kan ha flott innhold — men uten et solid teknisk fundament kan søkemotorer aldri se det.  
Vår revisjon avdekker de skjulte problemene som hindrer Google fra å fullt ut crawle, indeksere og rangere sidene dine.`,
            bullets: [
                "Forbedrer crawlbarhet og indeksering",
                "Fikser hastighet og Core Web Vitals-problemer",
                "Eliminerer duplisert innhold og ødelagte lenker",
                "Legger grunnlaget for langsiktig SEO-suksess",
            ],
            align: "center",
        },

        {
            type: "custom",
            component: "Timeline",
            title: "Vår Revisjonsprosess",
            steps: [
                {
                    title: "1. Innledende Gjennomgang",
                    description:
                        "Vi sjekker den overordnede strukturen, nettstedskart, robots.txt og identifiserer potensielle crawl-problemer.",
                },
                {
                    title: "2. Dyp Teknisk Analyse",
                    description:
                        "Ved å bruke profesjonelle SEO-verktøy og manuell gjennomgang analyserer vi Core Web Vitals, sidehastighet, schema og metadata.",
                },
                {
                    title: "3. Indeksering & Dupliseringssjekk",
                    description:
                        "Vi oppdager dupliserte sider, ødelagte omdirigeringer og sikrer korrekt kanonisering for Google-indeksering.",
                },
                {
                    title: "4. SEO Helserapport",
                    description:
                        "Du mottar en PDF-rapport med alle oppdagede problemer, prioriteringer og implementeringsguide.",
                },
                {
                    title: "5. Konsultasjon & Fiksplan",
                    description:
                        "Våre SEO-eksperter forklarer funnene og hjelper deg med å prioritere fikser for raskest mulig rangeringforbedringer.",
                },
            ],
        },

        {
            type: "custom",
            component: "ValuesIcons",
            title: "Hva Du Får Etter Revisjonen",
            description:
                "Revisjonen leverer handlingsrettede innsikter og en veikart for vekst — ikke bare en liste over problemer.",
            values: [
                { icon: "⚙️", title: "Forbedret Nettstedshastighet", text: "Raskere lasting, bedre brukeropplevelse, høyere rangeringer." },
                { icon: "🔍", title: "Optimalisert Crawl Budsjett", text: "Google indekserer viktige sider effektivt." },
                { icon: "📈", title: "Høyere Synlighet", text: "Fikser øker overordnede rangeringer og trafikkstabilitet." },
                { icon: "🧾", title: "Tydelig Trinn-for-Trinn Rapport", text: "Forstå hvert problem og hvordan du fikser det." },
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
            title: "Kundesuksesshistorier",
            description: "Se hvordan våre revisjoner transformerte nettsteder til raske, stabile og høyt rangerende ressurser.",
            testimonials: [
                {
                    name: "Oksana L.",
                    role: "E-handelsjef",
                    image: "review3",
                    text: "Etter deres tekniske revisjon hoppet sidehastighetsscoren vår fra 52 til 95 og organisk trafikk økte med 60% innen 3 måneder.",
                    rating: 5,
                },
                {
                    name: "Mykola P.",
                    role: "CEO, Eiendomsportal",
                    image: "review5",
                    text: "De fant indekseringsproblemer vi ikke engang visste eksisterte. Rapporten var klar, strukturert og lett å implementere.",
                    rating: 5,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Trenger en Teknisk SEO-Revisjon?",
            description: `Våre spesialister vil analysere nettstedet ditt, finne tekniske barrierer og forberede en fullstendig optimaliseringsplan — ingen AI, bare ekte eksperter.`,
            buttonText: "Be Om Din Revisjon",
            buttonLink: "/contact-us?service=Technical%20Website%20Audit&tokens=5"
        },

        {
            type: "custom",
            component: "MissionBanner",
            title: "La Oss Gjøre Nettstedet Ditt Teknisk Perfekt",
            description: `Ta kontakt med ${COMPANY_NAME} og oppdag hva som holder nettstedet ditt tilbake.  
En ordentlig revisjon er det første steget mot stabile rangeringer og raskere vekst.`,
            image: "ctaAudit",
        },
    ],
};

export default schema;
