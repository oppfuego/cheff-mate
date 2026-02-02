"use client";

import Grid from "@/components/constructor/grid/Grid";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import StoryGridSection from "@/components/sections/story-grid-section/StoryGridSection";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";

export default function PricingPage() {
    return (
        <>
            <HowItWorksSection
                label="How It Works"
                title="From Tokens to Better Cooking"
                description="A simple flow designed around learning outcomes, not rigid plans."
                highlights={[
                    {
                        title: "AI for speed",
                        description: "Quick progress with instant corrections.",
                    },
                    {
                        title: "Chefs for mastery",
                        description: "Deep understanding from professionals.",
                    },
                ]}
                steps={[
                    {
                        icon: "wallet",
                        title: "Buy Tokens",
                        description: "Choose a pack or custom amount.",
                    },
                    {
                        icon: "chef",
                        title: "Choose AI or Chef",
                        description: "Fast AI coaching or human expertise.",
                    },
                    {
                        icon: "bulb",
                        title: "Cook & Improve",
                        description: "Practice, get feedback, see results.",
                    },
                ]}
                note="AI paths are more affordable and faster. Chef-led programs focus on depth and technique."
            />

            <Grid
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    index={0}
                    variant="starter"
                    title="Kitchen Warm-Up"
                    price="€5"
                    tokens={500}
                    badgeTop="Starter"
                    description="A gentle entry into smart cooking with AI guidance."
                    features={[
                        "1 week AI-guided learning",
                        "Personalized recipe adjustments",
                        "Skill-level adaptation",
                        "Instant feedback",
                    ]}
                    buttonText="Start Cooking"
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title="AI Chef Boost"
                    price="€15"
                    tokens={1500}
                    badgeTop="Most Popular"
                    description="Fast results with intelligent coaching and daily guidance."
                    features={[
                        "Up to 3 weeks with AI Chef",
                        "Daily cooking challenges",
                        "Instant taste & technique feedback",
                        "Adaptive learning speed",
                    ]}
                    buttonText="Train with AI"
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title="Master Chef Week"
                    price="€50"
                    tokens={5000}
                    badgeTop="Best Value"
                    description="Learn directly from a professional chef — deeper, slower, transformational."
                    features={[
                        "1 full week with real chef",
                        "Structured curriculum",
                        "Professional techniques",
                        "Chef-reviewed progress",
                    ]}
                    buttonText="Learn with a Chef"
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title="Flexible Token Pack"
                    price="dynamic"
                    tokens={0}
                    badgeTop="Flexible"
                    description="Mix AI and Chef programs exactly how you want."
                    features={[
                        "Custom token amount",
                        "Spend on AI or Chef paths",
                        "No expiration",
                        "Bulk discounts",
                    ]}
                    buttonText="Build My Plan"
                />
            </Grid>

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="brain"
                    title="AI-Guided Cooking"
                    description="Best for quick results. Learn faster with instant adjustments and smart feedback."
                    image="image3"
                    actionText="Try AI Chef"
                    actionLink="/ai-chef"
                />

                <PromoFeatureCard
                    icon="chef"
                    title="Chef-Led Programs"
                    description="For those who want to master techniques and cooking philosophy."
                    image="image10"
                    imagePosition="right"
                    actionText="Meet the Chefs"
                    actionLink="/chefs"
                />
            </Grid>

            {/* ================= VALUES ================= */}
            <ValuesIcons
                title="Why Learn With Us"
                description="A new way to grow as a home cook"
                values={[
                    {
                        icon: "zap",
                        title: "Faster Progress",
                        description: "AI corrects mistakes instantly.",
                    },
                    {
                        icon: "chef",
                        title: "Real Expertise",
                        description: "Learn directly from professional chefs.",
                    },
                    {
                        icon: "settings",
                        title: "Personalized Paths",
                        description: "Every learner is different.",
                    },
                    {
                        icon: "wallet",
                        title: "Fair Pricing",
                        description: "Pay only for what you use.",
                    },
                ]}
            />

            {/* ================= FINAL CTA ================= */}
            <TextWithButton
                align="center"
                title="Ready to Cook Smarter?"
                description="Choose AI for speed or a chef for mastery. Start learning today."
                buttonText="Get Tokens"
                buttonLink="/checkout"
            />
        </>
    );
}
