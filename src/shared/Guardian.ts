export interface Guardian {

    guard(...args: any[]): Promise<boolean>;

}