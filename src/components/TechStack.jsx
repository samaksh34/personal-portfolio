"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code2, Database, Shield, Layout,
  Layers, Cpu, Compass, HardDrive, Terminal, Infinity, FileCode, MonitorPlay
} from "lucide-react";

const iconMap = {
  Code2, Database, Shield, Layout, Layers, Cpu, Compass, HardDrive, Terminal, Infinity, FileCode, MonitorPlay
};

// Map color classes to hex/rgba values for premium dynamic inline borders
const colorValueMap = {
  "cyan-500": "#22d3ee",
  "indigo-500": "#6366f1",
  "blue-500": "#3b82f6",
  "teal-500": "#14b8a6",
  "emerald-500": "#10b981",
  "zinc-500": "#71717a",
  "orange-500": "#f97316",
  "red-500": "#ef4444",
  "blue-600": "#2563eb",
  "emerald-400": "#34d399",
  "yellow-500": "#eab308",
  "emerald-600": "#059669",
  "orange-600": "#ea580c",
  "violet-400": "#a78bfa",
  "indigo-400": "#818cf8",
};

function ToolCard({ tool }) {
  const [hovered, setHovered] = useState(false);
  const ToolIcon = iconMap[tool.iconName] || Code2;
  const brandColor = colorValueMap[tool.glowColor] || "#85b5ff";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderColor: hovered ? brandColor : "rgba(24, 24, 27, 0.6)",
        boxShadow: hovered ? `0 0 15px ${brandColor}15` : "none"
      }}
      className="flex items-center gap-3 rounded-xl border bg-zinc-950/60 p-3.5 transition-all duration-300 group/tool cursor-default"
    >
      <div 
        style={{
          borderColor: hovered ? brandColor : "rgba(63, 63, 70, 0.3)",
          color: hovered ? brandColor : "#71717a"
        }}
        className="flex h-8 w-8 items-center justify-center rounded-lg border bg-zinc-900/60 transition-colors duration-300"
      >
        <ToolIcon className="h-4 w-4" />
      </div>
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-zinc-300 group-hover/tool:text-white transition-colors">
          {tool.name}
        </span>
        <span className="text-[8px] sm:text-[9px] font-mono text-zinc-500 tracking-widest uppercase mt-0.5">
          {tool.level}
        </span>
      </div>
    </div>
  );
}

function StackCategoryCard({ category }) {
  const CategoryIcon = iconMap[category.iconName] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800 transition-all duration-500 backdrop-blur-md shadow-lg overflow-hidden"
    >
      {/* Background micro gradient glow */}
      <div className="absolute -right-12 -top-12 pointer-events-none z-0 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(133,181,255,0.02)_0%,transparent_70%)] blur-xl group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-850 bg-zinc-900/60 text-[#85b5ff] group-hover:text-white transition-colors duration-300">
            <CategoryIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase">{category.tag}</span>
            <h3 className="font-serif text-lg sm:text-xl font-medium text-white tracking-tight leading-none mt-1">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="mt-8 grid grid-cols-2 gap-3.5">
          {category.tools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack({ categoriesData }) {
  const dataToRender = categoriesData || [
    {
      title: "Frontend Engineering",
      tag: "01 // FRONTEND LAYER",
      iconName: "Layout",
      tools: [
        { name: "React.js", level: "Expert", iconName: "Code2", glowColor: "cyan-500" },
        { name: "Next.js", level: "Expert", iconName: "FileCode", glowColor: "indigo-500" },
        { name: "TypeScript", level: "Advanced", iconName: "Terminal", glowColor: "blue-500" },
        { name: "Tailwind CSS", level: "Expert", iconName: "Layers", glowColor: "teal-500" }
      ]
    },
    {
      title: "Backend & Serverless",
      tag: "02 // INFRASTRUCTURE LAYER",
      iconName: "Server",
      tools: [
        { name: "Node.js", level: "Expert", iconName: "Cpu", glowColor: "emerald-500" },
        { name: "Express.js", level: "Expert", iconName: "Terminal", glowColor: "zinc-500" },
        { name: "REST APIs", level: "Expert", iconName: "Infinity", glowColor: "orange-500" },
        { name: "JWT Auth", level: "Advanced", iconName: "Shield", glowColor: "red-500" }
      ]
    },
    {
      title: "Databases & Services",
      tag: "03 // DATA ARCHITECTURE",
      iconName: "Database",
      tools: [
        { name: "PostgreSQL", level: "Advanced", iconName: "Database", glowColor: "blue-600" },
        { name: "Supabase", level: "Advanced", iconName: "Layers", glowColor: "emerald-400" },
        { name: "Drizzle ORM", level: "Advanced", iconName: "FileCode", glowColor: "yellow-500" },
        { name: "MongoDB", level: "Expert", iconName: "Database", glowColor: "emerald-600" }
      ]
    },
    {
      title: "Tools & Ecosystems",
      tag: "04 // UTILITIES & CODES",
      iconName: "Compass",
      tools: [
        { name: "Git & GitHub", level: "Expert", iconName: "FileCode", glowColor: "orange-600" },
        { name: "Postman", level: "Expert", iconName: "Terminal", glowColor: "orange-500" },
        { name: "Gemini API", level: "Advanced", iconName: "Cpu", glowColor: "violet-400" },
        { name: "PDF Systems", level: "Advanced", iconName: "Layers", glowColor: "indigo-400" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="stack" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 grid-mesh opacity-[0.025] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl flex flex-col items-start text-left relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            SYSTEM CONFIGURE // INTEL
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl"
        >
          Technical <span className="font-serif italic font-light text-[#85b5ff]">Stack</span><span className="text-[#85b5ff]">.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-zinc-500 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
        >
          A curated ecosystem of modern languages, frontend frameworks, backend microservices, databases, and high-performance engineering tools.
        </motion.p>

        {/* Bento Board Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {dataToRender.map((category) => (
            <StackCategoryCard key={category.title} category={category} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

