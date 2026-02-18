import type { Metadata } from "next";
import enAnalysis from "@/pageSchemas/extra/analysis";
import noAnalysis from "@/pageSchemas/extra/analysis.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enAnalysis, noAnalysis);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enAnalysis, no: noAnalysis }} fallback="en" />;
}
