"use client";

import React from "react";
import styles from "./FeatureStep.module.scss";
import Image from "next/image";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {media} from "@/resources/media";
import {IoIosArrowRoundForward} from "react-icons/io";

interface FeatureStepProps {
    step: number;
    title: string;
    description?: string;
    bullets?: string[];
    image: keyof typeof media;
    badge?: string;
    buttonText?: string;
    buttonLink?: string;
    imagePosition?: "left" | "right";
}

const FeatureStep: React.FC<FeatureStepProps> = ({
                                                     step,
                                                     title,
                                                     description,
                                                     bullets,
                                                     image,
                                                     badge,
                                                     buttonText,
                                                     buttonLink,
                                                     imagePosition = "left",
                                                 }) => {

    const getClassName = () => {
        return step % 2 === 0 ? styles.stepMod : styles.step;
    }

    return (
        <div className={styles.row}>
            <div
                className={`${styles.contentRow} ${imagePosition === "right" ? styles.reverse : ""}`}
            >
                <div className={styles.media}>
                    {badge && <span className={styles.badge}>{badge}</span>}
                    <Image
                        src={media[image]}
                        alt={title}
                        fill
                        className={styles.image}
                    />
                </div>

                <div className={styles.content}>
                    <div className={getClassName()}>{step}
                    </div>

                    <div className={styles.textContainer}>
                        <h3>{title}</h3>
                        {description && <p>{description}</p>}
                        {bullets && (
                            <ul>
                                {bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        )}
                        {buttonText && buttonLink && (
                            <ButtonUI
                                variant="plain"
                                shape="default"
                                hoverEffect="none"
                                hoverColor="none"
                                endIcon={<IoIosArrowRoundForward style={{fontSize: 28}}/>}
                                onClick={() => (window.location.href = buttonLink)}
                            >
                                {buttonText}
                            </ButtonUI>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default FeatureStep;