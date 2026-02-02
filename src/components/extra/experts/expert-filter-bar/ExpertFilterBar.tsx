"use client";

import styles from "./ExpertFilterBar.module.scss";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

type Props = {
    search: string;
    onSearchChange: (v: string) => void;
    cuisine: string;
    onCuisineChange: (v: string) => void;
    level: string;
    onLevelChange: (v: string) => void;
    cuisines: string[];
};

const POPULAR_CUISINES = ["Italian", "French", "Japanese", "Plant Based"];

export default function ExpertsFilterBar({
                                             search,
                                             onSearchChange,
                                             cuisine,
                                             onCuisineChange,
                                             level,
                                             onLevelChange,
                                             cuisines,
                                         }: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bar}>
                {/* SEARCH */}
                <div className={styles.searchWrap}>
                    <input
                        className={styles.search}
                        placeholder="Search by chef name or specialty..."
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* CUISINE */}
                <Select
                    value={cuisine || null}
                    placeholder="Cuisine"
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
                    placeholder="Expertise"
                    onChange={(_, value) => onLevelChange(value ?? "")}
                    className={styles.muiSelect}
                    size="md"
                    variant="outlined"
                >
                    <Option value="beginner">Beginner</Option>
                    <Option value="intermediate">Intermediate</Option>
                    <Option value="advanced">Advanced</Option>
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
