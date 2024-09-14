import { Validator } from "./Validator";
import { ChatInputCommandInteraction, GuildMember } from "discord.js";

export class PermissionValidator implements Validator {

    private readonly permissions: bigint[];

    public constructor(permissions: bigint[]) {
        this.permissions = permissions;
    }

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        const member = interaction.member as GuildMember;

        if (!member || !this.permissions) {
            await interaction.reply({ content: "This command can't be used in this channel.", ephemeral: true });
            return false;
        }

        return this.permissions.every(permission => member.permissions.has(permission));
    }

}