import type { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";
import HomePageClient from "./HomePageClient";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataForPage("home");
}

export default function Page() {
    return <HomePageClient />;
}
