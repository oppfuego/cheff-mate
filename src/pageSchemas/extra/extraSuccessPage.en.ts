import { PageSchema } from "@/components/constructor/page-render/types";
import { COMPANY_NAME } from "@/resources/constants";

const caseStudiesSchema: PageSchema = {
    meta: {
        title: `Case Studies — Real Results from ${COMPANY_NAME}`,
        description: `See how ${COMPANY_NAME} helped startups and small businesses secure funding, scale globally, and simplify their business planning with expert guidance.`,
        keywords: [
            "business plan examples",
            "startup success stories",
            "SME funding",
            "investor-ready documents",
            "AI business planner",
        ],
        canonical: "/case-studies",
        ogImage: {
            title: `${COMPANY_NAME} Success Stories`,
            description: "Real business results driven by expert planning and AI innovation.",
            bg: "#0a2540",
            color: "#ffffff",
        },
    },

    blocks: [
        // 🏁 HERO SECTION
        {
            type: "custom",
            component: "HeroSection",
            title: "Real Businesses. Real Growth.",
            highlight: "Case Studies from Our Clients",
            description: `Discover how startups, consultants, and small businesses used ${COMPANY_NAME} to create investor-ready business plans — and turn ideas into funded ventures.`,
            image: "image18",
            align: "left",
        },

        // 🧩 HIGHLIGHT STRIP (logos or industries)
        {
            type: "custom",
            component: "HighlightStrip",
            items: [
                { icon: "🚀", text: "Tech Startups" },
                { icon: "🌱", text: "Eco Retail" },
                { icon: "🏗️", text: "Construction Firms" },
                { icon: "🏢", text: "Consulting Agencies" },
                { icon: "🎓", text: "University Spin-Offs" },
            ],
        },

        // 🕰 STORY TIMELINE
        {
            type: "custom",
            component: "StoryTimeline",
            title: "Our Journey Through Success Stories",
            steps: [
                {
                    year: "2022",
                    title: "Tech Startup Secures €250K Seed Round",
                    description:
                        "A SaaS founder used our Expert 24h Plan to attract investors. The plan included detailed revenue projections, UX flow diagrams, and a competitive SWOT matrix.",
                },
                {
                    year: "2023",
                    title: "Green Retail Expands Internationally",
                    description:
                        "We helped an eco-brand translate its plan into 3 languages, adapt pricing models, and secure distribution deals in Central Europe.",
                },
                {
                    year: "2024",
                    title: "Consultant Scales into Agency",
                    description:
                        "A freelance strategist transformed into a 5-person consultancy after using ${COMPANY_NAME} templates to structure growth and attract B2B clients.",
                },
            ],
        },

        // 🧠 SECTION — Analysis of success
        {
            type: "section",
            title: "What Makes These Projects Successful",
            description:
                "Behind every success is a method — a balance between human strategy and AI precision. Here’s what helped these businesses grow.",
            left: {
                type: "custom",
                component: "InfoBlock",
                title: "Expert-Led Planning",
                description:
                    "Each plan is reviewed by business analysts with 10+ years of experience. They ensure the strategy, tone, and financial logic match investor standards.",
                bullets: [
                    "Tailored structure for your industry",
                    "Human expertise blended with AI tools",
                    "Investor-compliant financial logic",
                ],
            },
            right: {
                type: "custom",
                component: "InfoBlock",
                title: "AI-Powered Speed",
                description:
                    "Our AI helps visualize, structure, and automate data. Clients receive initial drafts in minutes, while experts refine them for final delivery.",
                bullets: [
                    "Faster turnarounds with AI support",
                    "Real-time editing and restructuring",
                    "Localized plan generation for global markets",
                ],
            },
        },

        // 💎 VALUES — What clients appreciated
        {
            type: "custom",
            component: "ValuesIcons",
            title: "Why Clients Choose Us",
            description:
                "Our hybrid model of expert support + automation helps clients reach funding and clarity faster.",
            values: [
                {
                    icon: "🤝",
                    title: "Human Support",
                    text: "Direct contact with your assigned expert within 24h.",
                },
                {
                    icon: "💼",
                    title: "Investor-Ready Plans",
                    text: "All projects follow professional standards and layout templates.",
                },
                {
                    icon: "⚙️",
                    title: "Customizable AI Tools",
                    text: "Adapt forecasts, style, and market data instantly.",
                },
                {
                    icon: "🌍",
                    title: "Global Focus",
                    text: "We’ve helped clients across 15+ countries and 10 languages.",
                },
            ],
        },

        // 🧾 TIMELINE — How the process works
        {
            type: "custom",
            component: "Timeline",
            title: "How We Build Successful Projects",
            steps: [
                {
                    title: "1. Understanding Your Idea",
                    description: "We start with a detailed call or form to capture your business essence.",
                },
                {
                    title: "2. Research & Strategy",
                    description:
                        "Our analysts conduct market and competitor research to validate your vision.",
                },
                {
                    title: "3. AI Draft & Expert Review",
                    description:
                        "AI creates the draft; experts refine every section for clarity and investor logic.",
                },
                {
                    title: "4. Feedback & Delivery",
                    description:
                        "You receive your complete, polished business plan within 24 hours — ready to pitch.",
                },
                {
                    title: "5. Ongoing Support",
                    description:
                        "Need revisions or investor feedback? Our experts remain available post-delivery.",
                },
            ],
        },

        // 🏷 TEXT + CTA
        {
            type: "custom",
            component: "TextWithButton",
            title: "Want Your Business to Be Our Next Success Story?",
            description:
                `Join hundreds of entrepreneurs who turned their ideas into funded ventures using ${COMPANY_NAME}. Get your expert business plan within 24 hours.`,
            buttonText: "Start Your Plan",
            buttonLink: "/profile",
            align: "center",
        },

        // 🧱 LOGOS
        {
            type: "custom",
            component: "LogoBlock",
            width: 300,
        },

        // 🔚 FINAL CTA
        {
            type: "custom",
            component: "MissionBanner",
            title: "Let’s Build Your Success Story Together",
            description: `With ${COMPANY_NAME}, you’re not just creating a business plan — you’re creating the foundation for your company’s growth.`,
            image: "image7",
        },
    ],
};

export default caseStudiesSchema;
