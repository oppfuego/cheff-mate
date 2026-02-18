import type { Metadata } from "next";

import enExtraSuccess from "@/pageSchemas/extra/onPage";
import noExtraSuccess from "@/pageSchemas/extra/onPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enExtraSuccess, noExtraSuccess);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enExtraSuccess, no: noExtraSuccess }} fallback="en" />;
}
