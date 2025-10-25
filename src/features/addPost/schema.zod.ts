import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import { Posts } from "../../db/schema/post.schema";

const postInsertSchema = createInsertSchema(Posts);

export const PostInputFields = postInsertSchema
  .pick({
    title: true,
    content: true,
    owner: true,
    published: true,
  })
  .required({ published: true, content: true });

export type CreatePostInput = z.infer<typeof PostInputFields>;
