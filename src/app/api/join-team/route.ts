import {joinTeamController} from "@/backend/controllers/joinTeam.controller";

export async function POST(req: Request) {
    return joinTeamController.send(req);
}