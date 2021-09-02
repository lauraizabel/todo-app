import { Response, Request } from "express";
import UpdateUserUseCase from "./UpdateUserUseCase";

export default class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { firstName, lastName, email, password } = req.body;

      await this.updateUserUseCase.execute(
        firstName,
        lastName,
        email,
        password
      );

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
