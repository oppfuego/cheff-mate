"use client";

import React, {useState} from "react";
import {Formik, Form, Field, FormikHelpers} from "formik";
import {motion} from "framer-motion";
import ButtonUI from "@/components/ui/button/ButtonUI";
import {validationSchema, initialValues, sendContactRequest} from "./schema";
import {useAlert} from "@/context/AlertContext";

import {

    FaClock,
    FaEnvelope,
} from "react-icons/fa";

import {COMPANY_EMAIL} from "@/resources/constants";
import styles from './ContactForm.module.scss'
import {PiChefHatFill} from "react-icons/pi";

interface ContactFormValues {
    name: string;
    secondName: string;
    email: string;
    phone: string;
    message?: string;
}

const ContactSupport: React.FC = () => {
    const {showAlert} = useAlert();
    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = async (
        values: ContactFormValues,
        {setSubmitting, resetForm}: FormikHelpers<ContactFormValues>
    ) => {
        try {
            await sendContactRequest(values);
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
                {/* LEFT — INFO */}
                <motion.div
                    className={styles.left}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    <span className={styles.label}>Support Center</span>
                    <div className={styles.title}>
                        <h2>
                            We’re here to help <br/>
                            you master the kitchen.
                        </h2>

                        <p>
                            Have questions about AI cooking plans, chef-led programs,
                            or your learning tokens? Send us a message — our team
                            responds within 24 hours.
                        </p>
                    </div>

                    <div className={styles.extra}>
                        <strong>Other ways to connect</strong>

                        <div className={styles.contactItem}>
                            <FaEnvelope/>
                            <span>{COMPANY_EMAIL}</span>
                        </div>

                        <div className={styles.contactItem}>
                            <FaClock/>
                            <span>Replies within 24 hours</span>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT — FORM */}
                <motion.div
                    className={styles.formCard}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    {successMsg ? (
                        <div className={styles.success}>{successMsg}</div>
                    ) : (
                        <Formik<ContactFormValues>
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({isSubmitting}) => (
                                <Form className={styles.form}>
                                    <div className={styles.row}>
                                        <Field name="name" placeholder="Name"/>
                                        <Field
                                            name="email"
                                            placeholder="Email address"
                                            type="email"
                                        />
                                    </div>

                                    <Field
                                        name="phone"
                                        placeholder="Phone number"
                                        type="tel"
                                    />

                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Tell us how we can help you today..."
                                        rows={5}
                                    />

                                    <ButtonUI
                                        type="submit"
                                        fullWidth
                                        loading={isSubmitting}
                                        text="Send Message →"
                                        color="primary"
                                    />

                                    <span className={styles.policy}>
                                        By submitting this form, you agree to our{" "}
                                        <b>Privacy Policy</b>.
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
