import type { Request, Response } from "express";

import { clearSubscription, saveSubscription } from "../utils/db";

export const subscribe = (req: Request, res: Response): void => {
  const subscription = req.body;

  try {
    saveSubscription(subscription as PushSubscription);
    res.status(201).json({ message: "Subscription saved" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save subscription" });
  }
};

export const unsubscribe = (req: Request, res: Response): void => {
  const subscription = req.body;

  try {
    clearSubscription();
    res.status(201).json({ message: "Subscription remove" });
  } catch (error) {
    res.status(500).json({ message: "Failed to remove subscription" });
  }
};
