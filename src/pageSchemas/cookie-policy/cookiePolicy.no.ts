import { PageSchema } from "@/components/constructor/page-render/types";

const cookiePolicyNo: PageSchema = {
    meta: {
        title: "Informasjonskapselpolicy – Averis",
        description:
            "Averis Informasjonskapselpolicy: hvordan vi bruker informasjonskapsler, lagring, piksler og SDK-er, med fullstendige samtykkeregler, kategorier og dine kontrollalternativer.",
        keywords: [
            "informasjonskapselpolicy",
            "informasjonskapsler",
            "GDPR",
            "sporing",
            "personvern",
            "samtykke",
            "averis",
        ],
        canonical: "/cookies-policy",
        ogImage: {
            title: "Averis – Informasjonskapselpolicy",
            description:
                "Gjennomsiktig informasjonskapsel- og samtykkepolicy for Averis AI fitness-plattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Informasjonskapselpolicy",
            description: "Gyldig fra: 18. oktober 2025",
        },
        {
            type: "text",
            title: "1. Oversikt",
            description:
                "Denne Informasjonskapselpolicyen forklarer hvordan Averis («vi», «oss», «vår») bruker informasjonskapsler og lignende teknologier (inkludert localStorage, sessionStorage, piksler og SDK-er) på averis.co.uk og relaterte tjenester («Tjenesten»). Den utfyller vår Personvernpolicy. Ved å interagere med vårt informasjonskapselbanner eller preferansesenteret, kan du administrere samtykke til ikke-essensielle informasjonskapsler som beskrevet nedenfor.",
            bullets: [
                "Kontroller: FUSION FAIRIES LTD (Organisasjonsnummer 15799662), Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, Storbritannia, CF31 1JF.",
                "Kontakt: contact@cheffmate.co.uk",
            ],
        },
        {
            type: "text",
            title: "2. Hva Er Informasjonskapsler (og Lignende Teknologier)?",
            description:
                "Informasjonskapsler er små filer plassert på enheten din av en nettside. De hjelper nettstedet med å kjøre essensielle funksjoner (f.eks. innloggingsøkter, CSRF-beskyttelse), huske preferanser (f.eks. språk, UI-valg), måle ytelse og pålitelighet, og — hvor du samtykker — aktivere analyse og markedsføring/tilskrivning.",
            description2:
                "Lignende teknologier (behandles likt for samtykke) inkluderer: localStorage/sessionStorage-nøkler, SDK-identifikatorer, sporingpiksler og enhets-/nettleseridentifikatorer.",
        },
        {
            type: "text",
            title: "3. Kategorier Vi Bruker",
            bullets: [
                "Nødvendig / Essensiell – påkrevd for kjernefunksjonalitet (autentisering, sikkerhet, øktsadministrasjon, belastningsbalansering, samtykkelogging). Disse krever ikke samtykke.",
                "Funksjonell – husker valg (språk, tema, lagrede generatorinputs hvor du melder deg på).",
                "Ytelse / Analyse – hjelper oss med å forstå bruk, feil og sidehastighet slik at vi kan forbedre påliteligheten. Avhengig av verktøyet, stoler vi på samtykke eller legitime interesser (med streng konfigurasjon) hvor passende.",
                "Markedsføring / Annonsering – settes kun hvis du aktiverer dem; brukes for kampanjetilskrivning, remarketing og måling av effektiviteten av våre annonser.",
                "Sikkerhet / Anti-misbruk – oppdager uvanlig aktivitet, reduserer svindel og bot-trafikk.",
            ],
        },
        {
            type: "text",
            title: "4. Typiske Informasjonskapsler & Lagringsnøkler (Eksempler)",
            description:
                "Navn og levetider kan variere etter utgivelse og leverandør. Den nåværende, autoritative listen vises i Informasjonskapselinnstillingene-panelet.",
            bullets: [
                "session_id — Opprettholder autentisert økt • Nødvendig • Økt",
                "csrf_token — CSRF-beskyttelse • Nødvendig • Økt",
                "consent_state — Lagrer dine banner/innstillinger-valg • Nødvendig/Funksjonell • 6–12 måneder",
                "ui_prefs — Språk, tema, oppsett • Funksjonell • ~6 måneder",
                "perf_metrics — Sideytelse & feil • Analyse • 1–3 måneder",
                "campaign_src — UTM/kampanjetilskrivning • Markedsføring • 1–3 måneder",
                "averis_token_hint (localStorage) — Valgfritt: husker siste tokenpakkevisning • Funksjonell • Inntil tømt",
                "averis_generator_prefs (localStorage) — Valgfritt: lagrer treningsgeneratorinputs • Funksjonell • Inntil tømt",
            ],
        },
        {
            type: "text",
            title: "5. Samtykke og Lovlig Grunnlag",
            bullets: [
                "Essensielle informasjonskapsler er strengt nødvendige og krever ikke samtykke.",
                "Ikke-essensielle informasjonskapsler (Funksjonell, Analyse, Markedsføring) settes kun etter at du samtykker via banneret eller preferansesenteret, med mindre vi bruker en tett omfattet analysekonfigurasjon som stoler på legitime interesser (ingen tverrsidesporing, IP-avkortning, aggregerte rapporter).",
                "Våre lovlige grunnlag kan inkludere oppfyllelse av kontrakt (for å drive Tjenesten), samtykke og legitime interesser (f.eks. tjenesteforbedring, svindelforebygging). Se vår Personvernpolicy for detaljer.",
            ],
        },
        {
            type: "text",
            title: "6. Hvordan Vi Registrerer og Oppbevarer Samtykke",
            description:
                "Når du lagrer et valg, registrerer vi samtykkekategoriene du valgte, en policy/versjonsreferanse, tidsstempel, IP-adresse og brukeragent (for bevisformål). Vi oppbevarer denne posten i minst 24 måneder, og opp til 6 år ved tvister, i tråd med vår Personvernpolicy og databeskyttelsesloven.",
        },
        {
            type: "text",
            title: "7. Tredjeparter og Internasjonale Overføringer",
            description:
                "Vi kan bruke tredjepartsleverandører (for eksempel: betalingsbehandling, analyse, hosting/CDN, e-postlevering, markedsføring/tilskrivning) som setter eller leser informasjonskapsler/identifikatorer. Noen leverandører kan behandle data utenfor Storbritannia/EØS. Hvor overføringer skjer, implementerer vi passende sikkerhetstiltak (f.eks. UK tilstrekkelighetsbeslutninger, UK/EU Standard Contractual Clauses, og supplerende tiltak etter behov).",
            description2:
                "En nåværende liste over tredjepartsleverandører og informasjonskapseldetaljer er tilgjengelig i Informasjonskapselinnstillingene-panelet på nettstedet vårt.",
        },
        {
            type: "text",
            title: "8. Administrere eller Trekke Tilbake Samtykke",
            bullets: [
                "Bruk informasjonskapselbanneret eller Informasjonskapselinnstillinger-lenken (nettstedsbunntekst) for å akseptere, avslå eller tilpasse ikke-essensielle kategorier.",
                "Du kan trekke tilbake samtykke når som helst i Informasjonskapselinnstillinger; ditt nye valg gjelder fremover.",
                "Du kan også tømme informasjonskapsler via nettleserinnstillingene dine eller bruke privat/inkognito-modus.",
                "Merk: deaktivering av visse informasjonskapsler kan begrense funksjonaliteten (f.eks. kan du bli logget ut eller preferanser vil ikke vedvare).",
            ],
        },
        {
            type: "text",
            title: "9. Ikke Spor / Globale Personvernkontroller",
            description:
                "Hvis nettleseren din sender Global Privacy Control (GPC) eller lignende signaler, vil vi behandle dem som en frakobling fra ikke-essensielle informasjonskapsler hvor teknisk mulig og i samsvar med gjeldende lov.",
        },
        {
            type: "text",
            title: "10. Endringer i denne Policyen",
            description:
                "Vi kan oppdatere denne Policyen (for eksempel når vi legger til eller endrer integrasjoner). Materielle endringer vil bli kunngjort ved et fremtredende innenfor produktvarsel eller e-post til registrerte brukere. Den effektive datoen ovenfor vil alltid gjenspeile den nyeste versjonen. Endringer gjelder fremoverrettet.",
        },
        {
            type: "text",
            title: "11. Kontakt",
            bullets: [
                "E-post: contact@cheffmate.co.uk",
                "Postadresse: FUSION FAIRIES LTD, Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, Storbritannia, CF31 1JF",
            ],
        },
    ],
};

export default cookiePolicyNo;
