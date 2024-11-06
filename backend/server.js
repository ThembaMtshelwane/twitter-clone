import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import tweetRoutes from "./routes/tweet.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);

app.post("/api/tweets/");

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
