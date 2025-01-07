import nodemailer from "nodemailer";

// Environment variables
const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required." });
    }

    try {
      if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        throw new Error("Missing SMTP configuration in environment variables.");
      }

      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: SMTP_SECURE === "true",
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });

      const mailOptions = {
        from: email,
        to: "info@egliving.ae",
        subject: "New Subscription Request",
        text: `You have a new email subscription request. \n\nEmail: ${email}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Subscription successful!" });
    } catch (error) {
      console.error("Error during subscription:", error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}
