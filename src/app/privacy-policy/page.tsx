import type { Metadata } from "next";
import enPrivacy from "@/pageSchemas/privacy-policy/privacyPage";
import noPrivacy from "@/pageSchemas/privacy-policy/privacyPage.no";
import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enPrivacy, noPrivacy);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ en: enPrivacy, no: noPrivacy }} fallback="en" />
        </div>
    );
}
