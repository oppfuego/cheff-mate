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
                    {name: "Kenji T.", role: "Fermentation", image: "team4"},
                    {name: "Maria G.", role: "Pastry Arts", image: "team3"},
                ]}
            />

            <TestimonialsSlider
                title="What Students Say About Our Cooking Courses"
                description="Trusted by home cooks and aspiring chefs who want to master real culinary skills."
                testimonials={[
                    {
                        name: "Leon Sutherland",
                        image: "review9",
                        rating: 5,
                        text:
                            "I started with basic courses and quickly moved to advanced techniques. The lessons are clear, practical, and easy to follow at home.",
                    },
                    {
                        name: "Anna Peterson",
                        image: "review12",
                        rating: 5,
                        text:
                            "Loved how the platform explains not just recipes, but techniques. I finally understand why dishes turn out the way they do.",
                    },
                    {
                        name: "Marco Rossi",
                        image: "review10",
                        rating: 4,
                        text:
                            "Great structure and professional instructors. The step-by-step videos helped me significantly improve my cooking skills.",
                    },
                    {
                        name: "Sofia Martinez",
                        image: "review13",
                        rating: 4.5,
                        text:
                            "The courses are well organized and inspiring. Customer support was responsive when I had questions about my learning plan.",
                    },
                    {
                        name: "Daniel Kim",
                        rating: 4.8,
                        image: "review11",
                        text:
                            "I cook at home almost every day now. The platform gave me confidence, techniques, and creativity in the kitchen.",
                    },
                    {
                        name: "Emily Brown",
                        rating: 4.8,
                        image: "review7",
                        text:
                            "Perfect for beginners and advanced cooks alike. High-quality videos, clear explanations, and practical recipes.",
                    },
                ]}
            />

            <HowItWorksSection
                label="Join the team"
                title={
                    <>
                        Become part of <span>our global team</span>
                    </>
                }
                description={
                    <>
                        We collaborate with chefs, creators, and professionals from all over
                        the world. If you value quality, independence, and meaningful work —
                        we’d love to hear from you.
                    </>
                }
                highlights={[
                    {
                        title: "Work remotely",
                        description: "Collaborate from anywhere in the world.",
                    },
                    {
                        title: "Flexible collaboration",
                        description: "No rigid schedules or micromanagement.",
                    },
                    {
                        title: "Real impact",
                        description: "Your work directly helps people learn and grow.",
                    },
                ]}
                steps={[
                    {
                        icon: "login",
                        title: "Apply",
                        description: "Fill out a short application form.",
                    },
                    {
                        icon: "settings",
                        title: "We review",
                        description: "Our team carefully reviews your profile.",
                    },
                    {
                        icon: "community",
                        title: "Start collaborating",
                        description: "If it’s a match, we’ll reach out to you.",
                    },
                ]}
                note={
                    <>
                        Interested?{" "}
                        <a
                            href="/join-team"
                            style={{
                                color: "var(--primary-color)",
                                fontWeight: 600,
                                textDecoration: "underline",
                            }}
                        >
                            Join our team →
                        </a>
                    </>
                }
            />

            <FAQ
                items={[
                    {
                        question: "What is this cooking platform?",
                        answer:
                            "This is an online culinary learning platform that offers professional cooking courses created by chefs and instant AI-powered answers to culinary questions.",
                    },
                    {
                        question: "What types of services do you offer?",
                        answer:
                            "We offer two types of services: full cooking courses written by professional chefs and fast AI-generated answers for quick culinary guidance.",
                    },
                    {
                        question: "What is the difference between chef-written courses and AI answers?",
                        answer:
                            "Chef-written courses are detailed, structured learning programs, while AI answers provide quick, instant responses for specific cooking questions.",
                    },
                    {
                        question: "Do I receive learning materials after completing a course?",
                        answer:
                            "Yes. After completing a course, you receive a downloadable PDF file containing the full course materials.",
                    },
                    {
                        question: "How can I purchase courses?",
                        answer:
                            "Courses can be purchased using tokens available on the platform.",
                    },
                    {
                        question: "How do tokens work?",
                        answer:
                            "Tokens are an internal currency that you can buy with real money and use to purchase courses or AI services.",
                    },
                    {
                        question: "Can I use tokens for both courses and AI answers?",
                        answer:
                            "Yes. Tokens can be used to access chef-written courses as well as AI-powered culinary answers.",
                    },
                    {
                        question: "What happens if I run out of tokens?",
                        answer:
                            "You can top up your token balance at any time using your preferred payment method.",
                    },
                ]}
            />
        </>
    );
}