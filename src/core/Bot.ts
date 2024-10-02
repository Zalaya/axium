import { Client } from "discordx";
import { INTENTS } from "./constants/Intents";
import { importx } from "@discordx/importer";

export class Bot {

    private readonly client: Client;

    public constructor() {
        this.client = new Client({
            intents: INTENTS,
            silent: false
        })
    }

    public async start(): Promise<void> {
        await this.loadModules().then(async () => {
            await this.client.login(process.env.TOKEN as string);
        })
    }

    private async loadModules(): Promise<void> {
        await importx(`${__dirname}/../{events, commands}/**/*.{ts}`);
    }

}