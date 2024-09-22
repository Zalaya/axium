import { REST, Routes } from "discord.js";
import { COMMAND_LISTENERS } from "../constants/CommandListeners";

export class CommandRegistrar {

    public static async register(): Promise<void> {
        const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

        try {
            await rest.put(
                Routes.applicationCommands(process.env.APPLICATION_ID),
                { body: COMMAND_LISTENERS.map((command) => command.builder.toJSON()) }
            );
        } catch (error) {
            console.error("Failed to register commands:", error);
        }
    }

}