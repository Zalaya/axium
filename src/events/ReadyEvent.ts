import { Client, Discord, On } from "discordx";
import { Events } from "discord.js";

@Discord()
export class ReadyEvent {

    @On({ event: Events.ClientReady })
    async onReady(client: Client): Promise<void> {
        await client.initApplicationCommands();
    }

}