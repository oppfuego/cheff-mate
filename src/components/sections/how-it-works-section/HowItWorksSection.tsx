"use client";

import React from "react";
import styles from "./HowItWorksSection.module.scss";
import { ICONS } from "@/resources/icons";
import type { IconKey } from "@/resources/icons";

interface Step {
    icon?: IconKey;
    title?: string;
    description?: string;
}

interface Highlight {
    title: string;
    description?: string;
}

interface HowItWorksSectionProps {
    label?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    steps?: Step[];
    highlights?: Highlight[];
    note?: React.ReactNode;
}

export default function HowItWorksSection({
                                              label,
                                              title,
                                              description,
                                              steps,
                                              highlights,
                                              note,
                                          }: HowItWorksSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                {/* LEFT */}
                {(label || title || description || highlights?.length) && (
                    <div className={styles.left}>
                        {label && <span className={styles.label}>{label}</span>}

                        {title && <h2 className={styles.title}>{title}</h2>}

                        {description && (
                            <div className={styles.description}>{description}</div>
                        )}

                        {highlights?.length && (
                            <ul className={styles.highlights}>
                                {highlights.map((item, i) => (
                                    <li key={i}>
                                        <span className={styles.check}>✓</span>
                                        <div>
                                            <strong>{item.title}</strong>
                                            {item.description && <p>{item.description}</p>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {/* RIGHT */}
                {(steps?.length || note) && (
                    <div className={styles.right}>
                        <div className={styles.stepsCard}>
                            {steps?.length && (
                                <div className={styles.steps}>
                                    {steps.map((step, i) => {
                                        const Icon = step.icon ? ICONS[step.icon] : null;

                                        return (
                                            <div key={i} className={styles.step}>
                                                {Icon && (
                                                    <div className={styles.iconWrapper}>
                                                        <Icon />
                                                    </div>
                                                )}

                                                {step.title && <strong>{step.title}</strong>}
                                                {step.description && <p>{step.description}</p>}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}

                            {note && (
                                <div className={styles.note}>
                                    <span className={styles.noteIcon}>i</span>
                                    <div>{note}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
