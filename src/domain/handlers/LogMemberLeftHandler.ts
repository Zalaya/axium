import { MemberLeftEvent } from "../events/MemberLeftEvent";
import { DomainEventHandler } from "./DomainEventHandler";

export class LogMemberLeftHandler implements DomainEventHandler<MemberLeftEvent> {

    public handle(event: MemberLeftEvent): void {
        console.log(`Member ${event.member.user.username} left the guild!`);
    }

}