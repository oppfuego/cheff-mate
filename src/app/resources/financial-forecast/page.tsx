import type { Metadata } from "next";
import enFinancialForecast from "@/pageSchemas/extra/analysis";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { metadataFromSchema } from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enFinancialForecast.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enFinancialForecast, sv: enFinancialForecast }} />;
}
