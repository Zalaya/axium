import { Event } from "../interfaces/Event";
import { Client, Events } from "discord.js";

export class OnClientReadyEvent extends Event {

    public readonly name: string = Events.ClientReady;
    public readonly once: boolean = true;

    protected async handle(client: Client): Promise<void> {
        console.log(`The client is ready! Logged in as ${client.user?.tag}.`);
    }

}