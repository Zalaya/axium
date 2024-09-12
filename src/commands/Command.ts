import { ApplicationCommandOptionData, Client, CommandInteraction } from "discord.js";

export interface Command {

    name: string;
    description: string;
    options: ApplicationCommandOptionData[];

    execute(interaction: CommandInteraction, client: Client): Promise<void>;

}