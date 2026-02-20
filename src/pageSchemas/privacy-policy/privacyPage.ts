import { PageSchema } from "@/components/constructor/page-render/types";

const privacyPolicySchema: PageSchema = {
    meta: {
        title: "Privacy Policy – Cheffmate",
        description:
            "Cheffmate Privacy Policy: details on what data we collect, how we use it, retention, transfers, and your rights under UK GDPR.",
        keywords: [
            "privacy policy",
            "GDPR",
            "data protection",
            "cheffmate",
            "cooking AI",
            "personal data",
            "uk gdpr",
        ],
        canonical: "/privacy-policy",
        ogImage: {
            title: "Cheffmate – Privacy Policy",
            description: "Transparent privacy practices for Cheffmate cooking platform under UK GDPR.",
            bg: "#ffffff",
            color: "#000000",
        },
    },
    blocks: [
        {
            type: "text",
            title: "Privacy Policy",
            description: "Effective date: 20 January 2026",
        },
        {
            type: "text",
            title: "1. Introduction",
            description:
                "We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains what personal data we collect, why we use it, how long we keep it, and how you can exercise your rights when using cheffmate.co.uk and our related digital culinary services (the “Service”).",
            bullets: [
                "Controller: FUSION FAIRIES LTD (Company No. 15613978), 20 Wenlock Road, London, England, N1 7GU (“Cheffmate”, “we”, “us”, “our”).",
                "Contact: contact@cheffmate.co.uk",
                "Scope: This Policy applies to all users of the Service, including individuals purchasing Tokens, accessing Chef Courses, or generating AI Cooking Plans.",
            ],
            description2:
                "By using the Service, you acknowledge that your personal data will be processed in accordance with this Privacy Policy and applicable data protection laws, including the UK GDPR and the Data Protection Act 2018.",
        },
        {
            type: "text",
            title: "2. Personal Data We Collect",
            description:
                "We collect only the data necessary to provide you with culinary education, generate personalised AI recipes, process payments, and improve our platform.",
        },
        {
            type: "text",
            title: "2.1. Data you provide directly",
            bullets: [
                "Account & Identity: Name, email address, and password.",
                "Culinary & AI Inputs: Information you enter when requesting an AI Cooking Plan. This may include your cooking skill level, available kitchen equipment, preferred cuisines, and specific ingredients.",
                "Billing Information: Billing name, registered address, and payment method details (processed securely via third parties).",
                "Wallet & Tokens: Transaction history, Token consumption logs (e.g., \"5000 Tokens used for French Cuisine Course\"), and current balance.",
                "Support & Communication: Communications with our support team regarding technical issues or refunds.",
            ],
        },
        {
            type: "text",
            title: "2.2. Data collected automatically",
            bullets: [
                "Technical Data: IP address, browser type, device information, timezone, and operating system.",
                "Usage Data: How you interact with the platform (e.g., which Chef Courses you watch, video completion rates, prompts used for AI generation).",
                "Security Telemetry: Login logs, failed authentication attempts, and fraud detection signals to protect your Account and Token balance.",
            ],
        },
        {
            type: "text",
            title: "2.3. Data from third parties",
            bullets: [
                "Payment Processors: Confirmation of payment, partial card details (last 4 digits), and fraud risk scores. We do not store full credit card numbers on our servers.",
            ],
        },
        {
            type: "text",
            title: "2.4. Special Category Data (Health, Allergies & Diet)",
            description:
                "We do not require \"special category\" data (such as health conditions or strict medical diets) to create an Account. However, if you voluntarily input such information into the AI Cooking Assistant (e.g., \"I have a peanut allergy\", \"I am a diabetic\", \"I need a gluten-free plan\"), you explicitly consent to our processing of this health-related data. We use this data strictly to generate your requested cooking plan and do not use it for marketing purposes.",
        },
        {
            type: "text",
            title: "3. Why We Process Your Data & Legal Bases",
            description:
                "We process personal data under the UK GDPR on the following legal bases:",
        },
        {
            type: "text",
            title: "3.1. Performance of a Contract",
            bullets: [
                "To create your Account and provide access to the platform.",
                "To deliver the Chef Courses and generate the AI Cooking Plans you have unlocked using Tokens.",
                "To manage your Token balance and process payments.",
            ],
        },
        {
            type: "text",
            title: "3.2. Legitimate Interests",
            bullets: [
                "Fraud Prevention: Detecting unusual token usage, scraping attempts, or suspicious payments.",
                "Service Improvement: Analysing aggregated usage data (e.g., which courses are most popular) to improve our offerings.",
                "Security: Protecting our infrastructure from cyber-attacks.",
            ],
        },
        {
            type: "text",
            title: "3.3. Legal Obligation",
            bullets: [
                "Maintaining financial records for tax authorities (HMRC).",
                "Complying with consumer protection laws regarding digital refunds.",
            ],
        },
        {
            type: "text",
            title: "3.4. Explicit Consent",
            bullets: [
                "Processing voluntarily provided dietary/health data (allergies) solely for AI recipe generation.",
                "Sending marketing newsletters (which you can opt out of at any time).",
            ],
        },
        {
            type: "text",
            title: "4. Automated Processing & AI",
            description:
                "4.1. AI Generation: The core of our AI Cooking Assistant relies on Generative AI (Large Language Models). Your input data (ingredients, preferences) is processed by these algorithms to produce custom recipes.\n\n4.2. Data Privacy in AI: We utilise enterprise-grade API agreements with our AI providers. Your specific inputs and dietary requirements are processed momentarily to generate the output and are not used by these third-party providers to train their public-facing AI models.\n\n4.3. No Legal Decisions: Our AI acts solely as a culinary drafting assistant. It does not make automated decisions that have legal, financial, or similarly significant effects on you.",
        },
        {
            type: "text",
            title: "5. Sharing and International Transfers",
            description:
                "We share personal data only when necessary to operate the Service:",
            bullets: [
                "AI & Cloud Providers: Trusted third-party processors (e.g., cloud hosting, AI API providers) that provide the computational power to host our videos and generate your recipes.",
                "Payment Gateways: To process card transactions securely.",
                "Chef Partners: Professional chefs acting as independent contractors receive aggregated, anonymised data about the performance of their courses. They do not receive your personal contact information unless you explicitly communicate with them via a platform feature.",
            ],
            description2:
                "International Transfers: Some of our technology partners (e.g., server hosts or AI providers) may be located outside the UK or EEA (e.g., in the USA). We ensure your data is protected through: Adequacy Decisions: UK/EU recognition of the destination country's data protection standards. Standard Contractual Clauses (SCCs / IDTA): Legal contracts that require the recipient to protect your data to UK standards.",
        },
        {
            type: "text",
            title: "6. Retention of Data",
            description:
                "We adhere to strict data retention policies:",
            bullets: [
                "Account Data & Content: We retain your Account details and generated AI Cooking Plans in your dashboard for as long as your Account is active.",
                "Inactive Accounts: If your Account remains completely inactive (no logins, no Token usage) for 24 months, we may permanently delete your Account, Token balance, and generated data to save storage and protect privacy.",
                "Financial Records: We retain transaction data (Token purchases and refund requests) for 6 years as required by UK tax and accounting laws.",
            ],
        },
        {
            type: "text",
            title: "7. Security",
            description:
                "We treat your data with high confidentiality. Measures include:",
            bullets: [
                "Encryption: Data is encrypted in transit (TLS/SSL) and at rest where possible.",
                "Access Control: Strict internal access controls for our support team.",
                "Segregation: We strictly separate payment gateway data from your culinary profile.",
            ],
            description2:
                "While we implement robust security, no online transmission is 100% secure. You are responsible for keeping your Account password confidential.",
        },
        {
            type: "text",
            title: "8. Your Rights",
            description:
                "Under the UK GDPR, you have the right to:",
            bullets: [
                "Access: Request a copy of the personal data we hold about you.",
                "Rectification: Correct inaccurate personal data.",
                "Erasure: Request deletion of your data (\"Right to be Forgotten\"), subject to our legal obligation to keep financial records.",
                "Portability: Request your data in a machine-readable format.",
                "Withdraw Consent: Withdraw your consent for the processing of dietary/health data at any time (by deleting the input or your Account).",
                "Object: Object to processing based on legitimate interests (e.g., direct marketing).",
            ],
            description2:
                "To exercise these rights, email contact@cheffmate.co.uk. We aim to respond within 30 days.",
        },
        {
            type: "text",
            title: "9. Cookies",
            description:
                "We use cookies to manage your login session, ensure the security of your Token Wallet, and analyse site traffic. Essential cookies are required for the Service to function. For more details, please refer to our Cookie Policy.",
        },
        {
            type: "text",
            title: "10. Contact Details & Complaints",
            bullets: [
                "FUSION FAIRIES LTD",
                "Company Number: 15613978",
                "Address: 20 Wenlock Road, London, England, N1 7GU",
                "Email: contact@cheffmate.co.uk",
                "Phone: +44 7537 127672",
            ],
            description2:
                "Supervisory Authority: If you believe we have mishandled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) in the UK (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns directly before you approach the ICO.",
        },
    ],
};

export default privacyPolicySchema;
