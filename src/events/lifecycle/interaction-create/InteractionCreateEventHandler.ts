import { Handler } from "../../../shared/interfaces/Handler";
import { Interaction } from "discord.js";

export class InteractionCreateEventHandler implements Handler {

    public async handle(interaction: Interaction): Promise<void> {
        console.log(`Interaction created: ${interaction.id}`);
    }

}