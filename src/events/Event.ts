import { Client } from "discord.js";
import { PreEvent } from "./PreEvent";

export abstract class Event {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean = false;

    protected abstract readonly preEvent: PreEvent;

    protected abstract handle(...args): Promise<void>;

    public register(client: Client): void {
        if (this.once) {
            client.once(this.name, this.execute.bind(this));
        } else {
            client.on(this.name, this.execute.bind(this));
        }
    }

    private async execute(...args: any[]): Promise<void> {
        if (!await this.preEvent.validate(...args)) {
            return;
        }

        await this.handle(...args);
    }

}