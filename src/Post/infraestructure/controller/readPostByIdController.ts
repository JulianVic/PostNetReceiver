import { Request, Response } from "express";
import { ReadPostByIdUseCase } from "../../application/readPostByIdUseCase";

export class readPostByIdController {
  constructor(readonly ReadPostByIdUseCase: ReadPostByIdUseCase) {}

  async run(req: Request, res: Response) {
    const id = req.params.id;
    const idNumber = parseInt(id);
    try {
      const post = await this.ReadPostByIdUseCase.run(idNumber);
      res.status(200).json(post);
      console.log("Post readed");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}