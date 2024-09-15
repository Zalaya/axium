import { Event } from "../Event";
import { Events } from "discord.js";
import { EventHandler } from "../EventHandler";
import { ClientReadyEventHandler } from "./ClientReadyEventHandler";
import { PreEvent } from "../PreEvent";
import { PreClientReadyEvent } from "./PreClientReadyEvent";

export class ClientReadyEvent extends Event {

    public readonly name: string = Events.ClientReady;
    public readonly once: boolean = true;

    protected readonly preEvent: PreEvent = new PreClientReadyEvent();
    protected readonly eventHandler: EventHandler = new ClientReadyEventHandler();

}