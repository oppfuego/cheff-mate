import type { Metadata } from "next";
import enMarketAnalysis from "@/pageSchemas/extra/offPage";
import noMarketAnalysis from "@/pageSchemas/extra/offPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enMarketAnalysis, noMarketAnalysis);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enMarketAnalysis, no: noMarketAnalysis }} fallback="en" />;
}
