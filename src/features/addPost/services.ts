import { CreatePostInput } from "./schema.zod";
import { db } from "../../db/index";
import { Posts } from "../../db/schema/post.schema";

export const createPost = async ({
  title,
  owner,
  published,
  content,
}: CreatePostInput) => {
  try {
    const result = db
      .insert(Posts)
      .values({ title, owner, published, content })
      .returning();

    return result;
  } catch (error) {
    return error;
  }
};
