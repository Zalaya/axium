import { Event} from "../core/Event";
import { OnInteractionCreateEvent } from "../events/interaction-create/OnInteractionCreateEvent";
import { OnClientReadyEvent } from "../events/client-ready/OnClientReadyEvent";

export const events: Event[] = [

    new OnClientReadyEvent(),
    new OnInteractionCreateEvent()

];