import express from "express";
import helmet from "helmet";
import corsMiddleware from "./middleware/corsMiddleware";
import { auth } from "./features/auth/auth";
import { toNodeHandler } from "better-auth/node";
import { Request, Response } from "express";

import PostRoutes from "./features/addPost/routes";
import { authMiddleware } from "./middleware/authMiddleware";
import { limiter } from "./utils/rateLimiter";

const app = express();

app.use(corsMiddleware);
app.use(helmet());
app.use(limiter);
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
