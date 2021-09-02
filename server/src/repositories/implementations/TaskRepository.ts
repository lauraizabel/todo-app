import { getRepository } from "typeorm";
import { Task } from "../../entities/Task";
import { ITaskRepository } from "../ITaskRepository";

export default class TaskRepository implements ITaskRepository {
  async getAll(): Promise<Task[]> {
    return await getRepository(Task).find();
  }

  async findById(id: number): Promise<Task> {
    return await getRepository(Task).findOne(id);
  }

  async delete(id: number): Promise<void> {
    await getRepository(Task).delete(id);
  }

  async create(task: Task): Promise<Task> {
    return await getRepository(Task).save(task);
  }

  async update(task: Task): Promise<Task> {
    await getRepository(Task).update({ id: task.id }, task);
    const updatedTask = await getRepository(Task).findOne(task.id);
    return updatedTask;
  }
}
