import { Client } from "discord.js";
import { EventPipeline } from "./EventPipeline";

export abstract class EventListener {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean;
    protected abstract readonly pipelines: EventPipeline[];

    public register(client: Client): void {
        const notifier = async (...args: any[]) => await this.notify(...args);

        if (this.once) {
            client.once(this.name, notifier);
        } else {
            client.on(this.name, notifier);
        }
    }

    private async notify(...args: any[]): Promise<void> {
        for (const pipeline of this.pipelines) {
            await pipeline.execute(...args);
        }
    }

}