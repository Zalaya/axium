import { EventListener } from "../../../shared/events/EventListener";
import { EventPipeline } from "../../../shared/events/EventPipeline";
import { Events } from "discord.js";
import { InteractionCreateEventHandler } from "./InteractionCreateEventHandler";
import {ChannelGuardian} from "../../../shared/guardians/ChannelGuardian";

export class InteractionCreateEventListener extends EventListener {

    protected readonly name = Events.InteractionCreate;
    protected readonly once = false;
    protected readonly pipeline = new EventPipeline([ new ChannelGuardian() ], new InteractionCreateEventHandler());

}