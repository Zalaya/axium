import { PreEvent } from "../PreEvent";
import { Validator } from "../../shared/Validator";
import { InteractionValidator } from "./validators/InteractionValidator";
import { CommandValidator } from "./validators/CommandValidator";

export class PreInteractionCreateEvent extends PreEvent {

    protected validators: Validator[] = [
        new InteractionValidator(),
        new CommandValidator()
    ];

}