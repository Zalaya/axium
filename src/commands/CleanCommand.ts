import { Command } from "../interfaces/Command";
import { ApplicationCommandOptionData, Client, CommandInteraction, TextChannel } from "discord.js";

export class CleanCommand implements Command {

    private name: string = "clean";
    private description: string = "Cleans the chat by deleting a certain amount of messages.";
    private options: ApplicationCommandOptionData[] = [
        {
            name: "amount",
            description: "The amount of messages to delete.",
            type: 4,
            required: true
        }
    ];

    async execute(interaction: CommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.get("amount")?.value as number;

        if (!interaction.channel) {
            await interaction.reply({ content: "\"You can't use this command in a DM.\"", ephemeral: true});
            return;
        }

        const channel = interaction.channel as TextChannel;

        if (!channel.permissionsFor(client.user!)?.has("MANAGE_MESSAGES")) {
            await interaction.reply({ content: "I don't have permission to manage messages in this channel.", ephemeral: true});
            return;
        }

        try {
            await channel.bulkDelete(amount + 1);
            await interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: "Couldn't delete messages.", ephemeral: true });
        }
    }

}