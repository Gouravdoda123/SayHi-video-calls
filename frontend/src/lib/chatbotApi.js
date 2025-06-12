import { axiosInstance } from "./axios";

export async function sendToChatbot(message) {
  try {
    const res = await axiosInstance.post("/chatbot", { message });
    return res.data.reply;
  } catch (error) {
    console.error("Error sending message to chatbot:", error);
    throw new Error(
      error.response?.data?.error || "Failed to get chatbot response"
    );
  }
}
