import "reflect-metadata";
import App from "./Server";
import { container } from "tsyringe";
import BaseRouter from "./router";
import UserController from "./controllers/UserController";
import SqlDataSource from "./dataSources/SqlDataSource";
import MySqlConnector from "./connectors/MySqlConnector";
import PostgresSqlConnector from "./connectors/PostgresSqlConnector";

container.register("SqlDataSource", { useClass: SqlDataSource });
container.register("SqlConnector", { useClass: PostgresSqlConnector });
container.register("BaseRouter", { useClass: BaseRouter });
container.register("UserController", { useClass: UserController });

const app = container.resolve(App);
// Start the server
const port = Number(process.env.PORT || 3000);
app.router.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Express server started on port ${port}.`);
});
