import { Command } from "../interfaces/Command";
import { CleanCommand } from "../commands/CleanCommand";
import { KickCommand } from "../commands/KickCommand";

export const commands: Command[] = [

    new CleanCommand(),
    new KickCommand()

]