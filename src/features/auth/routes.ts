import { Router } from "express";
import { register, login } from "./controller";
import validateBody from "../../utils/validator";
import { loginSchema, registerSchema } from "./schema.zod";

const router = Router();

router.post("/register", validateBody(registerSchema), register);
router.post("/login", validateBody(loginSchema), login);

export default router;
