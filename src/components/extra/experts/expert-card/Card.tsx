"use client";

import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {media} from "@/resources/media";
import Link from "next/link";
import {Expert} from "@/types/expert";

type ExpertCardProps = {
    expert: Expert;
    onAction?: (expert: Expert) => void;
};

const ExpertCard: React.FC<ExpertCardProps> = ({expert, onAction}) => {
    const {
        avatar,
        fullName,
        rating,
        subtitle,
        experience,
        education,
        specialties,
    } = expert;

    const img = media[avatar];

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {img && (
                    <Image
                        src={img}
                        alt={fullName}
                        fill
                        className={styles.image}
                    />
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.name}>{fullName}</h3>

                    <div className={styles.rating}>
                        <span className={styles.star}>★</span>
                        {rating.toFixed(1)}
                    </div>
                </div>

                <p className={styles.subtitle}>{subtitle}</p>

                <div className={styles.meta}>
                    <span>{experience}</span>
                    <span>{education}</span>
                </div>

                <div className={styles.tags}>
                    {specialties.map((s) => (
                        <span key={s} className={styles.tag}>
              {s}
            </span>
                    ))}
                </div>

                <div className={styles.buttonWrap}>
                    <Link href={`/extra/chefs/${expert.slug}`}>
                        <ButtonUI
                            variant="outlined"
                            size="md"
                            fullWidth
                            text="View Profile"
                            hoverEffect="shadow"
                            hoverColor="none"
                            onClick={() => onAction?.(expert)}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ExpertCard;
