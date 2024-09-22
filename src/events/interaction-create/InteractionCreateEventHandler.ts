import { Handler } from "../../shared/interfaces/Handler";
import { ChatInputCommandInteraction, Interaction } from "discord.js";
import { COMMAND_LISTENERS } from "../../shared/constants/CommandListeners";

export class InteractionCreateEventHandler implements Handler {

    public async handle(interaction: Interaction): Promise<void> {
        const commandInteraction = interaction as ChatInputCommandInteraction;
        const commandListener = COMMAND_LISTENERS.find(listener => listener.builder.name === commandInteraction.commandName);

        if (commandListener) {
            await commandListener.execute(commandInteraction, interaction.client);
        } else {
            await commandInteraction.reply({ content: "This command does not exist!", ephemeral: true });
        }
    }

}