import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export default class UpdateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute = async (name: string, id: string): Promise<void> => {
    const oldCategory = await this.categoryRepository.findById(parseInt(id));

    if (!oldCategory) {
      throw new Error("Category not found");
    }

    const category = new Category();
    category.name = name || oldCategory.name;

    await this.categoryRepository.update(category);
  };
}
