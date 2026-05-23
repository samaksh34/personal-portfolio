import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { name, email, message } = body;
    
    // Simple basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }
    
    // Create new message in DB
    const newMessage = await Message.create({ name, email, message });
    
    // Optional direct email using Nodemailer if credentials exist in env
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: emailUser,
            pass: emailPass,
          },
        });

        const mailOptions = {
          from: `"${name}" <${emailUser}>`,
          to: "samakshsaxena03@gmail.com",
          replyTo: email,
          subject: `Portfolio Contact: Message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `
            <div style="font-family: sans-serif; padding: 25px; color: #111; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 16px; background-color: #fafafa;">
              <h2 style="color: #4f46e5; margin-bottom: 20px; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">📩 New Portfolio Inquiry</h2>
              <p style="margin: 8px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; font-size: 14px;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #4f46e5; text-decoration: none;">${email}</a></p>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-2" style="font-size: 13px; font-weight: bold; color: #666; margin-bottom: 8px;">MESSAGE DETAILS:</p>
              <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #374151; background: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px;">${message}</div>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 20px;">[ Engineered for High-Fidelity Systems ]</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Contact form email sent successfully!");
      } catch (mailErr) {
        console.error("Nodemailer failed to transmit email:", mailErr.message);
        // We do NOT block the response if only email forwarding fails (DB succeeded)
      }
    } else {
      console.warn("Direct email credentials (EMAIL_USER/EMAIL_PASS) not configured in env. Skipping email forwarding.");
    }
    
    return NextResponse.json(
      { success: true, data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    console.error("API contact error:", error);
    
    // Return Mongoose validation error messages if present
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return NextResponse.json(
        { success: false, error: messages.join(" ") },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
