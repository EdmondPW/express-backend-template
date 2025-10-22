import { LoginInput, RegisterInput } from "./schema.zod";
import { auth } from "./auth";

export const signup = async ({
  name,
  email,
  password,
  image = "",
  callbackURL = "",
}: RegisterInput) => {
  const data = await auth.api.signUpEmail({
    body: {
      name: name, // required
      email: email, // required
      password: password, // required
      image: image || "https://example.com/user.png",
      callbackURL: callbackURL || "https://example.com/dashboard",
    },
  });
  return data;
};

export const signin = async ({
  email,
  password,
  rememberMe,
  callbackURL,
}: LoginInput) => {
  const data = await auth.api.signInEmail({
    body: {
      email: email, // required
      password: password, // required
      rememberMe: rememberMe || true,
      callbackURL: callbackURL || "https://example.com/dashboard",
    },
  });

  return data;
};
