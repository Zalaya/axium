import { Client } from "discord.js";
import { DomainEvent } from "./DomainEvent";

export class ClientReadyEvent extends DomainEvent {

    public readonly client: Client;

    public constructor(client: Client) {
        super();
        this.client = client;
    }

    public getEventName(): string {
        return 'clientReadyEvent';
    }

}