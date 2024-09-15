import { Client } from "discord.js";
import { intents } from "./constants/Intents";
import { EventRegistrar } from "./events/EventRegistrar";
import { CommandRegistrar } from "./commands/CommandRegistrar";

export class Bot {

    private readonly client: Client;
    private readonly commandRegistrar: CommandRegistrar;
    private readonly eventRegistrar: EventRegistrar;

    public constructor() {
        this.client = new Client({ intents: intents });
        this.commandRegistrar = new CommandRegistrar(this.client);
        this.eventRegistrar = new EventRegistrar(this.client);
    }

    public async start(): Promise<void> {
        try {
            await this.client.login(process.env.BOT_TOKEN);
            this.eventRegistrar.registerEvents();
            await this.commandRegistrar.registerCommands();
        } catch (error) {
            console.error("An error occurred while trying to start the bot: ", error);
        }
    }

}