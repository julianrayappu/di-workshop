import cookieParser from "cookie-parser";
import express, { Router } from "express";
import logger from "morgan";
import BaseRouter from "./router";
import {singleton, inject} from "tsyringe";

@singleton()
export default class App {
    public readonly router = express();

    constructor(@inject("BaseRouter") private readonly baseRouter?: BaseRouter) {
        this.init();
    }

    public init(): void {
        this.router.use(logger("dev"));
        this.router.use(express.json());
        this.router.use(express.urlencoded({extended: true}));
        this.router.use(cookieParser());
        this.router.use("/", this.baseRouter!.router);
    }
}
