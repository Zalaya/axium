import { ChatInputCommandInteraction, Client } from "discord.js";

export interface CommandHandler {

    handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void>;

}