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

  // Lock background scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  // Dynamic project layout configuration mapping database IDs to high-end mockups and text details
  const projectConfigs = {
    "clubverse": {
      num: "01",
      subtitle: "Social Campus Infrastructure",
      image: "/clubverse.png",
      mission: "To centralize fragmented student community coordinator operations, role-based permission hierarchies, and event registries inside a single type-safe, high-speed campus dashboard ecosystem.",
      challenge: "Campus organizations often struggle with fragmented communications, manual registration forms, and opaque approvals. Event coordinators lacked a central portal, and student users suffered from excessive app fatigue trying to keep up with schedules.",
      solution: "ClubVerse solves this by designing a high-performance relational database with granular role systems. We established automated registration records, custom approvals, and instant status synchronizations. Dashboard screens leverage modular layouts that update dynamically without expensive page reloads.",
      visuals: ["/clubverse.png", "/workspace.png", "/resumecraft.png"],
      nextId: "resumecraft"
    },
    "resumecraft": {
      num: "02",
      subtitle: "AI Editorial Builder",
      image: "/resumecraft.png",
      mission: "To deliver a complete ATS-friendly print curriculum editor featuring modular drag-reordering, PDF output security, and instant custom downloads for global developers.",
      challenge: "Most developer resumes suffer from poor parser formatting, unaligned sections, or heavy files that fail ATS benchmarks. Existing builders lock standard styling behind subscriptions or export low-quality layouts.",
      solution: "ResumeCraft implements a dynamic form state validator mapped directly to an ATS-optimized CSS printing grid. We developed a secure JWT authorization structure, dashboard catalog saving, and a local server-side PDF render workflow to ensure complete visual fidelity on all desktop machines.",
      visuals: ["/resumecraft.png", "/workspace.png", "/clubverse.png"],
      nextId: "feedback-system"
    },
    "feedback-system": {
      num: "03",
      subtitle: "Structured Evaluation Hub",
      image: "/workspace.png",
      mission: "To automate and secure institutional student course reviews with guaranteed privacy models, input anti-collision, and real-time evaluation charts.",
      challenge: "Course evaluation sheets often suffer from biased submissions, manual counting delays, and poor privacy. Academic admins lacked direct access to clear course performance charts or automated report files.",
      solution: "We engineered a clean input verification flow that locks student anonymity while preventing duplicate logs. The system feeds into beautiful performance charts built using canvas tools, generating instant average reports and sorting evaluations efficiently.",
      visuals: ["/workspace.png", "/clubverse.png", "/resumecraft.png"],
      nextId: "health-assistant"
    },
    "health-assistant": {
      num: "04",
      subtitle: "AI Symptom Conversationalist",
      image: "/workspace.png",
      mission: "To bridge patient symptom clarity by delivering pre-screened advice via an active conversational agent with safety prompt guard layers.",
      challenge: "Healthcare searches are often confusing, resulting in alarmist self-diagnoses. Visitors need a safe, conversational terminal to cast symptoms and receive reliable, verified guidance without complex jargon.",
      solution: "We deployed an intelligent query handler paired with pre-configured health data schemas. The system parses symptom phrases and triggers logical medical advice flows. Message streams are kept fluid with custom spring coordinates and typing animations.",
      visuals: ["/workspace.png", "/resumecraft.png", "/clubverse.png"],
      nextId: "clubverse"
    }
  };

  // Build the projects list by combining database projectsData with the config mapping
  const sourceProjects = projectsData && projectsData.length > 0 ? projectsData : [
    {
      id: "clubverse",
      title: "ClubVerse",
      description: "A scalable club and event management ecosystem with role-based dashboards, authentication systems, and workflow automation.",
      longDescription: "ClubVerse is a production-focused full-stack platform designed to simplify club and event management for colleges.",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Supabase", "Drizzle ORM", "PostgreSQL", "RBAC", "JWT"],
      stats: {
        architecture: "Multi-Portal RBAC",
        backend: "Supabase + PostgreSQL",
        auth: "Secure Authentication",
        dashboards: "3 Dedicated Portals"
      },
      links: { github: "#", live: "#" }
    },
    {
      id: "resumecraft",
      title: "ResumeCraft",
      description: "ATS-focused resume builder platform with authentication, real-time customization, and PDF export workflows.",
      longDescription: "ResumeCraft is a full-stack resume generation platform designed to help users create ATS-friendly professional resumes.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "PDF Export"],
      stats: {
        auth: "JWT Authentication",
        export: "PDF Resume Export",
        ui: "Live Preview System",
        templates: "ATS-Friendly Templates"
      },
      links: { github: "#", live: "#" }
    },
    {
      id: "feedback-system",
      title: "Faculty Feedback Automation",
      description: "Web-based evaluation and analytics system for structured faculty feedback management.",
      longDescription: "A structured feedback automation platform enabling students to submit faculty evaluations.",
      tags: ["HTML", "CSS", "JavaScript", "Dashboard", "Analytics"],
      stats: {
        analytics: "Faculty Reports",
        forms: "Dynamic Validation",
        workflow: "Automated Submission",
        dashboards: "Performance Insights"
      },
      links: { github: "#", live: "#" }
    },
    {
      id: "health-assistant",
      title: "AI Health Assistant Chatbot",
      description: "AI-powered healthcare chatbot with NLP-based query handling and intelligent response workflows.",
      longDescription: "An AI-integrated healthcare assistant chatbot capable of handling symptom-based conversations.",
      tags: ["AI", "NLP", "Chatbot", "Node.js", "Healthcare"],
      stats: {
        ai: "NLP-Based Responses",
        workflow: "Symptom Handling",
        interface: "Interactive Chat UI",
        backend: "Response Pipelines"
      },
      links: { github: "#", live: "#" }
    }
  ];

  const projects = sourceProjects.map((p) => {
    // Normalise ID matches (e.g. feedbacksystem -> feedback-system)
    const normalizedId = p.id === "feedbacksystem" ? "feedback-system" : 
                         p.id === "healthchatbot" ? "health-assistant" : p.id;
    const config = projectConfigs[normalizedId] || {
      num: "05",
      subtitle: "Development System",
      image: "/workspace.png",
      mission: "To deliver modern software applications with clean engineering practices.",
      challenge: "Building secure, accessible interfaces under production milestones.",
      solution: "Developed dynamic state-driven React components integrated with custom database tables.",
      visuals: ["/workspace.png"],
      nextId: "clubverse"
    };

    // Dynamically convert MongoDB stats map/object to case study KPIs list
    const kpis = p.stats
      ? Object.entries(p.stats instanceof Map ? Object.fromEntries(p.stats) : p.stats).map(([key, val]) => ({
          label: key.replace(/([A-Z])/g, ' $1').toUpperCase(),
          value: val
        }))
      : [
          { label: "STATUS", value: "Ready" }
        ];

    return {
      ...p,
      ...config,
      kpis,
      tags: p.tags.map(t => t.toUpperCase()) // visual design uses uppercase tags
    };
  });

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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            
            {/* Smooth Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Centered Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              data-lenis-prevent
              className="relative z-10 w-full max-w-4xl max-h-[85vh] bg-[#070708]/95 border border-zinc-900 rounded-[28px] p-6 sm:p-10 md:p-12 overflow-y-auto shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl scrollbar-thin"
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

                 {/* Title & Description */}
                <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight">
                  {selectedProject.title}: <span className="font-serif italic font-light text-[#85b5ff]">{selectedProject.subtitle}</span>
                </h3>
                
                <p className="mt-4 text-zinc-400 text-xs sm:text-sm font-light leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack Used Segment */}
                <div className="mt-6 space-y-3">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase block">TECH STACK USED</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] tracking-widest uppercase bg-zinc-900/60 text-zinc-300 border border-zinc-800/80 px-3 py-1.5 rounded-md hover:border-[#85b5ff]/20 hover:text-white transition-colors cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Premium Code Action Bars */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 items-center justify-center gap-2.5 rounded-lg bg-[#85b5ff]/10 border border-[#85b5ff]/20 text-[#85b5ff] font-mono text-[10px] font-bold uppercase tracking-widest transition-all hover:bg-[#85b5ff] hover:text-black shadow-lg shadow-[#85b5ff]/5"
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

                {/* Project Mission Segment */}
                <div className="mt-8 p-6 rounded-2xl border border-zinc-900 bg-zinc-950/45 relative overflow-hidden group">
                  <div className="absolute -inset-10 bg-gradient-to-r from-[#85b5ff]/5 to-transparent rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
                  <span className="font-mono text-[9px] tracking-[0.25em] text-[#85b5ff] uppercase block mb-2 relative z-10">THE MISSION</span>
                  <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed italic relative z-10">
                    &quot;{selectedProject.mission}&quot;
                  </p>
                </div>

                {/* Detailed Challenge & Solution Row */}
                <div className="mt-12 space-y-10 border-t border-zinc-900/60 pt-10">
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

                {/* UI Images of Different Pages */}
                <div className="mt-12 pt-12 border-t border-zinc-900">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-zinc-500 uppercase">
                      UI IMAGES OF DIFFERENT PAGES
                    </span>
                    <span className="font-mono text-[9px] text-[#85b5ff] uppercase tracking-widest">
                      0{selectedProject.visuals.length} Views
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.visuals.map((vis, idx) => (
                      <div key={idx} className="group/visual rounded-xl overflow-hidden border border-zinc-900 bg-zinc-950 aspect-[4/3] relative cursor-pointer hover:border-zinc-800 transition-all duration-300">
                        <img
                          src={vis}
                          alt={`${selectedProject.title} Page UI Screenshot ${idx + 1}`}
                          className="w-full h-full object-cover filter grayscale contrast-[1.1] transition-transform duration-700 group-hover/visual:scale-102 group-hover/visual:filter-none"
                        />
                        <div className="absolute bottom-3 left-3 bg-black/60 border border-white/5 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-mono tracking-widest text-zinc-400 group-hover/visual:text-[#85b5ff] transition-all">
                          {idx === 0 ? "PRIMARY WORKSPACE" : idx === 1 ? "ANALYTICS SYSTEM" : "MANAGEMENT INTERFACE"}
                        </div>
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

