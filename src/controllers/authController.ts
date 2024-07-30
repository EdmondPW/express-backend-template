import { Request, Response } from "express";
import {
  generateToken,
  hashPassword,
  comparePassword,
} from "../services/authService";
import User from "../models/userModel";

export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);
  //   const newUser = new User({ username, password: hashedPassword });
  //   await newUser.save();
  //   const token = generateToken(newUser._id);
  //   res.status(201).json({ token });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  //   const user = await User.findOne({ username });
  //   if (!user) {
  //     return res.status(400).json({ message: 'Invalid username or password.' });
  //   }
  //   const validPassword = await comparePassword(password, user.password);
  //   if (!validPassword) {
  //     return res.status(400).json({ message: 'Invalid username or password.' });
  //   }
  //   const token = generateToken(user._id);
  //   res.status(200).json({ token });
};
