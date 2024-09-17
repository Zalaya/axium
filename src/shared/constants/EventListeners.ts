import { ClientReadyEventListener } from "../../events/client-ready/ClientReadyEventListener";
import { EventListener } from "../events/EventListener";

export const EVENT_LISTENERS: EventListener[] = [

    new ClientReadyEventListener()

];