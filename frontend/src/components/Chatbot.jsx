import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sendToChatbot } from "../lib/chatbotApi"; // Make sure this path is correct

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Only show chatbot on homepage
  if (location.pathname !== "/") return null;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const reply = await sendToChatbot(input);
      const botMessage = { sender: "bot", text: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-circle btn-lg fixed bottom-5 right-5 shadow-lg z-50 bg-primary text-primary-content hover:bg-primary-focus border-none"
      >
        <img
          src="/chat.png"
          alt="Chatbot"
          className="w-6 h-6 object-contain"
        />
      </button>

      {/* Chatbot Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 h-96 bg-base-200 border border-base-300 rounded-2xl shadow-xl z-50 flex flex-col">
          <div className="bg-base-300 p-3 rounded-t-2xl flex justify-between items-center">
            <h2 className="text-lg font-semibold">SayHi Chatbot</h2>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat ${
                  msg.sender === "user" ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  className={`chat-bubble ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-content"
                      : "bg-base-300"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat chat-start">
                <div className="chat-bubble bg-base-300 animate-pulse">
                  Typing...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-base-300 flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="input input-bordered input-sm w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="btn btn-primary btn-sm"
              onClick={handleSendMessage}
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
