import { ApplicationCommandOptionData, Client, CommandInteraction, GuildMember, PermissionFlagsBits, PermissionsBitField } from "discord.js";

export abstract class Command {

    public abstract readonly name: string;
    public abstract readonly description: string;
    public abstract readonly options: ApplicationCommandOptionData[];

    protected abstract readonly permissions: PermissionFlagsBits[];

    protected abstract handle(interaction: CommandInteraction, client: Client): Promise<void>;

    public async execute(interaction: CommandInteraction, client: Client): Promise<void> {
        if (!await this.checkChannel(interaction)) {
            return;
        }

        if (!await this.checkPermissions(interaction)) {
            return;
        }

        await this.handle(interaction, client).then(() => {
            this.replySuccess(interaction);
        }).catch((error) => {
            this.replyError(interaction, error);
        });
    }

    private async checkChannel(interaction: CommandInteraction): Promise<boolean> {
        if (!interaction.channel) {
            await interaction.reply({ content: "You can't use this command in a DM.", ephemeral: true });
            return false;
        }

        return true;
    }

    private async checkPermissions(interaction: CommandInteraction): Promise<boolean> {
        const member = interaction.member as GuildMember;

        if (!member.permissions.has(PermissionsBitField.resolve(this.permissions))) {
            await interaction.reply({ content: "You do not have the necessary permissions to use this command.", ephemeral: true });
            return false;
        }

        return true;
    }

    protected async replySuccess(interaction: CommandInteraction): Promise<void> {
        await interaction.reply({ content: "Command executed successfully.", ephemeral: true });
    }

    protected async replyError(interaction: CommandInteraction, error: any): Promise<void> {
        await interaction.reply({ content: `An error occurred: ${error.message}`, ephemeral: true });
    }

}