import { Event } from "../interfaces/Event";
import {ChatInputCommandInteraction, CommandInteraction, Interaction} from "discord.js";
import { Command } from "../interfaces/Command";
import { commands } from "../constants/Commands";

export class OnInteractionEvent extends Event {

    protected readonly name: string = "interactionCreate";
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
            await command.execute(interaction as ChatInputCommandInteraction, interaction.client);
        } catch (error) {
            console.error(`An error occurred while trying to execute the command ${command.name}: `, error);
        }
    }

}