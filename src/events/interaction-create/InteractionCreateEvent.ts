import { Event } from "../Event";
import { Events } from "discord.js";
import { EventHandler } from "../EventHandler";
import { InteractionCreateEventHandler } from "./InteractionCreateEventHandler";
import { PreEvent } from "../PreEvent";
import { PreInteractionCreateEvent } from "./PreInteractionCreateEvent";

export class InteractionCreateEvent extends Event {

    public readonly name: string = Events.InteractionCreate;
    public readonly once: boolean = false;

    protected readonly preEvent: PreEvent = new PreInteractionCreateEvent();
    protected readonly eventHandler: EventHandler = new InteractionCreateEventHandler();

}