import Post from "../../models/post.js";

export const create = async (req, res) => {
  // Create a new post
  const {
    title,
    description,
    instrument,
    video,
    userId, // Assuming req.user contains the user's ID
  } = req.body;

  const newpost = await Post.create({
    title: title,
    description: description,
    instrument: instrument,
    video: video,
  });
  res.status(201).json({ success: true, data: newpost });
};
