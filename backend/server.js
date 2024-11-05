import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();
dotenv.config();

const PORT = 9000;

app.get("/users", (req, res) => {});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http ://localhost:${PORT}`);
});
