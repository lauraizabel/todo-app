import { IUserRepository } from "../../../repositories/IUserRepository";
import bcrypt from "bcrypt";
import { User } from "../../../entities/User";

export default class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> => {
    const newUser = new User();

    const encryptedPassword = bcrypt.hash(password, 10);
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = encryptedPassword;

    this.userRepository.createUser(newUser);
  };
}
