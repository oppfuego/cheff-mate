import { IconKey } from "@/resources/icons";

export type CourseExtraId =
    | "extendedDepth"
    | "weeklyVariations"
    | "personalAdjustments"
    | "progressionPath"
    | "shoppingPrep"
    | "chefNotes";

export type CourseExtra = {
    id: CourseExtraId;
    title: string;
    description: string;
    tokens: number;
    icon: IconKey;
    chefOnly?: boolean;
};

export const COURSE_EXTRAS: CourseExtra[] = [
    {
        id: "extendedDepth",
        title: "Extended Curriculum Depth",
        description: "In-depth explanations, techniques, mistakes, and alternatives inside your PDF.",
        tokens: 900,
        icon: "brain",
    },
    {
        id: "weeklyVariations",
        title: "Weekly Recipe Variations",
        description: "2–3 variations per week added directly to the PDF.",
        tokens: 600,
        icon: "flex",
    },
    {
        id: "personalAdjustments",
        title: "Personalized Adjustments",
        description: "Custom sections adapted to your skill level and dietary preferences.",
        tokens: 750,
        icon: "settings",
    },
    {
        id: "progressionPath",
        title: "Progression Path",
        description: "Clear roadmap for what to learn next after completing the course.",
        tokens: 600,
        icon: "path",
    },
    {
        id: "shoppingPrep",
        title: "Shopping & Meal Prep Guide",
        description: "Optimized shopping lists and preparation tips included in PDF.",
        tokens: 450,
        icon: "priceTag",
    },
    {
        id: "chefNotes",
        title: "Chef Notes",
        description: "Professional chef insights and personal tips added to the PDF.",
        tokens: 120,
        icon: "chef",
        chefOnly: true,
    },
];