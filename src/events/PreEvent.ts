import { Validator } from "../shared/Validator";

export abstract class PreEvent {

    protected abstract validators: Validator[];

    public async validate(...args: any[]): Promise<boolean> {
        for (const validator of this.validators) {
            if (!await validator.validate(...args)) {
                return false;
            }
        }

        return true;
    }

}
