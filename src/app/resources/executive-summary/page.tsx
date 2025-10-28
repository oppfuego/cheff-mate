import type { Metadata } from "next";
import enExecutiveSummary from "@/pageSchemas/extra/extraExecutiveSummaryPage.en";
import PageCreator from "@/components/features/page-creator/PageCreator";
import { metadataFromSchema } from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enExecutiveSummary.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enExecutiveSummary, sv: enExecutiveSummary }} />;
}
