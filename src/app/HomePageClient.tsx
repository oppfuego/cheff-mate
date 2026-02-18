"use client";

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
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function HomePageClient() {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).home;

    return (
        <>
            <HeroSection
                title={
                    <>
                        {t.hero.title.split(t.hero.titleHighlight)[0]}
                        <span>{t.hero.titleHighlight}</span>
                        {t.hero.title.split(t.hero.titleHighlight)[1]}
                    </>
                }
                description={t.hero.description}
                primaryCta={{ text: t.hero.primaryCta, link: "/get-started" }}
                secondaryCta={{ text: t.hero.secondaryCta, link: "/extra/chefs" }}
                image="image1"
            />

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="chef"
                    title={t.features.chef.title}
                    description={t.features.chef.description}
                    image="image2"
                    actionText={t.features.chef.actionText}
                    actionLink="/extra/chefs"
                />

                <PromoFeatureCard
                    icon="brain"
                    title={t.features.ai.title}
                    description={t.features.ai.description}
                    image="image3"
                    imagePosition="right"
                    actionText={t.features.ai.actionText}
                    actionLink="/get-started"
                />
            </Grid>

            <HowItWorksSection
                label={t.howItWorks.title}
                title={t.howItWorks.title}
                description={t.howItWorks.description}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "user" : idx === 1 ? "wallet" : "chef",
                    title: step.title,
                    description: step.description,
                }))}
            />

            <Section
                title={t.twoWays.title}
                description={t.twoWays.description}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "2rem",
                    }}
                >
                    <InfoBlock
                        eyebrow={t.twoWays.chef.eyebrow}
                        title={t.twoWays.chef.title}
                        description={t.twoWays.chef.description}
                        bullets={t.twoWays.chef.bullets}
                        image="image4"
                        variant="chef"
                    />

                    <InfoBlock
                        eyebrow={t.twoWays.ai.eyebrow}
                        title={t.twoWays.ai.title}
                        description={t.twoWays.ai.description}
                        bullets={t.twoWays.ai.bullets}
                        image="image5"
                        variant="ai"
                    />
                </div>
            </Section>

            <ValuesIcons
                title={t.coreValues.title}
                description={t.coreValues.description}
                values={t.coreValues.values.map((v, idx) => ({
                    icon: idx === 0 ? "accessibility" : idx === 1 ? "settings" : idx === 2 ? "bulb" : "community",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <Grid columns={4} gap="2rem">
                <PricingCard
                    index={0}
                    variant="starter"
                    title={t.pricing.cards[0].title}
                    price="€5"
                    tokens={500}
                    badgeTop={t.pricing.cards[0].badgeTop}
                    description={t.pricing.cards[0].description}
                    features={[]}
                    buttonText={t.pricing.cards[0].buttonText}
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title={t.pricing.cards[1].title}
                    price="€15"
                    tokens={1500}
                    badgeTop={t.pricing.cards[1].badgeTop}
                    description={t.pricing.cards[1].description}
                    features={[]}
                    buttonText={t.pricing.cards[1].buttonText}
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title={t.pricing.cards[2].title}
                    price="€50"
                    tokens={5000}
                    badgeTop={t.pricing.cards[2].badgeTop}
                    description={t.pricing.cards[2].description}
                    features={[]}
                    buttonText={t.pricing.cards[2].buttonText}
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title={t.pricing.cards[3].title}
                    price="dynamic"
                    tokens={0}
                    badgeTop={t.pricing.cards[3].badgeTop}
                    description={t.pricing.cards[3].description}
                    features={[]}
                    buttonText={t.pricing.cards[3].buttonText}
                />
            </Grid>

            <ValuesIcons
                title={t.tokens.title}
                description={t.tokens.description}
                values={t.tokens.values.map((v, idx) => ({
                    icon: idx === 0 ? "wallet" : idx === 1 ? "settings" : idx === 2 ? "check" : "clock",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <TeamGrid
                title={t.team.title}
                description={t.team.description}
                viewAllText={t.team.viewAllText}
                viewAllLink="/extra/chefs"
                members={[
                    {name: "Marcus L.", role: "French Cuisine", image: "team1"},
                    {name: "Sarah J.", role: "Molecular Gastronomy", image: "team2"},
                    {name: "Kenji T.", role: "Japanese Cuisine", image: "team4"},
                    {name: "Maria G.", role: "Pastry Arts", image: "team3"},
                ]}
            />

            <TestimonialsSlider
                title={t.testimonials.title}
                description={t.testimonials.description}
                testimonials={[
                    { name: "Leon Sutherland", image: "review9", rating: 5, text: "I started with basic courses and quickly moved to advanced techniques. The lessons are clear, practical, and easy to follow at home." },
                    { name: "Anna Peterson", image: "review12", rating: 5, text: "Loved how the platform explains not just recipes, but techniques. I finally understand why dishes turn out the way they do." },
                    { name: "Marco Rossi", image: "review10", rating: 4, text: "Great structure and professional instructors. The step-by-step videos helped me significantly improve my cooking skills." },
                    { name: "Sofia Martinez", image: "review13", rating: 4.5, text: "The courses are well organized and inspiring. Customer support was responsive when I had questions about my learning plan." },
                    { name: "Daniel Kim", image: "review11", rating: 4.8, text: "I cook at home almost every day now. The platform gave me confidence, techniques, and creativity in the kitchen." },
                    { name: "Emily Brown", image: "review7", rating: 4.8, text: "Perfect for beginners and advanced cooks alike. High-quality videos, clear explanations, and practical recipes." },
                ]}
            />

            <FAQ items={t.faq.items} />
        </>
    );
}
