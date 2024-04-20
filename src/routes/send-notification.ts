import express from "express";
import { sendNotification } from "../controllers/send-notification";

const router = express.Router();

router.post("/", sendNotification);

export default router;
