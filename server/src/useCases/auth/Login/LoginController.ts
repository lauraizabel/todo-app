import { Response, Request } from "express";
import LoginUseCase from "./LoginUseCase";

export default class CreateUserController {
  constructor(private loginUseCase: LoginUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;

      const userInfo = await this.loginUseCase.execute(email, password);

      return res.status(200).json(userInfo);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
