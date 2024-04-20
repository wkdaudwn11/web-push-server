import express from "express";
import { subscribe, resetSubscribe } from "../controllers/subscribe";

const router = express.Router();

router.post("/", subscribe);
router.delete("/", resetSubscribe);

export default router;
