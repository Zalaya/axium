import { ClientReadyEvent } from "../events/ClientReadyEvent";
import { DomainEventHandler } from "./DomainEventHandler";

export class LogClientReadyHandler implements DomainEventHandler<ClientReadyEvent> {

    public handle(event: ClientReadyEvent): void {
        console.log("Client is ready!");
    }

}