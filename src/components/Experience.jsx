"use client";
import { motion } from "framer-motion";
import { Award, Compass, Rocket, Users, Shield, Cpu, ExternalLink } from "lucide-react";

export default function Experience({ experienceData }) {
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

  // We align experience and achievements data for absolute premium bento items
  const milestones = [
    {
      category: "COMPETITIVE HACKATHONS",
      title: "Smart India Hackathon Participant",
      period: "2024",
      icon: Rocket,
      description: "Represented institutional core-engineers in a national-level hackathon arena, engineering scalable fintech & utility solutions under tight constraints.",
      color: "#85b5ff",
    },
    {
      category: "LEADERSHIP ROLE",
      title: "Core Team Member – Kalakrit",
      period: "2023 - PRESENT",
      icon: Users,
      description: "Directed creative strategy, music event planning, and sound system logistics for the university's premier artistic collective, bridging team coordination and execution.",
      color: "#c084fc",
    },
    {
      category: "TECHNICAL CLUB",
      title: "Technical Member – Enigma",
      period: "2024 - PRESENT",
      icon: Cpu,
      description: "Collaborated on open-source tools, workshops, and internal logistics projects within the university's high-performance computing and programming cell.",
      color: "#22d3ee",
    },
    {
      category: "COMMUNICATION & LOGISTICS",
      title: "Coordinator – Samvaad Theatre",
      period: "2023 - PRESENT",
      icon: Shield,
      description: "Coordinated timelines, logistics, and active presentations for competitive stage play showcases and social street productions for 300+ students.",
      color: "#34d399",
    }
  ];

  return (
    <section id="journey" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.025] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl flex flex-col items-start text-left relative z-10"
      >
        {/* Uppercase Monospaced Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            CHRONICLES OF IMPACT
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl"
        >
          The evolution<br />
          of a digital artisan<span className="text-[#85b5ff]">.</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-zinc-500 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
        >
          A meticulous record of academic excellence, institutional leadership, event coordination, and the relentless pursuit of technical craftsmanship.
        </motion.p>

        {/* Journey In Numbers Stats Column */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full border-t border-b border-zinc-900 py-6 text-center"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
            JOURNEY IN NUMBERS
          </span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6 font-mono"
        >
          {/* GPA 1 */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] tracking-wider text-zinc-500 uppercase mb-3">CUMULATIVE GPA</span>
            <span className="text-3xl sm:text-4xl font-serif text-white font-semibold">9.5<span className="text-zinc-600 font-light">/10</span></span>
            <div className="h-[1px] w-8 bg-zinc-800 my-3"></div>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest">ABES Engineering</span>
          </div>

          {/* GPA 2 */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] tracking-wider text-zinc-500 uppercase mb-3">TECHNICAL MAJOR</span>
            <span className="text-3xl sm:text-4xl font-serif text-white font-semibold">4.0<span className="text-zinc-600 font-light">/4.0</span></span>
            <div className="h-[1px] w-8 bg-zinc-800 my-3"></div>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Equivalent Scale</span>
          </div>

          {/* GPA 3 */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col items-center justify-center text-center">
            <span className="text-[9px] tracking-wider text-zinc-500 uppercase mb-3">ACADEMIC EXP</span>
            <span className="text-3xl sm:text-4xl font-serif text-white font-semibold">03<span className="text-[#85b5ff]">+</span></span>
            <div className="h-[1px] w-8 bg-zinc-800 my-3"></div>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest">Years of Focus</span>
          </div>
        </motion.div>

        {/* Section divider */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full border-t border-zinc-900 pt-20"
        >
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase block mb-10">
            ACHIEVEMENTS & POSITIONS
          </span>
        </motion.div>

        {/* Bento Vertical Milestones List */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {milestones.map((milestone, idx) => {
            const Icon = milestone.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/30 p-8 flex flex-col justify-between hover:border-zinc-800/80 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background micro glow tag */}
                <div
                  className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-[0.02] filter blur-xl pointer-events-none transition-all duration-500 group-hover:scale-150"
                  style={{ backgroundColor: milestone.color }}
                />
                
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className="h-9 w-9 rounded-lg flex items-center justify-center border border-zinc-800 bg-zinc-900/60 transition-colors group-hover:bg-zinc-900"
                      style={{ color: milestone.color }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase">
                      {milestone.period}
                    </span>
                  </div>
                  
                  <span className="font-mono text-[9px] tracking-widest uppercase block mb-1.5" style={{ color: milestone.color }}>
                    {milestone.category}
                  </span>
                  
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3 tracking-tight group-hover:text-[#85b5ff] transition-colors">
                    {milestone.title}
                  </h3>
                  
                  <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Philosophy of Work & Workspace Visual */}
        <motion.div
          variants={itemVariants}
          className="mt-32 w-full border-t border-zinc-900 pt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
        >
          {/* Philosophy Narrative */}
          <div className="md:col-span-6 flex flex-col items-start">
            <h3 className="font-serif text-3xl sm:text-5xl text-white font-medium mb-6 tracking-tight">
              Philosophy of Work
            </h3>
            
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              My engineering journey isn't simply about stacking lines of code or accumulating badges. It is centered around the continuous, relentless refinement of logic and system patterns. From college labs to national-level environments, I view each technical obstacle as a design optimization problem.
            </p>
            
            <p className="mt-4 text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
              I strive to deploy database queries and API pipelines that are as elegant as they are robust, treating the developer environment as a digital workspace where speed and precision coexist.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["SYSTEM THINKING", "ARTISANAL FOCUS", "AESTHETIC CRITERIA"].map((btn) => (
                <span
                  key={btn}
                  className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase border border-zinc-800 bg-zinc-900/40 text-zinc-400 px-3 py-1.5 rounded-md hover:border-zinc-700 hover:text-white transition-colors cursor-default"
                >
                  {btn}
                </span>
              ))}
            </div>
          </div>

          {/* Workspace Photo */}
          <div className="md:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 aspect-[4/3] relative group shadow-2xl">
              <img
                src="/workspace.png"
                alt="Samaksh Workspace Layout"
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.8] transition-transform duration-1000 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute bottom-4 left-4 font-mono text-[8px] sm:text-[10px] text-zinc-400 uppercase tracking-widest">
                [ STUDIO ENVIRONMENT ]
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

