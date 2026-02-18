import type {Metadata} from "next";
import enTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.en";
import noTerms from "@/pageSchemas/terms-and-conditions/termsAndConditions.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enTerms, noTerms);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ en: enTerms, no: noTerms }} fallback="en" />
        </div>
    );
}

