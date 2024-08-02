import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { email, message } = await request.json();
    console.log("Received email:", email);
    console.log("Received message:", message);

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      cc: email,
      subject: `Message from (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (err, info) => {
          if (err) {
            console.error("Error sending email:", err);
            reject(err);
          } else {
            console.log("Email sent successfully:", info.response);
            resolve("Email sent");
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
