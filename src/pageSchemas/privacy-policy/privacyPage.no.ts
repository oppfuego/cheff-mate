import { PageSchema } from "@/components/constructor/page-render/types";

const COMPANY_NAME = "FUSION FAIRIES LTD";
const COMPANY_NUMBER = "15613978";
const COMPANY_ADDRESS = "20 Wenlock Road, London, England, N1 7GU";
const COMPANY_EMAIL = "contact@cheffmate.co.uk";
const COMPANY_PHONE = "+44 7537 127672";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Privacy Policy – Cheffmate",
        description:
            "Cheffmate Privacy Policy: how we collect, use, store and protect your personal data under UK GDPR.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "cheffmate",
            "personal data",
            "UK GDPR",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "Cheffmate – Privacy Policy",
            description:
                "Transparent data protection practices for Cheffmate platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },

    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description:
                `Effective date: 7 April 2026 \n\nThis Privacy Policy explains how ${COMPANY_NAME} (“we”, “us”, “our”) collects, uses, shares, stores, and protects personal data when you use Cheffmate and related services available at https://www.cheffmate.co.uk (the “Service”).\n\nData Controller\n${COMPANY_NAME}\nCompany Number: ${COMPANY_NUMBER}\nAddress: ${COMPANY_ADDRESS}\nEmail: ${COMPANY_EMAIL}\nPhone: ${COMPANY_PHONE}\n\nThis Privacy Policy applies to personal data collected through the website, account registration, login areas, token purchases, checkout, AI request forms, chef course access, contact forms, customer support, and related digital service delivery.`,
        },

        {
            type: "text",
            title: "1. General Principles",
            bullets: [
                "1.1 We process personal data in accordance with the UK GDPR, the Data Protection Act 2018, and other applicable data protection laws.",
                "1.2 We collect and use only the personal data that is reasonably necessary for legitimate business purposes, including providing the Service, managing accounts, processing payments, delivering digital content, responding to enquiries, ensuring platform security, preventing fraud, and complying with legal obligations.",
                "1.3 By using the Service, you acknowledge that your personal data will be processed as described in this Privacy Policy.",
            ],
        },

        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "Depending on how you use the Service, we may collect the following categories of personal data:",
        },

        {
            type: "text",
            title: "2.1 Identity and contact data",
            description: "This may include:",
            bullets: [
                "name",
                "email address",
                "billing name",
                "billing address",
                "country or location information",
                "phone number, where provided",
            ],
        },

        {
            type: "text",
            title: "2.2 Account data",
            description: "This may include:",
            bullets: [
                "account login details",
                "hashed password and authentication-related records",
                "account preferences",
                "profile information",
                "token balance",
                "account status",
                "account creation and login history",
            ],
        },

        {
            type: "text",
            title: "2.3 Order and transaction data",
            description: "This may include:",
            bullets: [
                "order references",
                "purchase history",
                "token purchases and redemptions",
                "transaction dates",
                "payment status",
                "currency used",
                "refund, reversal, and chargeback information",
                "payment processor references",
                "limited payment metadata such as card brand or masked details",
                "We do not store full payment card numbers or security codes",
            ],
        },

        {
            type: "text",
            title: "2.4 Service and usage data",
            description: "This may include:",
            bullets: [
                "selected Chef Courses or AI Cooking Plans",
                "prompts, requests, or inputs",
                "content access history",
                "download history",
                "dashboard interaction history",
                "timestamps and activity logs",
                "records of token deductions",
            ],
        },

        {
            type: "text",
            title: "2.5 Culinary preference and optional dietary data",
            description:
                "Where relevant, we may collect information you voluntarily provide:",
            bullets: [
                "cooking goals",
                "cuisine preferences",
                "ingredient preferences",
                "disliked ingredients",
                "household preferences",
                "kitchen equipment information",
                "skill level",
                "timing preferences",
                "dietary preferences",
                "allergy or intolerance information",
            ],
        },

        {
            type: "text",
            title: "2.6 Technical data",
            description: "This may include:",
            bullets: [
                "IP address",
                "browser type",
                "device information",
                "operating system",
                "time zone",
                "cookies and similar technologies",
                "logs and diagnostics",
            ],
        },

        {
            type: "text",
            title: "2.7 Communications and support data",
            description: "This may include:",
            bullets: [
                "emails",
                "support tickets",
                "contact form messages",
                "complaints",
                "refund requests",
                "attachments",
            ],
        },

        {
            type: "text",
            title: "2.8 Marketing and consent data",
            description: "This may include:",
            bullets: [
                "newsletter preferences",
                "marketing opt-in records",
                "consent timestamps",
                "unsubscribe records",
                "campaign interaction data",
            ],
        },

        {
            type: "text",
            title: "3. How We Collect Personal Data",
            bullets: [
                "directly from you when you create an account, purchase tokens or use the Service",
                "automatically via cookies, logs and analytics",
                "from payment providers and service partners",
            ],
        },

        {
            type: "text",
            title: "4. How and Why We Use Personal Data",
            description:
                "We process personal data only where we have a valid legal basis.",
        },

        {
            type: "text",
            title: "4.1 Performance of a contract",
            bullets: [
                "account creation and management",
                "token purchases and balance",
                "delivery of content",
                "customer support",
            ],
        },

        {
            type: "text",
            title: "4.2 Legal obligations",
            bullets: [
                "tax and accounting",
                "consumer law",
                "fraud prevention",
                "legal requests",
            ],
        },

        {
            type: "text",
            title: "4.3 Legitimate interests",
            bullets: [
                "platform improvement",
                "security",
                "fraud prevention",
                "analytics",
                "dispute handling",
            ],
        },

        {
            type: "text",
            title: "4.4 Consent",
            bullets: [
                "marketing communications",
                "cookies",
                "health-related data for AI",
            ],
        },

        {
            type: "text",
            title: "5. Special Category Data",
            bullets: [
                "may include allergies or health data",
                "processed only when provided voluntarily",
                "used only for AI outputs",
                "not used for marketing",
            ],
        },

        {
            type: "text",
            title: "6. Cookies",
            bullets: [
                "used for sessions and functionality",
                "some require consent",
                "see Cookie Policy for details",
            ],
        },

        {
            type: "text",
            title: "7. Data Sharing",
            bullets: [
                "payment providers",
                "hosting providers",
                "analytics tools",
                "contractors",
                "legal authorities",
            ],
        },

        {
            type: "text",
            title: "8. International Transfers",
            bullets: [
                "data may be transferred outside UK",
                "protected via legal safeguards",
            ],
        },

        {
            type: "text",
            title: "9. Data Retention",
            bullets: [
                "data kept as long as necessary",
                "financial records kept several years",
                "logs retained short-term",
            ],
        },

        {
            type: "text",
            title: "10. Your Rights",
            bullets: [
                "access",
                "correction",
                "deletion",
                "restriction",
                "objection",
                "data portability",
                "complaints to ICO",
            ],
        },

        {
            type: "text",
            title: "11. Marketing",
            bullets: [
                "you may opt-out anytime",
                "service emails still sent",
            ],
        },

        {
            type: "text",
            title: "12. Security",
            bullets: [
                "encryption",
                "access control",
                "secure systems",
            ],
        },

        {
            type: "text",
            title: "13. Children",
            bullets: [
                "service not for under 18",
                "we do not knowingly collect child data",
            ],
        },

        {
            type: "text",
            title: "14. AI Processing",
            bullets: [
                "AI used to generate content",
                "no legal decisions made automatically",
            ],
        },

        {
            type: "text",
            title: "15. Changes",
            bullets: [
                "policy may be updated",
                "latest version always available",
            ],
        },

        {
            type: "text",
            title: "16. Contact",
            bullets: [
                COMPANY_NAME,
                `Company Number: ${COMPANY_NUMBER}`,
                `Address: ${COMPANY_ADDRESS}`,
                `Email: ${COMPANY_EMAIL}`,
                `Phone: ${COMPANY_PHONE}`,
            ],
        },
    ],
};

export default privacyPolicySchema;