import { ITaskRepository } from "../../../repositories/ITaskRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { Task } from "../../../entities/Task";

export default class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private categoryRepository: ICategoryRepository,
    private userRepository: IUserRepository
  ) {}

  execute = async (
    description: string,
    userId: string,
    categoryId: string
  ): Promise<void> => {
    const user = await this.userRepository.findById(Number(userId));
    if (!user) {
      throw new Error("User not found");
    }

    const category = await this.categoryRepository.findById(Number(categoryId));
    if (!category) {
      throw new Error("Category not found");
    }

    const task = new Task();
    task.category = category;
    task.user = user;
    task.description = description;

    await this.taskRepository.create(task);
  };
}
