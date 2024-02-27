import { Request, Response } from "express";
import { CreatePostUseCase } from "../../application/createPostUseCase";

export class createPostController {
  constructor(readonly createPostUseCase: CreatePostUseCase) {}

  async run(req: Request, res: Response) {
    const { title, content, authorId } = req.body;
    try {
      const post = await this.createPostUseCase.run(title, content, authorId);
      res.status(201).json(post);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}