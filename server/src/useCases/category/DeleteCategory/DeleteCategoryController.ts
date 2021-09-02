import { Response, Request } from "express";
import DeleteCategoryUseCase from "./DeleteCategoryUseCase";

export default class UpdateCategoryController {
  constructor(private DeleteCategoryUseCase: DeleteCategoryUseCase) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      await this.DeleteCategoryUseCase.execute(id);

      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  };
}
