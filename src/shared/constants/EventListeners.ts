import { ClientReadyEventListener } from "../../events/client-ready/ClientReadyEventListener";
import { EventListener } from "../events/EventListener";
import { InteractionCreateEventListener } from "../../events/interaction-create/InteractionCreateEventListener";

export const EVENT_LISTENERS: EventListener[] = [

    new ClientReadyEventListener(),
    new InteractionCreateEventListener()

];