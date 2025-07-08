import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const allowedOrigins = [process.env.FRONTEND_URL];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Set-Cookie"],
  })
);

const sendMail = async (option) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: option.subject,
    text: option.text,
    html: option.html,
  });
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, description } = req.body;
  
    const message = {
      email,
      subject: "Message From Your Portfolio Contact Form ✨ ",
      text: `You've received a new message through your portfolio contact form:

Name: ${name}
Email: ${email}
Message:
${description}

---

This message was sent via your portfolio contact form.
© ${new Date().getFullYear()} Your Portfolio`,
      html: `
   <div style="font-family: 'Poppins', 'Helvetica Neue', Arial, sans-serif; max-width: 520px; width: 100%; margin: 40px auto; background: linear-gradient(135deg, #2c2c2c 0%, #1e1e1e 100%); padding: 40px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); text-align: center; border: 1px solid #3d3d3d;">

    <!-- Header with decorative element -->
    <div style="position: relative; margin-bottom: 24px;">
      <div style="width: 60px; height: 4px; background: linear-gradient(90deg, #6C63FF 0%, #FF6584 100%); border-radius: 2px; margin: 0 auto 16px;"></div>
      <div style="font-size: 14px; font-weight: 600; color: #6C63FF; letter-spacing: 1px; margin-bottom: 8px; text-transform: uppercase;">New Contact Message</div>
      <h2 style="color: #ffffff; font-weight: 600; font-size: 24px; margin: 0; line-height: 1.4;">You've received a new message!</h2>
    </div>
  
    <!-- Message card -->
    <div style="background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 24px; margin: 24px 0; border: 1px solid rgba(255, 255, 255, 0.08); text-align: left;">
      <div style="display: flex; align-items: center; margin-bottom: 16px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #6C63FF 0%, #4a42d4 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: white;">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
        </div>
        <div>
          <p style="color: #ffffff; font-size: 16px; font-weight: 600; margin: 0 0 2px 0;">${name}</p>
          <p style="color: #a0a0a0; font-size: 14px; margin: 0;">${email}</p>
        </div>
      </div>
  
      <div style="margin-top: 20px;">
        <p style="color: #d1d1d1; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-line;">${description}</p>
      </div>
    </div>
  
    <!-- Decorative divider -->
    <div style="position: relative; margin: 32px 0;">
      <div style="width: 100%; height: 1px; background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%);"></div>
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: #2c2c2c; padding: 0 12px;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: #6C63FF;">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
        </svg>
      </div>
    </div>
  
    <!-- Footer -->
    <p style="margin: 0; font-size: 12px; color: #777777; line-height: 1.5;">
      This message was sent via your portfolio contact form.<br>
      <span style="color: #555555;">© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</span>
    </p>
  </div>
      `,
    };

    await sendMail(message);

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express running → On http://localhost:${port} 🚀`);
});
