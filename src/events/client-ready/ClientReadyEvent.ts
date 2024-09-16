import { Event } from "../Event";
import {Client, Events} from "discord.js";
import { PreEvent } from "../PreEvent";
import { PreClientReadyEvent } from "./PreClientReadyEvent";

export class ClientReadyEvent extends Event {

    public readonly name: string = Events.ClientReady;
    public readonly once: boolean = true;

    protected readonly preEvent: PreEvent = new PreClientReadyEvent();

    protected async handle(client: Client): Promise<void> {
        console.log(`The client is ready! Logged in as ${client.user?.tag}.`);
    }

}