import { EntityRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

@EntityRepository(User)
export default class UserRepository
  extends Repository<User>
  implements IUserRepository
{
  async createUser(user: User): Promise<void> {
    await this.save(user);
  }

  async findByEmailAndPassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await this.findOne({ email, password });
    return user ? user : null;
  }
}
