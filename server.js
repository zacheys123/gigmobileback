// server.js

import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { connectDB } from "./lib/config.js";
import authRoutes from "./routes/authRoutes.js";
import postsRoutes from "./routes/postRoutes.js";

import usersRoutes from "./routes/usersRoutes.js";
// Enable CORS for React Native app to make requests
import cors from "cors";
dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();
app.use("/auth", authRoutes);
app.use("/posts", postsRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
