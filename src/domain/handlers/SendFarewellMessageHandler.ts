import { MemberLeftEvent } from "../events/MemberLeftEvent";
import { DomainEventHandler } from "./DomainEventHandler";

export class SendFarewellMessageHandler implements DomainEventHandler<MemberLeftEvent> {

    public handle(event: MemberLeftEvent): void {
        event.member.send("Goodbye!");
    }

}