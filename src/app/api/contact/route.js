import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Message from "@/models/Message";

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
