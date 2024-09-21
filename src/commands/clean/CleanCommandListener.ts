import { CommandListener } from "../../shared/commands/CommandListener";
import { CommandPipeline } from "../../shared/commands/CommandPipeline";
import { CleanCommandHandler } from "./CleanCommandHandler";
import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { ChannelGuardian } from "../../shared/guardians/ChannelGuardian";

export class CleanCommandListener extends CommandListener {

    protected readonly builder = new SlashCommandBuilder()
        .setName("clean")
        .setDescription("Cleans the chat by deleting a certain amount of messages.")
        .addIntegerOption(option => option
            .setName("amount")
            .setDescription("The amount of messages to delete.")
            .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);
    protected readonly pipeline = new CommandPipeline([ new ChannelGuardian() ], new CleanCommandHandler());

}