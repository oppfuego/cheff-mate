"use client";

import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";

import FormUI from "@/components/ui/form/FormUI";
import {
    signInInitialValues,
    signInValidation,
    signInOnSubmit,
} from "@/validationSchemas/sign-in/schema";

export type SignInValues = {
    email: string;
    password: string;
};

export default function SignIn() {
    const { showAlert } = useAlert();
    const router = useRouter();

    return (
        <Formik<SignInValues>
            initialValues={signInInitialValues}
            validate={signInValidation}
            onSubmit={(values, helpers: FormikHelpers<SignInValues>) =>
                signInOnSubmit(values, helpers, showAlert, router)
            }
        >
            {({ isSubmitting }) => (
                <FormUI
                    title="Login to Your Kitchen"
                    description="Continue your culinary journey with AI and master chefs."
                    submitLabel="Sign In to Dashboard"
                    isSubmitting={isSubmitting}
                    size="lg"
                    variant="auth"
                    fields={[
                        { name: "email", type: "email", placeholder: "Email address" },
                        { name: "password", type: "password", placeholder: "Password" },
                    ]}
                />
            )}
        </Formik>
    );
}