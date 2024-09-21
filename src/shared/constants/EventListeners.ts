import { ClientReadyEventListener } from "../../events/lifecycle/client-ready/ClientReadyEventListener";
import { EventListener } from "../events/EventListener";
import { InteractionCreateEventListener } from "../../events/lifecycle/interaction-create/InteractionCreateEventListener";

export const EVENT_LISTENERS: EventListener[] = [

    new ClientReadyEventListener(),
    new InteractionCreateEventListener()

];