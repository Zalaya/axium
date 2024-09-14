import { Client, REST, Routes } from "discord.js";
import { commands } from "../constants/Commands";

export class CommandRegistrar {

    private readonly client: Client;

    public constructor(client: Client) {
        this.client = client;
    }

    public async registerCommands(): Promise<void> {
        const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN);

        try {
            await rest.put(
                Routes.applicationCommands(process.env.APPLICATION_ID), {
                    body: commands.map(command => ({
                        name: command.name,
                        description: command.description,
                        options: command.options
                    }))
                }
            );
        } catch (error) {
            console.error("Failed to register commands:", error);
        }
    }

}
