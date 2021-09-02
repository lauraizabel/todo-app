import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";
import updateUserController from "../useCases/user/UpdateUser";

const router = Router();

router.use(isAuthenticated);

router.put("/user", updateUserController.handle);

export default router;
