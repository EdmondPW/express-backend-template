import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const secret = process.env.JWT_SECRET || "your_jwt_secret_key";

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, secret);
};

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};
