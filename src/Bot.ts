import { Client } from "discord.js";
import { intents } from "./constants/Intents";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({ intents: intents });
    }

    public async start(): void {
        try {
            await this.client.login(process.env.TOKEN);
        } catch (error) {
            console.error("An error occurred while trying to start the bot: ", error);
        }
    }

}