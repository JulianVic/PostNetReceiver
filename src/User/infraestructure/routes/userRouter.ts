import express from "express";

import { createUserControllerInstance } from "../dependencies";
import { readAllUsersControllerInstance } from "../dependencies";
import { readByIdUserControllerInstance } from "../dependencies";
import { authUserControllerInstance } from "../dependencies";

export const userRouter = express.Router();

userRouter.post("/", createUserControllerInstance.run.bind(createUserControllerInstance));
userRouter.get("/", readAllUsersControllerInstance.run.bind(readAllUsersControllerInstance));
userRouter.get("/:id", readByIdUserControllerInstance.run.bind(readByIdUserControllerInstance));
userRouter.post("/auth", authUserControllerInstance.run.bind(authUserControllerInstance));
