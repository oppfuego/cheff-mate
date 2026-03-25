"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { getContactValidationSchema, initialValues, sendContactRequest } from "./schema";
import { FaClock, FaEnvelope } from "react-icons/fa";
import { COMPANY_EMAIL } from "@/resources/constants";
import styles from "./ContactForm.module.scss";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactSupport: React.FC = () => {
    const { showAlert } = useAlert();
    const { lang } = useI18n();
    const t = getPageTranslations(lang).contactUs;
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: ContactFormValues,
        { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
    ) => {
        try {
            const payload = {
                ...values,
                phone: values.phone.replace(/\D/g, ""),
            };

            await sendContactRequest(payload);
            resetForm();
            setSuccessMsg(t.successMessage);
            showAlert(t.successToastTitle, t.successToastBody, "success");
        } catch {
            showAlert(t.errorToastTitle, t.errorToastBody, "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>{t.supportCenter}</span>

                    <h2>{t.title}</h2>

                    <p>{t.description}</p>

                    <div className={styles.extra}>
                        <strong>{t.otherWays}</strong>

                        <div className={styles.contactItem}>
                            <FaEnvelope />
                            <span>{COMPANY_EMAIL}</span>
                        </div>

                        <div className={styles.contactItem}>
                            <FaClock />
                            <span>{t.repliesWithin}</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.formCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {successMsg ? (
                        <div className={styles.success}>{successMsg}</div>
                    ) : (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={getContactValidationSchema(lang)}
                            validateOnBlur
                            validateOnChange
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, isValid }) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <Field name="name" placeholder={t.fields.firstName} />
                                            <ErrorMessage name="name" component="div" className={styles.error} />
                                        </div>

                                        <div className={styles.field}>
                                            <Field name="secondName" placeholder={t.fields.lastName} />
                                            <ErrorMessage name="secondName" component="div" className={styles.error} />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="email" type="email" placeholder={t.fields.email} />
                                        <ErrorMessage name="email" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="phone" type="tel" placeholder={t.fields.phone} />
                                        <ErrorMessage name="phone" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder={t.fields.message}
                                            rows={5}
                                        />
                                        <ErrorMessage name="message" component="div" className={styles.error} />
                                    </div>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        disabled={!isValid || isSubmitting}
                                        text={t.submitButton}
                                        color="primary"
                                    />

                                    <span className={styles.policy}>{t.policyText}</span>
                                </Form>
                            )}
                        </Formik>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSupport;
