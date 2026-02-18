import type { Metadata } from "next";

import enResources from "@/pageSchemas/extra/copywriting";
import noResources from "@/pageSchemas/extra/copywriting.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enResources, noResources);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enResources, no: noResources }} fallback="en" />;
}
