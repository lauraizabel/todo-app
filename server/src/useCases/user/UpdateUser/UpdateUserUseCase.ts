import { IUserRepository } from "../../../repositories/IUserRepository";
import bcrypt from "bcrypt";

export default class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> => {
    const oldUser = await this.userRepository.findByEmail(email);

    oldUser.email = email || oldUser.email;
    oldUser.firstName = firstName || oldUser.firstName;
    oldUser.lastName = lastName || oldUser.lastName;

    if (password.length > 0) {
      const encryptedPassword = await bcrypt.hash(password, 10);
      oldUser.password = encryptedPassword;
    }

    await this.userRepository.update(oldUser);
  };
}
