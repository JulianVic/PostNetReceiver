import express from "express";

import { createPostControllerInstance } from "../dependencies"; 
import { readAllPostsControllerInstance } from "../dependencies";
import { readPostByIdControllerInstance } from "../dependencies";

export const postRouter = express.Router();

postRouter.post("/", createPostControllerInstance.run.bind(createPostControllerInstance));
postRouter.get("/", readAllPostsControllerInstance.run.bind(readAllPostsControllerInstance));
postRouter.get("/:id", readPostByIdControllerInstance.run.bind(readPostByIdControllerInstance));