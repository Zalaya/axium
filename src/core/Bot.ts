import { Client } from "discord.js";
import { INTENTS } from "./configuration/Intents";
import { PRESENCE } from "./configuration/Presence";
import { PARTIALS } from "./configuration/Partials";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            presence: PRESENCE,
            partials: PARTIALS
        });
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.BOT_TOKEN);
        } catch (error) {
            console.error(`An error occurred while trying to start the bot: ${error}`);
        }
    }

}