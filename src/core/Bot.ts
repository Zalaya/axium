import { Client } from "discord.js";
import { INTENTS } from "./constants/Intents";
import { PARTIALS } from "./constants/Partials";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            partials: PARTIALS
        });
    }

    public async start(): Promise<void> {
        await this.client.login(process.env.BOT_TOKEN);
    }

}
