import { Response, Request } from "express";
import UpdateCategoryUseCase from "./UpdateCategoryUseCase";

export default class UpdateCategoryController {
  constructor(private updateCategoryUseCase: UpdateCategoryUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      await this.updateCategoryUseCase.execute(name, id);

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
