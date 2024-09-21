import { Guardian } from "../interfaces/Guardian";
import { ChatInputCommandInteraction } from "discord.js";

export class ChannelGuardian implements Guardian {

    public async guard(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (!interaction.channel) {
            await interaction.reply({ content: "This command can't be used in this channel.", ephemeral: true });
            return false;
        }

        return true;
    }

}