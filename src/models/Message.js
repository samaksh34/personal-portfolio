import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name."],
      trim: true,
      minlength: [2, "Name cannot be less than 2 characters."],
      maxlength: [100, "Name cannot be more than 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Please provide an email address."],
      trim: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address.",
      ],
    },
    message: {
      type: String,
      required: [true, "Please write a message."],
      trim: true,
      minlength: [10, "Message cannot be less than 10 characters."],
      maxlength: [2000, "Message cannot be more than 2000 characters."],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from compiling the model multiple times in development hot reloading
export default mongoose.models.Message || mongoose.model("Message", MessageSchema);
