import express from "express";
import { getposts } from "../controllers/posts/getposts.js";
import { create } from "../controllers/posts/createpost.js";

const Router = express.Router();

// Route to fetch gigs from a third-party API
Router.route("/").get(getposts);
Router.route("/create").get(create);

export default Router;
