import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import GetAllCategoriesController from "./GetAllCategoriesController";
import GetAllCategoriesUseCase from "./GetAllCategoriesUseCase";

const categoryRepository = new CategoryRepository();

const getAllCategoriesUseCase = new GetAllCategoriesUseCase(categoryRepository);

const getAllCategoriesController = new GetAllCategoriesController(
  getAllCategoriesUseCase
);

export default getAllCategoriesController;
