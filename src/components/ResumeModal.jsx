"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink } from "lucide-react";

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    };
    const handleClose = () => {
      setIsOpen(false);
      document.body.style.overflow = "";
    };

    window.addEventListener("open-resume", handleOpen);
    window.addEventListener("close-resume", handleClose);

    return () => {
      window.removeEventListener("open-resume", handleOpen);
      window.removeEventListener("close-resume", handleClose);
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Animated Glassmorphic Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-5xl h-[85vh] bg-[#070708]/95 border border-zinc-900 rounded-[28px] p-6 sm:p-8 flex flex-col justify-between shadow-[0_24px_80px_rgba(0,0,0,0.85)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#85b5ff]/20 bg-[#85b5ff]/10 text-[#85b5ff]">
                  <Download className="h-4 w-4" />
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-white font-medium tracking-tight">
                  Resume — Samaksh Saxena
                </h3>
              </div>

              {/* Close Button */}
              <button
                onClick={close}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-900 bg-zinc-950/60 text-zinc-400 hover:text-white hover:border-zinc-800 transition-all active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Embedded PDF Viewer Container */}
            <div className="flex-1 bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden relative group">
              {/* Mesh Glow Accent */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#85b5ff]/[0.03] rounded-full blur-2xl pointer-events-none" />
              
              <iframe
                src="/resume.pdf"
                className="w-full h-full border-none relative z-10"
                title="Samaksh Saxena Resume PDF"
              />
            </div>

            {/* Footer Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-900">
              <div className="flex items-center gap-3">
                {/* Download Button */}
                <a
                  href="/resume.pdf"
                  download="Samaksh_Saxena_Resume.pdf"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#85b5ff] px-6 text-xs font-mono tracking-widest font-bold uppercase text-black transition-all hover:bg-[#a1c6ff] hover:scale-[1.01] active:scale-[0.98] shadow-lg shadow-[#85b5ff]/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </a>

                {/* Open in Tab Button */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 items-center justify-center gap-2 rounded-xl border border-zinc-850 bg-zinc-900/30 px-6 text-xs font-mono tracking-widest font-semibold uppercase text-zinc-300 transition-all hover:border-zinc-800 hover:text-white hover:bg-zinc-900/50 active:scale-[0.98]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open in Tab
                </a>
              </div>

              {/* Close Action */}
              <button
                onClick={close}
                className="flex h-11 items-center justify-center rounded-xl border border-zinc-900 bg-zinc-950/60 px-6 text-xs font-mono tracking-widest uppercase text-zinc-400 hover:text-white hover:border-zinc-800 transition-all active:scale-[0.98] cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
