import { GuildMember } from "discord.js";
import { DomainEvent } from "./DomainEvent";

export class MemberLeftEvent extends DomainEvent {

    public readonly member: GuildMember;

    public constructor(member: GuildMember) {
        super();
        this.member = member;
    }

    public getEventName(): string {
        return 'memberLeftEvent';
    }

}