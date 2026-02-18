import type {Metadata} from "next";
import enRefund from "@/pageSchemas/refund-policy/refundPage.en";
import noRefund from "@/pageSchemas/refund-policy/refundPage.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enRefund, noRefund);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ en: enRefund, no: noRefund }} fallback="en" />
        </div>
    );
}

