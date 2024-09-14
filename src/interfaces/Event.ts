import {Client } from "discord.js";

export abstract class Event {

    protected abstract readonly name: string;
    protected abstract readonly once: boolean = false;

    protected abstract handle(...args: any[]): void;

    public register(client: Client): void {
        if (this.once) {
            client.once(this.name, this.handle.bind(this));
        } else {
            client.on(this.name, this.handle.bind(this));
        }
    }

}