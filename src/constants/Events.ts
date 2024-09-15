import { Event} from "../events/Event";
import { InteractionCreateEvent } from "../events/interaction-create/InteractionCreateEvent";
import { ClientReadyEvent } from "../events/client-ready/ClientReadyEvent";

export const events: Event[] = [

    new ClientReadyEvent(),
    new InteractionCreateEvent()

];