import type { Metadata } from "next";

import enServices from "@/pageSchemas/services/servicesPage.en";
import noServices from "@/pageSchemas/services/servicesPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enServices, noServices);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enServices, no: noServices }} fallback="en" />;
}
