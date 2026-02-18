import type { Metadata } from "next";
import enOffPage from "@/pageSchemas/extra/offPage";
import noOffPage from "@/pageSchemas/extra/offPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enOffPage, noOffPage);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enOffPage, no: noOffPage }} fallback="en" />;
}
