import { Guardian } from "../shared/Guardian";
import { Client } from "discord.js";
import { Handler } from "../shared/Handler";
import { EventPipeline } from "./EventPipeline";

export abstract class EventListener {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean;
    protected abstract readonly guardians: Guardian[];
    protected abstract readonly handler: Handler;

    public register(client: Client): void {
        if (this.once) {
            client.once(this.name, async (...args: any[]) => {
                await new EventPipeline(this.guardians, this.handler).process(...args);
            })
        } else {
            client.on(this.name, async (...args: any[]) => {
                await new EventPipeline(this.guardians, this.handler).process(...args);
            })
        }
    }

}