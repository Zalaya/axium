import { Event } from "../../core/Event";
import { Events } from "discord.js";
import { EventHandler } from "../EventHandler";
import { OnClientReadyEventHandler } from "./OnClientReadyEventHandler";
import { PreEvent } from "../PreEvent";
import { PreOnClientReadyEvent } from "./PreOnClientReadyEvent";

export class OnClientReadyEvent extends Event {

    public readonly name: string = Events.ClientReady;
    public readonly once: boolean = true;

    protected readonly preEvent: PreEvent = new PreOnClientReadyEvent();
    protected readonly eventHandler: EventHandler = new OnClientReadyEventHandler();

}