"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, GitPullRequest } from "lucide-react";

export default function Hero() {
  // Cinematic staggering fade-reveal coordinate settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Premium decrescendo bezier
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-32 px-6 sm:px-12"
    >
      {/* Visual Radial Glowing Aura in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,rgba(139,92,246,0.02)_40%,rgba(6,182,212,0.01)_65%,transparent_100%)] blur-3xl" />

      {/* Decorative vertical lines on sides to create Linear-style layout grid structure */}
      <div className="absolute left-8 sm:left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />
      <div className="absolute right-8 sm:right-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none hidden md:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        {/* Pulsing Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-zinc-950/80 px-4 py-1.5 backdrop-blur-md transition-all hover:border-indigo-500/30 cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-zinc-300 uppercase">
            Available for Full-time Roles & Contracts
          </span>
        </motion.div>

        {/* Cinematic Premium Heading */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-white leading-[1.08] select-none"
        >
          Designing <span className="font-serif italic font-light text-indigo-200">Fluid</span> <br />
          Interfaces. Building <br />
          <span className="font-mono text-zinc-300 text-3xl sm:text-5xl md:text-7xl tracking-tighter align-middle bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">&lt;Scalable&gt;</span> Systems
        </motion.h1>

        {/* Narrative subtext */}
        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-400 font-light"
        >
          I am a creative full-stack engineer and designer mapping minimalist spatial grids with physics-based animations. Crafting interfaces that look premium and feel premium.
        </motion.p>

        {/* Custom Actions */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="group flex w-full sm:w-auto h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-xs font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5"
          >
            Explore My Work
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="group relative flex w-full sm:w-auto h-11 items-center justify-center rounded-full border border-white/10 bg-zinc-950/40 px-6 text-xs font-semibold text-white transition-all hover:bg-white/[0.04] hover:border-white/20 active:scale-[0.98]"
          >
            Get In Touch
            <span className="absolute -bottom-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>
      </motion.div>

      {/* Grid Coordinates decorative label (Inspired by elite portfolios) */}
      <div className="absolute bottom-6 left-8 sm:left-16 hidden md:block">
        <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
          PORTFOLIO // COORD [54.21, -2.12]
        </span>
      </div>
      
      {/* Scroll indicator with dynamic delay fade */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.6, duration: 1.2 }}
        className="absolute bottom-6 right-8 sm:right-16 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">Scroll Down</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent" />
      </motion.div>
    </section>
  );
}
