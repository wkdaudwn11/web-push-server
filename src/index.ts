import express, { Request, Response } from "express";
import cors from "cors";

import dataRoutes from "./routes/dataRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use(dataRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
