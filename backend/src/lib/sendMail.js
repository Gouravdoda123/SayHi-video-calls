// mailer.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create a transporter using Gmail SMTP and env variables
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:465,
  secure: true, // false for TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Exported async function to send mail
export async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: `"Say Hi" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("Message sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending mail:", error);
    throw error;
  }
}
