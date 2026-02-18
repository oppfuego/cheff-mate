import type { Metadata } from "next";
import enFinancialForecast from "@/pageSchemas/extra/analysis";
import noFinancialForecast from "@/pageSchemas/extra/analysis.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enFinancialForecast, noFinancialForecast);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enFinancialForecast, no: noFinancialForecast }} fallback="en" />;
}
