import { getRepository } from "typeorm";
import { ICategoryRepository } from "../ICategoryRepository";
import { Category } from "../../entities/Category";

export default class CategoryRepository implements ICategoryRepository {
  async create(category: Category): Promise<Category> {
    await getRepository(Category).save(category);
    return category;
  }
  async deleteById(id: number): Promise<void> {
    await getRepository(Category).delete({ id });
  }

  async findById(id: number): Promise<Category> {
    const category = await getRepository(Category).findOne({ id });
    return category ? category : null;
  }

  async update(category: Category): Promise<Category> {
    await getRepository(Category).update({ id: category.id }, category);
    return category;
  }

  async getAll(): Promise<Category[]> {
    const categories = await getRepository(Category).find();
    return categories;
  }
}
