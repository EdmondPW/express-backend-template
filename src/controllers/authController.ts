import { Request, Response } from "express";
import * as authService from "../services/authService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await authService.register(username, password);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ message: "something is wrong" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, password } = req.body;
    const token = await authService.login(username, password);
    res.status(200).json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message || "Invalid credentials" });
  }
};
