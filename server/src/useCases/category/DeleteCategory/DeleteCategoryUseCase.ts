import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export default class DeleteCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute = async (id: string): Promise<void> => {
    const category = await this.categoryRepository.findById(Number(id));

    if (!category) {
      throw new Error("Category not found");
    }

    await this.categoryRepository.deleteById(parseInt(id));
  };
}
