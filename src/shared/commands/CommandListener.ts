import { ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";
import { Pipeline } from "../interfaces/Pipeline";

export abstract class CommandListener {

    public abstract readonly builder: SlashCommandBuilder;
    protected abstract readonly pipeline: Pipeline;

    public async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        await this.pipeline.execute(interaction, client);
    }

}