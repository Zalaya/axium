import { Client } from "discord.js";
import { INTENTS } from "./configuration/Intents";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({ intents: INTENTS });
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.BOT_TOKEN);
        } catch (error) {
            console.error("An error occurred while trying to start the bot: ", error);
        }
    }

}