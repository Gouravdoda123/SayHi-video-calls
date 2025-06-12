// backend/src/controllers/chatbot.controller.js
import { chatBot } from "../lib/chatBot.js";

export const chatbotController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const botReply = await chatBot(message);
    res.json({ reply: botReply });
  } catch (error) {
    console.error("Chatbot controller error:", error);
    res.status(500).json({
      error: "Failed to get response from chatbot",
      details: error.message,
    });
  }
};
