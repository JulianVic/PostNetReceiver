import { Request, Response } from "express";
import { ReadAllPostsUseCase } from "../../application/readAllPostsUseCase";

export class readAllPostsController {
  constructor(readonly ReadAllPostsUseCase: ReadAllPostsUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const posts = await this.ReadAllPostsUseCase.run();
      res.status(200).json(posts);
      console.log("Posts readed");
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
