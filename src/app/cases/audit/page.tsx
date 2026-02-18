import type { Metadata } from "next";
import enAudit from "@/pageSchemas/extra/audit";
import noAudit from "@/pageSchemas/extra/audit.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enAudit, noAudit);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enAudit, no: noAudit }} fallback="en" />;
}
