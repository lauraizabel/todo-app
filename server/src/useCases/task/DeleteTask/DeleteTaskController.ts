import { Response, Request } from "express";
import CreateTaskUseCase from "./DeleteTaskUseCase";

export default class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    try {
      await this.createTaskUseCase.execute(id);

      return response.sendStatus(201);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  }
}
