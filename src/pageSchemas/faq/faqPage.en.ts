import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME, COMPANY_EMAIL } from "@/resources/constants";

const faqSchema: PageSchema = {
    meta: {
        title: `FAQ — ${COMPANY_NAME} Culinary Platform`,
        description: `Frequently asked questions about learning to cook with ${COMPANY_NAME} — AI chef, real chefs, tokens, courses, and results.`,
        keywords: [
            "cooking courses FAQ",
            "AI chef cooking",
            "online culinary training",
            "learn cooking with AI",
            "chef mentorship online",
            "culinary tokens",
        ],
        canonical: "/faq",
        ogImage: {
            title: `${COMPANY_NAME} — Culinary FAQ`,
            description:
                "Answers to the most common questions about learning with AI chefs and professional culinary mentors.",
            bg: "#1E2F1E",
            color: "#ffffff",
        },
    },

    blocks: [
        {
            type: "faq",
            items: [
                {
                    question: `What is ${COMPANY_NAME}?`,
                    answer: `${COMPANY_NAME} is a modern culinary learning platform where you improve your cooking skills using AI chefs or professional human chefs through structured, week-based learning plans.`,
                },
                {
                    question: "How does learning on the platform work?",
                    answer:
                        "You purchase tokens and spend them on weekly learning plans. Each plan includes recipes, guidance, feedback, and clear goals — either powered by AI or led by a real chef.",
                },
                {
                    question: "What are tokens?",
                    answer:
                        "Tokens are the internal currency of the platform. You use them to unlock learning plans, chef mentorship, AI guidance, and downloadable learning materials.",
                },
                {
                    question: "What’s the difference between an AI chef and a real chef?",
                    answer:
                        "AI chefs are faster and more affordable, ideal for quick results and daily practice. Human chefs offer deeper expertise, personal style, and advanced technique refinement — they cost more but provide richer mentorship.",
                },
                {
                    question: "Which option should I choose — AI or a chef?",
                    answer:
                        "If you want speed, structure, and instant feedback, start with AI. If you want depth, culinary philosophy, and professional refinement, choose a real chef — or combine both.",
                },
                {
                    question: "How long does a learning plan last?",
                    answer:
                        "Most plans are structured for one week, focusing on specific skills, cuisines, or techniques. You can repeat, upgrade, or switch mentors anytime.",
                },
                {
                    question: "Do I need prior cooking experience?",
                    answer:
                        "No. The platform adapts to your skill level — from complete beginners to confident home cooks looking to refine professional techniques.",
                },
                {
                    question: "What do I get at the end of a plan?",
                    answer:
                        "You receive structured recipes, step-by-step guidance, progress insights, and a downloadable PDF summary of your learning results.",
                },
                {
                    question: "Can I switch between AI and a real chef?",
                    answer:
                        "Yes. Many users start with AI for speed, then switch to a chef for refinement — or use both in parallel.",
                },
                {
                    question: "Do tokens expire?",
                    answer:
                        "No. Your tokens stay in your account and can be used anytime without expiration.",
                },
                {
                    question: "Is my payment secure?",
                    answer:
                        `${COMPANY_NAME} uses trusted payment providers and industry-standard encryption to keep all transactions secure.`,
                },
                {
                    question: "How can I contact support?",
                    answer:
                        `You can contact our support team anytime via the contact form or by email at ${COMPANY_EMAIL}. We usually respond within 24 hours.`,
                },
            ],
        },

        {
            type: "custom",
            component: "TextWithButton",
            title: "Still Have Questions?",
            description:
                "Our culinary support team is happy to help you choose the right learning path.",
            buttonText: "Contact Support",
            buttonLink: "/contact-us",
        },
    ],
};

export default faqSchema;
