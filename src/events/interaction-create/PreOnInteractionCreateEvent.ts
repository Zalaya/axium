import { PreEvent } from "../PreEvent";
import { Validator } from "../../core/Validator";
import { InteractionValidator } from "./InteractionValidator";
import { CommandValidator } from "./CommandValidator";

export class PreOnInteractionCreateEvent extends PreEvent {

    protected validators: Validator[] = [
        new InteractionValidator(),
        new CommandValidator()
    ];

}