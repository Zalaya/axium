import { ActivityType, PresenceData } from "discord.js";

export const PRESENCE: PresenceData = {

    status: "online",
    activities: [{
        name: "Moderating the server...",
        type: ActivityType.Watching
    }]

};