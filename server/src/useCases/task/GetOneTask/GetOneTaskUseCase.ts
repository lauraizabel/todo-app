import { Task } from "../../../entities/Task";
import { ITaskRepository } from "../../../repositories/ITaskRepository";

export default class GetOneTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  execute = async (id: string): Promise<Task> => {
    return await this.taskRepository.findById(Number(id));
  };
}
