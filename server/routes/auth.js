import { Router } from "express";
import { register, login, me } from "../controllers/Auth.js";
import protect from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, me);

export default router;