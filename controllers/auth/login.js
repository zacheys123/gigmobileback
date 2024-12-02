import User from "../../models/user.js";

export const login = async (req, res) => {
  const data = req.body; // Access the parsed body directly
  console.log(data);
  res.send("Received data");
  // Perform any necessary authentication or validation here
  // For example, you could use a database to check if the username and password match
  // If the authentication is successful, you can generate a JWT (JSON Web Token) using the user's data
  // and send it back to the client as a response
  const user = await User.findOne({ username: data.username });
  if (!user) {
    return res.status(401).send("Invalid username or password");
  }
  if (user.password !== data.password) {
    return res.status(401).send("Invalid username or password");
  }
  // Generate a JWT using the user's data
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  // create a new user
  const newUser = new User({
    username: data.username,
    password: data.password,
  });

  const loggedinUser = await newUser.save();
  // Send the JWT back to the client

  res.json({ token });
  // You can also store the JWT in a secure cookie on the client-side for future authentication
  // res.cookie("token", token, { expires: new Date(Date.now() + 3600000) }); // 1 hour expiration

  // You can also send a success message back to the client
  res.status(200).json({ message: "Logged in successfully" });
};
