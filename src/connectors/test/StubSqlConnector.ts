import ISqlConnector from "./../ISqlConnector";

export default class StubSqlConnector implements ISqlConnector {
    public connect(): boolean {
        return false;
    }
    public getData(key: string): string {
        return "";
    }
    public connectAndGetData(): string {
        return "";
    }
}

export { StubSqlConnector };
