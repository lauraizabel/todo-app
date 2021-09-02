import { Response, Request } from "express";
import CreateTaskUseCase from "./CreateTaskUseCase";

export default class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    const { description, userId, categoryId } = request.body;

    try {
      await this.createTaskUseCase.execute(description, userId, categoryId);

      return response.sendStatus(201);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  };
}
