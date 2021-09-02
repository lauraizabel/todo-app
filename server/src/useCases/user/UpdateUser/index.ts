import UserRepository from "../../../repositories/implementations/UserRepository";
import UpdateUserUseCase from "./UpdateUserUseCase";
import UpdateUserController from "./UpdateUserController";

const userRepository = new UserRepository();

const updateUserUseCase = new UpdateUserUseCase(userRepository);

const updateUserController = new UpdateUserController(updateUserUseCase);

export default updateUserController;
