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

// Map color classes to hex values for neon glow
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

// High-fidelity programmatic percentage values mapped to technical levels
const percentageMap = {
  // Frontend
  "React.js": 92,
  "Next.js": 90,
  "TypeScript": 82,
  "Tailwind CSS": 88,
  "HTML5": 92,
  "CSS3": 90,
  "JavaScript": 90,
  "Vite": 75,
  "Bootstrap": 78,

  // Backend
  "Node.js": 88,
  "Express.js": 85,
  "REST APIs": 90,
  "JWT Auth": 80,
  "Firebase": 68,
  "GraphQL": 62,
  "AWS Basics": 60,

  // Databases & Infrastructure
  "PostgreSQL": 82,
  "Supabase": 85,
  "Drizzle ORM": 80,
  "MongoDB": 90,
  "MySQL": 72,

  // Tools & Integrations
  "Git & GitHub": 92,
  "Postman": 88,
  "Gemini API": 85,
  "PDF Systems": 80,
};

const getPercentage = (toolName, level) => {
  if (percentageMap[toolName] !== undefined) {
    return percentageMap[toolName];
  }
  if (level === "Expert") return 90;
  if (level === "Advanced") return 80;
  return 75;
};

function SkillRow({ tool }) {
  const [hovered, setHovered] = useState(false);
  const ToolIcon = iconMap[tool.iconName] || Code2;
  const brandColor = colorValueMap[tool.glowColor] || "#85b5ff";
  const percentage = getPercentage(tool.name, tool.level);

  // SVG Circle Mathematics
  const radius = 18;
  const strokeWidth = 2.5;
  const normalizedRadius = radius - strokeWidth;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-4 py-4 px-4 rounded-xl border border-zinc-950 bg-zinc-950/20 hover:bg-zinc-900/10 hover:border-zinc-900/60 transition-all duration-300 group cursor-default"
    >
      {/* Left: Glowing Circular Progress Ring wrapping Brand Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          {/* Background Ring */}
          <circle
            stroke="rgba(24, 24, 27, 0.4)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* Dynamic Foreground Progress Ring */}
          <motion.circle
            stroke={brandColor}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            style={{
              filter: hovered ? `drop-shadow(0 0 5px ${brandColor}80)` : "none",
            }}
          />
        </svg>
        {/* Brand Icon Centered */}
        <div
          style={{ color: hovered ? brandColor : "#71717a" }}
          className="absolute flex items-center justify-center transition-colors duration-300"
        >
          <ToolIcon className="h-4 w-4" />
        </div>
      </div>

      {/* Middle: Tool Name & Horizontal Progress Bar */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline mb-1.5">
          <span className="text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">
            {tool.name}
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-bold text-zinc-500 group-hover:text-white transition-colors ml-2 shrink-0">
            {percentage}%
          </span>
        </div>
        
        {/* Horizontal Progress Track */}
        <div className="h-1.5 w-full rounded-full bg-zinc-900/60 overflow-hidden relative border border-white/[0.01]">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              backgroundColor: brandColor,
              boxShadow: hovered ? `0 0 8px ${brandColor}` : "none",
            }}
            className="h-full rounded-full transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default function TechStack({ categoriesData }) {
  const [activeTab, setActiveTab] = useState(0);

  const dataToRender = categoriesData || [
    {
      title: "Frontend Engineering",
      tag: "01 // LAYER",
      iconName: "Layout",
      tools: [
        { name: "React.js", level: "Expert", iconName: "Code2", glowColor: "cyan-500" },
        { name: "Next.js", level: "Expert", iconName: "FileCode", glowColor: "indigo-500" },
        { name: "TypeScript", level: "Advanced", iconName: "Terminal", glowColor: "blue-500" },
        { name: "Tailwind CSS", level: "Expert", iconName: "Layers", glowColor: "teal-500" }
      ]
    },
    {
      title: "Backend & APIs",
      tag: "02 // LAYER",
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
      tag: "03 // LAYER",
      iconName: "Database",
      tools: [
        { name: "PostgreSQL", level: "Advanced", iconName: "Database", glowColor: "blue-600" },
        { name: "Supabase", level: "Advanced", iconName: "Layers", glowColor: "emerald-400" },
        { name: "Drizzle ORM", level: "Advanced", iconName: "FileCode", glowColor: "yellow-500" },
        { name: "MongoDB", level: "Expert", iconName: "Database", glowColor: "emerald-600" }
      ]
    },
    {
      title: "Tools & Integrations",
      tag: "04 // LAYER",
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

  const activeCategory = dataToRender[activeTab] || dataToRender[0];
  const ActiveCategoryIcon = iconMap[activeCategory.iconName] || Layout;

  return (
    <section id="stack" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-16 xl:px-20 flex flex-col items-center">
      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-[0.025] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl flex flex-col items-start text-left relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            SYSTEM CONFIGURE // INTEL
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Serif Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl animate-fade-in"
        >
          Technical <span className="font-serif italic font-light text-[#85b5ff]">Stack</span><span className="text-[#85b5ff]">.</span>
        </motion.h2>

        {/* Narrative Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-zinc-500 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
        >
          A curated ecosystem of modern languages, frontend frameworks, backend microservices, databases, and high-performance engineering tools.
        </motion.p>

        {/* Pill Capsule Tab Switcher */}
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full flex justify-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-1.5 p-1.5 rounded-full border border-zinc-900 bg-zinc-950/60 backdrop-blur-md">
            {dataToRender.map((category, index) => {
              const isActive = activeTab === index;
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveTab(index)}
                  className={`relative rounded-full px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-mono tracking-wider uppercase transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? "text-black font-bold z-10"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTechTab"
                      className="absolute inset-0 z-0 rounded-full bg-[#85b5ff] shadow-[0_0_15px_rgba(133,181,255,0.4)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {category.title.split(" ")[0]}
                    <span className={`text-[9px] font-semibold opacity-70 ${isActive ? "text-black" : "text-[#85b5ff]/60"}`}>
                      ({category.tools.length})
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Glassmorphic Skills Grid Card Container */}
        <motion.div
          variants={itemVariants}
          className="group relative rounded-3xl border border-zinc-900 bg-zinc-950/40 p-8 sm:p-10 hover:border-zinc-900/60 transition-all duration-500 backdrop-blur-md shadow-2xl overflow-hidden mt-10 w-full"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute -right-20 -top-20 pointer-events-none z-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(133,181,255,0.03)_0%,transparent_70%)] blur-2xl group-hover:scale-125 transition-transform duration-1000" />
          
          <div className="relative z-10">
            {/* Active Category Header */}
            <div className="flex items-center justify-between border-b border-zinc-900/60 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-850 bg-zinc-900/60 text-[#85b5ff]">
                  <ActiveCategoryIcon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase">
                    {activeCategory.tag}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-white tracking-tight leading-none mt-1">
                    {activeCategory.title}
                  </h3>
                </div>
              </div>
              
              <span className="hidden sm:inline-block font-mono text-[9px] text-zinc-500 tracking-wider uppercase">
                {activeCategory.tools.length} Technologies
              </span>
            </div>

            {/* Skills Grid */}
            <motion.div 
              key={activeTab} // Triggers entry animation on switch
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {activeCategory.tools.map((tool) => (
                <SkillRow key={tool.name} tool={tool} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
