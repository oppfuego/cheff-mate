"use client";

import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { initialValues, validationSchema, sendJoinTeamRequest } from "./schema";
import styles from "./JoinTeamForm.module.scss";

import { FaUsers, FaClock } from "react-icons/fa";

export default function JoinTeamForm() {
    const { showAlert } = useAlert();
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
                    <span className={styles.label}>Join the team</span>

                    <h2>
                        Work with us. <br />
                        Grow with us.
                    </h2>

                    <p>
                        We collaborate with independent professionals from all over the world.
                        If you value quality, autonomy, and clear communication — you’ll feel at home.
                    </p>

                    <div className={styles.extra}>
                        <div className={styles.extraItem}>
                            <FaUsers />
                            <span>Remote-first global team</span>
                        </div>

                        <div className={styles.extraItem}>
                            <FaClock />
                            <span>Flexible workload & schedule</span>
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
                            ✅ Your application has been sent. We’ll get back to you.
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
                                        <Field className={styles.input} name="firstName" placeholder="First name" />
                                        <Field className={styles.input} name="lastName" placeholder="Last name" />
                                    </div>

                                    <div className={styles.row}>
                                        <Field className={styles.input} name="email" type="email" placeholder="Email" />
                                        <Field className={styles.input} name="phone" placeholder="Phone number" />
                                    </div>

                                    <Field className={styles.input} name="country" placeholder="Country" />

                                    {/* Languages */}
                                    <FieldArray name="languages">
                                        {({ push, remove }) => (
                                            <div className={styles.listBlock}>
                                                <label>Languages</label>
                                                {values.languages.map((_, i) => (
                                                    <div key={i} className={styles.listRow}>
                                                        <Field
                                                            className={styles.input}
                                                            name={`languages.${i}`}
                                                            placeholder="e.g. English"
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
                                                    + Add language
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    {/* Skills */}
                                    <FieldArray name="skills">
                                        {({ push, remove }) => (
                                            <div className={styles.listBlock}>
                                                <label>Skills</label>
                                                {values.skills.map((_, i) => (
                                                    <div key={i} className={styles.listRow}>
                                                        <Field
                                                            className={styles.input}
                                                            name={`skills.${i}`}
                                                            placeholder="e.g. Baking, Pastry, Food styling"
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
                                                    + Add skill
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        text="Send application →"
                                        color="primary"
                                    />

                                    <span className={styles.policy}>
                                        By submitting this form you agree to our Privacy Policy.
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