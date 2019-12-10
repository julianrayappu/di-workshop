import MySqlConnector from "../connectors/MySqlConnector";

export default class DataSource {
    private readonly connector: MySqlConnector = new MySqlConnector();

    public getValue(): string {
        if (!this.connect()) {
            throw new Error("Failed to connect");
        }
        return this.connector.getData("key");
    }

    public connect(): boolean {
        const maxRetries: number = 3;
        let attempts: number = 0;
        while (attempts < maxRetries && !this.connector.connect()) {
            attempts++;
        }
        return attempts < maxRetries;
    }
}

export { DataSource };
