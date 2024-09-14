import { Client } from "discord.js";
import { events } from "../constants/Events";

export class EventRegistrar {

    private readonly client: Client;

    public constructor(client: Client) {
        this.client = client;
    }

    public registerEvents(): void {
        for (const event of events) {
            event.register(this.client);
        }
    }

}
