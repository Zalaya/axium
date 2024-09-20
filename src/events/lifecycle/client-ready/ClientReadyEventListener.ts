import { EventListener } from "../../../shared/events/EventListener";
import { Events } from "discord.js";
import { EventPipeline } from "../../../shared/events/EventPipeline";
import { ClientReadyEventHandler } from "./ClientReadyEventHandler";

export class ClientReadyEventListener extends EventListener {

    protected readonly name = Events.ClientReady;
    protected readonly once = true;
    protected readonly pipeline = new EventPipeline([], new ClientReadyEventHandler());

}