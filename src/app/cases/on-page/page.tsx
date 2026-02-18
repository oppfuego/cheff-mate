import type { Metadata } from "next";
import enOnPage from "@/pageSchemas/extra/onPage";
import noOnPage from "@/pageSchemas/extra/onPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enOnPage, noOnPage);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enOnPage, no: noOnPage }} fallback="en" />;
}
