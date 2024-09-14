import { Command } from "../../interfaces/Command";
import { ApplicationCommandOptionData, ChatInputCommandInteraction, Client, PermissionFlagsBits, TextChannel } from "discord.js";
import { PreCleanCommand } from "./PreCleanCommand";

export class CleanCommand extends Command {

    public readonly name: string = "clean";
    public readonly description: string = "Cleans the chat by deleting a certain amount of messages.";
    public readonly options: ApplicationCommandOptionData[] = [
        {
            name: "amount",
            description: "The amount of messages to delete.",
            type: 4,
            required: true
        }
    ];

    protected readonly preCommand: PreCleanCommand = new PreCleanCommand();

    public async handle(interaction: ChatInputCommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.getInteger("amount");

        try {
            const channel = interaction.channel as TextChannel;

            await channel.bulkDelete(amount + 1);
            await interaction.reply({ content: `Deleted ${amount} messages.`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: "Couldn't delete messages.", ephemeral: true });
        }
    }

}