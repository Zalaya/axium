import { Command } from "../Command";
import { ApplicationCommandOptionData } from "discord.js";
import { PreCleanCommand } from "./PreCleanCommand";
import { CleanCommandHandler } from "./CleanCommandHandler";

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
    protected readonly commandHandler: CleanCommandHandler = new CleanCommandHandler();

}