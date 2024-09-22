import { EVENT_LISTENERS } from "../constants/EventListeners";
import { EventListener } from "../events/EventListener";
import { Client } from "discord.js";

export class EventRegistrar {

    public static register(client: Client): void {
        EVENT_LISTENERS.forEach((listener: EventListener) => {
            listener.register(client);
        })
    }

}