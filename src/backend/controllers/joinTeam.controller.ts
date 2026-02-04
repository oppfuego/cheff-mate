import {joinTeamService} from "@/backend/services/joinTeam.service";

export const joinTeamController = {
    async send(req: Request) {
        const body = await req.json();
        await joinTeamService.send(body);

        return new Response(
            JSON.stringify({ message: "Application sent" }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    },
};