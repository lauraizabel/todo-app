import { Response, Request } from "express";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, userId } = req.body;

      await this.createCategoryUseCase.execute(name, userId);

      return res.sendStatus(201);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
