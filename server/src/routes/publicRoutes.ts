import { Router } from "express";
import createUserController from "../useCases/user/CreateUser";

const router = Router();

//register new user
router.post("/register", createUserController.handle);

//login
router.post("login");

export default router;
