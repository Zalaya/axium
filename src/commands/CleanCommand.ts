import { Command } from "./Command";
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
            await interaction.reply("You can't use this command in a DM.");
        }

        const channel = interaction.channel as TextChannel;

        if (!channel.permissionsFor(client.user!)?.has("MANAGE_MESSAGES")) {
            await interaction.reply("I don't have permission to manage messages in this channel.");
        }

        await channel.bulkDelete(amount + 1).then(() =>  {
            interaction.reply(`Deleted ${amount} messages.`);
        }).catch(() => {
            interaction.reply("Couldn't delete messages.");
        });
    }

}