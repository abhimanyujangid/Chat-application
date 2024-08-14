import express from "express"
import { getMessage, sendMessage } from "../controllers/messageController.js";
import isAuthenticated from "../middleware/isAuthenticates.js";

const router =  express.Router();

// For message route
router.route("/send/:id").post(isAuthenticated,sendMessage)
router.route("/:id").get(isAuthenticated,getMessage)

export default router