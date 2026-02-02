import * as React from "react";
import Input, { InputProps } from "@mui/joy/Input";
import { useField } from "formik";

type FormikInputProps = InputProps & { name: string; formik?: boolean };

const InputUI: React.FC<FormikInputProps> = ({ formik, ...props }) => {
    if (formik && props.name) {
        const [field, meta] = useField(props.name);
        const showError = Boolean(meta.touched && meta.error);

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Input
                    {...field}
                    {...props}
                    error={showError}
                />

            </div>
        );
    }

    return <Input {...props} />;
};

export default InputUI;