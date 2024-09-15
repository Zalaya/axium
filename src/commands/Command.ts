import { ApplicationCommandOptionData, ChatInputCommandInteraction, Client, PermissionFlagsBits } from "discord.js";
import { PreCommand } from "./PreCommand";
import { CommandHandler } from "./CommandHandler";

export abstract class Command {

    public abstract readonly name: string;
    public abstract readonly description: string;
    public abstract options?: ApplicationCommandOptionData[];

    protected readonly preCommand: PreCommand;
    protected abstract readonly commandHandler: CommandHandler;

    public async execute(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        if (!await this.preCommand.validate(interaction)) {
            return;
        }

        await this.commandHandler.handle(interaction, client);
    }

}