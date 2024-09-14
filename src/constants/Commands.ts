import { Command } from "../interfaces/Command";
import { CleanCommand } from "../commands/clean/CleanCommand";

export const commands: Command[] = [

    new CleanCommand()

]