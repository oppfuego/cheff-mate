"use client";

import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { initialValues, validationSchema, sendJoinTeamRequest } from "./schema";
import styles from "./JoinTeamForm.module.scss";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

import { FaUsers, FaClock } from "react-icons/fa";

export default function JoinTeamForm() {
    const { showAlert } = useAlert();
    const { lang } = useI18n();
    const t = getPageTranslations(lang).joinTeamPage.form;
    const [success, setSuccess] = useState(false);

    return (
        <section className={styles.section}>
            <div className={styles.layout}>

                {/* LEFT — INFO */}
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>{t.label}</span>

                    <h2>
                        {t.title.split(". ")[0]}. <br />
                        {t.title.split(". ")[1]}
                    </h2>

                    <p>
                        {t.description}
                    </p>

                    <div className={styles.extra}>
                        <div className={styles.extraItem}>
                            <FaUsers />
                            <span>{t.extraItems[0]}</span>
                        </div>

                        <div className={styles.extraItem}>
                            <FaClock />
                            <span>{t.extraItems[1]}</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — FORM */}
                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {success ? (
                        <div className={styles.success}>
                            {t.successMessage}
                        </div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={async (values, { setSubmitting, resetForm }) => {
                                try {
                                    await sendJoinTeamRequest(values);
                                    resetForm();
                                    setSuccess(true);
                                    showAlert("Success", "Application sent", "success");
                                } catch {
                                    showAlert("Error", "Failed to send application", "error");
                                } finally {
                                    setSubmitting(false);
                                }
                            }}
                        >
                            {({ values, isSubmitting }) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <Field className={styles.input} name="firstName" placeholder={t.fields.firstName} />
                                        <Field className={styles.input} name="lastName" placeholder={t.fields.lastName} />
                                    </div>

                                    <div className={styles.row}>
                                        <Field className={styles.input} name="email" type="email" placeholder={t.fields.email} />
                                        <Field className={styles.input} name="phone" placeholder={t.fields.phone} />
                                    </div>

                                    <Field className={styles.input} name="country" placeholder={t.fields.country} />

                                    {/* Languages */}
                                    <FieldArray name="languages">
                                        {({ push, remove }) => (
                                            <div className={styles.listBlock}>
                                                <label>{t.fields.languages}</label>
                                                {values.languages.map((_, i) => (
                                                    <div key={i} className={styles.listRow}>
                                                        <Field
                                                            className={styles.input}
                                                            name={`languages.${i}`}
                                                            placeholder={t.fields.languagePlaceholder}
                                                        />
                                                        {values.languages.length > 1 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(i)}
                                                                className={styles.remove}
                                                            >
                                                                ×
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <button type="button" className={styles.add} onClick={() => push("")}>
                                                    {t.fields.addLanguage}
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    {/* Skills */}
                                    <FieldArray name="skills">
                                        {({ push, remove }) => (
                                            <div className={styles.listBlock}>
                                                <label>{t.fields.skills}</label>
                                                {values.skills.map((_, i) => (
                                                    <div key={i} className={styles.listRow}>
                                                        <Field
                                                            className={styles.input}
                                                            name={`skills.${i}`}
                                                            placeholder={t.fields.skillPlaceholder}
                                                        />
                                                        {values.skills.length > 1 && (
                                                            <button
                                                                type="button"
                                                                onClick={() => remove(i)}
                                                                className={styles.remove}
                                                            >
                                                                ×
                                                            </button>
                                                        )}
                                                    </div>
                                                ))}
                                                <button type="button" className={styles.add} onClick={() => push("")}>
                                                    {t.fields.addSkill}
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        text={t.submitButton}
                                        color="primary"
                                    />

                                    <span className={styles.policy}>
                                        {t.policyText}
                                    </span>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
