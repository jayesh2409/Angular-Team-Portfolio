const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "dist/stes-hyperion/browser")));


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ===== API Route =====
app.post("/send-mail", async (req, res) => {
  console.log("REQUEST BODY:", req.body);

  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message from WebSite",
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    console.log("MAIL SENT:", info.response);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("MAIL ERROR FULL:", err);
    res.status(500).json({ success: false });
  }
});

// ===== Angular Routing =====
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist/stes-hyperion/browser/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});