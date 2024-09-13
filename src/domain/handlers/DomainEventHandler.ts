import {DomainEvent} from "../events/DomainEvent";

export interface DomainEventHandler<T extends DomainEvent> {

    handle(event: T): void;

}