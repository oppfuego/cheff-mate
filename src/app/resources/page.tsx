import type { Metadata } from "next";

import enResources from "@/pageSchemas/extra/extraResourcesPage.en";

import PageCreator from "@/components/features/page-creator/PageCreator";
import {metadataFromSchema} from "@/utils/fromSchema";

export async function generateMetadata(): Promise<Metadata> {
    return await metadataFromSchema(enResources.meta);
}

export default function Page() {
    return <PageCreator schemaMap={{ sv: enResources, en: enResources }} />;
}
