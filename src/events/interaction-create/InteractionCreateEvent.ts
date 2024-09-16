import { Event } from "../Event";
import {ChatInputCommandInteraction, CommandInteraction, Events, Interaction} from "discord.js";
import { PreEvent } from "../PreEvent";
import { PreInteractionCreateEvent } from "./PreInteractionCreateEvent";
import {commands} from "../../constants/Commands";
import {Command} from "../../commands/Command";

export class InteractionCreateEvent extends Event {

    public readonly name: string = Events.InteractionCreate;
    public readonly once: boolean = false;

    protected readonly preEvent: PreEvent = new PreInteractionCreateEvent();

    protected async handle(interaction: Interaction): Promise<void> {
        const command = commands.find((command: Command) => command.name === (interaction as CommandInteraction).commandName);

        try {
            await command.execute(interaction as ChatInputCommandInteraction, interaction.client);
        } catch (error) {
            console.error(`An error occurred while trying to execute the command ${command.name}: `, error);
        }
    }

}