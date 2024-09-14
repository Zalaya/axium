import { EventHandler } from "../EventHandler";
import { Client } from "discord.js";

export class OnClientReadyEventHandler implements EventHandler {

    protected async handle(client: Client): Promise<void> {
        console.log(`The client is ready! Logged in as ${client.user?.tag}.`);
    }

}