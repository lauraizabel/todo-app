import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

//TODO - Descobrir por que implementar o repositório de usuários dá erro
export default class UserRepository implements IUserRepository {
  /*  
  public userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }
  */
  async createUser(user: User): Promise<void> {
    try {
      await getRepository(User).save(user);
    } catch (error) {
      throw new Error(error);
    }
    //await this.userRepository.save(user);
  }

  async findByEmailAndPassword(email: string): Promise<User | null> {
    //const user = await this.userRepository.findOne({ email, password });
    const user = await getRepository(User).findOne({ email });
    return user ? user : null;
  }
}
