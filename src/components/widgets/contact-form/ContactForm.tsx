"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { motion } from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import { useAlert } from "@/context/AlertContext";
import { validationSchema, initialValues, sendContactRequest } from "./schema";

import { FaClock, FaEnvelope } from "react-icons/fa";
import { COMPANY_EMAIL } from "@/resources/constants";
import styles from "./ContactForm.module.scss";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactSupport: React.FC = () => {
    const { showAlert } = useAlert();
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
            setSuccessMsg(
                "Your message has been sent. Our culinary team will get back to you shortly."
            );
            showAlert("Success", "Message sent successfully", "success");
        } catch {
            showAlert("Error", "Something went wrong. Try again.", "error");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.layout}>
                {/* LEFT */}
                <motion.div
                    className={styles.left}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>Support Center</span>

                    <h2>
                        We’re here to help <br /> you master the kitchen.
                    </h2>

                    <p>
                        Have questions about AI cooking plans, chef-led programs,
                        or your learning tokens? Send us a message — our team
                        responds within 24 hours.
                    </p>

                    <div className={styles.extra}>
                        <strong>Other ways to connect</strong>

                        <div className={styles.contactItem}>
                            <FaEnvelope />
                            <span>{COMPANY_EMAIL}</span>
                        </div>

                        <div className={styles.contactItem}>
                            <FaClock />
                            <span>Replies within 24 hours</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT */}
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
                            validationSchema={validationSchema}
                            validateOnBlur
                            validateOnChange
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, isValid }) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <div className={styles.field}>
                                            <Field name="name" placeholder="First name" />
                                            <ErrorMessage name="name" component="div" className={styles.error} />
                                        </div>

                                        <div className={styles.field}>
                                            <Field name="secondName" placeholder="Second name" />
                                            <ErrorMessage name="secondName" component="div" className={styles.error} />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="email" type="email" placeholder="Email address" />
                                        <ErrorMessage name="email" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field name="phone" type="tel" placeholder="+380 67 123 45 67" />
                                        <ErrorMessage name="phone" component="div" className={styles.error} />
                                    </div>

                                    <div className={styles.field}>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            placeholder="Tell us how we can help you today..."
                                            rows={5}
                                        />
                                        <ErrorMessage name="message" component="div" className={styles.error} />
                                    </div>

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        disabled={!isValid || isSubmitting}
                                        text="Send Message →"
                                        color="primary"
                                    />

                                    <span className={styles.policy}>
                    By submitting this form, you agree to our <b>Privacy Policy</b>.
                  </span>
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