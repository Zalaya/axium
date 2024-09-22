import { Handler } from "../../shared/interfaces/Handler";
import { ChatInputCommandInteraction, Client } from "discord.js";

export class CleanCommandHandler implements Handler {

    public async handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.getInteger("amount", true);
        const messages = await interaction.channel?.messages.fetch({ limit: amount });

        await interaction.channel?.bulkDelete(messages).then(() => {
            interaction.reply({content: `Successfully deleted ${messages?.size} messages.`, ephemeral: true})
        }).catch(() => {
            interaction.reply({content: "An error occurred while trying to delete messages.", ephemeral: true})
        });
    }

}