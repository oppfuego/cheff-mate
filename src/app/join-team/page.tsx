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

export default function JoinTeamPage() {
    return (
        <>
            <HeroSection
                title={
                    <>
                        Join our <span>global collective</span>
                    </>
                }
                description="We’re building a distributed team of professionals who value quality, independence, and real impact. If you love what you do — we want to hear from you."
                primaryCta={{ text: "Apply now", link: "#join-form" }}
                features={false}
                image="image6"
            />
                <Grid columns={2} gap="2rem">
                    <PromoFeatureCard
                        icon="community"
                        title="Independent Professionals"
                        description="You manage your own time and workflow. We focus on outcomes, not micromanagement."
                        image="image7"
                    />

                    <PromoFeatureCard
                        icon="bulb"
                        title="Experts in Their Field"
                        description="Whether you’re a developer, designer, marketer, or creator — strong skills matter."
                        image="image8"
                        imagePosition="right"
                    />
                </Grid>

            <ValuesIcons
                title="Our values"
                description="These principles guide every collaboration."
                values={[
                    {
                        icon: "accessibility",
                        title: "Transparency",
                        description:
                            "Clear communication, fair terms, and honest expectations from day one.",
                    },
                    {
                        icon: "flex",
                        title: "Flexibility",
                        description:
                            "You choose when and how you work. We care about results.",
                    },
                    {
                        icon: "settings",
                        title: "Professionalism",
                        description:
                            "We work with people who take pride in their craft.",
                    },
                    {
                        icon: "community",
                        title: "Mutual Respect",
                        description:
                            "We value people, not just skills or output.",
                    },
                ]}
            />

            <TextWithButton
                title="Ready to join?"
                description="Fill out the form below and tell us about yourself."
                buttonText="Go to application form"
                buttonLink="#join-form"

            />

            <div id="join-form" style={{ padding: "80px 0" }}>
                <JoinTeamForm />
            </div>
        </>
    );
}