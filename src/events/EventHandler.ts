export interface EventHandler {

    handle(...args: any[]): Promise<void>;

}