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

  const cardLeftVariants = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const cardRightVariants = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 220, damping: 16 }
    }
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
      logo: "/abes.png"
    },
    {
      degree: "Class 12th (CBSE)",
      institution: "Dayawati Modi Academy, Modipur Rampur",
      period: "2023",
      grade: "Grade: 84.8%",
      description: "Completed my Class XII from Dayawati Modi Academy under the CBSE board.",
      logo: "/cbse.png"
    },
    {
      degree: "Class 10th (CBSE)",
      institution: "Dayawati Modi Academy, Modipur Rampur",
      period: "2021",
      grade: "Grade: 94.6%",
      description: "Completed my Class X from Dayawati Modi Academy under the CBSE board.",
      logo: "/cbse.png"
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
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-102"
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
        {/* Dynamic Background Blur Lights to enhance visual depth */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#85b5ff]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-emerald-500/[0.015] rounded-full blur-[100px] pointer-events-none z-0" />

        {/* Header */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-3 mb-16 text-center relative z-10">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            ACADEMIC HISTORY // PATHWAY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-white font-medium tracking-tight">
            Academic Journey<span className="text-[#85b5ff]">.</span>
          </h2>
          <p className="max-w-xl text-zinc-500 text-xs sm:text-sm font-light mt-2 leading-relaxed">
            My verified educational milestones, institutional grades, and academic achievements.
          </p>
        </motion.div>

        {/* Custom Visual Central Timeline Layout */}
        <div className="relative w-full mt-12 z-10">
          
          {/* Enhanced Growing Vertical Central Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-8 lg:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#85b5ff] via-[#85b5ff]/35 to-transparent -translate-x-1/2 z-0 origin-top shadow-[0_0_10px_rgba(133,181,255,0.2)]"
          />

          {/* Timeline Cards Container */}
          <div className="space-y-20 relative z-10 w-full">
            
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-start justify-start w-full relative pl-16 lg:pl-0 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Timeline Center Node with custom growing pop and ripple */}
                  <motion.div
                    variants={nodeVariants}
                    className="absolute left-8 lg:left-1/2 top-3 lg:top-8 h-12 w-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center -translate-x-1/2 z-20 group"
                  >
                    {/* Glowing Accent Ping Effect */}
                    <div className="absolute inset-0 rounded-full bg-[#85b5ff]/10 animate-ping opacity-60 pointer-events-none group-hover:bg-[#85b5ff]/20 transition-all" />
                    
                    {/* Dynamic Image Logo Container */}
                    <div className="h-9 w-9 rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-[#85b5ff]/40 transition-colors shadow-inner">
                      <img
                        src={item.logo}
                        alt=""
                        className="h-full w-full object-contain filter brightness-110 contrast-105"
                      />
                    </div>
                  </motion.div>
 
                  {/* Spacer Column for Desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
 
                  {/* Card Container Column with Directional Slider Animation */}
                  <motion.div
                    variants={isEven ? cardLeftVariants : cardRightVariants}
                    className="w-full lg:w-1/2 lg:px-12"
                  >
                    <div className="rounded-[24px] border border-zinc-900 bg-zinc-950/45 p-8 relative overflow-hidden group hover:border-zinc-800/80 hover:shadow-2xl hover:shadow-[#85b5ff]/[0.02] transition-all duration-500 shadow-xl backdrop-blur-md">
                      
                      {/* Interactive Accent Backlight Glow */}
                      <div className="absolute -inset-10 bg-gradient-to-tr from-[#85b5ff]/5 to-transparent rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />
 
                      {/* Card Content Header */}
                      <div className="flex items-start gap-4 mb-5 relative z-10">
                        {/* Dynamic Card Header Logo */}
                        <div className="h-14 w-14 rounded-2xl bg-zinc-900/80 flex items-center justify-center shrink-0 border border-white/5 shadow-inner overflow-hidden transition-all duration-500 group-hover:border-[#85b5ff]/30">
                          <img
                            src={item.logo}
                            alt=""
                            className="h-9 w-9 object-contain filter brightness-110 contrast-105"
                          />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-[#85b5ff] transition-colors duration-300">
                            {item.degree}
                          </h3>
                          <span className="font-mono text-[9px] tracking-widest text-[#85b5ff] uppercase mt-1.5 block font-semibold">
                            {item.institution}
                          </span>
                        </div>
                      </div>
 
                      {/* Card Body Metrics & Details */}
                      <div className="space-y-4 font-light relative z-10">
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                          <span className="bg-zinc-900/60 px-3 py-1 rounded-md border border-zinc-850 text-zinc-400 font-medium">
                            📅 {item.period}
                          </span>
                          <span className="bg-[#85b5ff]/5 text-[#85b5ff] border border-[#85b5ff]/15 px-3 py-1 rounded-md font-semibold tracking-wide uppercase">
                            🏆 {item.grade}
                          </span>
                        </div>
                        
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
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
