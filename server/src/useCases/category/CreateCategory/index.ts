import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import UserRepository from "../../../repositories/implementations/UserRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

const categoryRepository = new CategoryRepository();
const userRepository = new UserRepository();

const createCategoryUseCase = new CreateCategoryUseCase(
  categoryRepository,
  userRepository
);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export default createCategoryController;
