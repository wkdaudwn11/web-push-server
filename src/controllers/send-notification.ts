import webPush from "web-push";

import type { Request, Response } from "express";

import { getSubscriptions } from "../utils/db";

const publicVapidKey =
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ||
  "BF5MvKh6kyf4_Ip1FnuaXcZBfozwBwn2zTFbqvRBSgh9P1YqKNl6oUGmXZyhGi_jgDVeE9wrHgizR4-G52KU60g";
const privateVapidKey =
  process.env.VAPID_PRIVATE_KEY ||
  "VlH_tqQSYh1rEOR0W4Ub-csvc9U_JhSWX45EBYND3YQ";

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
    ).then(() =>
      res.status(200).json({ message: "Notification sent successfully." })
    );
  } catch (error) {
    res.status(500).json({ message: "Failed to send push notifications" });
  }
};
