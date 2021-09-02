import { Category } from "../../../entities/Category";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";

export default class CreateCategoryUseCase {
  constructor(
    private categoryRepository: ICategoryRepository,
    private userRepository: IUserRepository
  ) {}

  execute = async (name: string, userId: string): Promise<void> => {
    const user = await this.userRepository.findById(parseInt(userId));

    if (!user) {
      throw new Error("User id invalid: " + userId);
    }

    const category = new Category();
    category.name = name;
    category.user = user;

    await this.categoryRepository.create(category);
  };
}
