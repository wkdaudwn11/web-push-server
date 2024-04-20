import express, { Request, Response } from "express";
import cors from "cors";

import subscribeRoutes from "./routes/subscribe";
import sendNotificationRoutes from "./routes/send-notification";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/subscribe", subscribeRoutes);
app.use("/api/send-notification", sendNotificationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
