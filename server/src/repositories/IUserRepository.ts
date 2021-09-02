import { User } from "../entities/User";

export interface IUserRepository {
  createUser(user: User): Promise<void>;
  update(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
}
