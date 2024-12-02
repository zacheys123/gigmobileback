import express from "express";
import { getusers } from "../controllers/users/getusers.js";

const Router = express.Router();

// Route to fetch gigs from a third-party API
Router.route("/").get(getusers);

export default Router;
