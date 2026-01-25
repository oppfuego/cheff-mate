"use client";

import React from "react";
import styles from "./TextWithButton.module.scss";
import Text from "../text/Text";
import ButtonUI from "@/components/ui/button/ButtonUI";
import Link from "next/link";

interface TextWithButtonProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    align?: "left" | "center" | "right";
}

const TextWithButton: React.FC<TextWithButtonProps> = ({
                                                           title,
                                                           description,
                                                           buttonText,
                                                           buttonLink,
                                                           align = "left",
                                                       }) => {
    return (
        <div
            className={`${styles.wrapper} ${
                align === "center"
                    ? styles.center
                    : align === "right"
                        ? styles.right
                        : ""
            }`}
        >
            <div className={styles.textBlock}>
                <Text title={title} description={description}/>
            </div>

            {buttonText && buttonLink && (
                <Link href={buttonLink} className={styles.buttonLink}>
                    <ButtonUI
                        text={buttonText}
                        color="primary"
                        shape="default"
                        size="md"
                        hoverColor="primary"
                    />
                </Link>
            )}
        </div>
    );
};

export default TextWithButton;
