import { Client } from "discord.js";
import { EventPipeline } from "./EventPipeline";

export abstract class EventListener {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean;
    protected abstract readonly pipeline: EventPipeline;

    public register(client: Client): void {
        const notifier = async (...args: any[]) => await this.pipeline.execute(...args);

        if (this.once) {
            client.once(this.name, notifier);
        } else {
            client.on(this.name, notifier);
        }
    }

}