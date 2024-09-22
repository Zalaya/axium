import { Client, Routes } from "discord.js";
import { INTENTS } from "./constants/Intents";
import { PARTIALS } from "./constants/Partials";
import { EventRegistrar } from "../shared/registrars/EventRegistrar";
import { CommandRegistrar } from "../shared/registrars/CommandRegistrar";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            partials: PARTIALS
        });
    }

    public async start(): Promise<void> {
        await this.client.login(process.env.BOT_TOKEN)
            .then(async () => {
                EventRegistrar.register(this.client);
                await CommandRegistrar.register();
            })
            .catch((error) => {
                console.error(`An error occurred while trying to start the bot: ${error}`);
            });
    }

}