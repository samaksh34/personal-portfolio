"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Folder, ArrowUpRight, X, Layers, Cpu, Globe } from "lucide-react";

// Inline SVG Github component to handle Lucide module resolution inconsistencies
function Github({ className }) {
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

// Individual Project Card component with mouse-coordinate spotlight borders
function ProjectCard({ project, onClick }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800/80 transition-all duration-500 ${project.gridSpan}`}
    >
      {/* Performance spotlight glow follow mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.03) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative fine radial grid background inside card */}
      <div className="absolute inset-0 grid-mesh opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      {/* Ambient static bottom right corner color coordinates */}
      <div className={`absolute -right-16 -bottom-16 pointer-events-none z-0 h-40 w-40 rounded-full bg-radial from-${project.accentColor}/10 to-transparent blur-2xl group-hover:scale-125 transition-transform duration-700`} />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-sm">
            <Folder className="h-4 w-4 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
          </div>
          <div className="flex items-center gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-[9px] font-mono tracking-widest text-indigo-300 border border-indigo-500/20">
                <Sparkles className="h-2 w-2" /> FEATURED
              </span>
            )}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/5 bg-zinc-900/30 opacity-0 group-hover:opacity-100 group-hover:border-white/10 transition-all duration-300">
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white" />
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
            {project.title}
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-2 font-light">
            {project.description}
          </p>
        </div>

        {/* Card Footer tags */}
        <div className="mt-8 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/5 bg-zinc-900/30 px-2 py-0.5 text-[10px] font-mono tracking-wider text-zinc-400"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-md border border-white/5 bg-zinc-900/30 px-2 py-0.5 text-[10px] font-mono tracking-wider text-zinc-500">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: "aetheros",
      title: "AetherOS",
      description: "A gorgeous client-side web desktop operating system built completely in vanilla Next.js and high-frequency canvas 3D engines, featuring active sandboxed browser windows and dynamic workspace configurations.",
      longDescription: "AetherOS represents a breakthrough in browser capabilities. It constructs a complete multi-window operating environment on standard client nodes. It features a custom window manager, simulated file systems, a shell emulator with functional scripts, and dynamic desktop coordinate snapping, fully loaded with high-speed rendering to support 60fps canvas operations.",
      featured: true,
      gridSpan: "md:col-span-2",
      tags: ["Next.js", "Framer Motion", "Three.js", "WebAudio API"],
      accentColor: "indigo-500",
      stats: { lines: "4,800+", speed: "60 FPS", size: "128 KB" },
      links: { github: "#", live: "#" }
    },
    {
      id: "novadb",
      title: "Nova DB",
      description: "Extremely fast high-concurrency memory-first serverless database engine built for sub-millisecond document syncs, featuring secure dynamic sharding indices.",
      longDescription: "Nova DB was designed to solve the warm-up latencies of serverless dynamic stores. It maps a memory-first architecture leveraging asynchronous cache syncs directly to persistent object storages. It includes optimized indexing structures, secure row-level client synchronization channels, and full transaction atomicity layers built entirely in JS.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: ["Mongoose", "MongoDB", "REST API", "Redis Cache"],
      accentColor: "emerald-500",
      stats: { latency: "<1.2ms", shards: "32 Cluster", cache: "99.8%" },
      links: { github: "#", live: "#" }
    },
    {
      id: "heliosui",
      title: "Helios UI",
      description: "A premium mechanical visual component architecture mapped around spring-physics engines, designed to integrate seamlessly inside cinematic interfaces.",
      longDescription: "Helios UI is a highly bespoke, performance-first design system. Built with raw JS callbacks and hardware-accelerated transforms, it replaces traditional CSS transitions with dynamic physics matrices. Features magnetic mouse triggers, spring-based elastic list coordinates, and high-fidelity scrolling layout decrescendos.",
      featured: false,
      gridSpan: "md:col-span-1",
      tags: ["Tailwind CSS", "Spring Physics", "Web Audio", "Framer Motion"],
      accentColor: "cyan-500",
      stats: { elements: "42 Atoms", physics: "Hooke's Law", weight: "12 KB" },
      links: { github: "#", live: "#" }
    },
    {
      id: "veloce",
      title: "Veloce API",
      description: "Edge-routed synchronous store API engine that synchronizes commercial product caches globally in milliseconds, completely eliminating stale shop caches.",
      longDescription: "Veloce API is an enterprise-scale storefront engine built to operate on edge worker clusters. It replaces traditional database pulls with static edge caches that are synchronized dynamically using lightweight pub-sub brokers, guaranteeing globally unified cache states under 15ms without central server strain.",
      featured: true,
      gridSpan: "md:col-span-2",
      tags: ["Next.js API", "Edge Middleware", "Websockets", "MongoDB"],
      accentColor: "violet-500",
      stats: { edgeSync: "12ms", loadTest: "100k Req/s", cacheHit: "100%" },
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 01 // SELECTED WORKS ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Visualizing <span className="font-serif italic font-light text-indigo-200">Creative</span> Concepts
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      {/* Bento Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Immersive Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Dark blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Radial gradient backing accent */}
              <div className={`absolute -right-24 -top-24 pointer-events-none z-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] blur-2xl`} />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative z-10">
                {/* Modal Title */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-indigo-400">PROJECT SHEET</span>
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  <span className="font-mono text-xs text-zinc-500 uppercase">{selectedProject.id}</span>
                </div>

                <h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  {selectedProject.title}
                </h3>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-zinc-900/50 px-2.5 py-0.5 text-xs font-mono text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-8 text-sm sm:text-base leading-relaxed text-zinc-300 font-light">
                  {selectedProject.longDescription}
                </p>

                {/* Metrics / Key Specs */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-y border-white/5 py-6">
                  {Object.entries(selectedProject.stats).map(([key, val]) => (
                    <div key={key} className="flex flex-col gap-1.5">
                      <span className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest">{key}</span>
                      <span className="text-base sm:text-xl font-semibold text-white font-mono">{val}</span>
                    </div>
                  ))}
                </div>

                {/* Modal Action Buttons */}
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.links.github}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-5 text-xs font-semibold text-white hover:bg-zinc-900 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> Source Code
                    </a>
                    <a
                      href={selectedProject.links.live}
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-white px-5 text-xs font-semibold text-black hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      Live Demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  <span className="hidden sm:inline font-mono text-[9px] text-zinc-600 tracking-wider">
                    SPEC_SHEET_V1.0
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
