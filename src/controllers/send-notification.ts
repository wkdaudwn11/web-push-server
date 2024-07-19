import webPush from "web-push";

import type { Request, Response } from "express";

import { getSubscriptions } from "../utils/db";

const publicVapidKey =
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ||
  "BGSdmkjWeguxWi_RtxA9d0i4D6NLGEQhTUuwnKeEmBbE0dLAbgbJK-F-Li3hhZ9OiqOqrxgFWqrKzZVosqRE9QA";
const privateVapidKey =
  process.env.VAPID_PRIVATE_KEY ||
  "T96JoRtRbIh00CMsW2VyrtwdAbdUgaXPfpyGw7DavOU";

webPush.setVapidDetails(
  "mailto:wkdaudwn1028@gmail.com",
  publicVapidKey,
  privateVapidKey
);

export const sendNotification = (req: Request, res: Response): void => {
  try {
    const subscriptions = getSubscriptions();

    Promise.all(
      subscriptions.map((subscription) =>
        // @ts-ignore
        webPush.sendNotification(subscription, JSON.stringify(req.body))
      )
    ).then(() => {
      res.status(200).json({ message: "Notification sent successfully." });
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to send push notifications" });
  }
};
