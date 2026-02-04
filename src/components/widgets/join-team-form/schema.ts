import * as Yup from "yup";

export interface JoinTeamValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    languages: string[];
    skills: string[];
}

export const initialValues: JoinTeamValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    languages: [""],
    skills: [""],
};

export const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().required(),
    country: Yup.string().required(),
    languages: Yup.array().of(Yup.string().required()).min(1),
    skills: Yup.array().of(Yup.string().required()).min(1),
});

export async function sendJoinTeamRequest(values: JoinTeamValues) {
    const res = await fetch("/api/join-team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
    });

    if (!res.ok) {
        throw new Error("Failed");
    }
}
