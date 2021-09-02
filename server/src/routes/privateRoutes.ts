import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import createCategoryController from "../useCases/category/CreateCategory";
import updateUserController from "../useCases/user/UpdateUser";

const router = Router();

router.use(isAuthenticated);

router.put("/user", updateUserController.handle);

router.post("/category", createCategoryController.handle);

export default router;
