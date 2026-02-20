import { PageSchema } from "@/components/constructor/page-render/types";

const refundPolicySchema: PageSchema = {
    meta: {
        title: "Refusjons- og returpolicy – Cheffmate",
        description:
            "Offisiell Refusjons- og returpolicy for Cheffmate: refusjoner for tokens, kokkekurs, AI matlagningsplaner og forbrukerrettigheter.",
        keywords: [
            "refusjonspolicy",
            "returpolicy",
            "cheffmate",
            "tokens",
            "AI matlaging",
            "digitalt innhold",
            "forbrukerrettigheter",
        ],
        canonical: "/refund-policy",
        ogImage: {
            title: "Cheffmate – Refusjons- og returpolicy",
            description: "Gjennomsiktig refusjons- og returpolicy for Cheffmate matlagningsplattform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Refusjons- og returpolicy",
            description: "Gyldig fra: 20. februar 2026",
        },
        {
            type: "text",
            title: "1. Sammendrag",
            bullets: [
                "Behandling av forespørsler: Alle refusjonsforespørsler behandles i henhold til denne policyen og gjeldende britisk forbrukerlov, med særlig hensyn til den digitale og utdanningsmessige naturen til våre tjenester.",
                "Behandlingstid: Vanligvis 5–10 virkedager etter godkjenning (banktidslinjer kan variere).",
                "Token-bruk: Tokens fungerer som ikke-refunderbar digital kreditt. Når Tokens er brukt til å låse opp et Kokkekurs eller generere en AI Matlagningsplan, kan de ikke refunderes.",
                "Digital natur: Tjenesten leverer digitalt videoinnhold, tekst og immateriell eiendom. Det finnes ingen fysiske varer (som ingredienser eller kjøkkenutstyr) å sende eller returnere.",
                "Resultatfraskrivelse: Vi tilbyr ikke refusjon basert på resultatet av matlagningsforsøkene dine (f.eks. at du ikke likte smaken av retten, eller at måltidet ditt brant) eller personlig preferanse angående kokkens undervisningsstil.",
                "Kontakt: For å sende inn en forespørsel, e-poster du contact@cheffmate.co.uk med kontodetaljene dine.",
            ],
        },
        {
            type: "text",
            title: "2. Omfang og juridisk merknad",
            description:
                "Denne Refusjons- og returpolicyen («Policy») gjelder alle kanselleringer, tvister og refusjonsforespørsler for kjøp gjort via cheffmate.co.uk, inkludert Token-kjøp og innløsning av Tokens for Kokkekurs eller AI Matlagningsplaner.\n\nTjenesten drives av FUSION FAIRIES LTD (Organisasjonsnummer 15613978), registrert på 20 Wenlock Road, London, England, N1 7GU («Cheffmate», «vi», «oss», «vår»).\n\nIngenting i denne Policyen er tiltenkt å begrense dine lovfestede rettigheter under britisk lov (inkludert Consumer Rights Act 2015 og Consumer Contracts Regulations 2013), unntatt der særskilte unntak for digitalt innhold gjelder.",
        },
        {
            type: "text",
            title: "3. Sentrale definisjoner",
            bullets: [
                "Tokens: Den digitale kredittsaldoen på kontoen din som brukes til å låse opp innhold.",
                "Leveranser / Digitalt innhold: Alle Kokkekurs (videoer, oppskrifter, teori) eller AI Matlagningsplaner generert av vårt system basert på dine opplysninger.",
                "Tjenestetyper: Kokkekurs: Forhåndsinnspilt, strukturert kulinarisk innhold levert av fagfolk. AI Matlagningsassistent: Automatiserte, personlige matlagningsplaner levert digitalt.",
                "Ordre: Et bekreftet kjøp av Token-pakker.",
            ],
        },
        {
            type: "text",
            title: "4. Generelle refusjonsprinsipper",
            description:
                "4.1. Digital data sin «ingen retur»-natur. Ved å kjøpe Tokens og klikke «Lås opp kurs» eller «Start med AI» samtykker du uttrykkelig til umiddelbar oppfyllelse av avtalen. Du anerkjenner at når det digitale innholdet er gjort tilgjengelig for dashbordet ditt, mister du din lovfestede rett til å trekke tilbake (14-dagers angrerett) for de spesifikke Tokenene.\n\n4.2. Refusjonstak. Enhver refusjon som gis er strengt begrenset til fiat-beløpet betalt for den spesifikke Token-transaksjonen. Vi er ikke ansvarlige for tredjepartsgebyrer, bankovertrekksgebyrer eller valutavekslingstap.\n\n4.3. Nøyaktighet av klientopplysninger (AI-planer). Våre AI-leveranser opprettes basert på data du oppgir (kostholdsbehov, ferdighetsnivå, tilgjengelige ingredienser). Hvis opplysningene dine er ufullstendige, urealistiske eller feilaktige, kan den resulterende matlagningsplanen være suboptimal. Å generere planen på nytt med nye data krever nye Tokens og er ikke grunnlag for gratis revidering eller refusjon.\n\n4.4. Subjektivitet og matlagningsresultater. Cheffmate tilbyr utdanningsverktøy og oppskrifter, ikke en privat cateringtjeneste. Refusjon utstedes ikke hvis: Du ikke liker smak, tekstur eller utseende på den ferdige retten; Du er uenig i en profesjonell kokks teknikk eller undervisningsstil; Du ikke liker formateringen eller ordbruken i den AI-genererte teksten; Du bestemmer deg for å forlate kurset eller oppskriften etter å ha låst det opp.",
        },
        {
            type: "text",
            title: "5. Token-kjøp (lommebok-oppfyling)",
            description:
                "5.1. Kun forhåndsbetaling. Tokens selges som pakker (f.eks. Starter, Cook Pro, Chef Mode). Ubrukte Tokens er vanligvis ikke refunderbare utenfor 14-dagers lovfestet kanselleringsvindu og kan ikke byttes mot kontanter.\n\n5.2. Unntaksrefusjoner (14-dagers regel). Hvis du har kjøpt en Token-pakke og ikke har brukt en enkelt Token fra den spesifikke pakken, kan du be om full refusjon til din opprinnelige betalingsmetode innen 14 dager etter kjøp. Når en Token er brukt (selv delvis), anses hele pakken som «åpnet» og ikke-refunderbar. Vi utsteder ikke delvise refusjoner for delvis brukte Token-pakker.\n\n5.3. Utløp og inaktivitet. Selv om Tokens ikke utløper under normal bruk, forbeholder vi oss retten til å tømme Token-saldoer på inaktive kontoer som har hatt null aktivitet (ingen innlogginger eller Token-bruk) i en sammenhengende periode på 24 måneder.",
        },
        {
            type: "text",
            title: "6. Kansellering av spesifikke tjenester",
            description:
                "6.1. Kokkekurs og AI Matlagningsplaner. Disse tjenestene oppfylles digitalt. Når du bekrefter bruk av Tokens, forbrukes de umiddelbart for å låse opp kurset eller utløse AI-genereringen. Ingen kansellering eller refusjon av Tokens er mulig etter denne handlingen.",
        },
        {
            type: "text",
            title: "7. Kvalitetsproblemer og tekniske feil",
            description:
                "7.1. Tekniske defekter. Hvis en leveranse er teknisk defekt (f.eks. et videokurs ikke lastes, filen er helt korrupt, eller AI returnerer en blank side på grunn av en systemfeil), må du varsle oss innen 7 dager. Vi vil: Gjenopprette din tilgang til innholdet; eller Kreditere kontoen din med det nøyaktige antallet Tokens tapt på grunn av feilen; Refusjoner til bankkort utstedes kun hvis vi ikke er i stand til å rette den tekniske feilen og du foretrekker å ikke motta Tokens.\n\n7.2. «Som den er» AI-innhold. AI-generert innhold leveres «som det er». Mindre faktiske hallusinasjoner, bisarre ingredienskombinasjoner eller generisk formulering iboende store språkmodeller (LLM-er) anses ikke som tekniske «defekter» som kvalifiserer til refusjon. Du forventes å bruke sunn fornuft når du gjennomgår AI-oppskrifter.",
        },
        {
            type: "text",
            title: "8. Hvordan be om refusjon",
            description:
                "For å reise et krav, vennligst e-post contact@cheffmate.co.uk med emnelinjen «Refund Request». Du må inkludere:",
            bullets: [
                "Konto e-postadresse.",
                "Beskrivelse av problemet (f.eks. «Video lastes ikke», «Dobbel token-belastning»).",
                "Bevis (Skjermbilder av feilen, kontoutskrift for dobbel belastning).",
                "Tidslinje: Vi tar oss fore å bekrefte mottak innen 48 timer.",
                "Vi vil undersøke og gi en beslutning innen 5 virkedager.",
                "Godkjente fiat-refusjoner behandles innen 5–10 virkedager (midler kan ta lengre tid å vises avhengig av din bank).",
            ],
        },
        {
            type: "text",
            title: "9. Tilbakeføringer og tvister",
            description:
                "9.1. Vennlig svindel. Hvis du iverksetter en tilbakeføring hos banken din for en gyldig levert Token-pakke eller digital tjeneste (f.eks. hevde «Tjeneste ikke mottatt» etter å ha aktivt sett et Kokkekurs), klassifiserer vi dette som «vennlig svindel».\n\n9.2. Konsekvenser. Ved en ubegrunnet tilbakeføring: Kontoen din vil bli permanent suspendert; Vi vil bestride tilbakeføringen ved å levere fullstendige logger til banken din, inkludert din IP-adresse, Token-innløsningshistorikk og innholdstilgangslogger.\n\n9.3. Løsning. Vi oppfordrer sterkt til at du kontakter vårt supportteam før du kontakter banken din. Vi er ofte i stand til å løse problemer (f.eks. refundere tapte Tokens på grunn av en feil) raskere enn banktvistprosessen.",
        },
        {
            type: "text",
            title: "10. Skatter",
            description:
                "Priser er eksklusive gjeldende skatter med mindre annet er oppgitt ved kassen. Hvis en fiat-refusjon utstedes, refunderer vi skattebeløpet kun hvis vi er i stand til å kreve det tilbake fra skattemyndighetene eller hvis loven krever det.",
        },
        {
            type: "text",
            title: "11. Databeskyttelse",
            description:
                "For å behandle refusjoner og håndtere tvister kan vi oppbevare transaksjonsdata (inkludert ordrereferanser og aktivitetslogger) i opptil 6 år i samsvar med britisk skatte- og regnskapslovgivning. Denne behandlingen utføres i samsvar med vår Personvernpolicy.",
        },
        {
            type: "text",
            title: "12. Illustrerende eksempler",
            bullets: [
                "Scenario A (Ingen refusjon): Du kjøpte Cook Pro-pakken (25 000 Tokens), brukte 5 000 Tokens på et fransk kjøkken-kurs, så én video og bestemte at det var for vanskelig. Resultat: Tokens er forbrukt. 14-dagers angreretten går tapt for hele pakken fordi du begynte å bruke den. Ingen refusjon.",
                "Scenario B (Refusjon godkjent): Du prøvde å kjøpe 5 000 Tokens (£5,00) men nettsiden frøs, og kortet ditt ble belastet to ganger. Resultat: Vi refunderer den dupliserte £5,00-transaksjonen i sin helhet til kortet ditt.",
                "Scenario C (Token-godtgjørelse): Du brukte Tokens på AI Matlagningsassistenten, men systemet krasjet og leverte en tom side. Resultat: Kontakt support. Vi refunderer det nøyaktige beløpet av brukte Tokens tilbake til Cheffmate-saldoen din slik at du kan prøve igjen.",
            ],
        },
        {
            type: "text",
            title: "13. Kontaktinformasjon",
            bullets: [
                "FUSION FAIRIES LTD",
                "Organisasjonsnummer: 15613978",
                "Registrert kontor: 20 Wenlock Road, London, England, N1 7GU",
                "Telefon: +44 7537 127672",
                "E-post: contact@cheffmate.co.uk",
            ],
        },
    ],
};

export default refundPolicySchema;
