"use client";

import styles from "./ExpertFilterBar.module.scss";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

type Props = {
    search: string;
    onSearchChange: (v: string) => void;
    cuisine: string;
    onCuisineChange: (v: string) => void;
    level: string;
    onLevelChange: (v: string) => void;
    cuisines: string[];
};

export default function ExpertsFilterBar({
                                             search,
                                             onSearchChange,
                                             cuisine,
                                             onCuisineChange,
                                             level,
                                             onLevelChange,
                                             cuisines,
                                         }: Props) {
    const { lang } = useI18n();
    const t = getPageTranslations(lang).chefs.filter;
    const POPULAR_CUISINES = t.popularCuisines;
    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}>
                {/* SEARCH */}
                <div className={styles.searchWrap}>
                    <input
                        className={styles.search}
                        placeholder={t.searchPlaceholder}
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* CUISINE */}
                <Select
                    value={cuisine || null}
                    placeholder={t.cuisineLabel}
                    onChange={(_, value) => onCuisineChange(value ?? "")}
                    className={styles.muiSelect}
                    size="md"
                    variant="outlined"
                >
                    {cuisines.map((c) => (
                        <Option key={c} value={c}>
                            {c}
                        </Option>
                    ))}
                </Select>

                {/* LEVEL */}
                <Select
                    value={level || null}
                    placeholder={t.expertiseLabel}
                    onChange={(_, value) => onLevelChange(value ?? "")}
                    className={styles.muiSelect}
                    size="md"
                    variant="outlined"
                >
                    <Option value="beginner">{t.expertiseOptions.beginner}</Option>
                    <Option value="intermediate">{t.expertiseOptions.intermediate}</Option>
                    <Option value="advanced">{t.expertiseOptions.advanced}</Option>
                </Select>
            </div>

            {/* TAGS */}
            <div className={styles.tags}>
                {POPULAR_CUISINES.map((tag) => (
                    <button
                        key={tag}
                        className={styles.tag}
                        onClick={() => onCuisineChange(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
