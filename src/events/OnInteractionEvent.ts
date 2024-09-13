import { Event } from "../core/interfaces/Event";
import { CommandInteraction, Interaction } from "discord.js";
import { Command } from "../core/interfaces/Command";
import { commands } from "../core/constants/Commands";

export class OnInteractionEvent extends Event {

    protected readonly event: string = "interactionCreate";
    protected readonly once: boolean = false;

    protected async handle(interaction: Interaction): void {
        if (!interaction.isCommand()) {
            return;
        }

        const command = commands.find((command: Command) => command.name === (interaction as CommandInteraction).commandName);

        if (!command) {
            return;
        }

        try {
            await command.execute(interaction as CommandInteraction, interaction.client);
        } catch (error) {
            console.error(`An error occurred while trying to execute the command ${command.name}: `, error);
        }
    }

}