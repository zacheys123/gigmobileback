import Post from "../../models/post.js";

export const create = async (req, res) => {
  // Create a new post
  const body = req.body;
  console.log(body);
  const newpost = await Post.create({
    title: body.title,
    description: body.description,
    instrument: body.instrument,
    video: body.video,
    postedBy: body.userId, // Assuming req.user contains the user's ID
  });

  res.status(201).json({ success: true, data: newpost });
};
