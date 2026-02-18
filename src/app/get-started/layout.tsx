import type { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataForPage("getStarted");
}

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
