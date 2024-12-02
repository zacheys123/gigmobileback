import express from "express";
import { login } from "../controllers/auth/login.js";

const Router = express.Router();

// Route to fetch gigs from a third-party API
Router.route("/").get(login);

export default Router;
