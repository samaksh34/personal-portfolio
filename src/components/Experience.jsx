"use client";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Calendar, Award, ExternalLink, Download, Compass, Code2, Star, BookOpen, Layers } from "lucide-react";

export default function Experience({ experienceData, personalInfo }) {
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
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Dynamically build timeline items from MongoDB experienceData
  const timelineItems = experienceData && experienceData.length > 0
    ? experienceData.map((item) => ({
        year: item.period.split("—")[0].trim().slice(0, 4),
        title: item.role,
        description: `${item.company} — ${item.highlights[0] || ""}`
      }))
    : [
        {
          year: "2023",
          title: "Started B.Tech - ABES EC",
          description: "Joined IT at ABES Engineering College, Ghaziabad."
        },
        {
          year: "2024",
          title: "SIH Participant",
          description: "Collaborated on problem-solving workflows for national milestones."
        },
        {
          year: "2024",
          title: "Community Coordinator",
          description: "Coordinated logistics and team schedules for key college events."
        }
      ];

  const educationHistory = [
    {
      degree: "B.Tech in Information Technology (AKTU)",
      institution: "ABES Engineering College, Ghaziabad",
      period: "2023 - 2027",
      grade: "Grade: 8.28 CGPA",
      description: "Pursuing my B.Tech in Information Technology at ABES Engineering College, Ghaziabad.",
      logo: (
        <svg className="h-7 w-7 text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.3)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      degree: "Class 12th (CBSE)",
      institution: "Dayawati Modi Academy, Modipur Rampur",
      period: "2023",
      grade: "Grade: 84.8%",
      description: "Completed my Class XII from Dayawati Modi Academy under the CBSE board.",
      logo: (
        <svg className="h-7 w-7 text-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
          <path d="M12 18.5L5 14.7v-2.1l7 3.8 7-3.8v2.1l-7 3.8z" />
        </svg>
      )
    },
    {
      degree: "Class 10th (CBSE)",
      institution: "Dayawati Modi Academy, Modipur Rampur",
      period: "2021",
      grade: "Grade: 94.6%",
      description: "Completed my Class X from Dayawati Modi Academy under the CBSE board.",
      logo: (
        <svg className="h-7 w-7 text-[#85b5ff] filter drop-shadow-[0_0_8px_rgba(133,181,255,0.3)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }
  ];

  return (
    <section id="journey" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-16 xl:px-20 flex flex-col items-center">
      {/* Visual Mesh Grid */}
      <div className="absolute inset-0 grid-mesh opacity-[0.025] pointer-events-none" />

      {/* 1. GET TO KNOW ABOUT ME Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl flex flex-col items-center text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            GET TO KNOW ME
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            About Me<span className="text-[#85b5ff]">.</span>
          </h2>
        </motion.div>

        {/* Unified About Layout: Profile Card Left, Description & Milestones Right */}
        <div className="mt-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 text-left items-start">
          
          {/* Left Column: Premium Profile Card & Direct Stats Row */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-6 w-full items-center lg:items-stretch">
            
            {/* Elegant Glassmorphic Profile Card */}
            <div className="w-full max-w-sm lg:max-w-none rounded-[24px] border border-zinc-900 bg-zinc-950/45 p-6 relative overflow-hidden group hover:border-zinc-800 transition-all duration-500">
              {/* Backlight Glow Overlay */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#85b5ff]/5 to-transparent rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
              
              {/* Profile Image Frame inside Card */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 mb-6">
                <img
                  src="/avatar.png"
                  alt={`${personalInfo?.name || "Samaksh Saxena"} Developer Profile`}
                  className="w-full h-full object-cover filter grayscale contrast-[1.1] brightness-[0.85] transition-all duration-700 group-hover:scale-102 group-hover:filter-none"
                />
                
                {/* Micro Status Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md font-mono text-[9px] text-emerald-400 tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Hire
                  </span>
                </div>
              </div>

              {/* Identity & Location Rows */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-white font-semibold">{personalInfo?.name || "Samaksh Saxena"}</h3>
                  <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase mt-0.5 block">
                    Full-Stack Developer
                  </span>
                </div>

                <div className="pt-4 border-t border-zinc-900 space-y-2.5 font-mono text-[10px] text-zinc-400 tracking-wider">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-[#85b5ff]" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-3.5 w-3.5 text-[#85b5ff]" />
                    <span>ABES Engineering College</span>
                  </div>
                </div>
              </div>
            </div>

            {/* In-Line Stats Row */}
            <div className="w-full grid grid-cols-3 gap-3 font-mono">
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-serif text-white font-medium">15+</span>
                <span className="text-[7.5px] sm:text-[8px] text-zinc-500 uppercase tracking-widest mt-1">Projects</span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-serif text-white font-medium">02+</span>
                <span className="text-[7.5px] sm:text-[8px] text-[#85b5ff] uppercase tracking-widest mt-1">Years Exp</span>
              </div>
              <div className="rounded-xl border border-zinc-900 bg-zinc-950/20 p-4 flex flex-col items-center justify-center text-center">
                <span className="text-xl sm:text-2xl font-serif text-white font-medium">10+</span>
                <span className="text-[7.5px] sm:text-[8px] text-zinc-500 uppercase tracking-widest mt-1">Collabs</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative, Toolkit, Journey list, and Actions */}
          <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col gap-8 w-full">
            
            {/* Narrative Blocks */}
            <div className="space-y-4 text-zinc-400 font-light text-sm sm:text-base leading-relaxed whitespace-pre-line">
              <p>
                {personalInfo?.aboutLong || "Hi — I'm Samaksh Saxena, a curious and design-minded web developer..."}
              </p>
            </div>

            {/* Technology Badge Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Framer Motion", "PostgreSQL"].map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[9px] sm:text-[10px] tracking-wider uppercase bg-zinc-950/40 text-zinc-400 border border-zinc-900/60 px-3 py-1.5 rounded-full hover:border-[#85b5ff]/30 hover:text-white transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Vertical Milestone Journey */}
            <div className="space-y-6 pt-6 border-t border-zinc-900">
              <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-500 uppercase block">
                JOURNEY
              </span>
              
              <div className="relative pl-6 border-l border-zinc-900 space-y-6">
                {timelineItems.map((milestone, idx) => (
                  <div key={idx} className="relative group/item">
                    {/* Node Dot */}
                    <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full bg-zinc-950 border-2 border-zinc-800 transition-colors duration-300 group-hover/item:border-[#85b5ff]" />
                    
                    <div>
                      <span className="font-mono text-[9px] sm:text-[10px] text-[#85b5ff] tracking-widest uppercase block mb-1">
                        {milestone.year}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-white font-medium mb-1 group-hover/item:text-[#85b5ff] transition-colors">
                        {milestone.title}
                      </h4>
                      <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-zinc-900">
              <a
                href="#projects"
                className="group flex h-11 items-center justify-center gap-2 rounded-lg bg-[#85b5ff] px-6 text-xs font-mono tracking-widest font-bold uppercase text-black transition-all hover:bg-[#a1c6ff] hover:scale-[1.01] active:scale-[0.98]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="group flex h-11 items-center justify-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/40 px-6 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-700 hover:text-white hover:bg-zinc-900/30"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>

          </motion.div>
        </div>
      </motion.div>

      {/* 2. ACADEMIC JOURNEY (EDUCATION) Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl mt-40 pt-28 border-t border-zinc-900 flex flex-col items-center relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-16 text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            ACADEMIC HISTORY // PATHWAY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Academic Journey<span className="text-[#85b5ff]">.</span>
          </h2>
          <p className="max-w-xl text-zinc-500 text-xs sm:text-sm font-light mt-2 leading-relaxed">
            My academic journey, achievements, and continuous learning path in software engineering and computer science.
          </p>
        </motion.div>

        {/* Custom Visual Central Timeline Layout */}
        <div className="relative w-full mt-12">
          {/* Vertical Central Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 h-full w-[2px] bg-[#85b5ff]/15 -translate-x-1/2 z-0" />

          {/* Timeline Cards Container */}
          <div className="space-y-16 relative z-10 w-full">
            
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-start justify-start w-full relative pl-16 lg:pl-0 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Center Bullet Node */}
                  <div className="absolute left-8 lg:left-1/2 top-2 lg:top-8 h-10 w-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center -translate-x-1/2 z-20 group hover:border-[#85b5ff] transition-colors duration-500">
                    <div className="h-6 w-6 rounded-full bg-zinc-900 flex items-center justify-center text-white/50">
                      {item.logo}
                    </div>
                  </div>

                  {/* Spacer Column for Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />

                  {/* Card Container Column */}
                  <motion.div
                    variants={itemVariants}
                    className="w-full lg:w-1/2 lg:px-12"
                  >
                    <div className="rounded-[24px] border border-zinc-900 bg-zinc-950/45 p-8 relative overflow-hidden group hover:border-zinc-800 transition-all duration-500 shadow-xl">
                      
                      {/* Accent Backlight */}
                      <div className="absolute -inset-10 bg-gradient-to-tr from-[#85b5ff]/3 to-transparent rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-zinc-900 flex items-center justify-center text-[#85b5ff] shrink-0 border border-white/5 shadow-inner">
                          {item.logo}
                        </div>
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#85b5ff] transition-colors">
                            {item.degree}
                          </h3>
                          <span className="font-mono text-[9px] tracking-widest text-[#85b5ff] uppercase mt-0.5 block">
                            {item.institution}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 font-light">
                        <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-500">
                          <span className="bg-zinc-900/60 px-2.5 py-1 rounded border border-zinc-800/50">{item.period}</span>
                          <span className="bg-[#85b5ff]/5 text-[#85b5ff] border border-[#85b5ff]/10 px-2.5 py-1 rounded font-semibold">{item.grade}</span>
                        </div>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>
        </div>
      </motion.div>
    </section>
  );
}
