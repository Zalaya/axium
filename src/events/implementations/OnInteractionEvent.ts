import { Event } from "../Event";
import { ChatInputCommandInteraction, CommandInteraction, Events, Interaction } from "discord.js";
import { Command } from "../../commands/Command";
import { commands } from "../../constants/Commands";

export class OnInteractionEvent extends Event {

    public readonly name: string = Events.InteractionCreate;
    public readonly once: boolean = false;

    protected async handle(interaction: Interaction): Promise<void> {
        if (!interaction.isCommand()) {
            return;
        }

        const command = commands.find((command: Command) => command.name === (interaction as CommandInteraction).commandName);

        if (!command) {
            return;
        }

        try {
            await command.execute(interaction as ChatInputCommandInteraction, interaction.client);
        } catch (error) {
            console.error(`An error occurred while trying to execute the command ${command.name}: `, error);
        }
    }

}