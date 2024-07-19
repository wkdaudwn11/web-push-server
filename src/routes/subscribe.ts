import express from "express";
import { subscribe, unsubscribe } from "../controllers/subscribe";

const router = express.Router();

router.post("/", subscribe);
router.delete("/", unsubscribe);

export default router;
