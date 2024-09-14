import { ApplicationCommandOptionData, ChatInputCommandInteraction, Client,  PermissionFlagsBits } from "discord.js";
import { PreCommand } from "./PreCommand";

export abstract class Command {

    public abstract readonly name: string;
    public abstract readonly description: string;
    protected readonly preCommand: PreCommand;
    public abstract options: ApplicationCommandOptionData[];

    protected abstract handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void>;

    public async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        if (!await this.preCommand.check(interaction, client)) {
            return;
        }

        await this.handle(interaction, client);
    }

}