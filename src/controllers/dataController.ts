import { Request, Response } from "express";

export const getData = (req: Request, res: Response): void => {
  res.json({ message: "Hello" });
};
