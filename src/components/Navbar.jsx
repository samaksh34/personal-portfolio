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
        className={`fixed top-6 left-1/2 z-50 w-11/12 max-w-5xl -translate-x-1/2 rounded-full border transition-all duration-500 ${
          scrolled || isOpen
            ? "border-white/10 bg-black/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md"
            : "border-white/5 bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-2.5">
          {/* Atelier Brand Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-semibold tracking-widest text-xs font-mono uppercase group">
            <Compass className="h-4 w-4 text-zinc-400 group-hover:text-[#85b5ff] transition-colors" />
            <span>ATELIER.DEV</span>
          </a>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative rounded-full px-3 py-1.5 text-xs font-mono tracking-wider uppercase text-zinc-400 transition-colors hover:text-white"
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

          {/* Right Action: Pastel Blue Resume Pill */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex h-9 items-center justify-center rounded-full bg-[#85b5ff] px-5 text-[11px] font-mono tracking-widest font-semibold uppercase text-black transition-transform hover:scale-[1.03] active:scale-[0.97] hover:bg-[#a1c6ff] shadow-md shadow-[#85b5ff]/10"
            >
              Resume
            </a>

            {/* Mobile Burger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-zinc-950/80 text-zinc-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
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
            className="fixed inset-x-0 top-[90px] z-40 mx-auto w-11/12 rounded-3xl border border-white/10 bg-black/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none rounded-3xl" />
            <nav className="flex flex-col gap-2 relative z-10 font-mono">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="flex w-full items-center justify-between rounded-2xl border border-white/[0.03] bg-zinc-950/40 px-5 py-3.5 text-xs tracking-wider uppercase text-zinc-400 hover:text-white hover:bg-zinc-900/30 hover:border-white/10 transition-all"
                >
                  <span>{item.label}</span>
                  <span className="text-[9px] text-zinc-600">0{index + 1}</span>
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-[#85b5ff] py-4.5 mt-3 text-xs tracking-wider uppercase font-semibold text-black transition-all hover:bg-[#a1c6ff]"
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
