import { Task } from "../entities/Task";

export interface ITaskRepository {
  getAll(): Promise<Task[]>;
  findById(id: number): Promise<Task>;
  create(task: Task): Promise<Task>;
  update(task: Task): Promise<Task>;
  delete(id: number): Promise<void>;
}
