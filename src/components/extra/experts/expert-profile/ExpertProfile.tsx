"use client";

import Image from "next/image";
import { Expert } from "@/types/expert";
import { media } from "@/resources/media";
import styles from "./ExpertProfile.module.scss";

type Props = {
    expert: Expert;
};

export default function ExpertProfile({ expert }: Props) {
    const img = media[expert.avatar];

    return (
        <section className={styles.profile}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* LEFT CARD */}
                    <aside className={styles.card}>
                        <div className={styles.avatarWrap}>
                            <Image
                                src={img}
                                alt={expert.fullName}
                                fill
                                priority
                                className={styles.avatar}
                            />
                        </div>

                        <h2 className={styles.name}>{expert.fullName}</h2>
                        <p className={styles.role}>Executive Chef</p>

                        <div className={styles.meta}>
                            <div>
                                <span>⭐ Rating</span>
                                <strong>{expert.rating}/5.0</strong>
                            </div>

                            <div>
                                <span>⏱ Experience</span>
                                <strong>{expert.experience}</strong>
                            </div>

                            <div>
                                <span>🎓 Education</span>
                                <strong>{expert.education}</strong>
                            </div>

                            <div>
                                <span>⚡ Level</span>
                                <strong className={styles.level}>
                                    {expert.experienceLevel.toUpperCase()}
                                </strong>
                            </div>
                        </div>
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className={styles.content}>
                        <h1 className={styles.headline}>
                            {expert.profile.headline}
                        </h1>

                        <p className={styles.subtitle}>
                            Parisian trained, global perspective. Bringing the
                            excellence of Michelin kitchens to your private
                            events.
                        </p>

                        <section className={styles.block}>
                            <h3>About</h3>
                            {expert.profile.about.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </section>

                        <section className={styles.block}>
                            <h3>Philosophy</h3>
                            <blockquote>
                                {expert.profile.philosophy}
                            </blockquote>
                        </section>

                        <section className={styles.block}>
                            <h3>Achievements</h3>
                            <ul>
                                {expert.profile.achievements.map((a, i) => (
                                    <li key={i}>{a}</li>
                                ))}
                            </ul>
                        </section>
                    </main>
                </div>
            </div>
        </section>
    );
}