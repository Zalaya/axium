import { Client } from "discord.js";
import { INTENTS } from "./constants/Intents";
import { PRESENCE } from "./constants/Presence";
import { PARTIALS } from "./constants/Partials";
import { EVENT_LISTENERS } from "../shared/constants/EventListeners";
import { EventListener } from "../shared/events/EventListener";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            presence: PRESENCE,
            partials: PARTIALS
        });

        this.registerEventListeners();
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.BOT_TOKEN);
        } catch (error) {
            console.error(`An error occurred while trying to start the bot: ${error}`);
        }
    }

    private registerEventListeners(): void {
        EVENT_LISTENERS.forEach((listener: EventListener) => {
            listener.register(this.client);
        })
    }

}