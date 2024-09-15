import { Validator } from "../../../shared/Validator";
import { ChatInputCommandInteraction } from "discord.js";

export class AmountValidator implements Validator {

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        const amount = interaction.options.getInteger("amount");

        if (amount < 1 || amount > 100) {
            await interaction.reply({ content: "The amount must be between 1 and 100.", ephemeral: true });
            return false;
        }

        return true;
    }

}