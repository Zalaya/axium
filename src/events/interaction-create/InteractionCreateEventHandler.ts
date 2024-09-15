import { ChatInputCommandInteraction, CommandInteraction, Interaction } from "discord.js";
import { EventHandler } from "../EventHandler";
import { commands } from "../../constants/Commands";
import { Command } from "../../commands/Command";

export class InteractionCreateEventHandler implements EventHandler {

    protected async handle(interaction: Interaction): Promise<void> {
        const command = commands.find((command: Command) => command.name === (interaction as CommandInteraction).commandName);

        try {
            await command.execute(interaction as ChatInputCommandInteraction, interaction.client);
        } catch (error) {
            console.error(`An error occurred while trying to execute the command ${command.name}: `, error);
        }
    }

}