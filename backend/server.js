import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { createUser } from "./controllers/users/createUser.js";
import { readAllUsers } from "./controllers/users/readAllUsers.js";
import { deleteUser } from "./controllers/users/deleteUser.js";
import { updateUser } from "./controllers/users/updateUser.js";

const app = express();

dotenv.config();
app.use(express.json());

const PORT = 9000;

app.post("/api/users", createUser);
app.get("/api/users", readAllUsers);
app.put("/api/users/:id", updateUser);
app.delete("/api/users/:id", deleteUser);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
