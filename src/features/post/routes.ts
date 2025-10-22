import { Router } from "express";
import validateBody from "../../utils/validator";
import { PostInputFields } from "./schema.zod";
import { createPostController } from "./controller";

const router = Router();

router.post(
  "/create-post",
  validateBody(PostInputFields),
  createPostController
);

export default router;
