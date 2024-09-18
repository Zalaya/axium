import { ClientReadyEventListener } from "../../events/lifecycle/client-ready/ClientReadyEventListener";
import { EventListener } from "../events/EventListener";

export const EVENT_LISTENERS: EventListener[] = [

    new ClientReadyEventListener()

];