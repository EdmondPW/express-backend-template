import express from "express";
import corsMiddleware from "@/middleware/corsMiddleware";
import authRoutes from "@/routes/authRoutes";
import userRoutes from "@/routes/userRoutes";
import { authenticateJWT } from "@/middleware/authMiddleware";
import { Request, Response } from "express";

const app = express();

app.use(corsMiddleware);
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "server is running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateJWT, userRoutes);

export default app;
