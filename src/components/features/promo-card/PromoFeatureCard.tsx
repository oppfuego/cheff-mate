"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./PromoFeatureCard.module.scss";
import { media } from "@/resources/media";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";
import type { StaticImageData } from "next/image";

interface PromoFeatureCardProps {
    icon?: IconKey; // ✅ ключ іконки
    title: string;
    description: string;
    actionText?: string;
    actionLink?: string;
    image: keyof typeof media; // ✅ як усюди
    imagePosition?: "left" | "right";
}

const PromoFeatureCard: React.FC<PromoFeatureCardProps> = ({
                                                               icon,
                                                               title,
                                                               description,
                                                               actionText,
                                                               actionLink,
                                                               image,
                                                               imagePosition = "left",
                                                           }) => {
    const img = media[image];
    const Icon = icon ? ICONS[icon] : null;

    return (
        <div
            className={`${styles.card} ${
                imagePosition === "right" ? styles.reverse : ""
            }`}
        >
            {/* IMAGE */}
            <div className={styles.imageWrap}>
                {img && (
                    <Image
                        src={img}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                )}
            </div>

            {/* CONTENT */}
            <div className={styles.content}>
                {Icon && (
                    <div className={styles.icon}>
                        <Icon />
                    </div>
                )}

                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{description}</p>

                {actionText && actionLink && (
                    <Link href={actionLink} className={styles.action}>
                        {actionText}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PromoFeatureCard;
