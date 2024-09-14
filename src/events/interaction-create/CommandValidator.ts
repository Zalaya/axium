import { Validator } from "../../core/Validator";
import { ChatInputCommandInteraction, CommandInteraction } from "discord.js";
import { commands } from "../../constants/Commands";
import { Command } from "../../core/Command";

export class CommandValidator implements Validator {

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        if (!commands.find((command: Command) => command.name === (interaction as CommandInteraction).commandName)) {
            return false;
        }

        return true;
    }

}