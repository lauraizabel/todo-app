import { Response, Request } from "express";
import GetAllTaskUseCase from "./GetAllTaskUseCase";

export default class GetAllTaskController {
  constructor(private getAllTaskUseCase: GetAllTaskUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const tasks = await this.getAllTaskUseCase.execute();

      return response.status(200).json(tasks);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  };
}
