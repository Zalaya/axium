import { Event } from "../../core/Event";
import { Events } from "discord.js";
import { EventHandler } from "../EventHandler";
import { OnInteractionCreateEventHandler } from "./OnInteractionCreateEventHandler";
import { PreEvent } from "../PreEvent";
import { PreOnInteractionCreateEvent } from "./PreOnInteractionCreateEvent";

export class OnInteractionCreateEvent extends Event {

    public readonly name: string = Events.InteractionCreate;
    public readonly once: boolean = false;

    protected readonly preEvent: PreEvent = new PreOnInteractionCreateEvent();
    protected readonly eventHandler: EventHandler = new OnInteractionCreateEventHandler();

}