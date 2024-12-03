import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new mongoose.Schema(
  {
    // postedBy: { type: Schema.Types.ObjectId, ref: "User" },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      lowercase: true,
    },
    video: { type: String },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    instrument: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;
