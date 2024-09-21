import { CommandListener } from "../commands/CommandListener";
import { CleanCommandListener } from "../../commands/clean/CleanCommandListener";

export const COMMAND_LISTENERS: CommandListener[] = [

    new CleanCommandListener()

];