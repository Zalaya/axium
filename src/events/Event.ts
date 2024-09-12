import { Client } from "discord.js";

export abstract class Event {

    protected readonly event: string;
    protected readonly once: boolean = false;

    protected abstract handle(...args: any[]): void;

    public register(client: Client): void {
        if (this.once) {
            client.once(this.event, this.handle.bind(this));
        } else {
            client.on(this.event, this.handle.bind(this));
        }
    }

}