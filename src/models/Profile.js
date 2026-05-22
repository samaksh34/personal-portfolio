import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    personalInfo: {
      name: { type: String, required: true },
      title: { type: String, required: true },
      subHeading: { type: String, required: true },
      tagline: { type: String, required: true },
      aboutLong: { type: String, required: true },
      aboutShort: { type: String, required: true },
      recruiterLine: { type: String, required: true },
      contact: {
        email: { type: String, required: true },
        github: { type: String, required: true },
        linkedin: { type: String, required: true },
      },
    },
    services: [
      {
        title: { type: String, required: true },
        tag: { type: String, required: true },
        iconName: { type: String, required: true }, // e.g. "Layout", "Server", "Database"
        description: { type: String, required: true },
        features: [{ type: String }],
      },
    ],
    projects: [
      {
        id: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        longDescription: { type: String, required: true },
        featured: { type: Boolean, default: false },
        gridSpan: { type: String, required: true }, // e.g. "md:col-span-2"
        tags: [{ type: String }],
        accentColor: { type: String, required: true },
        stats: { type: Map, of: String }, // e.g. { lines: "4,800+", speed: "60 FPS" }
        links: {
          github: { type: String, default: "#" },
          live: { type: String, default: "#" },
        },
      },
    ],
    experience: [
      {
        company: { type: String, required: true },
        role: { type: String, required: true },
        period: { type: String, required: true },
        highlights: [{ type: String }],
        tags: [{ type: String }],
      },
    ],
    techStack: [
      {
        title: { type: String, required: true },
        tag: { type: String, required: true },
        iconName: { type: String, required: true }, // e.g. "Layout", "Database", "Shield", "Compass"
        tools: [
          {
            name: { type: String, required: true },
            level: { type: String, required: true },
            iconName: { type: String, required: true }, // e.g. "Code2", "FileCode", "Cpu", "Layers"
            glowColor: { type: String, required: true }, // e.g. "cyan-500", "indigo-500"
          },
        ],
      },
    ],
    achievements: [
      {
        title: { type: String, required: true },
        issuer: { type: String, required: true },
        date: { type: String, required: true },
        id: { type: String, required: true },
        link: { type: String, default: "#" },
      },
    ],
    faqs: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
