import { Command } from "../interfaces/Command";
import { ApplicationCommandOptionData, Client, CommandInteraction, PermissionFlagsBits, TextChannel } from "discord.js";

export class CleanCommand extends Command {

    public readonly name: string = "clean";
    public readonly description: string = "Cleans the chat by deleting a certain amount of messages.";
    public readonly options: ApplicationCommandOptionData[] = [
        {
            name: "amount",
            description: "The amount of messages to delete.",
            type: 4,
            required: true
        },
        {
            name: "reason",
            description: "Reason for kicking the member.",
            type: 3,
            required: false
        }
    ];
    private readonly permissions: PermissionFlagsBits[] = [
        PermissionFlagsBits.ManageMessages,
        PermissionFlagsBits.ReadMessageHistory
    ];

    protected async handle(interaction: CommandInteraction, client: Client): Promise<void> {
        const amount = interaction.options.get("amount", true)?.value as number;
        const channel = interaction.channel as TextChannel;

        await channel.bulkDelete(amount + 1);
    }

}