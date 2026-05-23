"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Layers, Laptop, Pencil, Code2, Database, Shield, BookOpen, Compass, ChevronRight } from "lucide-react";

const techItems = [
  {
    name: "React.js",
    icon: (
      <svg className="h-7 w-7 text-[#61dafb] filter drop-shadow-[0_0_8px_rgba(97,218,251,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Next.js",
    icon: (
      <svg className="h-7 w-7 text-white filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm5.5 18l-5.6-7.8v7.8H10V6.5h1.9l5.6 7.8V6.5h1.9V18h-1.9z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    icon: (
      <svg className="h-7 w-7 text-[#339933] filter drop-shadow-[0_0_8px_rgba(51,153,51,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-3.1L8.5 12v3.1l2.5 1.4zm3.5-1.4L12 16.5v-3.1l2.5-1.4v3.1zm-3.5-4.5v-3l2.5-1.4v3L11 10.6zm3.5-1.4L12 10.6v-3l2.5 1.4v3z" />
      </svg>
    )
  },
  {
    name: "Express",
    icon: (
      <span className="font-sans font-bold text-2xl tracking-tight text-white/90 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]">ex</span>
    )
  },
  {
    name: "MongoDB",
    icon: (
      <svg className="h-7 w-7 text-[#47a248] filter drop-shadow-[0_0_8px_rgba(71,162,72,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C12 0 6 6.3 6 11.7c0 3.3 2.7 6 6 6s6-2.7 6-6C18 6.3 12 0 12 0zm-2.4 12c0-1.8.8-3.5 2.4-5.2 1.6 1.7 2.4 3.4 2.4 5.2 0 1.3-1.1 2.4-2.4 2.4s-2.4-1.1-2.4-2.4z" />
      </svg>
    )
  },
  {
    name: "Redux",
    icon: (
      <svg className="h-7 w-7 text-[#764abc] filter drop-shadow-[0_0_8px_rgba(118,74,188,0.25)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(150 12 12)" />
      </svg>
    )
  },
  {
    name: "Framer Motion",
    icon: (
      <svg className="h-6 w-6 text-[#00f0ff] filter drop-shadow-[0_0_8px_rgba(0,240,255,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h12v12H0V0zm12 12h12v12H12V12zM0 12h12v12H0V12z" />
      </svg>
    )
  },
  {
    name: "Figma",
    icon: (
      <svg className="h-7 w-7 text-[#f24e1e] filter drop-shadow-[0_0_8px_rgba(242,78,30,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.5 12C6.57 12 5 13.57 5 15.5S6.57 19 8.5 19H12v-7H8.5zm0-10C6.57 2 5 3.57 5 5.5S6.57 9 8.5 9H12V2H8.5zM12 12h3.5c1.93 0 3.5-1.57 3.5-3.5S17.43 5 15.5 5H12v7zm0 7v3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5H12zm3.5-7c1.93 0 3.5 1.57 3.5 3.5S17.43 17 15.5 17H12v-5h3.5z" />
      </svg>
    )
  },
  {
    name: "Docker",
    icon: (
      <svg className="h-7 w-7 text-[#2496ed] filter drop-shadow-[0_0_8px_rgba(36,150,237,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v1.903c0 .101.083.185.186.185zM11.561 11.078h2.119c.102 0 .185-.083.185-.185V8.99c0-.102-.083-.186-.185-.186h-2.119c-.103 0-.186.084-.186.186v1.903c0 .101.083.185.186.185zM9.139 11.078h2.119c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186H9.139c-.103 0-.186.084-.186.186v1.903c0 .101.083.185.186.185zM6.721 11.078h2.118c.102 0 .186-.083.186-.185V8.99c0-.102-.084-.186-.186-.186H6.721c-.101 0-.185.084-.185.186v1.903c0 .101.084.185.185.185zM11.561 8.65h2.119c.102 0 .185-.083.185-.186V6.56c0-.101-.083-.186-.185-.186h-2.119c-.103 0-.186.085-.186.186v1.904c0 .103.083.186.186.186zM9.139 8.65h2.119c.102 0 .186-.083.186-.186V6.56c0-.101-.084-.186-.186-.186H9.139c-.103 0-.186.085-.186.186v1.904c0 .103.084.186.186.186zM6.721 8.65h2.118c.102 0 .186-.083.186-.186V6.56c0-.101-.084-.186-.186-.186H6.721c-.101 0-.185.085-.185.186v1.904c0 .103.084.186.185.186zM9.139 6.222h2.119c.102 0 .186-.083.186-.186V4.133c0-.103-.084-.186-.186-.186H9.139c-.103 0-.186.083-.186.186v1.903c0 .103.084.186.186.186zM22.347 8.071c-.141-.188-.767-.968-2.51-.968-.252 0-.585.021-.903.066-.379-2.143-1.8-3.094-1.804-3.099-.117-.076-.27-.058-.367.045-.097.101-.097.264-.002.366.015.016 1.324.906 1.69 2.871-.87.35-.975.982-.977 1.011-.009.112.053.218.156.262.032.013.242.093.593.093.844 0 1.579-.441 1.834-.849 1.09.011 1.616.42 1.77.587.108.117.255.135.385.05.127-.082.164-.249.074-.374zM13.89 12.08H1.052a.263.263 0 00-.263.264c0 .408.006 1.488.114 2.118.283 1.64 1.159 3.218 2.468 4.441 1.458 1.359 3.731 2.302 6.88 2.302 3.659 0 6.06-1.224 7.37-2.617 1.383-1.47 1.942-3.41 1.956-5.836a.263.263 0 00-.263-.263h-5.424z" />
      </svg>
    )
  },
  {
    name: "HTML5",
    icon: (
      <svg className="h-7 w-7 text-[#e34f26] filter drop-shadow-[0_0_8px_rgba(227,79,38,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm15.8 5.7H6.8l.3 3.3h9.1l-.3 3.5-3.9 1.1-3.9-1.1-.2-2.5H5.5l.4 4.5 6.1 1.7 6.1-1.7.7-7.3-.1-1.5z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="h-7 w-7 text-[#38bdf8] filter drop-shadow-[0_0_8px_rgba(56,189,248,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6.5c-2.8 0-4.5 1.4-5.2 4.2 1-.7 2.1-.9 3.2-.6.6.2 1 .6 1.5 1.1.8.8 1.8 1.8 3.8 1.8 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.1.9-3.2.6-.6-.2-1-.6-1.5-1.1-.8-.8-1.8-1.8-3.8-1.8zM6.8 12.3c-2.8 0-4.5 1.4-5.2 4.2 1-.7 2.1-.9 3.2-.6.6.2 1 .6 1.5 1.1.8.8 1.8 1.8 3.8 1.8 2.8 0 4.5-1.4 5.2-4.2-1 .7-2.1.9-3.2.6-.6-.2-1-.6-1.5-1.1-.8-.8-1.8-1.8-3.8-1.8z" />
      </svg>
    )
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="h-6 w-6 text-[#3178c6] filter drop-shadow-[0_0_8px_rgba(49,120,198,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0124 1.5v21a1.5 1.5 0 01-1.5 1.5h-21A1.5 1.5 0 010 22.5v-21A1.5 1.5 0 011.5 0zm10 17.5h1.5v-7h-1.5zm1 9.5a3.5 3.5 0 003.5-3.5v-2.5h-1.5v2.5a2 2 0 01-4 0v-2.5h-1.5v2.5a3.5 3.5 0 003.5 3.5z" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="h-7 w-7 text-[#336791] filter drop-shadow-[0_0_8px_rgba(51,103,145,0.25)]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    )
  }
];

export default function Hero({ personalInfo }) {
  const { name, title, subHeading, tagline, aboutLong } = personalInfo || {
    name: "Samaksh Saxena",
    title: "Full-Stack Developer & Product Builder",
    subHeading: "Building scalable web platforms with modern full-stack technologies.",
    tagline: "Passionate full-stack developer focused on building scalable platforms, intuitive interfaces, and impactful digital products."
  };

  // Stagger animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="home" className="relative w-full bg-[#030303] text-white pt-36 pb-20 px-6 sm:px-12 md:px-16 xl:px-20 flex flex-col items-center">
      {/* Dynamic Grid Overlay inside Section */}
      <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl flex flex-col items-start text-left relative z-10"
      >
        {/* Upper Hero Grid: Text & Stats on Left, Creative Avatar on Right */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:items-start">
          {/* Left Column: Text Content and Stats */}
          <div className="lg:col-span-8 flex flex-col items-start text-left w-full">
            {/* Uppercase Monospaced Small Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
                👋 HELLO, I&apos;M
              </span>
              <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
            </motion.div>

            {/* Massive Bold Serif Title */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-7xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl animate-fade-in"
            >
              {name ? name.split(" ")[0] : "Samaksh"}<br />
              {name ? name.split(" ").slice(1).join(" ") : "Saxena"}<span className="text-[#85b5ff]">.</span>
            </motion.h1>

            {/* Narrative Description with Role */}
            <motion.div variants={itemVariants} className="mt-8 space-y-4 max-w-2xl">
              <h3 className="font-mono text-xs sm:text-sm tracking-widest uppercase text-zinc-300">
                I&apos;m a <span className="text-[#85b5ff] font-semibold">{title || "Full-Stack Developer"}</span>
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                {tagline || "I build responsive, user-focused web applications with clean UI and modern animations — blending design and functionality for seamless user experiences."}
              </p>
            </motion.div>

            {/* Triple Premium Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group flex w-full sm:w-auto h-12 items-center justify-center gap-2.5 rounded-lg bg-[#85b5ff] px-6 text-xs font-mono tracking-widest font-bold uppercase text-black transition-all hover:bg-[#a1c6ff] hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-[#85b5ff]/10"
              >
                View Projects
              </a>

              <button
                onClick={() => window.dispatchEvent(new Event("open-resume"))}
                className="group flex w-full sm:w-auto h-12 items-center justify-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950/40 px-6 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-700 hover:text-white hover:bg-zinc-900/30 active:scale-[0.98] cursor-pointer"
              >
                <Download className="h-4 w-4" />
                View Resume
              </button>

              <a
                href="#contact"
                className="group flex w-full sm:w-auto h-12 items-center justify-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950/40 px-6 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-700 hover:text-white hover:bg-zinc-900/30 active:scale-[0.98]"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Interactive Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-zinc-900 w-full grid grid-cols-3 gap-6 sm:gap-12 md:gap-16 font-mono max-w-2xl"
            >
              <div>
                <span className="block text-3xl sm:text-5xl font-serif text-white font-medium">15+</span>
                <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
                  Projects<br />Built
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-serif text-white font-medium">02+</span>
                <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
                  Yrs of<br />Experience
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-5xl font-serif text-[#85b5ff] font-medium">Open</span>
                <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
                  Status //<br />To Work
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Profile Picture */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full pt-6 lg:pt-11">
            <motion.div
              variants={itemVariants}
              className="relative group cursor-pointer"
            >
              {/* Floating Backdrop Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#85b5ff]/10 to-transparent rounded-[4rem] blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-700 pointer-events-none" />
              
              {/* Tech Crosshair Accent Top-Left */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#85b5ff]/40 pointer-events-none transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              {/* Tech Crosshair Accent Bottom-Right */}
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#85b5ff]/40 pointer-events-none transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Sleek Professional Portrait Card Frame with subtle hover interactions */}
              <div className="relative w-72 sm:w-80 lg:w-[350px] aspect-[3/4] overflow-hidden bg-zinc-950 border border-white/10 rounded-3xl transition-all duration-700 ease-out group-hover:border-[#85b5ff]/40 group-hover:scale-[1.01]">
                
                {/* Image container inside the asymmetric frame */}
                <img
                  src="/avatar.png"
                  alt={`${name || "Samaksh Saxena"} Passport Profile`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Sleek Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#85b5ff]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Dynamic Monospace Styling Label inside bottom of image */}
                <div className="absolute bottom-4 left-0 right-0 px-6 flex justify-between items-center font-mono text-[9px] text-zinc-400 tracking-wider">
                  <span className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-full border border-white/5 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    AVAILABLE FOR HIRE
                  </span>
                  <span>v2.0 // {name ? name.split(" ")[0].toUpperCase() : "SAMAKSH"}</span>
                </div>
              </div>

              {/* Secondary Offset Border Overlay (rotates slightly on hover) */}
              <div className="absolute -inset-2.5 border border-[#85b5ff]/15 rounded-[28px] pointer-events-none transition-all duration-700 group-hover:rotate-2 group-hover:border-[#85b5ff]/35 group-hover:scale-[1.02]" />
            </motion.div>
          </div>
        </div>

        {/* Endless Horizontal Tech Slideshow Ticker (Right to Left) */}
        <motion.div
          variants={itemVariants}
          className="w-full mt-24 pt-12 border-t border-zinc-900/60 overflow-hidden relative"
        >
          {/* Injecting infinite scrolling animation styles */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Elegant Glassmorphic Side Fades */}
          <div className="absolute top-0 left-0 w-24 sm:w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

          {/* Seamless Flex Marquee Wrapper */}
          <div className="flex w-max items-center animate-marquee whitespace-nowrap gap-4">
            {[...techItems, ...techItems].map((tool, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[125px] sm:min-w-[145px] px-4 sm:px-6 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-zinc-950/60 border border-zinc-900 flex items-center justify-center relative transition-colors duration-500 group-hover:border-zinc-800">
                  {/* Glowing Backlight according to Brand Color */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md scale-90 ${
                    tool.name === 'React.js' ? 'bg-[#61dafb]/15' :
                    tool.name === 'Next.js' ? 'bg-white/10' :
                    tool.name === 'Node.js' ? 'bg-[#339933]/15' :
                    tool.name === 'Express' ? 'bg-white/10' :
                    tool.name === 'MongoDB' ? 'bg-[#47a248]/15' :
                    tool.name === 'Redux' ? 'bg-[#764abc]/15' :
                    tool.name === 'Framer Motion' ? 'bg-[#00f0ff]/15' :
                    tool.name === 'Figma' ? 'bg-[#f24e1e]/15' :
                    tool.name === 'Docker' ? 'bg-[#2496ed]/15' :
                    tool.name === 'HTML5' ? 'bg-[#e34f26]/15' :
                    tool.name === 'Tailwind CSS' ? 'bg-[#38bdf8]/15' :
                    tool.name === 'TypeScript' ? 'bg-[#3178c6]/15' : 'bg-[#336791]/15'
                  }`} />
                  
                  {/* SVG Brand Icon */}
                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {tool.icon}
                  </div>
                </div>
                <span className="mt-3 font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-zinc-500 group-hover:text-zinc-300 transition-colors uppercase">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

