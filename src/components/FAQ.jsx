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

export default function FAQ({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);

  const dataToRender = faqData || [
    {
      question: "What is your primary full-stack technology stack?",
      answer: "I specialize in building React/Next.js frontend applications integrated with Supabase, PostgreSQL, Drizzle ORM, and MongoDB backends. I utilize TypeScript for type-safety and Tailwind CSS for rapid premium styling."
    },
    {
      question: "Tell us about your flagship project, ClubVerse.",
      answer: "ClubVerse is a full-stack campus community and event management platform. It centralizes student activities, club management, and event organization. Built with Next.js, Supabase, PostgreSQL, and Drizzle ORM, it utilizes role-based access control (RBAC) to provide customized experiences for students, club admins, and super admins."
    },
    {
      question: "How has theatre and music influenced your programming career?",
      answer: "Theatre and music are core to my creativity. Participating in the Samvaad Theatre Society and Kalakrit Music Club has dramatically improved my public speaking, team collaboration, active listening, and problem-solving skills, allowing me to build user-centric products with structured focus and unique empathy."
    },
    {
      question: "Are you open to software developer internships or full-time roles?",
      answer: "Yes! I am actively pursuing my B.Tech in Information Technology (2023-2027) and am open to software engineering internships, full-time developer roles, and freelance contracts where I can build impactful, scalable platforms."
    },
    {
      question: "Do you have experience with automated document systems or AI integrations?",
      answer: "Yes, I built ResumeCraft, which incorporates custom PDF export engines, and I have worked with AI response pipelines utilizing the Gemini API to construct intelligent query handlers in conversational chatbots."
    }
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
        {dataToRender.map((item, index) => (
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
