import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated";

const router = Router();

router.use(isAuthenticated);

router.get("/testing", (req, res) => {
  res.json({ message: "Is authenticated :)" });
});

export default router;
