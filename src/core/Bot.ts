import { Client } from "discord.js";
import { INTENTS } from "./constants/Intents";
import { PARTIALS } from "./constants/Partials";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            partials: PARTIALS
        });
    }

}
