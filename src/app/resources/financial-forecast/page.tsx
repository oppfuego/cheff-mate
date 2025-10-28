import type { Metadata } from "next";
import enFinancialForecast from "@/pageSchemas/extra/extraFinancialForecastPage.en";
import PageCreator from "@/components/features/page-creator/PageCreator";
import { metadataFromSchema } from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enFinancialForecast.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enFinancialForecast, sv: enFinancialForecast }} />;
}
