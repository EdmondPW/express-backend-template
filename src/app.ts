import express from "express";
import corsMiddleware from "./middleware/corsMiddleware";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api", userRoutes);

export default app;
