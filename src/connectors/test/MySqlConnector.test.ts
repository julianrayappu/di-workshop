import { MySqlConnector } from "./../MySqlConnector";

jest.mock("./../MySqlConnector");

describe("if mysqlconnector is mocked", () => {
    test("gets a valid value", () => {
        expect(MySqlConnector.prototype.getData("")).toBe("mock data");
    });
});
