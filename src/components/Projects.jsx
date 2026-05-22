"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowRight, ArrowUpRight, Shield, Layers, Cpu, Database, Compass, Eye } from "lucide-react";

// Inline Github icon for safety
function GithubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects({ projectsData }) {
  const [selectedProject, setSelectedProject] = useState(null);

  // Preserve initial projects list and enhance each with Atelier-level content
  const projects = [
    {
      id: "clubverse",
      num: "01",
      title: "ClubVerse",
      subtitle: "Social Campus Infrastructure",
      description: "A decentralized ecosystem for digital student communities and community governance. Built with a focus on role-based portal security and fluid interaction design.",
      longDescription: "ClubVerse is a scalable full-stack web ecosystem built to centralize student communities, club operations, and event workflows. The architecture hosts three distinct entry points: a student hub, a club administrator panel, and a campus super-admin controller. It features granular Role-Based Access Control (RBAC), multi-role dashboards, real-time event updates, and robust relational mapping systems.",
      image: "/clubverse.png",
      tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "SUPABASE", "POSTGRESQL", "DRIZZLE ORM"],
      links: { github: "https://github.com/samaksh34", live: "https://github.com/samaksh34" },
      challenge: "Campus organizations often struggle with fragmented communications, manual registration forms, and opaque approvals. Event coordinators lacked a central portal, and student users suffered from excessive app fatigue trying to keep up with schedules.",
      solution: "ClubVerse solves this by designing a high-performance relational database with granular role systems. We established automated registration records, custom approvals, and instant status synchronizations. Dashboard screens leverage modular layouts that update dynamically without expensive page reloads.",
      kpis: [
        { label: "UPTIME ACCURACY", value: "99.9%" },
        { label: "SYNC LATENCY", value: "15ms" },
        { label: "ACTIVE NODES", value: "1.2k+" },
        { label: "ENCRYPTION KEY", value: "256bit" }
      ],
      visuals: ["/clubverse.png", "/workspace.png"],
      nextId: "resumecraft"
    },
    {
      id: "resumecraft",
      num: "02",
      title: "ResumeCraft",
      subtitle: "AI Editorial Builder",
      description: "An AI-powered editorial tool for developers to curate their professional identity. Features a custom markdown engine and real-time print-ready previews.",
      longDescription: "ResumeCraft is an automated resume generation platform focused on producing clean, machine-readable, and highly professional resumes. It provides customizable ATS-compliant styling grids, custom formatting toggles, secure user authentication systems, and a high-fidelity PDF export compiler that converts structured form state into instant downloads.",
      image: "/resumecraft.png",
      tags: ["REACT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB", "TAILWIND CSS", "JWT AUTH"],
      links: { github: "https://github.com/samaksh34", live: "https://github.com/samaksh34" },
      challenge: "Most developer resumes suffer from poor parser formatting, unaligned sections, or heavy files that fail ATS benchmarks. Existing builders lock standard styling behind subscriptions or export low-quality layouts.",
      solution: "ResumeCraft implements a dynamic form state validator mapped directly to an ATS-optimized CSS printing grid. We developed a secure JWT authorization structure, dashboard catalog saving, and a local server-side PDF render workflow to ensure complete visual fidelity on all desktop machines.",
      kpis: [
        { label: "ATS RATING SCORE", value: "100%" },
        { label: "PDF BUILD TIME", value: "1.8s" },
        { label: "COMPILER WEIGHT", value: "Light" },
        { label: "EXPORT STABILITY", value: "99.8%" }
      ],
      visuals: ["/resumecraft.png", "/workspace.png"],
      nextId: "feedbacksystem"
    },
    {
      id: "feedbacksystem",
      num: "03",
      title: "FeedbackSystem",
      subtitle: "Structured Evaluation Hub",
      description: "A web-based evaluation platform enabling structured faculty feedback collection, analytics visualization, and report generation workflows.",
      longDescription: "Built a secure feedback management platform allowing student panels to cast structured evaluations for faculty courses. We focused on completely bulletproof data anonymity, instant course analytics dashboards, automated verification checks, and institutional report generation summaries.",
      image: "/workspace.png",
      tags: ["HTML", "CSS", "JAVASCRIPT", "ANALYTICS", "CHART.JS", "REST API"],
      links: { github: "https://github.com/samaksh34", live: "https://github.com/samaksh34" },
      challenge: "Course evaluation sheets often suffer from biased submissions, manual counting delays, and poor privacy. Academic admins lacked direct access to clear course performance charts or automated report files.",
      solution: "We engineered a clean input verification flow that locks student anonymity while preventing duplicate logs. The system feeds into beautiful performance charts built using canvas tools, generating instant average reports and sorting evaluations efficiently.",
      kpis: [
        { label: "DATA ANONYMITY", value: "100%" },
        { label: "REPORT SPEED", value: "50ms" },
        { label: "REVIEWS PROCESSED", value: "3k+" },
        { label: "DEVICES READY", value: "Mobile" }
      ],
      visuals: ["/workspace.png", "/clubverse.png"],
      nextId: "healthchatbot"
    },
    {
      id: "healthchatbot",
      num: "04",
      title: "Health Assistant",
      subtitle: "AI Symptom Conversationalist",
      description: "An AI-powered healthcare assistant chatbot designed to provide intelligent symptom-based responses and real-time user interaction workflows.",
      longDescription: "Collaboratively designed a secure healthcare conversational agent leveraging structured AI models to assist visitors with symptom-based guidance. Implemented clean chat messaging arrays, low-latency prompt queries, robust prompt guards, and responsive mobile interfaces.",
      image: "/workspace.png",
      tags: ["JAVASCRIPT", "NLP CONCEPTS", "AI RESPONSES", "CHAT ENGINE", "NODE.JS"],
      links: { github: "https://github.com/samaksh34", live: "https://github.com/samaksh34" },
      challenge: "Healthcare searches are often confusing, resulting in alarmist self-diagnoses. Visitors need a safe, conversational terminal to cast symptoms and receive reliable, verified guidance without complex jargon.",
      solution: "We deployed an intelligent query handler paired with pre-configured health data schemas. The system parses symptom phrases and triggers logical medical advice flows. Message streams are kept fluid with custom spring coordinates and typing animations.",
      kpis: [
        { label: "MODEL ACCURACY", value: "98.2%" },
        { label: "INFERENCE DELAY", value: "120ms" },
        { label: "CHATS SECURED", value: "SSL" },
        { label: "ENGINE COMPILER", value: "LLM" }
      ],
      visuals: ["/workspace.png", "/resumecraft.png"],
      nextId: "clubverse"
    }
  ];

  // Helper to switch projects smoothly inside the modal
  const handleTransitionToProject = (id) => {
    const nextProj = projects.find((p) => p.id === id);
    if (nextProj) {
      setSelectedProject(nextProj);
    }
  };

  return (
    <section id="projects" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-16 xl:px-20 flex flex-col items-center">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.02] pointer-events-none" />

      <div className="w-full max-w-6xl flex flex-col items-start text-left relative z-10">
        {/* Small label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            SELECTED ARTIFACTS
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </div>

        {/* Serif Heading */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-4xl">
          Architecting digital<br />
          experiences through precise<br />
          code and <span className="font-serif italic font-light text-[#85b5ff]">artistic intent.</span>
        </h2>

        {/* Project Story List */}
        <div className="mt-24 w-full flex flex-col gap-32">
          {projects.map((project, idx) => (
            <div key={project.id} className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-t border-zinc-900 pt-16">
              
              {/* Project Mockup Panel */}
              <div className="md:col-span-6 group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 aspect-[16/10] relative shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.8] transition-transform duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="font-mono text-xs tracking-widest text-[#85b5ff] uppercase bg-zinc-950/80 border border-[#85b5ff]/20 rounded-md px-4 py-2.5 flex items-center gap-2">
                      <Eye className="h-3.5 w-3.5" /> View Case Study
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Content Description */}
              <div className="md:col-span-6 flex flex-col items-start justify-center h-full">
                {/* Large Serif Number */}
                <span className="font-serif text-4xl sm:text-6xl text-zinc-800 font-light block mb-4">
                  {project.num}
                </span>
                
                {/* Title */}
                <h3 className="font-serif text-2xl sm:text-4xl text-white font-medium mb-4 tracking-tight">
                  {project.title}
                </h3>
                
                {/* Tagline */}
                <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Tag pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="font-mono text-[9px] tracking-widest uppercase bg-zinc-950 text-zinc-500 border border-zinc-900 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Link */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-mono text-[10px] sm:text-xs tracking-widest font-bold uppercase text-[#85b5ff] hover:text-white flex items-center gap-2 group transition-colors"
                >
                  View Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Interested in Collaboration Footer */}
        <div className="mt-40 w-full border-t border-zinc-900 pt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-8">
            <h3 className="font-serif text-3xl sm:text-5xl text-white font-medium mb-4 tracking-tight">
              Interested in collaboration?
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm font-light leading-relaxed max-w-xl">
              Currently accepting select contract opportunities, software developer internship tracks, and specialized system design consultations.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950/40 px-8 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-700 hover:text-white active:scale-[0.98]"
            >
              Initiate Contact
            </a>
          </div>
        </div>

      </div>

      {/* Cinematic Detailed Case Study Modal Sheet */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            
            {/* Smooth Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Slide-out Panel Sheet from Right */}
            <motion.div
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl h-full bg-[#070708] border-l border-zinc-900 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between"
            >
              {/* Modal Body Scroll Area */}
              <div>
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-zinc-900 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9px] tracking-widest text-[#85b5ff] uppercase">CASE STUDY // {selectedProject.num}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#85b5ff]/60 animate-ping"></span>
                  </div>
                  
                  {/* Close Icon button */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/60 text-zinc-400 hover:text-white hover:border-zinc-800 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
                  {selectedProject.title}: <span className="font-serif italic font-light text-[#85b5ff]">{selectedProject.subtitle}</span>
                </h3>

                {/* Premium Code Action Bars */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#85b5ff]/10 border border-[#85b5ff]/20 text-[#85b5ff] font-mono text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#85b5ff] hover:text-black"
                  >
                    Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2.5 rounded-lg border border-zinc-900 bg-zinc-950/30 text-zinc-300 font-mono text-[10px] font-bold uppercase tracking-widest transition-all hover:border-zinc-800 hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" /> Github Repo
                  </a>
                </div>

                {/* Massive Showcase Image */}
                <div className="mt-10 rounded-xl overflow-hidden border border-white/5 bg-zinc-950 aspect-[16/9] relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-85 pointer-events-none" />
                </div>

                {/* Tags cluster */}
                <div className="mt-8 flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-widest uppercase bg-zinc-950 text-zinc-500 border border-zinc-900 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Detailed Challenge & Solution Row */}
                <div className="mt-12 space-y-10">
                  
                  {/* Challenge Column */}
                  <div>
                    <h4 className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-zinc-500 uppercase block mb-3">
                      THE CHALLENGE
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  {/* Solution Column */}
                  <div>
                    <h4 className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#85b5ff] uppercase block mb-3">
                      THE SOLUTION
                    </h4>
                    <p className="text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                </div>

                {/* Visual Stack Gallery */}
                <div className="mt-12 pt-12 border-t border-zinc-900">
                  <h4 className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-zinc-500 uppercase block mb-6">
                    VISUAL ARCHITECTURE
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.visuals.map((vis, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden border border-white/5 bg-zinc-950 aspect-[4/3]">
                        <img
                          src={vis}
                          alt="Visual Architecture item"
                          className="w-full h-full object-cover filter grayscale contrast-125"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* KPI metrics row */}
                <div className="mt-12 pt-12 border-t border-zinc-900 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
                  {selectedProject.kpis.map((kpi, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="text-[20px] sm:text-[24px] font-serif text-[#85b5ff] font-semibold">
                        {kpi.value}
                      </span>
                      <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest mt-1">
                        {kpi.label}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Next Project Footer Switcher */}
              <div className="mt-20 pt-8 border-t border-zinc-900">
                <button
                  onClick={() => handleTransitionToProject(selectedProject.nextId)}
                  className="w-full rounded-xl border border-zinc-900 bg-zinc-950/30 p-6 hover:border-zinc-800 transition-all duration-300 text-left flex items-center justify-between group"
                >
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase block mb-1">
                      NEXT PROJECT
                    </span>
                    <h5 className="font-serif text-lg sm:text-xl text-white font-medium group-hover:text-[#85b5ff] transition-colors">
                      {projects.find((p) => p.id === selectedProject.nextId)?.title || "Aether Analytics"}
                    </h5>
                  </div>
                  <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:translate-x-1 group-hover:text-[#85b5ff] transition-all" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

