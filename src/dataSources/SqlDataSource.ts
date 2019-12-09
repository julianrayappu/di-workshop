import { injectable, inject } from "tsyringe";
import ISqlConnector from "../connectors/ISqlConnector";

@injectable()
export default class SqlDataSource {
    constructor(@inject("SqlConnector") private readonly connector: ISqlConnector) {
    }

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
