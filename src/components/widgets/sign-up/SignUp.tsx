"use client";

import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";
import FormUI from "@/components/ui/form/FormUI";

import {
    signUpInitialValues,
    signUpValidation,
    signUpOnSubmit,
} from "@/validationSchemas/sign-up/schema";
import SignUpAside from "@/components/widgets/sign-up/SignUpAside";
import { useI18n } from "@/context/i18nContext";
import { getPageTranslations } from "@/resources/pageTranslations";

export type SignUpValues = typeof signUpInitialValues;

export default function SignUp() {
    const { showAlert } = useAlert();
    const router = useRouter();
    const { lang } = useI18n();
    const t = getPageTranslations(lang).signUp;

    return (
        <Formik<SignUpValues>
            initialValues={signUpInitialValues}
            validate={signUpValidation}
            onSubmit={(values, helpers: FormikHelpers<SignUpValues>) =>
                signUpOnSubmit(values, helpers, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title={t.title}
                    description={t.description}
                    submitLabel={t.submitLabel}
                    showTerms
                    size="lg"
                    variant="register"
                    isSubmitting={isSubmitting}
                    aside={<SignUpAside />}
                    fields={[
                        { name: "firstName", type: "text", placeholder: t.fields.firstName },
                        { name: "lastName", type: "text", placeholder: t.fields.lastName },
                        { name: "email", type: "email", placeholder: t.fields.email },
                        { name: "password", type: "password", placeholder: t.fields.password },
                        { name: "phone", type: "tel", placeholder: t.fields.phone },
                        { name: "birthDate", type: "date", placeholder: t.fields.birthDate },
                        { name: "addressStreet", type: "text", placeholder: t.fields.addressStreet },
                        { name: "addressCity", type: "text", placeholder: t.fields.addressCity },
                        { name: "addressCountry", type: "text", placeholder: t.fields.addressCountry },
                        { name: "addressZip", type: "text", placeholder: t.fields.addressZip },
                    ]}
                />
            )}
        </Formik>
    );
}