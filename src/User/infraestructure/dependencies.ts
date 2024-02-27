import { CreateUserUseCase } from "../application/createUserUseCase";
import { ReadAllUsersUseCase } from "../application/readAllUsersUseCase";
import { ReadUserByIdUseCase } from "../application/readUserByIdUseCase";
import { AuthUserUseCase } from "../application/authUserUseCase";

import { createUserController } from "./controller/createUserController";
import { readAllUsersController } from "./controller/readAllUsersController";
import { readByIdUserController } from "./controller/readUserByIdController";
import { authUserController } from "./controller/authUserController";

import { PrismaUserRepository } from "./repositories/prismaUserRepository";
import { BcryptService } from "./services/EncryptService";  

export const prismaUserRepository = new PrismaUserRepository();
export const bcryptService = new BcryptService();

export const createUserUseCase = new CreateUserUseCase(prismaUserRepository, bcryptService);
export const readAllUsersUseCase = new ReadAllUsersUseCase(prismaUserRepository);
export const readUserByIdUseCase = new ReadUserByIdUseCase(prismaUserRepository);
export const authUserUseCase = new AuthUserUseCase(prismaUserRepository, bcryptService);

export const createUserControllerInstance = new createUserController(createUserUseCase);
export const readAllUsersControllerInstance = new readAllUsersController(readAllUsersUseCase);
export const readByIdUserControllerInstance = new readByIdUserController(readUserByIdUseCase);
export const authUserControllerInstance = new authUserController(authUserUseCase);