import { PreEvent } from "../PreEvent";
import { Validator } from "../../shared/Validator";
import { InteractionValidator } from "./InteractionValidator";
import { CommandValidator } from "./CommandValidator";

export class PreInteractionCreateEvent extends PreEvent {

    protected validators: Validator[] = [
        new InteractionValidator(),
        new CommandValidator()
    ];

}