"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./StoryTimeline.module.scss";
import { FaRocket, FaGlobe, FaUsers, FaChartLine } from "react-icons/fa";

interface TimelineStep {
    icon?: string;
    year: string;
    title: string;
    description: string;
}

const icons: Record<string, JSX.Element> = {
    rocket: <FaRocket />,
    globe: <FaGlobe />,
    users: <FaUsers />,
    chart: <FaChartLine />,
};

const StoryTimeline: React.FC<{ steps: TimelineStep[] }> = ({ steps }) => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Growth</span>
                <h2 className={styles.heading}>Our Journey</h2>
            </div>

            <div className={styles.timeline}>
                <div className={styles.rail} />

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        className={styles.item}
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        viewport={{ once: true, margin: "-80px" }}
                        style={{ left: i % 2 === 0 ? "10%" : "55%" }}
                    >
                        <div className={styles.year}>{step.year}</div>

                        <div className={styles.card}>
                            <div className={styles.icon}>
                                {icons[step.icon || "rocket"]}
                            </div>

                            <div className={styles.content}>
                                <strong>{step.title}</strong>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default StoryTimeline;