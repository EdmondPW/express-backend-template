import express from "express";
import corsMiddleware from "./middleware/corsMiddleware";
import { auth } from "./features/auth/auth";
import { toNodeHandler } from "better-auth/node";
import { Request, Response } from "express";

import PostRoutes from "./features/post/routes";
import { authMiddleware } from "./middleware/authMiddleware";

const app = express();

app.use(corsMiddleware);
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());

app.use("/api/post", PostRoutes);

app.get("/status", (req: Request, res: Response) => {
  res.status(200).json({ msg: "server is running" });
});

//just a route to test authentication
app.get("/protected-info", authMiddleware, (req, res) => {
  const user = (req as any).user;
  res.json({ message: "You are authenticated", user });
});

export default app;
