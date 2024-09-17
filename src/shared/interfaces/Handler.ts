export interface Handler {

    handle(...args: any[]): Promise<void>;

}