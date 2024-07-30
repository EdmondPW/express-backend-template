import cors from "cors";
import { RequestHandler } from "express";

const corsOptions = {
  origin: "*", // Update this to your needs
  optionsSuccessStatus: 200,
};

const corsMiddleware: RequestHandler = cors(corsOptions);

export default corsMiddleware;
