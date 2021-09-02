import { Task } from "../../../entities/Task";
import { ITaskRepository } from "../../../repositories/ITaskRepository";

export default class GetAllTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  execute = async (): Promise<Task[]> => {
    return await this.taskRepository.getAll();
  };
}
