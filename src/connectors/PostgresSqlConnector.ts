import ISqlConnector from "./ISqlConnector";

export default class PostgresSqlConnector implements ISqlConnector {
    public connect(): boolean {
        return true;
    }
    public getData(key: string): string {
        // typically queries
        if (key === "field2") {
            return "column2";
        } else {
            return "dummy data";
        }
    }public connectAndGetData(): string {
        return "PostgresSQL data";
    }
}
