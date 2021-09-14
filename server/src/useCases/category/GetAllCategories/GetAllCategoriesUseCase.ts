import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export default class GetAllCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute = async (): Promise<Category[]> => {
    return await this.categoryRepository.getAll();
  };
}
