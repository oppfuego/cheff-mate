"use client";

import {useMemo, useState} from "react";
import ExpertCard from "@/components/extra/experts/expert-card/Card";
import {experts} from "@/data/experts";
import Grid from "@/components/constructor/grid/Grid";
import ExpertsFilterBar from "@/components/extra/experts/expert-filter-bar/ExpertFilterBar";
import HeroSection from "@/components/constructor/hero/Hero";
import Link from "next/link";

export default function Page() {
    const [search, setSearch] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [level, setLevel] = useState("");

    // зібрати всі унікальні кухні
    const cuisines = useMemo(() => {
        return Array.from(
            new Set(experts.flatMap((e) => e.specialties))
        ).sort();
    }, []);

    // фільтрація
    const LEVEL_ORDER = {
        advanced: 0,
        intermediate: 1,
        beginner: 2,
    };

    const filteredExperts = useMemo(() => {
        return experts.filter((e) => {
            const byName =
                e.fullName.toLowerCase().includes(search.toLowerCase()) ||
                e.specialties.some((s) =>
                    s.toLowerCase().includes(search.toLowerCase())
                );

            const byCuisine =
                !cuisine || e.specialties.includes(cuisine);

            const byLevel =
                !level || e.experienceLevel === level;

            return byName && byCuisine && byLevel;
        });
    }, [search, cuisine, level]);

    return (
        <>

            <HeroSection
                title={
                    <>
                        Choose your <span>personal chef</span> and learn with confidence
                    </>
                }
                description="Browse professional chefs by cuisine, experience, and teaching style. Learn directly from experts who match your goals — from fundamentals to advanced techniques."
                image="image18"
            />

            <div>
                <ExpertsFilterBar
                    search={search}
                    onSearchChange={setSearch}
                    cuisine={cuisine}
                    onCuisineChange={setCuisine}
                    level={level}
                    onLevelChange={setLevel}
                    cuisines={cuisines}
                />

                <Grid columns={4} gap="2rem">
                    {filteredExperts.map((expert) => (
                            <ExpertCard
                                key={expert.id}
                                expert={expert}
                            />
                    ))}
                </Grid>
            </div>
        </>
    );
}