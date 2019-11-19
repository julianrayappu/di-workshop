import MySqlConnector from "../connectors/MySqlConnector";

export default class SqlDataSource {
    private readonly connector = new MySqlConnector();

    public getValue(): string {
        return this.connector.connectAndGetData();
    }
}
