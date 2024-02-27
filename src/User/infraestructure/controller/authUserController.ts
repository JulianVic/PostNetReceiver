import { Request, Response } from "express"; 
import { AuthUserUseCase } from "../../application/authUserUseCase";

export class authUserController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

  async run(req: Request, res: Response): Promise<Response> {
    const { id, password } = req.body;
    try {
      const result = await this.authUserUseCase.run(id, password);
      return res.status(200).json(result);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}