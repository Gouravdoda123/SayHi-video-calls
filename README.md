# SayHi 👋 – Chat & Video Call Web App with AI Chatbot

SayHi is a full-stack real-time chat and video calling application featuring:

- ✉️ Real-time Chat (Stream API)
- 📞 Video Calling (WebRTC)
- 🤖 Gemini-powered AI Chatbot
- 🧑‍💻 User Authentication (JWT + Cookies)
- 📬 Email Notifications (Nodemailer)
- 🎨 Fully responsive modern UI (Vite + React)

---

## 📁 Project Structure

sayhi/
├── backend/ # Node.js + Express backend with MongoDB, JWT, Nodemailer, Stream, Gemini
├── frontend/ # Vite + React frontend with Tailwind, React Query
├── .gitignore # Ignores node_modules, env files, etc.
├── README.md # You're reading this!

yaml
Copy
Edit

---

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://sayhi.vercel.app](https://sayhi.vercel.app)
- **Backend (Render)**: [https://sayhi-backend.onrender.com](https://sayhi-backend.onrender.com)

---

## 🚀 Deployment

### 🖥️ Frontend (Vercel)

1. **Framework**: Vite (React)
2. **Folder Deployed**: `frontend`
3. **Environment Variables** (in Vercel):
VITE_BACKEND_URL=https://sayhi-backend.onrender.com
VITE_STREAM_API_KEY=your_stream_api_key

markdown
Copy
Edit
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`

### 🛠️ Backend (Render)

1. **Folder Deployed**: `backend`
2. **Environment Variables** (in Render):
MONGO_URI=your_mongodb_connection_string
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret
JWT_SECRET_KEY=your_jwt_secret
EMAIL_USER=your_gmail_user
EMAIL_PASS=your_gmail_app_password
GEMINI_API_KEY=your_google_genai_key
NODE_ENV=production

yaml
Copy
Edit
3. **Build Command**: `npm install`
4. **Start Command**: `npm start`
5. **Port**: Auto-assigned by Render (use `process.env.PORT`)

---

## 🧑‍💻 Tech Stack

| Layer        | Tech                                           |
|--------------|------------------------------------------------|
| Frontend     | React, Vite, Tailwind CSS, React Query         |
| Backend      | Node.js, Express, MongoDB, Mongoose, JWT       |
| Real-time    | Stream Chat API                                |
| AI Chatbot   | Google Gemini API                              |
| Email        | Nodemailer (with Gmail)                        |
| Video Call   | WebRTC                                         |
| Deployment   | Vercel (frontend), Render (backend)            |

---

## 🧪 Features

- ✅ Signup / Login / Logout with JWT + Cookies
- 🧑‍🤝‍🧑 Friend Requests & Recommendations
- 💬 Chat Interface with Stream API
- 📹 Video Call with WebRTC
- 🤖 Chatbot Integration with Gemini
- 📩 Email Notifications using Nodemailer
- 👤 Profile Management

---

## 🛠️ Run Locally

1. Clone this repo:
```bash
git clone https://github.com/yourusername/sayhi.git
cd sayhi