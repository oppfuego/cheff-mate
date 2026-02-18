"use client";

import React from "react";
import Text from "@/components/constructor/text/Text";
import ExamplesGrid from "@/components/ui/example-grid/ExamplesGrid";
import InfoBlock from "@/components/constructor/Info-block/InfoBlock";
import ValuesIcons from "@/components/constructor/values-icons/ValuesIcons";
import HighlightStrip from "@/components/constructor/highlight-strip/HighlightStrip";
import FAQ from "@/components/constructor/faq/FAQ";

const Page = () => {
    return (
        <>
            {/* Intro */}
            <Text
                title="Examples of CV"
                description={`Check out our CV templates. Each example can be viewed directly on the website 
                in PDF format with test data or download them for yourself. Use them as 
                inspiration for your own CV.`}
                titleLevel={1}
                centerTitle
                centerDescription
            />

            {/* Highlight Strip */}
            <HighlightStrip
                items={[
                    { text: "ATS-friendly CVs 🚀" },
                    { text: "Polished by HR experts 👩‍💼" },
                    { text: "Templates for every industry 📑" },
                ]}
            />

            {/* Основний грід прикладів */}
            <ExamplesGrid />

            {/* InfoBlock */}
            <InfoBlock
                title="Why Use Our CV Templates?"
                description="Our CV examples are designed by HR experts to help you stand out. Each template is fully optimized for applicant tracking systems (ATS) and tailored to different industries."
                bullets={[
                    "Professional, recruiter-approved layouts",
                    "100% ATS-optimized formatting",
                    "Easy to edit and customize",
                ]}
                image="image2"
            />

            {/* 🆕 Extras Section */}
            <ValuesIcons
                title="Optional Extras for a Complete Job Application"
                description="Boost your application with additional professionally written materials you can generate along with your CV:"
                values={[
                    {
                        icon: "✉️",
                        title: "Cover Letter",
                        description: "A personalized letter written specifically for the job and company.",
                    },
                    {
                        icon: "💼",
                        title: "LinkedIn Summary",
                        description: "An optimized 'About' section to impress recruiters online.",
                    },
                    {
                        icon: "🔍",
                        title: "Keyword Optimization",
                        description: "Ensures your CV matches ATS systems and job descriptions.",
                    },
                    {
                        icon: "🧩",
                        title: "ATS Compatibility Report",
                        description: "Instant feedback on how your CV performs in applicant systems.",
                    },
                    {
                        icon: "🏆",
                        title: "Achievements Boost",
                        description: "Rewriting of achievements with quantifiable impact and clarity.",
                    },
                    {
                        icon: "🧠",
                        title: "Skills Gap Report",
                        description: "An intelligent analysis that highlights missing or desired skills.",
                    },
                ]}
            />

            {/* Values Icons */}
            <ValuesIcons
                title="Key Benefits"
                description="When using our CV templates you get:"
                values={[
                    { icon: "⚡", title: "Speed", description: "Generate your CV in minutes" },
                    { icon: "📑", title: "ATS Safe", description: "Pass recruiter filters easily" },
                    { icon: "🎨", title: "Designs", description: "Modern layouts for all industries" },
                ]}
            />

            {/* FAQ */}
            <FAQ
                items={[
                    {
                        question: "Can I download the CV examples?",
                        answer: "Yes, each template is available as a PDF with sample data.",
                    },
                    {
                        question: "Are the CVs ATS-friendly?",
                        answer: "Absolutely. All our templates are designed to pass applicant tracking systems.",
                    },
                    {
                        question: "Can I customize the CV?",
                        answer: "Of course! You can edit text, layout, and design to match your profile.",
                    },
                    {
                        question: "What are 'Extras'?",
                        answer:
                            "Extras are optional add-ons like Cover Letter, LinkedIn Summary, or ATS report that help you strengthen your overall application.",
                    },
                ]}
            />
        </>
    );
};

export default Page;
