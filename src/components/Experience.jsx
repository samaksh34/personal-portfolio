"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

function TimelineCard({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative mb-16 md:mb-24 last:mb-0 flex flex-col md:flex-row items-start">
      {/* Central Connector Circle Node with micro-glow */}
      <div className="absolute left-[16px] md:left-1/2 top-1.5 z-10 h-7 w-7 -translate-x-1/2 rounded-full border-2 border-indigo-500/40 bg-zinc-950 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.2)]">
        <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
      </div>

      {/* Card Content Shell */}
      <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16 md:order-last"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-lg rounded-3xl border border-white/5 bg-zinc-950/40 p-6 sm:p-8 hover:border-zinc-800/80 transition-colors duration-500 group relative"
        >
          {/* Subtle lighting edge */}
          <div className="absolute -bottom-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs text-indigo-400 font-medium uppercase tracking-wider">{item.company}</span>
              <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mt-1 group-hover:text-indigo-200 transition-colors">
                {item.role}
              </h3>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-zinc-900/30 px-3 py-1 text-[10px] font-mono text-zinc-400 w-fit">
              <Calendar className="h-3 w-3" />
              {item.period}
            </div>
          </div>

          {/* Achievements Checklist */}
          <ul className="mt-6 space-y-3.5">
            {item.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-indigo-500/60 mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Technology tags */}
          <div className="mt-8 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/5 bg-zinc-900/60 px-2 py-0.5 text-[10px] font-mono text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Experience({ experienceData }) {
  const containerRef = useRef(null);

  // Track progress of container relative to viewport scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out drawing animation track
  const smoothY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Calculate high-fidelity height scaling
  const scaleY = useTransform(smoothY, [0, 1], [0, 1]);

  const dataToRender = experienceData || [
    {
      company: "Samvaad Theatre Society",
      role: "Active Member & Coordinator",
      period: "2023 - PRESENT",
      highlights: [
        "Actively participated in multiple college theatre productions, street performances, and competitive stage showcases.",
        "Developed premium interpersonal communication, active collaboration, and theatrical presentation skills.",
        "Coordinated logistics and team schedules for stage events, boosting student engagement and performance execution."
      ],
      tags: ["Communication", "Collaboration", "Public Speaking", "Creative Direction"],
    },
    {
      company: "Enigma Programming Club",
      role: "Technical Member",
      period: "2024 - PRESENT",
      highlights: [
        "Contributed to organizing coding events, technical workshops, and hackathons for 300+ students.",
        "Developed and maintained lightweight technical participant workflows and registration forms.",
        "Active contributor to club programming repositories, collaborating on standard algorithm sheets."
      ],
      tags: ["Algorithms", "Event Coordination", "Technical Support", "Peer Mentoring"],
    },
    {
      company: "Kalakrit Music Club",
      role: "Core Team Member",
      period: "2023 - PRESENT",
      highlights: [
        "Assisted in organizing cultural musical performances, vocal events, and stage sound systems.",
        "Led collaborative coordination across club members to align music setlists and equipment logistics under strict timelines.",
        "Fostered creative group ideas combining traditional instrumentation with modern digital tracks during college fests."
      ],
      tags: ["Operational Logistics", "Team Leadership", "Creative Execution", "Sound Engineering"],
    }
  ];

  return (
    <section id="experience" ref={containerRef} className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 02 // TIMELINE ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Professional & Extracurricular <span className="font-serif italic font-light text-indigo-200">Journey</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      <div className="relative mt-24">
        {/* Static Background Path Line */}
        <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-white/5 pointer-events-none" />

        {/* Dynamic Scroll-Drawn Glowing Path Line */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent origin-top shadow-[0_0_15px_rgba(99,102,241,0.5)] pointer-events-none"
        />

        {/* Timeline Cards Container */}
        <div className="relative">
          {dataToRender.map((item, index) => (
            <TimelineCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
