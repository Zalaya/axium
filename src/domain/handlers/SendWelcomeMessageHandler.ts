import { MemberJoinedEvent } from "../events/MemberJoinedEvent";
import { DomainEventHandler } from "./DomainEventHandler";

export class SendWelcomeMessageHandler implements DomainEventHandler<MemberJoinedEvent> {

    public handle(event: MemberJoinedEvent): void {
        event.member.send("Welcome to the server!");
    }

}