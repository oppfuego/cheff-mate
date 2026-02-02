"use client";

import React from "react";
import { Document, Page, Text, View } from "@react-pdf/renderer";
import { UniversalOrderType } from "@/backend/types/universal.types";
import { culinaryTheme as styles } from "./culinaryTheme";

/* ================= CLEANERS ================= */

function cleanText(raw?: string) {
    if (!raw) return "";

    return String(raw)
        .normalize("NFKC")
        .replace(/\uFEFF/g, "")
        .replace(/�/g, "")
        .replace(/\u00AD/g, "")
        .replace(/\u200B/g, "")
        .replace(/```[\s\S]*?```/g, "")
        .replace(/^---$/gm, "")
        .replace(/^=h$/gm, "")
        .replace(/•/g, "-")
        .replace(/([a-zA-Z])\s*￾\s*([a-zA-Z])/g, "$1$2")
        .replace(/[ \t]+/g, " ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function preprocessLists(text: string) {
    return text
        .replace(/:\s*-\s+/g, ":\n- ")
        .replace(/\.\s*-\s+/g, ".\n- ");
}

/* ================= INLINE MARKDOWN ================= */

function renderInlineMarkdown(text: string) {
    if (!/\*\*/.test(text)) return text;

    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text))) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
            <Text key={parts.length} style={styles.boldInline}>
                {match[1]}
            </Text>
        );
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
}

/* ================= PARSER ================= */

type Block =
    | { type: "h"; level: 1 | 2 | 3; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] };

function parseBlocks(raw: string): Block[] {
    const prepared = preprocessLists(cleanText(raw));
    const lines = prepared.split(/\r?\n/);
    const blocks: Block[] = [];

    let i = 0;

    while (i < lines.length) {
        const current = lines[i].trim();

        if (!current) {
            i++;
            continue;
        }

        // HEADINGS
        const heading = current.match(/^(#{1,3})\s*(.+)$/);
        if (heading) {
            blocks.push({
                type: "h",
                level: heading[1].length as 1 | 2 | 3,
                text: heading[2],
            });
            i++;
            continue;
        }

        // BULLET LIST
        if (/^- /.test(current)) {
            const items: string[] = [];

            while (i < lines.length && lines[i].trim().startsWith("- ")) {
                items.push(lines[i].trim().slice(2));
                i++;
            }

            blocks.push({ type: "ul", items });
            continue;
        }

        // PARAGRAPH
        const paragraph: string[] = [current];
        i++;

        while (
            i < lines.length &&
            lines[i].trim() &&
            !lines[i].trim().startsWith("#") &&
            !lines[i].trim().startsWith("- ")
            ) {
            paragraph.push(lines[i].trim());
            i++;
        }

        blocks.push({ type: "p", text: paragraph.join(" ") });
    }

    return blocks;
}

/* ================= RENDER ================= */

function renderContent(text: string) {
    return parseBlocks(text).map((block, idx) => {
        if (block.type === "h") {
            return (
                <Text key={`h-${idx}`} style={styles.sectionTitle}>
                    {block.text}
                </Text>
            );
        }

        if (block.type === "p") {
            return (
                <Text key={`p-${idx}`} style={styles.paragraph}>
                    {renderInlineMarkdown(block.text)}
                </Text>
            );
        }

        if (block.type === "ul") {
            return (
                <View key={`ul-${idx}`} style={styles.list}>
                    {block.items.map((item, i) => (
                        <Text key={`li-${idx}-${i}`} style={styles.bulletItem}>
                            • {renderInlineMarkdown(item)}
                        </Text>
                    ))}
                </View>
            );
        }

        return null;
    });
}

/* ================= MAIN PDF ================= */

export function renderCulinaryPDF(order: UniversalOrderType) {
    const { fields, response, extrasData = {} } = order;
    const isChef = fields.deliveryMode === "expert";

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.title}>🍳 {fields.topic}</Text>
                    <Text style={styles.meta}>
                        Level: {fields.skillLevel} • {fields.durationWeeks} weeks
                        {fields.chef ? ` • Chef: ${fields.chef}` : ""}
                    </Text>
                </View>

                {renderContent(response)}

                {isChef && extrasData.chefNotes && (
                    <View style={styles.chefNoteBox}>
                        <Text style={styles.chefNoteTitle}>👨‍🍳 Chef Notes</Text>
                        {renderContent(extrasData.chefNotes)}
                    </View>
                )}

                {Object.entries(extrasData)
                    .filter(([k]) => k !== "chefNotes")
                    .map(([key, val]) => (
                        <View key={key}>
                            <Text style={styles.sectionTitle}>
                                {key.replace(/([A-Z])/g, " $1").toUpperCase()}
                            </Text>
                            {renderContent(String(val))}
                        </View>
                    ))}
            </Page>
        </Document>
    );
}