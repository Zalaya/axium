import { CommandHandler } from "../CommandHandler";
import { ChatInputCommandInteraction, Client, TextChannel } from "discord.js";

export class CleanCommandHandler implements CommandHandler {

    public async handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.getInteger("amount");

        try {
            await (interaction.channel as TextChannel).bulkDelete(amount + 1);
            await interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: "Couldn't delete messages.", ephemeral: true });
        }
    }

}