import { notFound } from "next/navigation";
import { getExpertBySlug } from "@/data/experts";
import ExpertProfile from "@/components/extra/experts/expert-profile/ExpertProfile";

type PageProps = {
    params: {
        slug: string;
    };
};

export default function Page({ params }: PageProps) {
    const expert = getExpertBySlug(params.slug);

    if (!expert) {
        notFound();
    }

    return <ExpertProfile expert={expert} />;
}