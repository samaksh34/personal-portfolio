"use client";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight, Award } from "lucide-react";

export default function Certifications({ certsData }) {
  const dataToRender = certsData || [
    {
      title: "Smart India Hackathon (SIH) 2024 Participant",
      issuer: "AICTE / Govt of India",
      date: "2024",
      id: "SIH-2024-SAM",
      link: "https://sih.gov.in"
    },
    {
      title: "Core Team Member — Kalakrit Music Club",
      issuer: "ABES Engineering College",
      date: "2023 - PRESENT",
      id: "ABES-KMC-09",
      link: "#"
    },
    {
      title: "Technical Member — Enigma Programming Club",
      issuer: "ABES Engineering College",
      date: "2024 - PRESENT",
      id: "ABES-EPC-12",
      link: "#"
    },
    {
      title: "Active Member — Samvaad Theatre Society",
      issuer: "ABES Engineering College",
      date: "2023 - PRESENT",
      id: "ABES-STS-05",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="achievements" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 grid-mesh opacity-[0.025] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-5xl flex flex-col items-start text-left relative z-10"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#85b5ff] uppercase">
            SYSTEM CREDENTIALS // MILESTONES
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl"
        >
          Academic & <br />
          Professional <span className="font-serif italic font-light text-[#85b5ff]">Registry</span><span className="text-[#85b5ff]">.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-zinc-500 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
        >
          A comprehensive ledger of verified technical achievements, organizational milestones, and institutional leadership appointments.
        </motion.p>

        {/* Archival Ledger Table */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full flex flex-col border-t border-zinc-900"
        >
          {dataToRender.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group w-full py-8 border-b border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-zinc-950/20 px-4 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Micro Glow */}
              <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-[#85b5ff]/[0.01] filter blur-lg pointer-events-none transition-all duration-500 group-hover:scale-150" />

              {/* Left Cell: Index & Date */}
              <div className="flex items-center gap-6 shrink-0">
                <span className="font-mono text-[10px] text-zinc-600">0{index + 1}</span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-zinc-500 uppercase">{cert.date}</span>
              </div>

              {/* Middle Cell: Title & Issuer */}
              <div className="flex-1 flex flex-col gap-1.5 md:pl-6">
                <span className="font-mono text-[9px] tracking-widest text-[#85b5ff] uppercase">
                  {cert.issuer}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-zinc-100 font-medium tracking-tight group-hover:text-[#85b5ff] transition-colors duration-300">
                  {cert.title}
                </h3>
              </div>

              {/* Right Cell: Details & Action */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:justify-end shrink-0">
                <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
                  ID // {cert.id}
                </span>
                <div className="flex items-center gap-1 text-[9px] font-mono text-[#85b5ff] bg-[#85b5ff]/5 border border-[#85b5ff]/10 px-2 py-0.5 rounded">
                  <ShieldCheck className="h-3 w-3" />
                  <span className="uppercase tracking-widest">Verified</span>
                </div>
                
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors duration-300 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 px-3 py-1.5 rounded-lg group-hover:border-zinc-700 cursor-pointer"
                >
                  Verify
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
