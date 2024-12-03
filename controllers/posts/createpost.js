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
  console.log(body);
  const newpost = await Post.create({
    title: title,
    description: description,
    instrument: instrument,
    video: video,
    postedBy: userId, // Assuming req.user contains the user's ID
  });
  res.status(201).json({ success: true, data: newpost });
};
