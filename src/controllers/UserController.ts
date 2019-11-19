import { Router } from "express";
import SqlDataSource from "../dataSources/SqlDataSource";
import { injectable, inject } from "tsyringe";

@injectable()
export default class UserController {
    public readonly router = Router();

    constructor(@inject("SqlDataSource") private readonly dataSource: SqlDataSource ) {
        this.init();
    }

    private init() {
        this.router.get("/", (req, res) => {
            res.send(this.dataSource.getValue());
        });
    }
}
