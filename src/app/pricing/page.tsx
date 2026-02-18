"use client";

import Grid from "@/components/constructor/grid/Grid";
import PricingCard from "@/components/constructor/pricing-card/PricingCard";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import StoryGridSection from "@/components/sections/story-grid-section/StoryGridSection";
import HowItWorksSection from "@/components/sections/how-it-works-section/HowItWorksSection";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function PricingPage() {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).pricing;
    return (
        <>
            <HowItWorksSection
                label={t.howItWorks.label}
                title={t.howItWorks.title}
                description={t.howItWorks.description}
                highlights={t.howItWorks.highlights.map((h) => ({
                    title: h.title,
                    description: h.description,
                }))}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "wallet" : idx === 1 ? "chef" : "bulb",
                    title: step.title,
                    description: step.description,
                }))}
                note={t.howItWorks.note}
            />

            <Grid
                columns={4}
                gap="2rem"
            >
                <PricingCard
                    index={0}
                    variant="starter"
                    title={t.cards[0].title}
                    price="€5"
                    tokens={500}
                    badgeTop={t.cards[0].badgeTop}
                    description={t.cards[0].description}
                    features={t.cards[0].features}
                    buttonText={t.cards[0].buttonText}
                />

                <PricingCard
                    index={1}
                    variant="pro"
                    title={t.cards[1].title}
                    price="€15"
                    tokens={1500}
                    badgeTop={t.cards[1].badgeTop}
                    description={t.cards[1].description}
                    features={t.cards[1].features}
                    buttonText={t.cards[1].buttonText}
                />

                <PricingCard
                    index={2}
                    variant="premium"
                    title={t.cards[2].title}
                    price="€50"
                    tokens={5000}
                    badgeTop={t.cards[2].badgeTop}
                    description={t.cards[2].description}
                    features={t.cards[2].features}
                    buttonText={t.cards[2].buttonText}
                />

                <PricingCard
                    index={3}
                    variant="custom"
                    title={t.cards[3].title}
                    price="dynamic"
                    tokens={0}
                    badgeTop={t.cards[3].badgeTop}
                    description={t.cards[3].description}
                    features={t.cards[3].features}
                    buttonText={t.cards[3].buttonText}
                />
            </Grid>

            <Grid columns={2} gap="2rem">
                <PromoFeatureCard
                    icon="brain"
                    title={t.features[0].title}
                    description={t.features[0].description}
                    image="image3"
                    actionText={t.features[0].actionText}
                    actionLink="/ai-chef"
                />

                <PromoFeatureCard
                    icon="chef"
                    title={t.features[1].title}
                    description={t.features[1].description}
                    image="image10"
                    imagePosition="right"
                    actionText={t.features[1].actionText}
                    actionLink="/chefs"
                />
            </Grid>

            {/* ================= VALUES ================= */}
            <ValuesIcons
                title={t.values.title}
                description={t.values.description}
                values={t.values.items.map((v, idx) => ({
                    icon: idx === 0 ? "zap" : idx === 1 ? "chef" : idx === 2 ? "settings" : "wallet",
                    title: v.title,
                    description: v.description,
                }))}
            />

            {/* ================= FINAL CTA ================= */}
            <TextWithButton
                align="center"
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="/checkout"
            />
        </>
    );
}
