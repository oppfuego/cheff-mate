import HeroSection from "@/components/constructor/hero/Hero";
import FeatureStep from "@/components/constructor/feature-step/FeatureStep";
import FAQ from "@/components/constructor/faq/FAQ";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import FeatureStepsWrapper from "@/components/constructor/feature-step/wrapper/FeatureStepsWrapper";

export default function GetStartedPage() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Start Cooking <span>Smarter</span> Today.
                    </>
                }
                description="From your first taste profile to chef-level results — powered by real experts and intelligent AI."
                secondaryCta={{ text: "Meet the Chefs", link: "/extra/chefs" }}
                image="image12"
            />

            <FeatureStepsWrapper>
                <FeatureStep
                    step={1}
                    title="Create Your Account"
                    description="Sign up in seconds and unlock access to personalized culinary experiences."
                    bullets={[
                        "Quick email or social login",
                        "Secure personal dashboard",
                        "Instant access to platform features",
                    ]}
                    image="image13"
                    badge="Getting Started"
                    buttonText="Create Account"
                    buttonLink="/dashboard"
                    imagePosition="left"
                />

                <FeatureStep
                    step={2}
                    title="Purchase Cooking Tokens"
                    description="Tokens unlock courses, AI analysis, and downloadable materials."
                    bullets={[
                        "Flexible token packages",
                        "Pay only for what you use",
                        "No subscriptions required",
                    ]}
                    image="image14"
                    badge="Flexible Pricing"
                    buttonText="View Token Packs"
                    buttonLink="/pricing"
                    imagePosition="right"
                />

                <FeatureStep
                    step={3}
                    title="Choose a Chef or AI Mentor"
                    description="Learn directly from world-renowned chefs or let AI guide your journey."
                    bullets={[
                        "Michelin-level professionals",
                        "AI-powered cooking assistant",
                        "Switch mentors anytime",
                    ]}
                    image="image4"
                    badge="Michelin Standard"
                    buttonText="Explore Mentors"
                    buttonLink="/chefs"
                    imagePosition="left"
                />

                <FeatureStep
                    step={4}
                    title="Select Your Cuisine & Goals"
                    description="Tell us what you want to cook and what you want to master."
                    bullets={[
                        "Choose global cuisines",
                        "Set skill level & preferences",
                        "Dietary and allergy adjustments",
                    ]}
                    image="image15"
                    badge="Personalized Path"
                    buttonText="Choose Cuisine"
                    buttonLink="/dashboard"
                    imagePosition="right"
                />

                <FeatureStep
                    step={5}
                    title="Get Your Results in PDF"
                    description="Receive a beautifully structured PDF with recipes, techniques, and tips."
                    bullets={[
                        "Step-by-step instructions",
                        "Chef notes & AI insights",
                        "Downloadable & printable format",
                    ]}
                    image="image16"
                    badge="Final Output"
                    imagePosition="left"
                />
            </FeatureStepsWrapper>

            <FAQ
                items={[
                    {
                        question: "Do I need cooking experience to start?",
                        answer:
                            "No. The platform adapts to your skill level, whether you're a beginner or an advanced home cook.",
                    },
                    {
                        question: "What are tokens used for?",
                        answer:
                            "Tokens unlock courses, AI feedback, PDF materials, and premium chef content.",
                    },
                    {
                        question: "Can I choose between AI and real chefs?",
                        answer:
                            "Yes. You can learn from professional chefs, AI, or combine both approaches.",
                    },
                    {
                        question: "Are the PDFs downloadable and printable?",
                        answer:
                            "Absolutely. All generated PDFs are yours to download, save, and print.",
                    },
                    {
                        question: "Is there a subscription?",
                        answer:
                            "No subscriptions. You only pay for what you use with flexible token packs.",
                    },
                    {
                        question: "Can I change cuisines or mentors later?",
                        answer:
                            "Yes. You’re free to explore different cuisines and mentors at any time.",
                    },
                ]}
            />

            <TextWithButton
                title="Ready to Start Your Culinary Journey?"
                description="Create your account and experience a new way of learning how to cook."
                buttonText="Get Started"
                buttonLink="/dashboard"
            />
        </>
    );
}