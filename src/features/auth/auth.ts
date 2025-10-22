import { betterAuth } from "better-auth";
import { jwt, bearer } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../../db/index";
import * as authSchema from "./schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: authSchema.user,
      session: authSchema.session,
      account: authSchema.account,
      verification: authSchema.verification,
      jwks: authSchema.jwks,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    jwt({
      jwt: {
        expirationTime: "8h",
      },
    }),
    bearer(),
  ],
  //just want to set it up to make sure it's the same as jwt expiration time
  session: {
    expiresIn: 8 * 60 * 60,
    updateAge: 5 * 60, //refresh session every 5 minutes
  },
  trustedOrigins: ["*"], //change to client domain
});
