import ISqlConnector from "./ISqlConnector";

export default class PostgresSqlConnector implements ISqlConnector {
    public connectAndGetData(): string {
        return "PostgresSQL data";
    }
}
