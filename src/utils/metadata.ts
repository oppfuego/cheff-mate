import type { Metadata } from "next";
import { headers, cookies } from "next/headers";
import { LangCode } from "@/context/i18nContext";
import { getMetadataTranslation } from "@/resources/metadataTranslations";
import { metadataFromSchema } from "./fromSchema";
import type { MetaSchema } from "@/components/constructor/page-render/types";

/**
 * Get language from cookies or headers
 */
async function getLangFromRequest(): Promise<LangCode> {
    const cookieStore = await cookies();
    const langCookie = cookieStore.get("lang")?.value as LangCode | undefined;
    
    if (langCookie === "no" || langCookie === "en") {
        return langCookie;
    }

    // Check Accept-Language header
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language")?.toLowerCase() || "";
    
    if (acceptLanguage.startsWith("no") || acceptLanguage.startsWith("nb") || acceptLanguage.startsWith("nn")) {
        return "no";
    }

    return "en";
}

/**
 * Generate metadata for pages that use page schemas
 */
export async function generateMetadataFromSchemas(
    enSchema: { meta: MetaSchema },
    noSchema: { meta: MetaSchema },
    pageKey?: string
): Promise<Metadata> {
    const lang = await getLangFromRequest();
    const schema = lang === "no" ? noSchema : enSchema;
    return await metadataFromSchema(schema.meta, lang);
}

/**
 * Generate metadata for pages that don't use schemas
 */
export async function generateMetadataForPage(pageKey: string): Promise<Metadata> {
    const lang = await getLangFromRequest();
    const meta = getMetadataTranslation(pageKey, lang);
    
    const { absoluteUrl } = await import("./fromSchema");
    
    // Map page keys to canonical paths
    const canonicalMap: Record<string, string> = {
        home: "/",
        pricing: "/pricing",
        about: "/about-us",
        getStarted: "/get-started",
        chefs: "/extra/chefs",
        chefProfile: "/extra/chefs",
        joinTeam: "/join-team",
        signIn: "/sign-in",
        signUp: "/sign-up",
        contactUs: "/contact-us",
        profile: "/profile",
        checkout: "/checkout",
    };
    
    // We need to create a MetaSchema-like object
    const metaSchema: MetaSchema = {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        canonical: canonicalMap[pageKey] || `/${pageKey}`,
        ogTitle: meta.ogTitle || meta.title,
        ogDescription: meta.ogDescription || meta.description,
    };

    return await metadataFromSchema(metaSchema, lang);
}
