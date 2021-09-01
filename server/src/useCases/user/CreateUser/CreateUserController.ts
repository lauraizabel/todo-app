import { Response, Request } from "express";
import CreateUserUseCase from "./CreateUserUseCase";

export default class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { firstName, lastName, email, password } = req.body;

      await this.createUserUseCase.execute(
        firstName,
        lastName,
        email,
        password
      );

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
