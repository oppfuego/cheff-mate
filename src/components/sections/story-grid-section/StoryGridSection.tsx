"use client";

import React from "react";
import styles from "./StoryGridSection.module.scss";
import Image from "next/image";
import {media} from "@/resources/media";
import type {StaticImageData} from "next/image";

type CardType = "text" | "image" | "quote" | "wideImage";

interface StoryCard {
    type: CardType;
    title?: string;
    text?: string;
    image?: string; // KEY from media (e.g. "image1")
    quote?: string;
    author?: string;
    role?: string;
}

interface StoryGridSectionProps {
    label?: string;
    title: string;
    cards: StoryCard[];
}

export default function StoryGridSection({
                                             label,
                                             title,
                                             cards,
                                         }: StoryGridSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                {label && <span className={styles.label}>{label}</span>}
                <h2 className={styles.title}>{title}</h2>
            </div>

            <div className={styles.grid}>
                {cards.map((card, i) => {
                    const img =
                        card.image &&
                        (media as Record<string, string | StaticImageData>)[
                            card.image
                            ];

                    switch (card.type) {
                        case "text":
                            return (
                                <div key={i} className={styles.textCard}>
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </div>
                            );

                        case "image":
                            return (
                                <div key={i} className={styles.imageCard}>
                                    {img && (
                                        <Image
                                            src={typeof img === "string" ? img : img.src}
                                            alt={card.title || ""}
                                            fill
                                            className={styles.image}
                                        />
                                    )}
                                </div>
                            );

                        case "wideImage":
                            return (
                                <div key={i} className={styles.wideImage}>
                                    {img && (
                                        <Image
                                            src={typeof img === "string" ? img : img.src}
                                            alt={card.title || ""}
                                            fill
                                            className={styles.image}
                                        />
                                    )}

                                    <div className={styles.overlay}>
                                        <strong>{card.title}</strong>
                                        <span>{card.text}</span>
                                    </div>
                                </div>
                            );

                        case "quote":
                            return (
                                <div key={i} className={styles.quoteCard}>
                                    <p className={styles.quote}>
                                        “{card.quote}”
                                    </p>
                                    <div className={styles.author}>
                                        <strong>{card.author}</strong>
                                        <span>{card.role}</span>
                                    </div>
                                </div>
                            );

                        default:
                            return null;
                    }
                })}
            </div>
        </section>
    );
}
