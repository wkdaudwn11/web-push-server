import express from "express";
import { getData } from "../controllers/dataController";

const router = express.Router();

router.get("/api/data", getData);

export default router;
