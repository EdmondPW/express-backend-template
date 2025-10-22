import { Request, Response, NextFunction } from "express";
import { auth } from "../features/auth/auth";
import { fromNodeHeaders } from "better-auth/node";

/**
 * Middleware to enforce authentication.
 * If the user has a valid session (or JWT), the user info
 * will be attached to `req.user`, otherwise 401 Unauthorized.
 */
export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(fromNodeHeaders(req.headers));
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session || !session.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Attach user info (and session) to the request object for later handlers
    (req as any).user = session.user;
    (req as any).session = session;

    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(401).json({ error: "Unauthorized" });
  }
}
