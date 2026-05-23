"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-6 left-1/2 z-50 w-[96%] max-w-[1400px] -translate-x-1/2 rounded-[20px] border transition-all duration-500 ${scrolled || isOpen
          ? "border-white/10 bg-black/85 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-lg py-1.5"
          : "border-white/5 bg-zinc-950/45 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-md py-3"
          }`}
      >
        <div className="flex items-center justify-between px-8 py-3.5 sm:px-10 transition-all duration-500">

          {/* Sam Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 text-white font-bold tracking-[0.2em] text-sm font-mono uppercase group">
            <Compass className="h-5 w-5 text-zinc-400 group-hover:text-[#85b5ff] transition-all duration-500 group-hover:rotate-45" />
            <span>SAMXH.DEV</span>
          </a>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-xl px-4 py-2 text-xs font-mono tracking-widest uppercase text-zinc-400 transition-colors hover:text-white"
              >
                {hoveredIndex === index && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 z-0 rounded-xl bg-[#85b5ff]/10 border border-[#85b5ff]/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Action: Pastel Blue Resume Pill */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              download="Samaksh_Saxena_Resume.pdf"
              className="hidden sm:inline-flex h-11 items-center justify-center rounded-xl bg-[#85b5ff] px-6 text-xs font-mono tracking-widest font-bold uppercase text-black transition-all hover:scale-[1.02] active:scale-[0.98] hover:bg-[#a1c6ff] shadow-lg shadow-[#85b5ff]/10"
            >
              Resume
            </a>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-950/80 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[105px] z-40 mx-auto w-11/12 rounded-[24px] border border-white/10 bg-black/95 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none rounded-[24px]" />
            <nav className="flex flex-col gap-2.5 relative z-10 font-mono">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex w-full items-center justify-between rounded-xl border border-white/[0.03] bg-zinc-950/40 px-5 py-4 text-xs tracking-wider uppercase text-zinc-400 hover:text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all"
                >
                  <span>{item.label}</span>
                  <span className="text-[9px] text-[#85b5ff]">0{index + 1}</span>
                </motion.a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                download="Samaksh_Saxena_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-xl bg-[#85b5ff] py-4 mt-3 text-xs tracking-wider uppercase font-semibold text-black transition-all hover:bg-[#a1c6ff]"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
