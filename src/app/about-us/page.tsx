
import HeroSection from "@/components/constructor/hero/Hero";
import Section from "@/components/constructor/section/Section";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import MissionBanner from "@/components/constructor/missio-banner/MissionBanner";
import StoryGridSection from "@/components/sections/story-grid-section/StoryGridSection";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TeamGrid from "@/components/constructor/team-grid/TeamGrid";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import FAQ from "@/components/constructor/faq/FAQ";
import HighlightStrip from "@/components/constructor/highlight-strip/HighlightStrip";
import StoryTimeline from "@/components/constructor/story-timeline/StoryTimeline";

export default function AboutPage() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Reinventing the way the <span>world</span> cooks.
                    </>
                }
                description="Where centuries of culinary tradition meet the precision of modern AI. We help home cooks achieve professional results — without losing the soul of cooking."
                secondaryCta={{text: "Meet the Chefs", link: "/extra/chefs"}}
                image="image7"
            />

            <StoryGridSection
                label="Our Origins"
                title="From a Small Kitchen to a Global Table"
                cards={[
                    {
                        type: "text",
                        title: "It started with a simple frustration.",
                        text: "Why does home cooking feel so intimidating? In 2021, we realized the problem wasn’t people — it was access to real culinary knowledge.",
                    },
                    {
                        type: "image",
                        image: "image8",
                    },
                    {
                        type: "quote",
                        quote: "Cooking is the ultimate human connection. AI should support it — not replace it.",
                        author: "Elena R.",
                        role: "Founder",
                    },
                    {
                        type: "wideImage",
                        image: "image10",
                        title: "Community First",
                        text: "Great food brings people together — across cultures and continents.",
                    },
                ]}
            />

            <MissionBanner
                title="Our Mission"
                description="To make professional-level cooking accessible to anyone by combining human mastery with responsible, supportive AI."
                image="image9"
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
                    }}
                >
                    <InfoBlock
                        eyebrow="The Human Side"
                        title="Crafted by Real Chefs"
                        description="Every recipe starts as a human idea — shaped by experience, culture, and taste."
                        bullets={[
                            "Michelin & fine dining backgrounds",
                            "Authentic regional techniques",
                            "Hands-on testing and filming",
                        ]}
                        image="image11"
                        variant="chef"
                    />

                    <InfoBlock
                        eyebrow="The AI Side"
                        title="Enhanced by Intelligent Systems"
                        description="AI adapts recipes to you — without removing creativity or intuition."
                        bullets={[
                            "Smart ingredient substitutions",
                            "Diet & allergy personalization",
                            "Skill-level pacing",
                        ]}
                        image="image12"
                        variant="ai"
                    />
                </div>
            </Section>

            <HowItWorksSection
                label="How It Works"
                title={
                    <>
                        Human Expertise. <br/>
                        <span>Machine Precision.</span>
                    </>
                }
                description="We scale chef intuition, not automate creativity. The result — consistent, confident cooking."
                highlights={[
                    {
                        title: "Chef-Led Content",
                        description: "Every recipe is authored and approved by professionals.",
                    },
                    {
                        title: "AI Adaptation",
                        description: "Recipes adjust to your preferences in real time.",
                    },
                ]}
                steps={[
                    {
                        icon: "chef",
                        title: "Chef Creates",
                        description: "Flavor, structure, and intent",
                    },
                    {
                        icon: "brain",
                        title: "AI Refines",
                        description: "Personalized adjustments",
                    },
                    {
                        icon: "accessibility",
                        title: "You Cook",
                        description: "Reliable, delicious results",
                    },
                ]}
                note="On average, AI adaptations preserve up to 94% flavor fidelity according to user feedback."
            />

            <ValuesIcons
                title="Our Core Values"
                description="The principles behind every decision, recipe, and feature."
                values={[
                    {
                        icon: "accessibility",
                        title: "Accessibility",
                        description: "Professional culinary knowledge should be available to everyone.",
                    },
                    {
                        icon: "settings",
                        title: "Personalization",
                        description: "No two palates are the same — learning should adapt.",
                    },
                    {
                        icon: "bulb",
                        title: "Innovation",
                        description: "We combine food science with technology responsibly.",
                    },
                    {
                        icon: "community",
                        title: "Community",
                        description: "Cooking is better when shared.",
                    },
                ]}
            />

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
                    {name: "Luca B.", role: "Italian Cuisine", image: "team5"},
                ]}
            />

            <FAQ
                items={[
                    {
                        question: "Does AI replace real chefs?",
                        answer:
                            "No. Our platform is chef-led. AI only enhances and adapts recipes created by professionals — it never replaces human creativity.",
                    },
                    {
                        question: "How accurate are AI adaptations?",
                        answer:
                            "Based on user feedback and testing, our adaptations preserve up to 94% flavor fidelity while adjusting ingredients and techniques.",
                    },
                    {
                        question: "Who is this platform for?",
                        answer:
                            "It’s designed for everyone — from complete beginners to experienced home cooks seeking consistency, confidence, and inspiration.",
                    },
                    {
                        question: "Do I need professional equipment or skills?",
                        answer:
                            "Not at all. Recipes are designed for real home kitchens and adapt to your skill level and available tools.",
                    },
                    {
                        question: "Can the platform adapt to dietary needs or allergies?",
                        answer:
                            "Yes. AI can adjust recipes for dietary preferences, allergies, and ingredient availability without compromising flavor.",
                    },
                    {
                        question: "What makes this different from other cooking apps?",
                        answer:
                            "Unlike generic recipe apps, our content is created by real chefs and intelligently personalized — combining human mastery with modern technology.",
                    },
                ]}
            />

            <TextWithButton
                title="Ready to Cook Smarter?"
                description="Join thousands of home cooks learning directly from world-class chefs."
                buttonText="Explore Courses"
                buttonLink="/dashboard"
            />
        </>
    );
}