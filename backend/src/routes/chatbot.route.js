// backend/src/routes/chatbot.route.js
import express from "express";
import { chatbotController } from "../controllers/chatbot.controller.js";

const router = express.Router();

router.post("/chatbot", chatbotController);

export default router;
