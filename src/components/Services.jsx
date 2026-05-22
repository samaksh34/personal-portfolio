"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Sparkles, Database, ArrowUpRight, Compass } from "lucide-react";

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Compass: Compass,
  Sparkles: Sparkles
};

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

  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative cursor-default overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800/80 transition-all duration-500 backdrop-blur-md shadow-lg"
    >
      {/* Spotlight glow follow mouse */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(133, 181, 255, 0.08) 0%, rgba(133, 181, 255, 0.01) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative background grid mesh inside cards */}
      <div className="absolute inset-0 grid-mesh opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

      {/* Accent corner glow */}
      <div className={`absolute -right-16 -bottom-16 pointer-events-none z-0 h-36 w-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(133,181,255,0.03)_0%,transparent_70%)] blur-xl group-hover:scale-125 transition-transform duration-700`} />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 text-[#85b5ff] group-hover:text-white transition-colors duration-300">
            <IconComponent className="h-5 w-5" />
          </div>
          <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase font-semibold">
            {service.tag}
          </span>
        </div>

        {/* Card Body */}
        <div className="mt-12">
          <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-[#85b5ff] transition-colors duration-300">
            {service.title}
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
            {service.description}
          </p>
        </div>

        {/* Card Footer Features */}
        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-900 bg-zinc-950 px-2.5 py-0.5 text-[9px] font-mono tracking-wider text-zinc-400"
            >
              <Sparkles className="h-2.5 w-2.5 text-[#85b5ff]/60" />
              {feature}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services({ servicesData }) {
  const dataToRender = servicesData || [
    {
      title: "Frontend Engineering",
      tag: "01 // CAPABILITY",
      iconName: "Layout",
      description: "Crafting beautiful, accessible, and high-performance user interfaces in Next.js. I specialize in mapping fluid physics, rich aesthetic animations in Framer Motion, and responsive layouts that adapt flawlessly from mobile screens to large grid monitors.",
      features: ["Next.js & React 19", "TypeScript & ES6+", "Tailwind CSS v4", "Framer Motion & Physics"],
    },
    {
      title: "Backend & Serverless",
      tag: "02 // CAPABILITY",
      iconName: "Server",
      description: "Designing fast, reliable, and secure server-side logic and application programming interfaces. I build modular RESTful APIs, secure JWT-based role authorization protocols, and scalable backend workflows.",
      features: ["Node.js & Express.js", "Server-side Architecture", "JWT Authentication", "REST APIs & Endpoints"],
    },
    {
      title: "Database Integration",
      tag: "03 // CAPABILITY",
      iconName: "Database",
      description: "Structuring scalable databases to secure zero data-loss transitions, sub-millisecond document retrievals, and optimal query speeds. Managing relational mapping schemas, ORM systems, and cached databases.",
      features: ["PostgreSQL & Supabase", "Drizzle ORM", "MongoDB & Mongoose", "MySQL Database Schema"],
    },
    {
      title: "Product Integration",
      tag: "04 // CAPABILITY",
      iconName: "Compass",
      description: "Combining technical problem-solving with product-driven thinking to create full features. Experienced in building automated PDF export systems, third-party API integrations, and AI response pipelines.",
      features: ["Gemini API Integration", "PDF Export Systems", "Responsive Web Design", "Third-party Integrations"],
    },
  ];

  return (
    <section id="capabilities" className="relative py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
      {/* Decorative Radial glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(133,181,255,0.02)_0%,transparent_100%)] blur-3xl" />
      <div className="absolute inset-0 grid-mesh opacity-[0.015] pointer-events-none" />

      <div className="w-full max-w-5xl flex flex-col items-start text-left relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            PROFESSIONAL CAPABILITIES
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-white leading-none">
          Capabilities & <span className="font-serif italic font-light text-[#85b5ff]">Systems</span>
        </h2>
        
        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {dataToRender.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

