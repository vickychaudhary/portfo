import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL;

if (!resendApiKey) {
  console.warn(
    "RESEND_API_KEY is not set. Contact form submissions will fail until it is provided."
  );
}

if (!contactRecipient) {
  console.warn(
    "CONTACT_RECIPIENT_EMAIL is not set. Define it to route contact form emails."
  );
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!resend || !contactRecipient) {
    return res.status(500).json({
      message:
        "Contact service not configured. Please try again later or reach out via social links.",
    });
  }

  let body;
  const contentType = req.headers["content-type"] || "";

  try {
    if (contentType.includes("application/json")) {
      body = req.body;
    } else {
      const buffers = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const data = Buffer.concat(buffers).toString();

      if (contentType.includes("application/x-www-form-urlencoded")) {
        body = Object.fromEntries(new URLSearchParams(data));
      } else {
        body = JSON.parse(data);
      }
    }
  } catch (parseError) {
    console.error("Failed to parse contact payload", parseError);
    return res
      .status(400)
      .json({ message: "Invalid request payload. Please check your form." });
  }

  const { name, email, subject, message } = body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Please provide your name, email, subject, and message.",
    });
  }

  try {
    await resend.emails.send({
      from: `Portfolio Contact <${contactRecipient}>`,
      to: contactRecipient,
      subject: `[Portfolio] ${subject}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact handler error:", error);

    const detail =
      error?.message || error?.response?.body?.message || "Unknown error";

    return res.status(500).json({
      message: "Failed to send message. Please try again later.",
      detail,
    });
  }
}

