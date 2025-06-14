// sendMail.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Use Gmail service directly
const transporter = nodemailer.createTransport({
  service: "Gmail", // ✅ Gmail-specific shortcut
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // ✅ Use App Password here, not Gmail password
  },
});

// Function to send email
export async function sendMail(to, subject, text, html) {
  try {
    const info = await transporter.sendMail({
      from: `"SayHi" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    console.log("📧 Email sent:", info.messageId);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    throw error;
  }
}
