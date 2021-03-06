import { ITaskRepository } from "../../../repositories/ITaskRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";

export default class UpdateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository,
    private categoryRepository: ICategoryRepository
  ) {}

  execute = async (
    description: string,
    categoryId: string,
    done: boolean,
    id: string
  ): Promise<void> => {
    const oldTask = await this.taskRepository.findById(Number(id));
    if (!oldTask) {
      throw new Error("Task not found");
    }

    if (categoryId) {
      const category = await this.categoryRepository.findById(
        Number(categoryId)
      );

      if (!category) {
        throw new Error("Category not found");
      }
      oldTask.category = category;
    }

    oldTask.done = done;

    oldTask.description = description || oldTask.description;

    await this.taskRepository.update(oldTask);
  };
}
