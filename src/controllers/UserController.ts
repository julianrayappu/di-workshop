import { Router } from "express";

export default class UserController {
    public readonly router = Router();

    constructor() {
        this.init();
    }

    private init() {
        this.router.get("/", (req, res) => {
            res.send("Hello Kitty");
        });
    }
}
