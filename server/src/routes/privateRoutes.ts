import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import createCategoryController from "../useCases/category/CreateCategory";
import deleteCategoryController from "../useCases/category/DeleteCategory";
import getAllCategoriesController from "../useCases/category/GetAllCategories";
import updateCategoryController from "../useCases/category/UpdateCategory";
import createTaskController from "../useCases/task/CreateTask";
import deleteTaskController from "../useCases/task/DeleteTask";
import getAllTaskController from "../useCases/task/GetAllTask";
import getOneTaskController from "../useCases/task/GetOneTask";
import updateTaskController from "../useCases/task/UpdateTask";
import updateUserController from "../useCases/user/UpdateUser";

const router = Router();

router.use(isAuthenticated);

router.put("/user", updateUserController.handle);

router.get("/categories", getAllCategoriesController.handle);
router.post("/category", createCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);

router.post("/task", createTaskController.handle);
router.delete("/task/:id", deleteTaskController.handle);
router.get("/tasks", getAllTaskController.handle);
router.get("/task/:id", getOneTaskController.handle);
router.put("/task/:id", updateTaskController.handle);

export default router;
