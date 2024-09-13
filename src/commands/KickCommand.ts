import { Command } from "../interfaces/Command";
import { ApplicationCommandOptionData, Client, CommandInteraction, GuildMember, PermissionFlagsBits } from "discord.js";

export class KickCommand extends Command {

    public readonly name: string = "kick";
    public readonly description: string = "Kicks a member from the server.";
    public readonly options: ApplicationCommandOptionData[] = [
        {
            name: "member",
            description: "The member to kick.",
            type: 6,
            required: true
        },
        {
            name: "reason",
            description: "Reason for kicking the member.",
            type: 3,
            required: false
        }
    ];
    protected readonly permissions: PermissionFlagsBits[] = [
        PermissionFlagsBits.KickMembers
    ];

    protected async handle(interaction: CommandInteraction, client: Client): Promise<void> {
        const member = interaction.options.get("member")?.value as GuildMember;
        const reason = interaction.options.get("reason")?.value as string || "No reason provided.";

        if (!member) {
            await interaction.reply({ content: "The member was not found.", ephemeral: true });
            return;
        }

        try {
            await member.kick(reason);
            await interaction.reply({ content: `${member.user.tag} has been kicked. Reason: ${reason}`, ephemeral: true });
        } catch (error) {
            await interaction.reply({ content: `Couldn't kick the member: ${error.message}`, ephemeral: true });
        }
    }

}