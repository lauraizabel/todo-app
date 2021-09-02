import { IUserRepository } from "../../../repositories/IUserRepository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { LoginReturn } from "../../../@types";

export default class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute = async (email: string, password: string): Promise<LoginReturn> => {
    const user = await this.userRepository.findByEmailAndPassword(email);

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Credentials invalid");
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET);

    const returnedUser = { id: user.id, email, token };

    return returnedUser;
  };
}
