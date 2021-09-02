import CategoryRepository from "../../../repositories/implementations/CategoryRepository";
import DeleteCategoryController from "./DeleteCategoryController";
import DeleteCategoryUseCase from "./DeleteCategoryUseCase";

const categoryRepository = new CategoryRepository();

const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository);

const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUseCase
);

export default deleteCategoryController;
