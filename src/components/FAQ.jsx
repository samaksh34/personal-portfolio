"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FAQItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-zinc-900 w-full"
    >
      {/* FAQ Header Click Trigger */}
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-7 text-left cursor-pointer group relative overflow-hidden"
      >
        <div className="flex items-center gap-6">
          {/* Index Counter */}
          <span className="font-mono text-xs text-zinc-600 group-hover:text-[#85b5ff] transition-colors duration-300">
            [ 0{index + 1} ]
          </span>
          {/* Question Text */}
          <h3 className={`font-serif text-lg sm:text-xl md:text-2xl transition-colors duration-300 ${
            isOpen ? "text-[#85b5ff]" : "text-zinc-200 group-hover:text-white"
          }`}>
            {item.question}
          </h3>
        </div>
        
        {/* Editorial Textual Indicator */}
        <span className={`font-mono text-xs transition-colors duration-300 select-none ${
          isOpen ? "text-[#85b5ff]" : "text-zinc-500 group-hover:text-white"
        }`}>
          {isOpen ? "[ — ]" : "[ + ]"}
        </span>
      </button>

      {/* Accordion Expandable Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 pr-6 text-zinc-400 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-3xl">
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section id="faq" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center">
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
            COMMON INQUIRIES // FAQS
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl"
        >
          Frequently Resolved <br />
          <span className="font-serif italic font-light text-[#85b5ff]">Queries</span><span className="text-[#85b5ff]">.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-zinc-500 text-sm sm:text-base max-w-2xl font-light leading-relaxed"
        >
          Clear explanations regarding technical decisions, academic timelines, institutional leadership details, and career objectives.
        </motion.p>

        {/* Minimal Accordion List */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full flex flex-col border-t border-zinc-900"
        >
          {dataToRender.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
