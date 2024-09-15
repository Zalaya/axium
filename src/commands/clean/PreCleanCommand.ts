import { PreCommand } from "../PreCommand";
import { PermissionFlagsBits } from "discord.js";
import { Validator } from "../../shared/Validator";
import { PermissionValidator } from "../validators/PermissionValidator";
import { ChannelValidator } from "../validators/ChannelValidator";
import { AmountValidator } from "./validators/AmountValidator";
import { MessageCountValidator } from "./validators/MessageCountValidator";

export class PreCleanCommand extends PreCommand {

    public validators: Validator[] = [
        new ChannelValidator(),
        new PermissionValidator([
            PermissionFlagsBits.ManageMessages,
            PermissionFlagsBits.ReadMessageHistory
        ]),
        new AmountValidator(),
        new MessageCountValidator()
    ];

}