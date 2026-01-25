"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./Section.module.scss";

interface SectionProps {
    title?: string;
    description?: string;

    left?: React.ReactNode;
    right?: React.ReactNode;
    children?: React.ReactNode;

    imagePosition?: "left" | "right";
    gap?: string;
    align?: "center" | "start" | "end";
    justify?: "center" | "space-between" | "start" | "end";
}

const Section: React.FC<SectionProps> = ({
                                             title,
                                             description,
                                             left,
                                             right,
                                             children,
                                             imagePosition = "right",
                                             gap = "3rem",
                                             align = "center",
                                             justify = "center",
                                         }) => {
    const isImageLeft = imagePosition === "left";
    const hasChildren = Boolean(children);
    const isSingle = hasChildren || !left || !right;

    return (
        <section className={styles.wrapper}>
            {(title || description) && (
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    {title && <h2 className={styles.title}>{title}</h2>}
                    {description && (
                        <p className={styles.description}>{description}</p>
                    )}
                </motion.div>
            )}

            <motion.div
                className={`${styles.section} ${isSingle ? styles.single : ""}`}
                style={{
                    flexDirection: isImageLeft ? "row-reverse" : "row",
                    gap,
                    alignItems: align,
                    justifyContent: isSingle ? "center" : justify,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                {children ? (
                    children
                ) : (
                    <>
                        {left && <motion.div className={styles.left}>{left}</motion.div>}
                        {right && <motion.div className={styles.right}>{right}</motion.div>}
                    </>
                )}
            </motion.div>
        </section>
    );
};

export default Section;
