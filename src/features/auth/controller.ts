import { Request, Response } from "express";
import * as authService from "./service";
import { LoginInput, RegisterInput } from "./schema.zod";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, password, email, image, callbackURL } =
      req.body as RegisterInput;
    const data = authService.signup({
      name,
      email,
      password,
      image,
      callbackURL,
    });
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ message: "something is wrong" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { password, email, rememberMe, callbackURL } = req.body as LoginInput;
    const data = await authService.signin({
      email,
      password,
      rememberMe,
      callbackURL,
    });
    res.status(200).json({ data });
  } catch (err: any) {
    res.status(400).json({ message: err.message || "Invalid credentials" });
  }
};
