import { PreCommand } from "../PreCommand";
import { ChatInputCommandInteraction, Client, PermissionFlagsBits, TextChannel } from "discord.js";

export class PreCleanCommand extends PreCommand {

    public permissions: bigint[] = [
        PermissionFlagsBits.ManageMessages,
        PermissionFlagsBits.ReadMessageHistory
    ];

    public async check(interaction: ChatInputCommandInteraction, client: Client): Promise<boolean> {
        if (!await super.check(interaction, client)) {
            return false;
        }

        const requiredMessages = interaction.options.getInteger("amount") || 0;

        if (!await this.checkAmount(interaction, requiredMessages)) {
            return false;
        }

        if (!await this.checkMessages(interaction, requiredMessages)) {
            return false;
        }

        return true;
    }

    public async checkMessages(interaction: ChatInputCommandInteraction, requiredMessages: number): Promise<boolean> {
        const channel = interaction.channel as TextChannel;
        const messages = await channel.messages.fetch({ limit: requiredMessages });

        if (messages.size < requiredMessages) {
            await interaction.reply({ content: `There are not enough messages in this channel.`, ephemeral: true });
            return false;
        }

        return true;
    }

    public async checkAmount(interaction: ChatInputCommandInteraction, requiredMessages: number): Promise<boolean> {
        if (requiredMessages < 1 || requiredMessages > 100) {
            await interaction.reply({content: "The amount of messages to delete must be between 1 and 100.", ephemeral: true});
            return false;
        }

        return true;
    }

}