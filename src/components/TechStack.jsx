"use client";
import { motion } from "framer-motion";
import { 
  Code2, Database, Shield, Layout,
  Layers, Cpu, Compass, HardDrive, Terminal, Infinity, FileCode, MonitorPlay
} from "lucide-react";

function StackCategoryCard({ category }) {
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
            {category.icon}
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
          {category.tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.03] bg-zinc-950/30 p-3 hover:bg-zinc-900/20 hover:border-white/10 transition-all duration-300 group/tool"
            >
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg border border-white/5 bg-zinc-900/60 group-hover/tool:border-${tool.glowColor}/30 transition-colors duration-300`}>
                {tool.icon}
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
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const categoriesData = [
    {
      title: "Frontend Engineering",
      tag: "01 // LAYER",
      icon: <Layout className="h-4.5 w-4.5" />,
      tools: [
        { name: "React JS", level: "Expert", icon: <Code2 className="h-3.5 w-3.5 text-cyan-400" />, glowColor: "cyan-500" },
        { name: "Next.js", level: "Expert", icon: <FileCode className="h-3.5 w-3.5 text-white" />, glowColor: "indigo-500" },
        { name: "Framer Motion", level: "Advanced", icon: <MonitorPlay className="h-3.5 w-3.5 text-violet-400" />, glowColor: "violet-500" },
        { name: "Tailwind CSS", level: "Expert", icon: <Layers className="h-3.5 w-3.5 text-teal-400" />, glowColor: "teal-500" }
      ]
    },
    {
      title: "Backend & Databases",
      tag: "02 // LAYER",
      icon: <Database className="h-4.5 w-4.5" />,
      tools: [
        { name: "Node.js", level: "Expert", icon: <Cpu className="h-3.5 w-3.5 text-emerald-400" />, glowColor: "emerald-500" },
        { name: "MongoDB", level: "Expert", icon: <Database className="h-3.5 w-3.5 text-emerald-500" />, glowColor: "emerald-600" },
        { name: "Mongoose API", level: "Advanced", icon: <Terminal className="h-3.5 w-3.5 text-indigo-400" />, glowColor: "indigo-500" },
        { name: "REST APIs", level: "Expert", icon: <Infinity className="h-3.5 w-3.5 text-zinc-400" />, glowColor: "zinc-500" }
      ]
    },
    {
      title: "Architecture & Infra",
      tag: "03 // LAYER",
      icon: <Shield className="h-4.5 w-4.5" />,
      tools: [
        { name: "Vercel Deploy", level: "Expert", icon: <Layers className="h-3.5 w-3.5 text-white" />, glowColor: "indigo-500" },
        { name: "Git Systems", level: "Expert", icon: <FileCode className="h-3.5 w-3.5 text-orange-400" />, glowColor: "orange-500" },
        { name: "Edge Compute", level: "Advanced", icon: <Cpu className="h-3.5 w-3.5 text-cyan-400" />, glowColor: "cyan-500" },
        { name: "Docker API", level: "Intermediate", icon: <HardDrive className="h-3.5 w-3.5 text-blue-400" />, glowColor: "blue-500" }
      ]
    },
    {
      title: "Creative & Design",
      tag: "04 // LAYER",
      icon: <Compass className="h-4.5 w-4.5" />,
      tools: [
        { name: "UI/UX Design", level: "Expert", icon: <Compass className="h-3.5 w-3.5 text-indigo-400" />, glowColor: "indigo-500" },
        { name: "Figma App", level: "Expert", icon: <Layout className="h-3.5 w-3.5 text-orange-400" />, glowColor: "orange-500" },
        { name: "Motion Graphic", level: "Advanced", icon: <MonitorPlay className="h-3.5 w-3.5 text-pink-400" />, glowColor: "pink-500" },
        { name: "Fluid Physics", level: "Advanced", icon: <Infinity className="h-3.5 w-3.5 text-indigo-300" />, glowColor: "indigo-300" }
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
        {categoriesData.map((category) => (
          <StackCategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
