import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/createUserUseCase';

export class createUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) {}

  async run(req: Request, res: Response) {
    const { name, password } = req.body;
    try {
      const user = await this.createUserUseCase.run(name, password);
      res.status(201).json(user);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}