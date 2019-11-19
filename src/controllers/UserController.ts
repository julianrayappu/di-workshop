import { Router } from "express";
import SqlDataSource from "../dataSources/SqlDataSource";

export default class UserController {
    public readonly router = Router();
    private readonly dataSource = new SqlDataSource();

    constructor() {
        this.init();
    }

    private init() {
        this.router.get("/", (req, res) => {
            res.send(this.dataSource.getValue());
        });
    }
}
