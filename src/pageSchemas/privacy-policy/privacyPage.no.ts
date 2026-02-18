import { PageSchema } from "@/components/constructor/page-render/types";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Personvernpolicy – Averis",
        description:
            "Averis Personvernpolicy: detaljer om hvilke data vi samler inn, hvordan vi bruker dem, oppbevaring, overføringer og dine rettigheter under UK GDPR.",
        keywords: [
            "personvernpolicy",
            "GDPR",
            "databeskyttelse",
            "averis",
            "fitness AI",
            "personopplysninger",
            "uk gdpr",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "Averis – Personvernpolicy",
            description:
                "Gjennomsiktig personvernpraksis for Averis AI fitness-plattform under UK GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Personvernpolicy",
            description: "Gyldig fra: 18. oktober 2025",
        },
        {
            type: "text",
            title: "1. Introduksjon",
            description:
                "Vi verdsetter og respekterer ditt personvern. Denne Personvernpolicyen forklarer hvilke personopplysninger vi samler inn, hvorfor vi bruker dem, hvor lenge vi oppbevarer dem, og hvordan du kan utøve dine rettigheter når du bruker averis.co.uk og relaterte tjenester («Tjenesten»).",
            bullets: [
                "Kontroller: SHIREDON LIMITED (Organisasjonsnummer 15799662), Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, Storbritannia, CF31 1JF («Averis», «vi», «oss», «vår»).",
                "Kontakt: info@averis.co.uk",
                "Omfang: Denne Policyen gjelder for brukere av Tjenesten. Tjenesten er ment for personer 18+.",
            ],
        },
        {
            type: "text",
            title: "2. Data Vi Samler Inn",
            description: "Vi samler kun inn data som trengs for å drive, sikre og forbedre Tjenesten.",
        },
        {
            type: "text",
            title: "2.1. Data Du Gir Direkte",
            bullets: [
                "Navn og kontaktinformasjon (f.eks. e-post).",
                "Kontolegitimasjoner (lagres sikkert i hashet form).",
                "Faktureringsdetaljer (faktureringsadresse; valgfri mva-informasjon for fakturaer).",
                "Inputs for plangenerering: fitnessmål, målrettede muskelgrupper, nåværende nivå, aldersgruppe, høyde/vekt-områder, skader/begrensninger, tilgjengelig utstyr, foretrukket treningsstil/timeplan, og andre fritekstprompter du velger å gi.",
                "Supportforespørsler og kommunikasjon.",
            ],
        },
        {
            type: "text",
            title: "2.2. Samlet Automatisk",
            bullets: [
                "IP-adresse, enhets- og nettleserinformasjon, tidssone, språk, tilgangslogger og sikkerhetstelemetri (f.eks. mislykkede innlogginger).",
                "Bruksdata: sidevisninger, klikk, token-kjøp/innløsninger, genereringsforsøk, feillogger og aggregerte ytelsesmålinger.",
            ],
        },
        {
            type: "text",
            title: "2.3. Fra Tredjeparter (Etter Behov)",
            bullets: [
                "Betalingsbehandlere (transaksjonsreferanser og status; aldri fulle kortnumre).",
                "Svindelforebygging/anti-misbruk-leverandører (risikosignaler).",
            ],
            description:
                "Spesielle kategorier data: informasjon om skader, helsetilstander eller bevegelighetsbegrensninger som du frivillig gir kan kvalifisere som spesielle kategorier data. Vi behandler slike data kun for å personalisere treningsplaner, og kun med ditt samtykke.",
        },
        {
            type: "text",
            title: "3. Hvorfor Vi Behandler Dine Data & Juridiske Grunnlag",
            description:
                "Vi behandler personopplysninger under UK GDPR og Data Protection Act 2018 på følgende grunnlag:",
        },
        {
            type: "text",
            title: "3.1. Oppfyllelse av en Kontrakt",
            bullets: [
                "For å registrere og vedlikeholde din konto.",
                "For å behandle token-oppfyllinger og levere digitalt innhold (Treningsplaner/PDF-er).",
                "For å gi kundestøtte og håndtere refusjoner eller spørsmål.",
            ],
        },
        {
            type: "text",
            title: "3.2. Samtykke (Inkludert Spesielle Kategorier Data)",
            bullets: [
                "For å bruke helse-/fitnessdetaljer (f.eks. skader, begrensninger) som du legger inn for å tilpasse resultater.",
                "For å sende markedsføringse-post/nyhetsbrev hvor du melder deg på.",
                "For å bruke ditt innhold/tilbakemeldinger for modellforbedring hvor du melder deg på (vi bruker ikke personopplysninger for trening med mindre du samtykker).",
            ],
            description:
                "Du kan trekke tilbake samtykke når som helst via kontoinnevalg eller ved å kontakte oss. Tilbakekalling påvirker ikke tidligere lovlig behandling, men kan redusere relevansen av genererte resultater.",
        },
        {
            type: "text",
            title: "3.3. Legitime Interesser",
            bullets: [
                "For å holde Tjenesten sikker (svindeloppdagelse, misbruksforebygging, logging).",
                "For å måle og forbedre ytelse og brukeropplevelse.",
                "For å kommunisere viktige ikke-markedsføringsoppdateringer om Tjenesten.",
            ],
        },
        {
            type: "text",
            title: "3.4. Juridisk Forpliktelse",
            bullets: [
                "Skatte-, regnskaps- og overholdelsesjournalføring.",
                "Svar på lovlige forespørsler fra myndigheter.",
            ],
        },
        {
            type: "text",
            title: "4. AI, Profilering og Automatiserte Beslutninger",
            bullets: [
                "Tjenesten bruker AI for å generere treningsplaner basert på dine inputs. Dette innebærer automatisk behandling og begrenset profilering for å matche øvelser til dine preferanser og mål.",
                "Vi tar ikke juridiske eller lignende betydningsfulle beslutninger om deg utelukkende ved automatiske midler.",
                "Du kan velge å ikke gi helserelaterte data (resultater kan være mindre relevante). Du kan også be om menneskelig gjennomgang av ethvert supportresultat.",
            ],
        },
        {
            type: "text",
            title: "5. Deling og Internasjonale Overføringer",
            bullets: [
                "Betalingsbehandling: kortinnløsere/behandlere (vi mottar transaksjonsreferanser/status, ikke fulle kortdetaljer).",
                "Hosting & IT: sikker skyinfrastruktur, innholdslevering, lagring og sikkerhetskopier.",
                "Produkt- og supportverktøy: analyse (aggregert/pseudonymisert hvor mulig), helpdesk og e-postlevering.",
                "Profesjonelle rådgivere: juridisk, regnskapsføring og overholdelse hvor påkrevd.",
                "Noen leverandører kan være lokalisert utenfor Storbritannia/EØS. Passende sikkerhetstiltak (f.eks. UK tilstrekkelighet, SCCs) anvendes.",
                "Vi selger ikke dine personopplysninger.",
            ],
        },
        {
            type: "text",
            title: "6. Informasjonskapsler",
            description:
                "Vi bruker informasjonskapsler og lignende teknologier (f.eks. localStorage) for å drive Tjenesten, huske preferanser, måle ytelse og — hvor du samtykker — aktivere analyse eller markedsføring. Essensielle informasjonskapsler er påkrevd for sikkerhet og kjernefunksjonalitet. Se vår Informasjonskapselpolicy for fullstendige detaljer.",
        },
        {
            type: "text",
            title: "7. Oppbevaring",
            bullets: [
                "Ordrer, tokens & transaksjoner: oppbevares i minst 24 måneder, og opp til 6 år hvor påkrevd.",
                "Konto- & profildata: oppbevares mens kontoen din er aktiv og opp til 24 måneder etter stenging, med mindre lengre oppbevaring trengs av juridiske eller sikkerhetsmessige årsaker.",
                "Logger & sikkerhetstelemetri: typisk 6–24 måneder avhengig av formål.",
                "Hvor mulig minimeres, pseudonymiseres eller anonymiseres data før sletting.",
            ],
        },
        {
            type: "text",
            title: "8. Dine Rettigheter",
            bullets: [
                "Tilgang til dine data.",
                "Rettelse av unøyaktige data.",
                "Sletting («rett til å bli glemt»).",
                "Begrensning av behandling.",
                "Dataportabilitet.",
                "Innvendelse mot behandling basert på legitime interesser.",
                "Trekke tilbake samtykke når som helst (for markedsføring, fitnessdata eller modellforbedring).",
            ],
            description:
                "For å utøve dine rettigheter, send e-post til info@averis.co.uk fra din kontoadresse. Identitetsbevis kan kreves. Vi sikter på å svare innen én måned, utvidbart med to måneder for komplekse forespørsler.",
        },
        {
            type: "text",
            title: "9. Sikkerhet",
            bullets: [
                "Tilgangskontroller, rollebaserte tillatelser og MFA for admin-grensesnitt.",
                "Kryptering under overføring (HTTPS/TLS) og i ro hvor aktuelt.",
                "Nettverkssegregering, brannmurer og sikkerhetskopier.",
                "Logging, overvåking og hendelsesresponsprosesser.",
                "Leverandørdue diligence og behandlersikkerhetstiltak.",
            ],
            description:
                "Intet system er 100% sikkert, men vi forbedrer kontinuerlig beskyttelsene og undersøker hendelser umiddelbart.",
        },
        {
            type: "text",
            title: "10. Barns Data",
            description:
                "Tjenesten er for brukere 18+. Vi samler ikke bevisst inn data fra barn. Hvis du tror et barn har gitt data til oss, kontakt info@averis.co.uk for å få det slettet.",
        },
        {
            type: "text",
            title: "11. Endringer",
            description:
                "Vi kan oppdatere denne Policyen periodisk. Materielle endringer vil bli varslet via e-post og/eller fremtredende innenfor produktvarsel. Oppdateringer gjelder fremoverrettet.",
        },
        {
            type: "text",
            title: "12. Kontakt & Klager",
            bullets: [
                "Kontroller: SHIREDON LIMITED",
                "Adresse: Academy House, 11 Dunraven Place, Bridgend, Mid Glamorgan, Storbritannia, CF31 1JF",
                "E-post (personvern): info@averis.co.uk",
                "Hvis du er utilfreds med vårt svar, kan du innlevere en klage til UK Information Commissioner's Office (ICO) eller din lokale databeskyttelsesmyndighet innenfor EØS.",
            ],
        },
    ],
};

export default privacyPolicySchema;
