// import { ImportMock, MockManager } from "ts-mock-imports";
import "reflect-metadata";
import { StubSqlConnector } from "../../connectors/test/StubSqlConnector";
import SqlDataSource from "../SqlDataSource";

jest.mock("../../connectors/MySqlConnector");

describe("Test SqlDataSource", () => {
    const sqlDataSource: SqlDataSource = new SqlDataSource(StubSqlConnector.prototype);

    test("gets a string value successfully", () => {
        // set up the mock
        StubSqlConnector.prototype.connect = jest.fn().mockReturnValue(true);
        StubSqlConnector.prototype.getData = jest.fn().mockReturnValue("Dummy Data");

        const value: string = sqlDataSource.getValue();

        expect(value).toBe("Dummy Data");
        expect(StubSqlConnector.prototype.connect).toBeCalledTimes(1);
        expect(StubSqlConnector.prototype.getData).toBeCalledTimes(1);
        expect(StubSqlConnector.prototype.getData).toHaveBeenCalledWith("key");
    });

    test("gets a string value, after 2 connect attempts", () => {
        StubSqlConnector.prototype.connect = jest.fn().mockReturnValueOnce(false)
                                                    .mockReturnValueOnce(true);

        StubSqlConnector.prototype.getData = jest.fn().mockReturnValue("dummy data");

        // Make the test call
        const value: string = sqlDataSource.getValue();

        expect(value).toBe("dummy data");
        expect(StubSqlConnector.prototype.connect).toBeCalledTimes(2);
        expect(StubSqlConnector.prototype.getData).toBeCalled();
    });

    test("fails to get a string value, \"Failed to connect\" thrown", () => {
        StubSqlConnector.prototype.connect = jest.fn().mockReturnValue(false);
        StubSqlConnector.prototype.getData = jest.fn().mockReturnValue("test data");

        // Make the test call
        let value: string = "";
        try {
            expect(value = sqlDataSource.getValue()).toThrow("Failed to connect");
        } catch (e) {
            expect(value).toBe("");
        }

        expect(StubSqlConnector.prototype.connect).toBeCalledTimes(3);
        expect(StubSqlConnector.prototype.getData).toBeCalledTimes(0);
    });
});
