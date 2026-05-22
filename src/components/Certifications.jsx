"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";

function CertCard({ cert, index }) {
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
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-950/40 p-5 hover:border-zinc-800/80 transition-all duration-500 flex flex-col justify-between"
    >
      {/* Spotlight follow glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.01) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* Decorative static small background blur */}
      <div className="absolute -right-8 -bottom-8 pointer-events-none z-0 h-24 w-24 rounded-full bg-radial from-indigo-500/5 to-transparent blur-xl group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10 flex gap-4">
        {/* Award Icon Badge */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-all duration-300">
          <Award className="h-4.5 w-4.5" />
        </div>

        {/* Certificate Title and Info */}
        <div className="flex flex-col">
          <span className="font-mono text-[9px] tracking-wider text-indigo-400 uppercase font-medium">
            {cert.issuer}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-tight mt-1 group-hover:text-indigo-200 transition-colors duration-300">
            {cert.title}
          </h3>
          
          <div className="mt-3 flex items-center gap-1.5 text-zinc-500 text-[10px] font-mono">
            <Calendar className="h-3 w-3" />
            <span>{cert.date}</span>
            <span className="text-zinc-700">//</span>
            <ShieldCheck className="h-3 w-3 text-emerald-500/70" />
            <span className="text-emerald-500/70 uppercase">Verified</span>
          </div>
        </div>
      </div>

      {/* Action details link */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">
          ID // {cert.id}
        </span>
        
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold font-mono text-zinc-400 group-hover:text-white transition-colors duration-300"
        >
          Verify Credential
          <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const certsData = [
    {
      title: "Front-End Developer Professional Certificate",
      issuer: "Meta Credentials",
      date: "2025",
      id: "META-FE-99",
      link: "https://coursera.org/verify/professional-cert/meta-front-end-developer",
    },
    {
      title: "UX Design Professional Certificate",
      issuer: "Google Career Certificates",
      date: "2025",
      id: "GOOG-UX-73",
      link: "https://coursera.org/verify/professional-cert/google-ux-design",
    },
    {
      title: "Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "2025",
      id: "AWS-CCP-25",
      link: "https://aws.amazon.com/verification",
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB University",
      date: "2024",
      id: "MDB-CDA-48",
      link: "https://university.mongodb.com/certification",
    },
    {
      title: "Full-Stack Web Development Specialization",
      issuer: "Coursera / HKUST",
      date: "2024",
      id: "CRT-FSWD-12",
      link: "https://coursera.org/verify/specialization/full-stack-web-development",
    },
    {
      title: "Responsive Web Design Certification",
      issuer: "freeCodeCamp Org",
      date: "2023",
      id: "FCC-RWD-07",
      link: "https://freecodecamp.org/certification",
    },
  ];

  return (
    <section id="certifications" className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 04 // PROFESSIONAL CREDENTIALS ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Verified <span className="font-serif italic font-light text-indigo-200">Certifications</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      {/* Grid of Certifications */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {certsData.map((cert, index) => (
          <CertCard key={cert.title} cert={cert} index={index} />
        ))}
      </div>
    </section>
  );
}
