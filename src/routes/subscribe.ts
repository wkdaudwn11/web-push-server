import express from "express";
import { subscribe } from "../controllers/subscribe";

const router = express.Router();

router.post("/", subscribe);

export default router;
