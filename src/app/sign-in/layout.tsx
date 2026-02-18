import type { Metadata } from "next";
import { generateMetadataForPage } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
    return await generateMetadataForPage("signIn");
}

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
