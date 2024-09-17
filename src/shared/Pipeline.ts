export interface Pipeline {

    process(...args: any[]): Promise<void>;

}