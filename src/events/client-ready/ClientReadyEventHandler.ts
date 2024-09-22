import { Handler } from "../../shared/interfaces/Handler";
import { Client } from "discord.js";

export class ClientReadyEventHandler implements Handler {

    public async handle(client: Client): Promise<void> {
        console.log(`Bot is ready as ${client.user?.tag}!`)
    }

}