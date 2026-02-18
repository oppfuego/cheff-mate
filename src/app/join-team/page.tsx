"use client";

import React from "react";
import HeroSection from "@/components/constructor/hero/Hero";
import PromoFeatureCard from "@/components/features/promo-card/PromoFeatureCard";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import FeatureStep from "@/components/constructor/feature-step/FeatureStep";
import TextWithButton from "@/components/constructor/text-with-button/TextWithButton";
import Grid from "@/components/constructor/grid/Grid";
import Section from "@/components/constructor/section/Section";
import JoinTeamForm from "@/components/widgets/join-team-form/JoinTeamForm";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function JoinTeamPage() {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).joinTeamPage;
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
                primaryCta={{ text: t.hero.primaryCta, link: "#join-form" }}
                features={false}
                image="image6"
            />
                <Grid columns={2} gap="2rem">
                    <PromoFeatureCard
                        icon="community"
                        title={t.promoCards[0].title}
                        description={t.promoCards[0].description}
                        image="image7"
                    />

                    <PromoFeatureCard
                        icon="bulb"
                        title={t.promoCards[1].title}
                        description={t.promoCards[1].description}
                        image="image8"
                        imagePosition="right"
                    />
                </Grid>

            <ValuesIcons
                title={t.values.title}
                description={t.values.description}
                values={t.values.items.map((v, idx) => ({
                    icon: idx === 0 ? "accessibility" : idx === 1 ? "flex" : idx === 2 ? "settings" : "community",
                    title: v.title,
                    description: v.description,
                }))}
            />

            <TextWithButton
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="#join-form"

            />

            <div id="join-form" style={{ padding: "80px 0" }}>
                <JoinTeamForm />
            </div>
        </>
    );
}
