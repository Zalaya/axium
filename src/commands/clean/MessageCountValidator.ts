import { Validator } from "../../core/Validator";
import { ChatInputCommandInteraction, TextChannel } from "discord.js";

export class MessageCountValidator implements Validator {

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        const amount = interaction.options.getInteger("amount");
        const messages = await (interaction.channel as TextChannel).messages.fetch({ limit: amount });

        if (messages.size < amount) {
            await interaction.reply({ content: "There are not enough messages to delete.", ephemeral: true });
            return false;
        }

        return true;
    }

}