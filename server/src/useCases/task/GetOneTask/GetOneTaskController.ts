import { Response, Request } from "express";
import GetOneTaskUseCase from "./GetOneTaskUseCase";

export default class GetOneTaskController {
  constructor(private getOneTaskUseCase: GetOneTaskUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const { id } = request.params;
      const task = await this.getOneTaskUseCase.execute(id);

      return response.status(200).json(task);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  };
}
