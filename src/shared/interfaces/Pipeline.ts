export interface Pipeline {

    execute(...args: any[]): Promise<void>;

}