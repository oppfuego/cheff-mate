import {sendEmail} from "@/backend/utils/sendEmail";
import {COMPANY_EMAIL} from "@/resources/constants";

export const joinTeamService = {
    async send(data: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        country: string;
        languages: string[];
        skills: string[];
    }) {
        const text = `
👤 Name: ${data.firstName} ${data.lastName}
📧 Email: ${data.email}
📞 Phone: ${data.phone}
🌍 Country: ${data.country}

🗣 Languages:
${data.languages.map(l => `- ${l}`).join("\n")}

🛠 Skills:
${data.skills.map(s => `- ${s}`).join("\n")}
        `;

        const to = COMPANY_EMAIL ?? process.env.COMPANY_EMAIL;
        if (!to) {
            throw new Error("COMPANY_EMAIL is not configured. Set `COMPANY_EMAIL` in resources/constants or as env var.");
        }

        await sendEmail(
            to,
            "🤝 New team application",
            text
        );
    },
};