import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import UpdateCategoryController from "./UpdateCategoryController";
import UpdateCategoryUseCase from "./UpdateCategoryUseCase";

const categoryRepository = new CategoryRepository();

const updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepository);

const updateCategoryController = new UpdateCategoryController(
  updateCategoryUseCase
);

export default updateCategoryController;
