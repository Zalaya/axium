export abstract class DomainEvent {

    public readonly occuredAt: Date;

    protected constructor() {
        this.occuredAt = new Date();
    }

    public abstract getEventName(): string;

}