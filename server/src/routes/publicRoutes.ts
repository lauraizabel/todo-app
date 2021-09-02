import { Router } from "express";
import loginController from "../useCases/auth/Login";
import createUserController from "../useCases/user/CreateUser";

const router = Router();

router.post("/register", createUserController.handle);
router.post("/login", loginController.handle);

export default router;
