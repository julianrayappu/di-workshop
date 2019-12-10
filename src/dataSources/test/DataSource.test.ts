import { DataSource } from "../DataSource";
import { MySqlConnector } from "../../connectors/MySqlConnector";

jest.mock("../../connectors/MySqlConnector");

describe("Test DataSource", () => {
    const dataSource: DataSource = new DataSource();

    test("gets a string value from the MySqlConnector mock", () => {
        let value: string = "x";
        try {
            value = dataSource.getValue();
        } finally {
            expect(value).toBe("Dummy Data");
        }
    });
});
