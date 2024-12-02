import mongoose from "mongoose";
import dotenv from "dotenv"; // Load environment variables
dotenv.config();
export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri, {});
    console.log("MongoDB connection established!");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Exit the process if the connection fails
  }
};
