import { Client } from "discord.js";
import { intents } from "./constants/Intents";
import { EventRegistrar } from "./events/EventRegistrar";
import { CommandRegistrar } from "./commands/CommandRegistrar";

export class Bot {

    private readonly client: Client;
    private readonly commandService: CommandRegistrar;
    private readonly eventService: EventRegistrar;

    public constructor() {
        this.client = new Client({ intents: intents });
        this.commandService = new CommandRegistrar(this.client);
        this.eventService = new EventRegistrar(this.client);
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.BOT_TOKEN);
            this.eventService.registerEvents();
            await this.commandService.registerCommands();
        } catch (error) {
            console.error("An error occurred while trying to start the bot: ", error);
        }
    }

}