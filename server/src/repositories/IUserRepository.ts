import { User } from "../entities/User";

export interface IUserRepository {
  createUser(user: User): Promise<void>;
  findByEmailAndPassword(email: string): Promise<User | null>;
}
