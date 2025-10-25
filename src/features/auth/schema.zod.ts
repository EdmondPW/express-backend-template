import { createInsertSchema } from "drizzle-zod";
import { user, account } from "../../db/schema/auth.schema";
import { z } from "zod";

// Note to one self:
// it's easier to just create a zod schema for object with 3 property of user, password, and email...
//

const userInsertSchema = createInsertSchema(user);
const accountInsertSchema = createInsertSchema(account, {
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const userLoginFields = userInsertSchema.pick({
  email: true,
});

const accountFields = accountInsertSchema
  .pick({
    password: true,
  })
  .required({ password: true });

export const loginSchema = userLoginFields.extend({
  password: accountFields.shape.password,
});

export type LoginInput = z.infer<typeof loginSchema> & {
  rememberMe: boolean;
  callbackURL?: string;
};

const userFields = userInsertSchema.pick({
  name: true,
  email: true,
});

export const registerSchema = userFields.extend({
  password: accountFields.shape.password,
});

export type RegisterInput = z.infer<typeof registerSchema> & {
  image?: string;
  callbackURL?: string;
};
