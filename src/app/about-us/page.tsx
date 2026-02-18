"use client";

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
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export default function AboutPage() {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).about;
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
                secondaryCta={{text: t.hero.secondaryCta, link: "/extra/chefs"}}
                image="image7"
            />

            <StoryGridSection
                label={t.origins.label}
                title={t.origins.title}
                cards={[
                    {
                        type: "text",
                        title: t.origins.cards[0].title,
                        text: t.origins.cards[0].text,
                    },
                    {
                        type: "image",
                        image: "image8",
                    },
                    {
                        type: "quote",
                        quote: t.origins.cards[1].quote,
                        author: t.origins.cards[1].author,
                        role: t.origins.cards[1].role,
                    },
                    {
                        type: "wideImage",
                        image: "image10",
                        title: t.origins.cards[2].title,
                        text: t.origins.cards[2].text,
                    },
                ]}
            />

            <MissionBanner
                title={t.mission.title}
                description={t.mission.description}
                image="image9"
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
                        image="image11"
                        variant="chef"
                    />

                    <InfoBlock
                        eyebrow={t.twoWays.ai.eyebrow}
                        title={t.twoWays.ai.title}
                        description={t.twoWays.ai.description}
                        bullets={t.twoWays.ai.bullets}
                        image="image12"
                        variant="ai"
                    />
                </div>
            </Section>

            <HowItWorksSection
                label={t.howItWorks.label}
                title={
                    <>
                        {t.howItWorks.title.split(t.howItWorks.titleHighlight)[0]}
                        <br/>
                        <span>{t.howItWorks.titleHighlight}</span>
                    </>
                }
                description={t.howItWorks.description}
                highlights={t.howItWorks.highlights.map((h) => ({
                    title: h.title,
                    description: h.description,
                }))}
                steps={t.howItWorks.steps.map((step, idx) => ({
                    icon: idx === 0 ? "chef" : idx === 1 ? "brain" : "accessibility",
                    title: step.title,
                    description: step.description,
                }))}
                note={t.howItWorks.note}
            />

            <ValuesIcons
                title={t.coreValues.title}
                description={t.coreValues.description}
                values={t.coreValues.values.map((v, idx) => ({
                    icon: idx === 0 ? "accessibility" : idx === 1 ? "settings" : idx === 2 ? "bulb" : "community",
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
                    {name: "Kenji T.", role: "Fermentation", image: "team4"},
                    {name: "Maria G.", role: "Pastry Arts", image: "team3"},
                ]}
            />

            <FAQ items={t.faq.items} />

            <TextWithButton
                title={t.cta.title}
                description={t.cta.description}
                buttonText={t.cta.buttonText}
                buttonLink="/dashboard"
            />
        </>
    );
}
