import Post from "../../models/post.js";

export const getposts = async (req, res, next) => {
  const posts = await Post.find();
  return res.status(200).json({ success: true, result: posts });
};
