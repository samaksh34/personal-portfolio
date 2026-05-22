"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Certs", href: "#certifications" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 z-50 w-11/12 max-w-3xl -translate-x-1/2 rounded-full border transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-black/60 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "border-white/5 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-3 sm:px-6 py-2">
        {/* Brand Logo with micro-glow */}
        <a href="#home" className="flex items-center gap-2 text-white font-medium tracking-tight group">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950 transition-colors group-hover:border-indigo-500/40">
            <Terminal className="h-3.5 w-3.5 text-zinc-400 transition-colors group-hover:text-indigo-400" />
            <div className="absolute inset-0 rounded-full bg-indigo-500/10 opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
          </div>
          <span className="hidden sm:inline text-xs font-mono tracking-widest text-zinc-300 transition-colors group-hover:text-white">SAMAKSH.DEV</span>
        </a>

        {/* Capsule Navigation List */}
        <nav className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative rounded-full px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-medium text-zinc-400 transition-colors hover:text-white"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 z-0 rounded-full bg-white/[0.06] border border-white/[0.04]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
