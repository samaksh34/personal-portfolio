"use client";
import { motion } from "framer-motion";
import { 
  Code2, Database, Shield, Layout,
  Layers, Cpu, Compass, HardDrive, Terminal, Infinity, FileCode, MonitorPlay
} from "lucide-react";

const iconMap = {
  Code2,
  Database,
  Shield,
  Layout,
  Layers,
  Cpu,
  Compass,
  HardDrive,
  Terminal,
  Infinity,
  FileCode,
  MonitorPlay
};

const toolColorMap = {
  "cyan-500": "text-cyan-400",
  "indigo-500": "text-indigo-400",
  "blue-500": "text-blue-400",
  "teal-500": "text-teal-400",
  "emerald-500": "text-emerald-400",
  "zinc-500": "text-zinc-400",
  "orange-500": "text-orange-400",
  "red-500": "text-red-400",
  "blue-600": "text-blue-400",
  "emerald-400": "text-emerald-450",
  "yellow-500": "text-yellow-400",
  "emerald-600": "text-emerald-450",
  "orange-600": "text-orange-400",
  "violet-400": "text-violet-400",
  "indigo-400": "text-indigo-400",
};

const borderGlowMap = {
  "cyan-500": "group-hover/tool:border-cyan-500/30",
  "indigo-500": "group-hover/tool:border-indigo-500/30",
  "blue-500": "group-hover/tool:border-blue-500/30",
  "teal-500": "group-hover/tool:border-teal-500/30",
  "emerald-500": "group-hover/tool:border-emerald-500/30",
  "zinc-500": "group-hover/tool:border-zinc-500/30",
  "orange-500": "group-hover/tool:border-orange-500/30",
  "red-500": "group-hover/tool:border-red-500/30",
  "blue-600": "group-hover/tool:border-blue-600/30",
  "emerald-400": "group-hover/tool:border-emerald-400/30",
  "yellow-500": "group-hover/tool:border-yellow-500/30",
  "emerald-600": "group-hover/tool:border-emerald-600/30",
  "orange-600": "group-hover/tool:border-orange-600/30",
  "violet-400": "group-hover/tool:border-violet-400/30",
  "indigo-400": "group-hover/tool:border-indigo-400/30",
};

function StackCategoryCard({ category }) {
  const CategoryIcon = iconMap[category.iconName] || Layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl border border-white/5 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800/80 transition-colors duration-500 overflow-hidden"
    >
      {/* Dynamic background glow color */}
      <div className={`absolute -right-12 -top-12 pointer-events-none z-0 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-xl group-hover:scale-125 transition-transform duration-700`} />

      <div className="relative z-10">
        {/* Category Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 text-indigo-400 group-hover:text-white transition-colors duration-300">
            <CategoryIcon className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase">{category.tag}</span>
            <h3 className="text-lg font-semibold text-white tracking-tight leading-none mt-0.5">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Tools list inside category */}
        <div className="mt-8 grid grid-cols-2 gap-3">
          {category.tools.map((tool) => {
            const ToolIcon = iconMap[tool.iconName] || Code2;
            const iconColorClass = toolColorMap[tool.glowColor] || "text-zinc-400";
            const borderGlowClass = borderGlowMap[tool.glowColor] || "group-hover/tool:border-indigo-500/30";

            return (
              <div
                key={tool.name}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.03] bg-zinc-950/30 p-3 hover:bg-zinc-900/20 hover:border-white/10 transition-all duration-300 group/tool"
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg border border-white/5 bg-zinc-900/60 ${borderGlowClass} transition-colors duration-300`}>
                  <ToolIcon className={`h-3.5 w-3.5 ${iconColorClass}`} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-zinc-300 group-hover/tool:text-white transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 tracking-wider uppercase mt-0.5">
                    {tool.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack({ categoriesData }) {
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

  return (
    <section id="stack" className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 03 // TECH STACK ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Technical <span className="font-serif italic font-light text-indigo-200">Arsenal</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      {/* Bento Board Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataToRender.map((category) => (
          <StackCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
