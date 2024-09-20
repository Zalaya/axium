import { EventListener } from "../../../shared/events/EventListener";
import { EventPipeline } from "../../../shared/events/EventPipeline";
import { Events } from "discord.js";
import { InteractionCreateEventHandler } from "./InteractionCreateEventHandler";

export class InteractionCreateEventListener extends EventListener {

    protected readonly name = Events.InteractionCreate;
    protected readonly once = false;
    protected readonly pipeline = new EventPipeline([], new InteractionCreateEventHandler());

}