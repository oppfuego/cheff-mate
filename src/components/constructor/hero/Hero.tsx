"use client";

import React from "react";
import {motion} from "framer-motion";
import styles from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {media} from "@/resources/media";
import type {StaticImageData} from "next/image";

interface HeroSectionProps {
    title: React.ReactNode;
    description: string;
    primaryCta?: { text: string; link: string };
    secondaryCta?: { text: string; link: string };
    image: string;
    badgeText?: string;
}

export default function HeroSection({
                                        title,
                                        description,
                                        primaryCta,
                                        secondaryCta,
                                        image,
                                    }: HeroSectionProps) {
    const img =
        (media as Record<string, string | StaticImageData>)[image];

    return (
        <section className={styles.hero}>
            <div className={styles.inner}>

                {/* LEFT — CONTENT */}
                <motion.div
                    className={styles.content}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                >
                    <h1 className={styles.title}>{title}</h1>

                    <p className={styles.description}>{description}</p>

                    <div className={styles.actions}>
                        {primaryCta && (
                            <Link href={primaryCta.link}>
                                <ButtonUI size="lg" shape="default">
                                    {primaryCta.text}
                                </ButtonUI>
                            </Link>
                        )}

                        {secondaryCta && (
                            <Link href={secondaryCta.link}>
                                <ButtonUI
                                    variant="outlined"
                                    size="lg"
                                    shape="default"
                                    hoverColor="none"
                                >
                                    {secondaryCta.text}
                                </ButtonUI>
                            </Link>
                        )}
                    </div>

                    {/* FEATURE LIST */}
                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <span className={styles.dot}/>
                            <span>Structured weekly plan</span>
                        </div>

                        <div className={styles.featureItem}>
                            <span className={styles.dot}/>
                            <span>Built around your goal</span>
                        </div>

                        <div className={styles.featureItem}>
                            <span className={styles.dot}/>
                            <span>Instant AI when you need it</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — IMAGE CARD */}
                <motion.div
                    className={styles.imageCard}
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7}}
                >
                    <Image
                        src={typeof img === "string" ? img : img.src}
                        alt="Hero visual"
                        fill
                        priority
                        className={styles.image}
                    />

                </motion.div>

            </div>
        </section>
    );
}
