import { Request, Response } from "express";
import { ReadAllUsersUseCase } from "../../application/readAllUsersUseCase";

export class readAllUsersController {
  constructor(readonly ReadAllUsersUseCase: ReadAllUsersUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.ReadAllUsersUseCase.run();
      res.status(200).json(users);
      console.log("Users readed");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
