import type { Metadata } from "next";
import enLocal from "@/pageSchemas/extra/local";
import noLocal from "@/pageSchemas/extra/local.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enLocal, noLocal);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enLocal, no: noLocal }} fallback="en" />;
}
