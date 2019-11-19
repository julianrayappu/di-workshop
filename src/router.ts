import { Router } from "express";
import UserController from "./controllers/UserController";
const userController = new UserController();

// Init router and path
const router = Router();

// Add sub-routes
router.use("/users", userController.router);

// Export the base-router
export default router;
