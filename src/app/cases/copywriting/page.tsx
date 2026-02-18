import type { Metadata } from "next";
import enCopywriting from "@/pageSchemas/extra/copywriting";
import noCopywriting from "@/pageSchemas/extra/copywriting.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enCopywriting, noCopywriting);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enCopywriting, no: noCopywriting }} fallback="en" />;
}
