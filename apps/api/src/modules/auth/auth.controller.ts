import { Request, Response } from "express";
import { registerUser } from "./auth.service";

export const register = async (_req: Request, res: Response) => {
  const result = await registerUser();

  res.json(result);
};