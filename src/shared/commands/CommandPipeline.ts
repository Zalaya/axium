import { Pipeline } from "../interfaces/Pipeline";
import { Guardian } from "../interfaces/Guardian";
import { Handler } from "../interfaces/Handler";

export class CommandPipeline implements Pipeline {

    private readonly guardians: Guardian[];
    private readonly handler: Handler;

    public constructor(guardians: Guardian[], handler: Handler) {
        this.guardians = guardians;
        this.handler = handler;
    }

    public async execute(...args: any[]): Promise<void> {
        for (const guardian of this.guardians) {
            if (!await guardian.guard(...args)) {
                return;
            }
        }

        await this.handler.handle(...args);
    }

}