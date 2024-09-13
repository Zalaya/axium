import { Command } from "../interfaces/Command";
import { ApplicationCommandOptionData, Client, CommandInteraction, PermissionFlagsBits, TextChannel } from "discord.js";

export class CleanCommand extends Command {

    public name: string = "clean";
    public description: string = "Cleans the chat by deleting a certain amount of messages.";
    public options: ApplicationCommandOptionData[] = [
        {
            name: "amount",
            description: "The amount of messages to delete.",
            type: 4,
            required: true
        }
    ];
    private readonly permissions: PermissionFlagsBits[] = [
        PermissionFlagsBits.ManageMessages,
        PermissionFlagsBits.ReadMessageHistory
    ];

    public async handle(interaction: CommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.get("amount")?.value as number;

        try {
            const channel = interaction.channel as TextChannel;

            await channel.bulkDelete(amount + 1);
            await interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: "Couldn't delete messages.", ephemeral: true });
        }
    }

}