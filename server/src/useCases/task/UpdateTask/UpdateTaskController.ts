import { Response, Request } from "express";
import CreateTaskUseCase from "./UpdateTaskUseCase";

export default class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
    const { description, done, categoryId } = request.body;

    try {
      await this.createTaskUseCase.execute(description, categoryId, done, id);

      return response.sendStatus(200);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  };
}
