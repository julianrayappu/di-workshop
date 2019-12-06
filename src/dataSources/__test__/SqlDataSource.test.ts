import { ImportMock, MockManager } from "ts-mock-imports";
import "reflect-metadata";
import * as connector from "../../connectors/MySqlConnector";
import SqlDataSource from "../SqlDataSource";

describe("Test SqlDataSource", () => {
    let connectorMock: MockManager<connector.MySqlConnector>;
    let sqlDataSource: SqlDataSource;

    beforeEach(() => {
        connectorMock = ImportMock.mockClass(connector, "MySqlConnector");
        sqlDataSource = new SqlDataSource(connectorMock.getMockInstance());
    });

    afterEach(() => {
        connectorMock.restore();
    });

    test("gets a string value", () => {
        connectorMock.mock("connect", true);

        const data: string = "XQL data";
        connectorMock.mock("getData", data);

        // sqlDataSource.getValue();
        expect(sqlDataSource.getValue()).toBe(data);
    });
});
