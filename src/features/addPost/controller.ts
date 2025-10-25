import { Request, Response } from "express";
import { CreatePostInput } from "./schema.zod";
import { createPost } from "./services";
import { StatusCodes } from "http-status-codes";
export const createPostController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, owner, published, content } = req.body as CreatePostInput;
  try {
    const result = await createPost({ title, owner, published, content });
    res.sendStatus(StatusCodes.CREATED).json(result);
  } catch (error) {
    res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
