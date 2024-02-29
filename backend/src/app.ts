import express from "express";
// Importing Routes
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import NodeCache from "node-cache";

const port = 4000;

connectDB();

export const myCache = new NodeCache();

const app = express();

app.use(express.json());

// Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);

app.listen(port, () => {
  console.log(`Express is working on http://localhost:${port}`);
});
