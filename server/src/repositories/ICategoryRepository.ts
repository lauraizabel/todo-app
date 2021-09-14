import { Category } from "../entities/Category";

export interface ICategoryRepository {
  create(category: Category): Promise<Category>;
  update(category: Category): Promise<Category>;
  findById(id: number): Promise<Category>;
  deleteById(id: number): Promise<void>;
  getAll(): Promise<Category[]>;
}
