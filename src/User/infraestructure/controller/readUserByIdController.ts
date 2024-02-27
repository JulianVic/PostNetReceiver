import { Request, Response } from "express";
import { ReadUserByIdUseCase } from "../../application/readUserByIdUseCase";

export class readByIdUserController {
  constructor(readonly ReadUserByIdUseCase: ReadUserByIdUseCase) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;
    const idNumber = parseInt(id);
    try {
      const user = await this.ReadUserByIdUseCase.run(idNumber);
      res.status(200).json(user);
      console.log("User readed");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
