import { PreCommand } from "../PreCommand";
import { PermissionFlagsBits } from "discord.js";
import { Validator } from "../Validator";
import { PermissionValidator } from "../PermissionValidator";
import { ChannelValidator } from "../ChannelValidator";
import { AmountValidator } from "./AmountValidator";
import { MessageCountValidator } from "./MessageCountValidator";

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