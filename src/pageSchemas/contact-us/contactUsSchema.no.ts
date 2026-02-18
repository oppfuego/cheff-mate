import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_ADDRESS, COMPANY_NUMBER } from "@/resources/constants";

const contactPage: PageSchema = {
    meta: {
        title: `Kontakt Oss — ${COMPANY_NAME}`,
        description: `Ta kontakt med ${COMPANY_NAME}. Enten du har spørsmål, trenger støtte eller ønsker å samarbeide — vi er her for å hjelpe.`,
        keywords: [
            `${COMPANY_NAME} kontakt`,
            "støtte",
            "ta kontakt",
            "kundeservice",
        ],
        canonical: "/contact-us",
        ogImage: {
            title: `Kontakt ${COMPANY_NAME}`,
            description: "Din melding betyr noe — la oss snakke.",
            bg: "#f9fafb",
            color: "#111827",
        },
    },
    blocks: [
        {
            type: "custom",
            component: "ContactForm",
        },
    ],
};

export default contactPage;
