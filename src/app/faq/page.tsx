import type { Metadata } from "next";

import enFaq from "@/pageSchemas/faq/faqPage.en";
import noFaq from "@/pageSchemas/faq/faqPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enFaq, noFaq);
}

export default function Page() {
    return <PageCreator schemaMap={{ en: enFaq, no: noFaq }} fallback="en" />;
}
