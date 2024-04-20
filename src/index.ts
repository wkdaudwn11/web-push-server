import express, { Request, Response } from "express";
import cors from "cors";

import subscribeRoutes from "./routes/subscribe";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/subscribe", subscribeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
