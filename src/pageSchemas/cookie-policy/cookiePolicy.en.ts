import { PageSchema } from "@/components/constructor/page-render/types";

const COMPANY_NAME = "FUSION FAIRIES LTD";
const COMPANY_NUMBER = "15613978";
const COMPANY_ADDRESS = "20 Wenlock Road, London, England, N1 7GU";
const COMPANY_EMAIL = "contact@cheffmate.co.uk";
const COMPANY_PHONE = "+44 7537 127672";

const cookiePolicyEn: PageSchema = {
    meta: {
        title: "Cookie Policy – Cheffmate",
        description:
            "Cheffmate Cookie Policy: how we use cookies and similar technologies, categories, consent, retention, and your control options.",
        keywords: [
            "cookie policy",
            "cookies",
            "GDPR",
            "tracking",
            "privacy",
            "consent",
            "cheffmate",
        ],
        canonical: "/cookie-policy",
        ogImage: {
            title: "Cheffmate – Cookie Policy",
            description: "Transparent cookie policy for Cheffmate platform.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Cookie Policy",
            description:
                `Effective date: 7 April 2026 \n\nThis Cookie Policy explains how ${COMPANY_NAME} (“we”, “us”, “our”) uses cookies and similar technologies on Cheffmate and related services available at https://www.cheffmate.co.uk (the “Service”).\n\nData Controller\n${COMPANY_NAME}\nCompany Number: ${COMPANY_NUMBER}\nAddress: ${COMPANY_ADDRESS}\nEmail: ${COMPANY_EMAIL}\nPhone: ${COMPANY_PHONE}\n\nThis Cookie Policy should be read together with our Privacy Policy.`,
        },
        {
            type: "text",
            title: "1. What This Policy Covers",
            bullets: [
                "1.1 This Cookie Policy explains what cookies and similar technologies are, which categories we use, why we use them, and how you can manage your preferences.",
                "1.2 We use cookies and similar technologies such as local storage, session storage, tags, pixels, and similar browser-based tools to operate, secure, improve, and analyse the Service.",
                "1.3 Where required by applicable law, we ask for your consent before placing or using non-essential cookies or similar technologies on your device.",
            ],
        },
        {
            type: "text",
            title: "2. What Are Cookies?",
            bullets: [
                "2.1 Cookies are small text files stored on your device when you visit a website.",
                "2.2 Cookies may be:",
                "(a) session cookies, which expire when you close your browser; or",
                "(b) persistent cookies, which remain on your device for a defined period or until deleted.",
                "2.3 Cookies may be set by us (first-party cookies) or by third-party providers whose services are used on the website (third-party cookies).",
                "2.4 Similar technologies, such as local storage and session storage, may store information in your browser for comparable purposes.",
            ],
        },
        {
            type: "text",
            title: "3. Why We Use Cookies and Similar Technologies",
            description:
                "We use cookies and similar technologies for the following purposes:",
        },
        {
            type: "text",
            title: "3.1 Strictly necessary cookies",
            description:
                "These are required for the website and core Service functions to operate properly. They may be used for:",
            bullets: [
                "login and account authentication",
                "session management",
                "security and fraud prevention",
                "payment flow continuity",
                "token balance display and transaction integrity",
                "account protection and abuse prevention",
                "remembering privacy or cookie choices where technically necessary",
                "load balancing and core platform reliability",
                "These cookies do not require consent where they are strictly necessary under applicable law.",
            ],
        },
        {
            type: "text",
            title: "3.2 Functional cookies",
            description:
                "These help remember choices and improve usability, such as:",
            bullets: [
                "language preferences",
                "currency or region preferences",
                "interface settings",
                "dashboard convenience features",
                "saved user preferences that are not strictly required for basic operation",
                "Where required by law, these cookies are used only with your consent.",
            ],
        },
        {
            type: "text",
            title: "3.3 Analytics and performance cookies",
            description:
                "These help us understand how visitors use the website and help us improve performance, reliability, layout, content presentation, and user experience. They may collect information such as:",
            bullets: [
                "pages visited",
                "time spent on pages",
                "navigation patterns",
                "feature usage",
                "error reports",
                "browser and device characteristics",
                "general traffic and performance data",
                "Where required by law, these cookies are used only with your consent.",
            ],
        },
        {
            type: "text",
            title: "3.4 Marketing or advertising cookies",
            description:
                "These may be used to measure campaign performance, understand referral sources, support relevant marketing activities, and help us understand whether advertising or promotional campaigns are effective.",
            bullets: [
                "Where required by law, these cookies are used only after obtaining your consent.",
            ],
        },
        {
            type: "text",
            title: "3.5 Security and anti-abuse technologies",
            description:
                "Some technologies may be used to help protect the Service, users, accounts, payment flows, and token transactions against abuse, fraud, malicious traffic, unauthorised access, and automated attacks.",
            bullets: [
                "Where such technologies are strictly necessary for security, they may be used without consent to the extent permitted by law.",
            ],
        },
        {
            type: "text",
            title: "4. Token and AI-Related Technical Use",
            bullets: [
                "4.1 Because Cheffmate includes account-based access, token purchases, token redemption, and AI-supported content generation, some cookies or similar technologies may be used to:",
                "(a) keep your session securely connected to your Account;",
                "(b) preserve continuity during checkout or token purchase;",
                "(c) help prevent duplicate submissions or repeated token deductions caused by reloads or interrupted requests;",
                "(d) maintain temporary request state while AI-generated content is being processed; and",
                "(e) support secure delivery of content through your dashboard or account environment.",
                "4.2 These technical uses do not mean that cookies store full payment card details or full generated content locally on your device unless your browser or our systems specifically require temporary storage for functionality.",
            ],
        },
        {
            type: "text",
            title: "5. Types of Information Collected Through Cookies",
            description:
                "Depending on the tool used, cookies and similar technologies may collect information such as:",
            bullets: [
                "IP address",
                "browser type and version",
                "device type",
                "operating system",
                "language settings",
                "time zone",
                "session identifiers",
                "site usage data",
                "referral source",
                "pages viewed",
                "interaction events",
                "approximate location derived from IP",
                "login state",
                "consent status and preference settings",
                "This information may, in some cases, qualify as personal data under applicable law. Where it does, it is processed in accordance with our Privacy Policy.",
            ],
        },
        {
            type: "text",
            title: "6. Legal Basis for Using Cookies",
            bullets: [
                "6.1 Strictly necessary cookies are used where necessary for the provision of the website or a service expressly requested by the user, or where otherwise permitted under applicable law.",
                "6.2 Functional, analytics, and marketing cookies are used on the basis of your consent where consent is required under applicable law.",
                "6.3 Where we rely on consent, you may withdraw or change your cookie preferences at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.",
            ],
        },
        {
            type: "text",
            title: "7. Consent Management",
            bullets: [
                "7.1 When you first visit the Service, you may be presented with a cookie banner or cookie settings tool that allows you to:",
                "(a) accept all cookies;",
                "(b) reject non-essential cookies; or",
                "(c) customise your preferences.",
                "7.2 Your preferences may be stored using a cookie or similar technology so that the website can remember your choices.",
                "7.3 If the Service provides a cookie settings tool, you may revisit it later to update your preferences.",
                "7.4 You may also manage or delete cookies through your browser settings. However, blocking or deleting certain cookies may affect website functionality, including login persistence, saved preferences, checkout continuity, token-related actions, dashboard access, or other parts of the account experience.",
            ],
        },
        {
            type: "text",
            title: "8. Third-Party Cookies and Providers",
            bullets: [
                "8.1 Some cookies and similar technologies may be placed or operated by third-party providers whose services we use, such as providers of:",
                "hosting and infrastructure",
                "payments and fraud prevention",
                "analytics",
                "customer support tools",
                "security services",
                "communication tools",
                "embedded content or external integrations",
                "8.2 We do not control all third-party cookies directly. Their use may also be governed by the relevant third party’s own privacy and cookie policies.",
                "8.3 We may change the providers and tools used on the Service from time to time for operational, technical, legal, security, or commercial reasons.",
            ],
        },
        {
            type: "text",
            title: "9. International Data Transfers",
            bullets: [
                "9.1 Some third-party providers may process data outside the United Kingdom or outside the country where you are located.",
                "9.2 Where personal data collected through cookies or similar technologies is transferred internationally, we take reasonable steps to ensure that appropriate safeguards are used, such as:",
                "transfers to countries recognised as providing an adequate level of protection",
                "use of the UK International Data Transfer Agreement, UK Addendum, Standard Contractual Clauses, or equivalent lawful safeguards where appropriate",
                "other lawful mechanisms recognised under applicable data protection law",
                "9.3 Further information about international transfers is available in our Privacy Policy or on request.",
            ],
        },
        {
            type: "text",
            title: "10. Retention",
            bullets: [
                "10.1 Different cookies remain on your device for different periods depending on whether they are session-based or persistent.",
                "10.2 Session cookies usually expire when you close your browser.",
                "10.3 Persistent cookies remain until their expiry date or until you manually delete them.",
                "10.4 We may retain records relating to cookie preferences, consent logs, and related technical evidence for as long as reasonably necessary to demonstrate compliance, resolve disputes, maintain security, and meet legal obligations.",
            ],
        },
        {
            type: "text",
            title: "11. Your Choices",
            description: "You can manage cookies in several ways:",
            bullets: [
                "11.1 Cookie banner or settings tool",
                "Where available, use the website’s cookie settings tool to accept, reject, or customise non-essential cookies.",
                "11.2 Browser settings",
                "Most browsers allow you to block, delete, or restrict cookies through browser settings.",
                "11.3 Device controls",
                "Some mobile devices and apps provide device-level privacy settings that affect tracking technologies.",
                "11.4 Withdraw consent",
                "Where processing is based on consent, you can withdraw that consent at any time.",
                "Please note that disabling certain cookies may reduce site functionality or prevent some features from working correctly.",
            ],
        },
        {
            type: "text",
            title: "12. Changes to This Cookie Policy",
            bullets: [
                "12.1 We may update this Cookie Policy from time to time for legal, technical, operational, security, or commercial reasons.",
                "12.2 The latest version will be published on the Service with the updated effective date.",
                "12.3 Where changes are material, we may provide additional notice on the website or by other appropriate means.",
            ],
        },
        {
            type: "text",
            title: "13. Contact",
            description:
                "If you have any questions about this Cookie Policy or our use of cookies and similar technologies, please contact:",
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

export default cookiePolicyEn;