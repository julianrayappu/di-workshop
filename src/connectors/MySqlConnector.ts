import ISqlConnector from "./ISqlConnector";

export default class MySqlConnector implements ISqlConnector {
    public connect(): boolean {
        return true;
    }
    public getData(key: string): string {
        // typically queries
        if (key === "field1") {
            return "column1";
        } else {
            return "dummy data";
        }
    }
    public connectAndGetData(): string {
        return "MySQL data";
    }
}

export { MySqlConnector };
