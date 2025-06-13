import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import chatRoutes from "./routes/chat.route.js";
import chatbotRoutes from "./routes/chatbot.route.js";

import { connectDB } from "./lib/db.js";

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "https://say-hi-video-calls.vercel.app"
];

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (
        !origin || // for server-to-server or curl/postman
        allowedOrigins.includes(origin) ||
        origin.endsWith(".vercel.app") // ✅ Allow all Vercel preview URLs
      ) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api", chatbotRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ SayHi backend is running");
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  connectDB();
});
