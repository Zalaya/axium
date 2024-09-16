import { ApplicationCommandOptionData, ChatInputCommandInteraction, Client } from "discord.js";
import { PreCommand } from "./PreCommand";

export abstract class Command {

    public abstract readonly name: string;
    public abstract readonly description: string;
    public abstract options?: ApplicationCommandOptionData[];

    protected readonly preCommand: PreCommand;

    protected abstract handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void>;

    public async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        if (!await this.preCommand.validate(interaction)) {
            return;
        }

        await this.handle(interaction, client);
    }

}