export default interface ISqlConnector {
    connect(): boolean;
    getData(key: string): string;
    connectAndGetData(): string;
}

export { ISqlConnector };
