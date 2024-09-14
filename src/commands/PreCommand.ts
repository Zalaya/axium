import { ChatInputCommandInteraction, Client, GuildMember } from "discord.js";

export abstract class PreCommand {

    public abstract permissions?: bigint[];

    public async check(interaction: ChatInputCommandInteraction, client: Client): Promise<boolean> {
        if (!await this.checkPermissions(interaction)) {
            await interaction.reply({ content: "You don't have the required permissions to execute this command.", ephemeral: true });
            return;
        }

        if (!await this.checkChannel(interaction)) {
            await interaction.reply({ content: "This command can't be executed in this channel.", ephemeral: true });
            return;
        }

        return true;
    }

    private async checkPermissions(interaction: ChatInputCommandInteraction): Promise<boolean> {
        const member = interaction.member as GuildMember;

        if (!member || !this.permissions) {
            return false;
        }

        return this.permissions.every(permission => member.permissions.has(permission));
    }

    private async checkChannel(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (!interaction.channel) {
            return false;
        }

        return true;
    }

}