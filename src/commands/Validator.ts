import { ChatInputCommandInteraction } from "discord.js";

export interface Validator {

    validate(interaction: ChatInputCommandInteraction): Promise<boolean>;

}