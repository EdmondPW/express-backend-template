import { generateToken, hashPassword, comparePassword } from "@/src/utils/auth";
import { UserModel } from "@/src/db/userModel";

export const register = async (username: string, password: string) => {
  const hashedPassword = await hashPassword(password);
  const newUser = UserModel.create({ username, password: hashedPassword });
  const token = generateToken(newUser.id.toString() + newUser.username);
  return token;
};

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const user = await UserModel.findByUsername(username);
  if (!user) {
    throw new Error("Invalid username or password");
  }

  const valid = await comparePassword(password, user.password);
  if (!valid) {
    throw new Error("Invalid username or password");
  }

  return generateToken(user.id.toString() + user.username);
};
