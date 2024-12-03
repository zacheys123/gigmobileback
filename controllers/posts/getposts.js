import { posts } from "../../utils.js";
export const getposts = async (req, res, next) => {
  return res.status(200).json({ success: true, result: posts });
};
