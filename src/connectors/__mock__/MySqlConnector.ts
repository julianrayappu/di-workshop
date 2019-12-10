import { ISqlConnector } from "../ISqlConnector";
// mock
export default class MySqlConnector implements ISqlConnector {
    public connect(): boolean {
        return true;
    }
    public getData(key: string): string {
        return "mock data";
    }
    public connectAndGetData(): string {
        return this.getData("");
    }
}

export { MySqlConnector };
