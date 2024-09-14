import { Event} from "../interfaces/Event";
import { OnInteractionEvent } from "../events/OnInteractionEvent";
import {OnClientReadyEvent} from "../events/OnClientReadyEvent";

export const events: Event[] = [

    new OnClientReadyEvent(),
    new OnInteractionEvent()

]