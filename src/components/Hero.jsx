"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Cpu, Layers, Laptop, Pencil, Code2, Database, Shield, BookOpen, Compass, ChevronRight } from "lucide-react";

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
    <section id="home" className="relative w-full bg-[#030303] text-white pt-36 pb-20 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
      {/* Dynamic Grid Overlay inside Section */}
      <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex flex-col items-start text-left relative z-10"
      >
        {/* Uppercase Monospaced Small Label */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            DIGITAL CRAFTSMAN
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Massive Bold Serif Title */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[1.05] text-white font-semibold max-w-4xl"
        >
          Full-Stack<br />
          Architect &<br />
          Digital Artisan<span className="text-[#85b5ff]">.</span>
        </motion.h1>

        {/* Narrative Description */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed"
        >
          {subHeading || "Building scalable platforms with modern tech and a cinematic eye."} Specialized in high-performance architectures and pixel-perfect developer experiences.
        </motion.p>

        {/* Dual Premium Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#contact"
            className="group flex w-full sm:w-auto h-12 items-center justify-center gap-2.5 rounded-lg bg-[#85b5ff] px-8 text-xs font-mono tracking-widest font-bold uppercase text-black transition-all hover:bg-[#a1c6ff] hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-[#85b5ff]/10"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          <a
            href="#projects"
            className="group flex w-full sm:w-auto h-12 items-center justify-center gap-2.5 rounded-lg border border-zinc-800 bg-zinc-950/40 px-8 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-700 hover:text-white hover:bg-zinc-900/30 active:scale-[0.98]"
          >
            View Portfolio
          </a>
        </motion.div>

        {/* Interactive Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="mt-16 pt-12 border-t border-zinc-900 w-full grid grid-cols-3 gap-6 sm:gap-12 md:gap-16 font-mono max-w-2xl"
        >
          <div>
            <span className="block text-3xl sm:text-5xl font-serif text-white font-medium">02+</span>
            <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
              Years of<br />Craft
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-5xl font-serif text-white font-medium">12+</span>
            <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
              Seminal<br />Projects
            </span>
          </div>
          <div>
            <span className="block text-3xl sm:text-5xl font-serif text-white font-medium">03+</span>
            <span className="block text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-widest mt-2 leading-snug">
              Club Team<br />Roles
            </span>
          </div>
        </motion.div>

        {/* Massive rounded-3xl Cinematic Portrait */}
        <motion.div
          variants={itemVariants}
          className="mt-16 w-full rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/9] border border-white/5 bg-zinc-950 relative group"
        >
          <img
            src="/avatar.png"
            alt="Samaksh Saxena Cinematic Avatar"
            className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.85] transition-all duration-1000 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 font-mono text-[9px] sm:text-xs text-zinc-400 tracking-wider flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#85b5ff] animate-pulse"></span>
            ATELIER AVATAR v1.0.9 // ABES ENGINEERING
          </div>
        </motion.div>

        {/* Technical Arsenal Heading */}
        <motion.div variants={itemVariants} className="w-full mt-32">
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium relative pb-4 inline-block">
            Technical Arsenal
            <span className="absolute bottom-0 left-0 w-16 h-[2px] bg-[#85b5ff]"></span>
          </h2>
        </motion.div>

        {/* Technical Arsenal Bento Grid Layout */}
        <motion.div
          variants={itemVariants}
          className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1: Frontend Systems */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-500">
            <div>
              <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[#85b5ff] mb-6">
                <Laptop className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-4">Frontend Systems</h3>
              <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Crafting visual elegance, highly responsive interfaces, dynamic state flows, and smooth interactive design utilizing:
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "ES6+"].map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-wider uppercase bg-zinc-900 text-zinc-400 border border-zinc-800/50 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: Core Infrastructure */}
          <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 flex flex-col justify-between hover:border-zinc-800 transition-all duration-500">
            <div>
              <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center text-[#85b5ff] mb-6">
                <Terminal className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-white font-medium mb-4">Core Infrastructure</h3>
              <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Architecting relational mappings, server-side APIs, token validations, secure databases, and backend services with:
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express.js", "PostgreSQL", "Supabase", "Drizzle ORM", "MongoDB", "JWT Auth"].map((tag) => (
                <span key={tag} className="font-mono text-[9px] tracking-wider uppercase bg-zinc-900 text-zinc-400 border border-zinc-800/50 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Deep Architectural Values (Double Column) */}
          <div className="md:col-span-2 rounded-2xl border border-zinc-900 bg-zinc-950/40 p-8 sm:p-10 hover:border-zinc-800 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">SYSTEM VALS</span>
              <span className="h-[1.5px] w-6 bg-[#85b5ff]/30"></span>
            </div>
            
            <div className="space-y-6 sm:space-y-8 font-light text-zinc-400 text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-md bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-[#85b5ff] mt-0.5 shrink-0 text-xs font-mono">▲</div>
                <div>
                  <h4 className="font-mono text-zinc-200 text-xs tracking-wider uppercase font-semibold">Architecture</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm font-light mt-1">Designing modular, secure, and distributed platform backends with granular role-based access control models at the absolute core.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-md bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-[#85b5ff] mt-0.5 shrink-0 text-xs font-mono">◆</div>
                <div>
                  <h4 className="font-mono text-zinc-200 text-xs tracking-wider uppercase font-semibold">Robust Flows</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm font-light mt-1">Deploying structured database queries, type-safe database schemas, transaction safeguards, and seamless real-time syncing.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-md bg-zinc-900/60 border border-zinc-800 flex items-center justify-center text-[#85b5ff] mt-0.5 shrink-0 text-xs font-mono">●</div>
                <div>
                  <h4 className="font-mono text-zinc-200 text-xs tracking-wider uppercase font-semibold">Artisan Polish</h4>
                  <p className="text-zinc-500 text-xs sm:text-sm font-light mt-1">Injecting sleek aesthetic compositions, micro-interactions, spring layouts, smooth scrolling physics, and detailed layouts.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tiny bottom badge mimicking "ATELIER CODE SYSTEM / VERSION 2.0.01" */}
          <div className="md:col-span-2 rounded-xl border border-zinc-900/40 bg-zinc-950/20 px-6 py-4 flex items-center justify-between font-mono text-[9px] sm:text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <Pencil className="h-3 w-3 text-[#85b5ff]" />
              <span>ATELIER SYSTEM VER. 2.0.01 // READY</span>
            </div>
            <a href="#projects" className="uppercase tracking-widest text-zinc-400 hover:text-[#85b5ff] transition-colors flex items-center gap-1">
              Scroll for details <ChevronRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>

        {/* "Crafting the future, line by line." Quote Section */}
        <motion.div
          variants={itemVariants}
          className="mt-32 w-full border-t border-zinc-900 pt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
        >
          <div className="md:col-span-5">
            <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] tracking-tight">
              Crafting the<br />
              future, <span className="font-serif italic font-light text-[#85b5ff]">line by line.</span>
            </h3>
          </div>
          <div className="md:col-span-7 flex flex-col items-start">
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
              I approach software development as a digital artisan – a space where rigorous engineering precision converges with aesthetic intentionality. My journey began with an innate curiosity for how distributed systems operate and scale, which has evolved into building high-utility, performance-driven web ecosystems for thousands of student coordinators.
            </p>
            <p className="mt-6 text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
              I don't just compile lines of code; I craft immersive digital stories. From security models and modular databases to the exact physics of a spring animation, I ensure every layer is robust, performant, and delightful to interact with.
            </p>
            <a
              href="#journey"
              className="mt-8 font-mono text-[10px] sm:text-xs tracking-widest font-semibold uppercase text-[#85b5ff] hover:text-white flex items-center gap-2 group transition-colors"
            >
              Read the full story
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

