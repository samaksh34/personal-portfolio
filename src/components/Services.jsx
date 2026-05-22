"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Sparkles, Database, ArrowUpRight } from "lucide-react";

function ServiceCard({ service }) {
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-default overflow-hidden rounded-3xl border border-white/5 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800/80 transition-colors duration-500"
    >
      {/* Spotlight glow follow mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.02) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative background grid mesh inside cards */}
      <div className="absolute inset-0 grid-mesh opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

      {/* Accent corner glow */}
      <div className={`absolute -right-16 -bottom-16 pointer-events-none z-0 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.06)_0%,transparent_70%)] blur-xl group-hover:scale-125 transition-transform duration-700`} />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/60 text-indigo-400 group-hover:text-white transition-colors duration-300">
            {service.icon}
          </div>
          <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase font-semibold">
            {service.tag}
          </span>
        </div>

        {/* Card Body */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* Card Footer Features */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/5 bg-zinc-900/30 px-2.5 py-0.5 text-[10px] font-mono tracking-wider text-zinc-400"
            >
              <Sparkles className="h-2 w-2 text-indigo-500/50" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const servicesData = [
    {
      title: "Frontend Engineering",
      tag: "01 // SERVICE",
      icon: <Layout className="h-5 w-5" />,
      description: "Crafting beautiful, accessible, and high-performance user interfaces in Next.js. I specialize in mapping fluid physics, rich aesthetic animations in Framer Motion, and responsive grids that scale flawlessly across all device layouts.",
      features: ["Next.js & React 19", "Framer Motion", "Tailwind CSS v4", "Lenis Smooth Scroll"],
    },
    {
      title: "Backend & Server APIs",
      tag: "02 // SERVICE",
      icon: <Server className="h-5 w-5" />,
      description: "Designing fast, reliable, and secure server-side logic and application programming interfaces. Building edge-routed serverless handlers in Next.js API endpoints connected via robust data integration protocols.",
      features: ["Next.js API Routes", "RESTful Interfaces", "Node.js", "Serverless Edge Sync"],
    },
    {
      title: "UI Engineering & Systems",
      tag: "03 // SERVICE",
      icon: <Database className="h-5 w-5" />,
      description: "Developing highly scalable, customized visual components designed around physics-based springs and hardware acceleration. Creating modular, reusable, and performance-first library architectures for immediate deployment.",
      features: ["Physics Springs", "Modular Atoms", "SVG Animations", "Figma Design Systems"],
    },
    {
      title: "Data & DB Architecture",
      tag: "04 // SERVICE",
      icon: <Database className="h-5 w-5" />,
      description: "Structuring scalable databases to secure zero data-loss transitions, sub-millisecond document retrievals, and optimal query speeds. Managing document schemas, caching setups, and Atlas-hosted storage clusters.",
      features: ["MongoDB Atlas", "Mongoose Schemas", "Cached connections", "Dynamic indexing"],
    },
  ];

  return (
    <section id="services" className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Decorative Radial glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.03)_0%,transparent_100%)] blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 01 // PROFESSIONAL CAPABILITIES ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Services <span className="font-serif italic font-light text-indigo-200">Offered</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      {/* Bento Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
