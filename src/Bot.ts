import { Client } from "discord.js";
import { intents } from "./constants/Intents";
import { EventService } from "./services/EventService";
import { CommandService } from "./services/CommandService";

export class Bot {

    private readonly client: Client;
    private readonly commandService: CommandService;
    private readonly eventService: EventService;

    public constructor() {
        this.client = new Client({ intents: intents });
        this.commandService = new CommandService(this.client);
        this.eventService = new EventService(this.client);
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