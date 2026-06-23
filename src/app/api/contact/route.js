import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    
    // Simple basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }
    
    let dbSuccess = false;
    let emailSuccess = false;
    let newMessage = null;
    let dbErrorMsg = "";
    let emailErrorMsg = "";

    // 1. Try DB insertion
    try {
      await dbConnect();
      newMessage = await Message.create({ name, email, message });
      dbSuccess = true;
      console.log("Contact form message saved to database.");
    } catch (dbErr) {
      dbErrorMsg = dbErr.message;
      console.warn("Database storage failed:", dbErr.message);
    }
    
    // 2. Try email transmission
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    
    const isPlaceholderPass = !emailPass || emailPass === "your_gmail_app_password_here" || emailPass.trim() === "";
    
    if (emailUser && !isPlaceholderPass) {
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
              <p style="font-size: 13px; font-weight: bold; color: #666; margin-bottom: 8px;">MESSAGE DETAILS:</p>
              <div style="white-space: pre-wrap; font-size: 14px; line-height: 1.6; color: #374151; background: #fff; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px;">${message}</div>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-top: 20px;">[ Engineered for High-Fidelity Systems ]</p>
            </div>
          `,
        };

        await transporter.sendMail(mailOptions);
        emailSuccess = true;
        console.log("Contact form email sent successfully!");
      } catch (mailErr) {
        emailErrorMsg = mailErr.message;
        console.error("Nodemailer failed to transmit email:", mailErr.message);
      }
    } else {
      emailErrorMsg = "Nodemailer credentials not set or contain placeholder values.";
      console.warn("Direct email credentials (EMAIL_USER/EMAIL_PASS) not configured in env. Skipping email forwarding.");
    }
    
    // 3. Evaluate results
    if (dbSuccess || emailSuccess) {
      return NextResponse.json(
        { success: true, data: newMessage || { name, email, message } },
        { status: 201 }
      );
    }

    // Graceful fallback for local development:
    // If running in development mode, we succeed anyway so the user can test the UI flow
    if (process.env.NODE_ENV === "development") {
      console.log("--- DEVELOPMENT MODE INQUIRY RECEIVED ---");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log("-----------------------------------------");
      return NextResponse.json(
        { success: true, data: { name, email, message }, note: "Logged to console in dev mode." },
        { status: 201 }
      );
    }

    // If both failed in production, we return the errors
    return NextResponse.json(
      { 
        success: false, 
        error: `Transmission failed. Database error: ${dbErrorMsg}. Email error: ${emailErrorMsg}.` 
      },
      { status: 500 }
    );
  } catch (error) {
    console.error("API contact error:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
