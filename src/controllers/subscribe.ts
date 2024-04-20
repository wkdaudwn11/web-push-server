import { Request, Response } from "express";

import { saveSubscription } from "../utils/db";

export const subscribe = (req: Request, res: Response): void => {
  const subscription = req.body;

  try {
    saveSubscription(subscription as PushSubscription);
    res.status(201).json({ message: "Subscription saved" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save subscription" });
  }
};
