import { Response, Request } from "express";
import GetAllCategoriesUseCase from "./GetAllCategoriesUseCase";

export default class GetAllCategories {
  constructor(private getAllCategoriesUseCase: GetAllCategoriesUseCase) {}

  handle = async (request: Request, response: Response): Promise<Response> => {
    try {
      const categories = await this.getAllCategoriesUseCase.execute();

      return response.status(200).json(categories);
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      });
    }
  };
}
