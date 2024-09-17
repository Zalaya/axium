import { Client } from "discord.js";
import { EventPipeline } from "./EventPipeline";

export abstract class EventListener {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean;
    protected abstract readonly pipeline: EventPipeline;

    public register(client: Client): void {
        if (this.once) {
            client.once(this.name, async (...args: any[]) => {
                await this.pipeline.process(...args);
            });
        } else {
            client.on(this.name, async (...args: any[]) => {
                await this.pipeline.process(...args);
            });
        }
    }

}