import { Router } from "express";
import loginController from "../useCases/auth/Login";
import createUserController from "../useCases/user/CreateUser";

const router = Router();

//register new user
router.post("/register", createUserController.handle);

//login
router.post("/login", loginController.handle);

export default router;
