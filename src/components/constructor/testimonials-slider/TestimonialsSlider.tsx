// typescript
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdStar, MdStarBorder, MdChevronLeft, MdChevronRight } from "react-icons/md";
import styles from "./TestimonialsSlider.module.scss";
import { media } from "@/resources/media";

interface Testimonial {
    name: string;
    role?: string;
    image?: string;
    text: string;
    rating?: number;
}

interface Props {
    title?: string;
    description?: string;
    testimonials: Testimonial[];
}

export default function TestimonialsSlider({ title, description, testimonials }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = testimonials[currentIndex];

    // Безопасно вычисляем src для изображения вне JSX, чтобы избежать проблем парсинга и ошибок типов
    let srcValue: string | undefined = undefined;
    if (current?.image) {
        const key = current.image as keyof typeof media;
        const m = media[key];
        if (typeof m === "string") {
            srcValue = m;
        } else {
            // m может быть StaticImageData или другой объект
            srcValue = (m as any)?.src ?? String(m);
        }
    }

    return (
        <section className={styles.section}>
            {title && <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}

            <div className={styles.sliderWrapper}>
                <button className={`${styles.navButton} ${styles.left}`} onClick={prevSlide}>
                    <MdChevronLeft size={28} />
                </button>

                <div className={styles.slider}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className={styles.card}
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -80 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            {/* 🖼️ Фото */}
                            {srcValue && (
                                <motion.img
                                    key={srcValue}
                                    src={srcValue}
                                    alt={current.name}
                                    className={styles.avatar}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                />
                            )}

                            {/* 💬 Текст */}
                            <p className={styles.text}>“{current.text}”</p>

                            <div className={styles.footer}>
                                <div className={styles.info}>
                                    <h4 className={styles.name}>{current.name}</h4>
                                    {current.role && <p className={styles.role}>{current.role}</p>}
                                </div>

                                {/* ⭐ Рейтинг */}
                                <div className={styles.stars}>
                                    {Array.from({ length: 5 }).map((_, idx) =>
                                        idx < (current.rating ?? 5) ? (
                                            <MdStar key={idx} className={styles.starFilled} />
                                        ) : (
                                            <MdStarBorder key={idx} className={styles.starEmpty} />
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className={`${styles.navButton} ${styles.right}`} onClick={nextSlide}>
                    <MdChevronRight size={28} />
                </button>
            </div>

            <div className={styles.dots}>
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
                    />
                ))}
            </div>
        </section>
    );
}