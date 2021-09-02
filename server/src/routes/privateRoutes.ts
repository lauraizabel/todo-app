import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import createCategoryController from "../useCases/category/CreateCategory";
import deleteCategoryController from "../useCases/category/DeleteCategory";
import updateCategoryController from "../useCases/category/UpdateCategory";
import createTaskController from "../useCases/task/CreateTask";
import deleteTaskController from "../useCases/task/DeleteTask";
import updateUserController from "../useCases/user/UpdateUser";

const router = Router();

router.use(isAuthenticated);

router.put("/user", updateUserController.handle);

router.post("/category", createCategoryController.handle);
router.put("/category/:id", updateCategoryController.handle);
router.delete("/category/:id", deleteCategoryController.handle);

router.post("/task", createTaskController.handle);
router.delete("/task/:id", deleteTaskController.handle);
router.get("/tasks");
router.get("/task/:id");
router.put("/task/:id");

export default router;
