import { Client, REST, Routes } from "discord.js";
import { intents } from "./constants/Intents";
import { commands } from "./constants/Commands";
import { events } from "./constants/Events";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({ intents: intents });
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.TOKEN).then(() => {
                this.registerEvents();
                this.registerCommands();
            });
        } catch (error) {
            console.error("An error occurred while trying to start the bot: ", error);
        }
    }

    private registerEvents(): void {
        events.forEach(event => event.register(this.client));
    }

    private async registerCommands(): Promise<void> {
        const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

        try {
            await rest.put(
                Routes.applicationCommands(process.env.APPLICATION_ID), {
                    body: commands.map(command => ({
                        name: command.name,
                        description: command.description,
                        options: command.options
                    }))
                }
            )
        } catch (error) {
            console.error("Failed to register commands:", error);
        }
    }

}