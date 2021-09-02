import { ITaskRepository } from "../../../repositories/ITaskRepository";

export default class DeleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  execute = async (id: string): Promise<void> => {
    await this.taskRepository.delete(Number(id));
  };
}
