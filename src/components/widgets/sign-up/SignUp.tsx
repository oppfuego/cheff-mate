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

export type SignUpValues = typeof signUpInitialValues;

export default function SignUp() {
    const { showAlert } = useAlert();
    const router = useRouter();

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
                    title="Create Account"
                    description="Start your journey toward culinary excellence today."
                    submitLabel="Create My Account"
                    showTerms
                    size="lg"
                    variant="register"
                    isSubmitting={isSubmitting}
                    aside={<SignUpAside />}
                    fields={[
                        { name: "firstName", type: "text", placeholder: "First name" },
                        { name: "lastName", type: "text", placeholder: "Last name" },
                        { name: "email", type: "email", placeholder: "Email address" },
                        { name: "password", type: "password", placeholder: "Password" },
                        { name: "phone", type: "tel", placeholder: "Phone number" },
                        { name: "birthDate", type: "date", placeholder: "Date of birth" },
                        { name: "addressStreet", type: "text", placeholder: "Street" },
                        { name: "addressCity", type: "text", placeholder: "City" },
                        { name: "addressCountry", type: "text", placeholder: "Country" },
                        { name: "addressZip", type: "text", placeholder: "Postal code" },
                    ]}
                />
            )}
        </Formik>
    );
}