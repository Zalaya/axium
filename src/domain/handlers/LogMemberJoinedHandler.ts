import { MemberJoinedEvent } from "../events/MemberJoinedEvent";
import { DomainEventHandler } from "./DomainEventHandler";

export class LogMemberJoinedHandler implements DomainEventHandler<MemberJoinedEvent> {

    public handle(event: MemberJoinedEvent): void {
        console.log(`Member ${event.member.user.username} joined the guild!`);
    }

}