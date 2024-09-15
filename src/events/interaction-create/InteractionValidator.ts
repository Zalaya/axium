import { Validator } from "../../shared/Validator";
import { ChatInputCommandInteraction } from "discord.js";

export class InteractionValidator implements Validator {

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (!interaction.isCommand()) {
            return false;
        }

        return true;
    }

}