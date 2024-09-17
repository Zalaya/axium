import { EventListener } from "../../shared/events/EventListener";
import { Events } from "discord.js";
import { ClientReadyEventHandler } from "./ClientReadyEventHandler";

export class ClientReadyEventListener extends EventListener {

    protected readonly name = Events.ClientReady;
    protected readonly once = true;
    protected readonly guardians = [];
    protected readonly handler = new ClientReadyEventHandler();

}