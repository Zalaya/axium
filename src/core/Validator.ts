export interface Validator {

    validate(...args: any[]): Promise<boolean>;

}