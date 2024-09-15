import { Validator } from "../shared/Validator";
import { ChatInputCommandInteraction } from "discord.js";

export class ChannelValidator implements Validator{

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (!interaction.channel) {
            await interaction.reply({ content: "This command can't be used in this channel.", ephemeral: true });
            return false;
        }

        return true;
    }

}