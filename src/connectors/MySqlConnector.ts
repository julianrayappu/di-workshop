import ISqlConnector from "./ISqlConnector";

export default class MySqlConnector implements ISqlConnector {
    public connectAndGetData(): string {
        return "MySQL data";
    }
}
