import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
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
    res.status(StatusCodes.CREATED).json({ data });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: "something is wrong" });
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
    res.status(StatusCodes.OK).json({ data });
  } catch (err: any) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message || "Invalid credentials" });
  }
};
