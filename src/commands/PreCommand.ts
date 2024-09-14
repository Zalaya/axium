import { Validator } from "../core/Validator";
import { ChatInputCommandInteraction } from "discord.js";

export abstract class PreCommand {

    protected abstract validators: Validator[];

    public async validate(interaction: ChatInputCommandInteraction): Promise<boolean> {
        for (const validator of this.validators) {
            if (!await validator.validate(interaction)) {
                return false;
            }
        }

        return true;
    }

}