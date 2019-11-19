import { Router } from "express";
import UserController from "./controllers/UserController";
import { injectable, inject } from "tsyringe";

@injectable()
export default class MyRouter {
    public readonly router = Router();

    constructor(@inject("UserController") private readonly userController?: UserController) {
        this.init();
    }

    private init() {
        // Add sub-routes
        this.router.use("/users", this.userController!.router);
    }

}
