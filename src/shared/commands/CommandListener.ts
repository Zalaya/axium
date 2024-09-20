import { ApplicationCommandOptionData, ChatInputCommandInteraction, Client } from "discord.js";
import { Pipeline } from "../interfaces/Pipeline";

export abstract class CommandListener {

    private abstract readonly name: string;
    private abstract readonly description: string;
    private abstract readonly options?: ApplicationCommandOptionData[];
    protected abstract readonly pipeline: Pipeline;

    public async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        await this.pipeline.execute(interaction, client);
    }

}