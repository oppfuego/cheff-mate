import type {Metadata} from "next";
import enCookie from "@/pageSchemas/cookie-policy/cookiePolicy.en";
import noCookie from "@/pageSchemas/cookie-policy/cookiePolicy.no";

import PageCreator from "@/components/utils/page-creator/PageCreator";
import { generateMetadataFromSchemas } from "@/utils/metadata";
import styles from "@/resources/PolicyPage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataFromSchemas(enCookie, noCookie);
}

export default function Page() {
    return (
        <div className={styles.privacyContainer}>
            <PageCreator schemaMap={{ en: enCookie, no: noCookie }} fallback="en" />
        </div>
    );
}

