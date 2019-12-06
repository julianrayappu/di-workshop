import { injectable, inject } from "tsyringe";
import ISqlConnector from "../connectors/ISqlConnector";

@injectable()
export default class SqlDataSource {
    constructor(@inject("SqlConnector") private readonly connector: ISqlConnector) {
    }

    public getValue(): string {
        if (this.connector.connect()) {
            return this.connector.getData("field1");
        }
        return "no data";
    }
}
