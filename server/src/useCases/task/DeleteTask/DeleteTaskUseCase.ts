import { ITaskRepository } from "../../../repositories/ITaskRepository";

export default class DeleteTaskUseCase {
  constructor(private taskRepository: ITaskRepository) {}

  public async execute(id: string): Promise<void> {
    await this.taskRepository.delete(Number(id));
  }
}
