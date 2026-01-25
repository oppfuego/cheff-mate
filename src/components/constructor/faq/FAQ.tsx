"use client";

import { IoIosArrowDown } from "react-icons/io";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FAQ.module.scss";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const toggle = (idx: number) =>
        setOpenIndex(openIndex === idx ? null : idx);

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <h2 className={styles.title}>Questions & Answers</h2>

                <div className={styles.grid}>
                    {items.map((item, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <div
                                key={idx}
                                className={`${styles.item} ${isOpen ? styles.active : ""}`}
                            >
                                <button
                                    className={styles.question}
                                    onClick={() => toggle(idx)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={styles.arrow}
                                    >
                                        <IoIosArrowDown />
                                    </motion.span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                            className={styles.answerWrapper}
                                        >
                                            <div className={styles.answer}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
