"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

function FAQItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? "border-indigo-500/25 bg-indigo-500/[0.02]"
          : "border-white/5 bg-zinc-950/20 hover:border-white/10"
      }`}
    >
      {/* FAQ Header Click Trigger */}
      <button
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
      >
        <div className="flex gap-4">
          <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 transition-colors duration-300 ${
            isOpen ? "text-indigo-400" : "text-zinc-500"
          }`} />
          <h3 className={`text-sm sm:text-base font-semibold tracking-tight transition-colors duration-300 ${
            isOpen ? "text-white" : "text-zinc-300"
          }`}>
            {item.question}
          </h3>
        </div>
        
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
          isOpen
            ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-400 rotate-180"
            : "border-white/10 bg-zinc-900/60 text-zinc-400 hover:text-white"
        }`}>
          {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </div>
      </button>

      {/* Accordion Expandable Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7 pl-14 text-xs sm:text-sm leading-relaxed text-zinc-400 font-light max-w-2xl border-t border-white/[0.02] pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What does your standard website design package include?",
      answer: "My standard package includes fully responsive layouts, state-of-the-art visual aesthetics, physics-based micro-interactions, thorough search engine optimization (SEO), fast load-speed parameters, cross-browser support, and high-performance clean reusable components. I also bundle in complete documented code files and support guides.",
    },
    {
      question: "Do you handle both frontend and backend work?",
      answer: "Yes, I am a creative full-stack developer. I build beautifully structured client interfaces using modern Next.js/React and Tailwind CSS, as well as highly secure backend API route architectures with Node.js/Express, Mongoose database models, and active MongoDB clusters.",
    },
    {
      question: "How long does a website project usually take?",
      answer: "Project schedules fluctuate depending on visual and core structural complexities. A simple aesthetic landing page takes around 1-2 weeks, while a full-scale corporate web application containing comprehensive databases, secure APIs, and edge deployment takes 4-8 weeks.",
    },
    {
      question: "Can you improve my site's SEO and performance?",
      answer: "Absolutely! I program high-fidelity speed optimizations, implement core web vital fixes (such as lazy-loading assets, layout-shift preventions, and font integrations), and set up absolute standard JSON-LD schema markings (Person, FAQPage, etc.) to boost indexing rates significantly.",
    },
    {
      question: "Do you offer maintenance after my website launches?",
      answer: "Yes, I provide supportive maintenance bundles including system patches, regular security monitoring, content revisions, database backups, and custom walkthrough training tutorials so you can confidently control content changes.",
    },
  ];

  return (
    <section id="faq" className="relative py-32 px-6 sm:px-12 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 05 // COMMON RECIPROCAL QUESTIONS ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Frequently Asked <span className="font-serif italic font-light text-indigo-200">Questions</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      {/* Accordion List */}
      <div className="mt-16 flex flex-col gap-4 relative z-10">
        {faqData.map((item, index) => (
          <FAQItem
            key={item.question}
            item={item}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
