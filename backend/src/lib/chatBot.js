// backend/src/lib/chatBot.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function chatBot(message) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const context = `
    You are a friendly assistant for SayHi – a real-time chat and video call web app.
    You can help users understand and use features of the SayHi app such as:
    - Signing up and logging in securely
    - Real-time messaging using Stream Chat
    - One-on-one video calling via WebRTC
    - Email verification with Nodemailer
    - Using the in-app chatbot powered by Gemini

    If the user asks something unrelated to SayHi (e.g., general questions, math, jokes, etc.), politely say:
    "I'm here to assist you with anything related to the SayHi app 😊. For other questions, feel free to try Google Gemini directly!"

    Always be clear, kind, and helpful. Respond in a warm and conversational tone.
    `;

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `${context}\n\nUser: ${message}` }]
        }
      ]
    });

    return result.response.text();
  } catch (error) {
    console.error("ChatBot error in lib/chatBot.js:", error);
    throw new Error("ChatBot failed to generate a response");
  }
}
