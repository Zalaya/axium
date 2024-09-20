import { EventListener } from "../../../shared/events/EventListener";
import { Events } from "discord.js";
import { ClientReadyEventHandler } from "./pipelines/ClientReadyEventHandler";
import { EventPipeline } from "../../../shared/events/EventPipeline";

export class ClientReadyEventListener extends EventListener {

    protected readonly name = Events.ClientReady;
    protected readonly once = true;
    protected readonly pipelines = [
        new EventPipeline([], new ClientReadyEventHandler())
    ];

}