import type {Metadata} from "next";
import {COMPANY_NAME} from "@/resources/constants";

import HeroSection from "@/components/constructor/hero/Hero";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import Grid from "@/components/constructor/grid/Grid";
import FAQ from "@/components/constructor/faq/FAQ";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import TestimonialsSlider from "@/components/constructor/testimonials-slider/TestimonialsSlider";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TeamGrid from "@/components/constructor/team-grid/TeamGrid";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import Section from "@/components/constructor/section/Section";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";

export const metadata: Metadata = {
    title: `${COMPANY_NAME} — Global eSIM Marketplace for Travelers`,
    description:
        "Buy global eSIM data plans for travel. Instant activation, no roaming fees, coverage in 200+ countries.",
    keywords: [
        "eSIM",
        "travel eSIM",
        "global eSIM",
        "mobile data abroad",
        "eSIM marketplace",
        "international data plans",
    ],
    alternates: {
        canonical: "/",
    },
};

export default function HomePage() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Learn to cook <span>like a chef</span> — or let AI teach you.
                    </>
                }
                description="Choose your path: personal courses written by real professional chefs, or a custom AI-powered cooking plan delivered within 4 hours. No subscriptions. Just learning."
                primaryCta={{text: "Get Started", link: "/dashboard"}}
                secondaryCta={{text: "Explore Chefs", link: "/extra/chefs"}}
                image="image1"
            />

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="chef"
                    title="Learn from Real Chefs"
                    description="Choose a professional chef. Spend tokens and receive a structured, step-by-step culinary course written personally for you."
                    actionText="Choose a Chef →"
                    actionLink="/extra/chefs"
                    image="image2"
                    imagePosition="left"
                />

                <PromoFeatureCard
                    icon="brain"
                    title="AI Cooking Assistant"
                    description="Describe your goals, skill level, diet, and kitchen tools. Our AI will generate a personalized cooking course within 4 hours."
                    actionText="Start with AI →"
                    actionLink="/dashboard"
                    image="image3"
                    imagePosition="right"
                />
            </Grid>


            <HowItWorksSection
                title={
                    <>
                        How It <span>Works</span>
                    </>
                }
                description="One account. One balance. Full freedom to learn at your own pace."
                steps={[
                    {
                        icon: "login",
                        title: "Create an Account",
                        description: "Sign up and get access to your personal learning dashboard.",
                    },
                    {
                        icon: "coins",
                        title: "Buy Tokens",
                        description: "Purchase tokens once. They never expire.",
                    },
                    {
                        icon: "path",
                        title: "Choose Your Learning Path",
                        description: "Spend tokens on a chef-written course or an AI-generated plan.",
                    },
                ]}
            />

            <Section
                title="Two Ways to Learn"
                description="Choose the learning style that fits your goals and pace."
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                        width: "100%",
                    }}
                >
                    <InfoBlock
                        variant="chef"
                        eyebrow="Human Expertise"
                        title="Learn from a Real Chef"
                        description="A professional chef creates a structured course tailored to your level and goals."
                        image="image5"
                        bullets={[
                            "Written by a real culinary expert",
                            "Deep techniques & theory",
                            "Step-by-step lessons",
                            "Best for long-term growth",
                        ]}
                    />

                    <InfoBlock
                        variant="ai"
                        eyebrow="AI Powered"
                        title="AI Cooking Assistant"
                        description="Describe your preferences and receive a personalized cooking plan within 4 hours."
                        image="image4"
                        bullets={[
                            "Ready in up to 4 hours",
                            "Adapts to your diet & ingredients",
                            "Fast and flexible learning",
                            "Available anytime",
                        ]}
                    />
                </div>
            </Section>

            <ValuesIcons
                title="Our Core Values"
                description="The principles that guide every feature we build and every recipe we film."
                values={[
                    {
                        icon: "accessibility",
                        title: "Accessibility",
                        description:
                            "Gourmet skills for every kitchen. We believe high-end culinary education shouldn’t be locked behind expensive culinary school tuition.",
                    },
                    {
                        icon: "settings",
                        title: "Personalization",
                        description:
                            "A curriculum that adapts to your taste buds. No two palates are the same, so no two learning paths should be identical.",
                    },
                    {
                        icon: "bulb",
                        title: "Innovation",
                        description:
                            "Pushing the boundaries of home cooking. We experiment with food science and data so you can experiment with confidence.",
                    },
                    {
                        icon: "community",
                        title: "Community",
                        description:
                            "Learning is better together. We build connections through shared experiences, feedback, and a global cooking community.",
                    },
                ]}
            />

            <ValuesIcons
                title="Why Tokens?"
                description="Because learning should be flexible, not locked behind subscriptions."
                backgroundColor="quaternary-color"
                values={[
                    {
                        icon: "subscriptions",
                        title: "No Subscriptions",
                        description: "Pay only when you want to learn. No monthly fees.",
                    },
                    {
                        icon: "flex",
                        title: "Full Flexibility",
                        description: "Spend tokens on chefs or AI. Mix both anytime.",
                    },
                    {
                        icon: "priceTag",
                        title: "Fair Pricing",
                        description: "One token = one learning action. Simple and transparent.",
                    },
                    {
                        icon: "calendar",
                        title: "Your Pace",
                        description: "Learn when you want, how you want.",
                    },
                ]}
            />

            <Grid
                title="Learning Tokens"
                description="Buy once. Use anytime. No expiration."
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    variant="starter"
                    title="Starter"
                    price="€5"
                    tokens={5000}
                    badgeTop="Try It"
                    description="Perfect to test chef courses or AI learning."
                    buttonText="Buy Tokens"
                />

                <PricingCard
                    variant="pro"
                    title="Cook Pro"
                    price="€25"
                    tokens={25000}
                    badgeTop="Popular"
                    description="Ideal for consistent learning and skill growth."
                    buttonText="Get Started"
                />

                <PricingCard
                    variant="premium"
                    title="Chef Mode"
                    price="€79"
                    tokens={79000}
                    badgeTop="Best Value"
                    description="For serious learners and advanced techniques."
                    buttonText="Choose Plan"
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title="Custom Balance"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Add any amount and use it whenever you need."
                    buttonText="Continue"
                />
            </Grid>

            <TeamGrid
                title="Meet Our Chefs"
                description="Real professionals crafting courses — not generic content."
                viewAllText="View all chefs →"
                viewAllLink="/extra/chefs"
                members={[
                    {name: "Marcus L.", role: "French Cuisine", image: "team1"},
                    {name: "Sarah J.", role: "Molecular Gastronomy", image: "team2"},
                    {name: "Kenji T.", role: "Fermentation", image: "team3"},
                    {name: "Maria G.", role: "Pastry Arts", image: "team4"},
                    {name: "Maria G.", role: "Pastry Arts", image: "team4"},
                ]}
            />

            <TestimonialsSlider
                title="What Travelers Say About Our eSIM"
                description="Trusted by travelers worldwide for fast and reliable mobile internet."
                testimonials={[
                    {
                        name: "Leon Sutherland",
                        image: "review1",
                        rating: 5,
                        text:
                            "Bought the eSIM before my trip to Australia. Activated it at the airport and had fast internet immediately. No roaming issues at all.",
                    },
                    {
                        name: "Anna Peterson",
                        image: "review2",
                        rating: 5,
                        text:
                            "Installed the eSIM in under 5 minutes. Worked perfectly across multiple countries during my trip. Super convenient and reliable.",
                    },
                    {
                        name: "Marco Rossi",
                        image: "review3",
                        rating: 4,
                        text:
                            "Very reliable connection with clear setup instructions. Saved me a lot of money compared to traditional roaming plans.",
                    },
                    {
                        name: "Sofia Martinez",
                        image: "review4",
                        rating: 4.5,
                        text:
                            "Customer support was quick and helpful when I had questions about my plan. The eSIM worked flawlessly throughout my journey.",
                    },
                    {
                        name: "Daniel Kim",
                        rating: 4.8,
                        image: "review5",
                        text:
                            "Used this eSIM while traveling across Asia and Europe. Fast speeds, easy activation, and no need to swap SIM cards.",
                    },
                    {
                        name: "Daniel Kim",
                        rating: 4.8,
                        image: "review5",
                        text:
                            "Used this eSIM while traveling across Asia and Europe. Fast speeds, easy activation, and no need to swap SIM cards.",
                    },
                ]}
            />


            <FAQ
                items={[
                    {
                        question: "What is an eSIM?",
                        answer:
                            "An eSIM is a digital SIM that allows you to activate a mobile data plan without inserting a physical SIM card.",
                    },
                    {
                        question: "When will my eSIM be delivered?",
                        answer:
                            "Your eSIM is delivered instantly after purchase. You’ll receive a QR code and setup instructions right away.",
                    },
                    {
                        question: "How do I install my eSIM?",
                        answer:
                            "Simply scan the QR code provided after purchase or follow the manual installation steps on your device.",
                    },
                    {
                        question: "Do I need to remove my physical SIM?",
                        answer:
                            "No. You can keep your physical SIM for calls and SMS while using eSIM for mobile data.",
                    },
                    {
                        question: "Is my device compatible with eSIM?",
                        answer:
                            "Most modern smartphones support eSIM, including recent iPhone, Samsung, and Google Pixel models.",
                    },
                    {
                        question: "Can I use eSIM in multiple countries?",
                        answer:
                            "Yes. You can choose country-specific, regional, or global eSIM plans depending on your travel needs.",
                    },
                    {
                        question: "When does the data plan start?",
                        answer:
                            "Your plan activates when the eSIM first connects to a supported mobile network, not at the time of purchase.",
                    },
                    {
                        question: "What happens if I run out of data?",
                        answer:
                            "You can easily purchase another plan or top up your balance with tokens at any time.",
                    },
                ]}
            />

        </>
    );
}