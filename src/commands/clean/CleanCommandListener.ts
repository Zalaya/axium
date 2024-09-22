import { CommandListener } from "../../shared/commands/CommandListener";
import { CommandPipeline } from "../../shared/commands/CommandPipeline";
import { CleanCommandHandler } from "./CleanCommandHandler";
import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";

export class CleanCommandListener extends CommandListener {

    public readonly builder = new SlashCommandBuilder()
        .setName("clean")
        .setDescription("Cleans the chat by deleting a certain amount of messages.")
        .addIntegerOption(option => option
            .setName("amount")
            .setDescription("The amount of messages to delete.")
            .setRequired(true)
            .setMinValue(1)
            .setMaxValue(100)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages);

    protected readonly pipeline = new CommandPipeline([], new CleanCommandHandler());


}