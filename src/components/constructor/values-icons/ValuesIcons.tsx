"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./ValuesIcons.module.scss";
import Text from "@/components/constructor/text/Text";
import { renderIcon } from "@/utils/renderIcon";
import { IconKey } from "@/resources/icons";

type BackgroundColor =
    | "background-light"
    | "surface-muted"
    | "tertiary-color"
    | "quaternary-color"
    | "background-dark";

interface ValuesIconsProps {
    title?: string;
    description?: string;
    values: ValueItem[];
    backgroundColor?: BackgroundColor;
}

interface ValueItem {
    icon: IconKey | string;
    title: string;
    description?: string;
}

interface ValuesIconsProps {
    title?: string;
    description?: string;
    values: ValueItem[];
}

const ValuesIcons: React.FC<ValuesIconsProps> = ({
                                                     title,
                                                     description,
                                                     values,
                                                     backgroundColor,
                                                 }) => {
    return (
        <section
            className={styles.section}
            style={
                backgroundColor
                    ? { background: `var(--${backgroundColor})` }
                    : undefined
            }
        >
            <Text
                title={title}
                description={description}
                centerTitle
                centerDescription
            />

            <div className={styles.grid}>
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        className={styles.card}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.iconWrapper}>
                            {renderIcon(v.icon)}
                        </div>

                        <h3 className={styles.cardTitle}>{v.title}</h3>
                        <p className={styles.cardText}>{v.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ValuesIcons;
