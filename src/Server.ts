import cookieParser from "cookie-parser";
import express from "express";
import logger from "morgan";
import path from "path";
import BaseRouter from "./router";

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("/", BaseRouter);

 // Export express instance
export default app;
