import { Router } from "express";
import * as userController from "../controllers/userController";

const routes = Router();

routes.get("/", userController.getUsers);
routes.get("/:id", userController.getUser);

export default routes;