"use client";

import { Field, ErrorMessage } from "formik";
import styles from "./SelectUi.module.scss";

interface Option {
    value: string;
    label: string;
}

interface SelectUIProps {
    name: string;
    options: Option[];
    placeholder?: string;
}

export default function SelectUI({
                                     name,
                                     options,
                                     placeholder = "Select",
                                 }: SelectUIProps) {
    return (
        <div className={styles.wrapper}>
            <Field as="select" name={name} className={styles.select}>
                <option value="">{placeholder}</option>
                {options.map((o) => (
                    <option key={o.value} value={o.value}>
                        {o.label}
                    </option>
                ))}
            </Field>
            <ErrorMessage name={name} component="div" className={styles.error} />
        </div>
    );
}
