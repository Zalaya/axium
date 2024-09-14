import { Event} from "../events/Event";
import { OnInteractionEvent } from "../events/implementations/OnInteractionEvent";
import { OnClientReadyEvent } from "../events/implementations/OnClientReadyEvent";

export const events: Event[] = [

    new OnClientReadyEvent(),
    new OnInteractionEvent()

]