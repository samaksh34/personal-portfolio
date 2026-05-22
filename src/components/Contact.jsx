"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2 } from "lucide-react";

export default function Contact({ contactInfo, recruiterLine }) {
  const { email, github, linkedin } = contactInfo || {
    email: "samakshsaxena03@gmail.com",
    github: "https://github.com/samaksh34",
    linkedin: "https://linkedin.com/in/samaksh"
  };

  const dynamicRecruiterLine = recruiterLine || "Full-stack developer focused on building scalable digital platforms with modern architectures, intuitive user experiences, and real-world problem-solving approaches.";

  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    else if (formData.name.length < 2) tempErrors.name = "Name must be at least 2 characters.";

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formData.email.trim()) tempErrors.email = "Email address is required.";
    else if (!emailRegex.test(formData.email)) tempErrors.email = "Provide a valid email address.";

    if (!formData.message.trim()) tempErrors.message = "Message details are required.";
    else if (formData.message.length < 10) tempErrors.message = "Message must be at least 10 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(resData.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network issue. Could not connect to API.");
    }
  };

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
    <section id="contact" className="relative w-full bg-[#030303] text-white py-28 px-6 sm:px-12 md:px-24 xl:px-32 flex flex-col items-center overflow-hidden border-t border-zinc-950">
      {/* Visual background radial aura */}
      <div className="absolute -bottom-64 left-1/2 -translate-x-1/2 pointer-events-none z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(133,181,255,0.025)_0%,transparent_80%)] blur-3xl" />

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
            PROJECT COMMENCEMENT // CONNECT
          </span>
          <span className="h-[1px] w-8 bg-[#85b5ff]/30"></span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] text-white font-medium max-w-3xl"
        >
          Let's construct <br />
          something <span className="font-serif italic font-light text-[#85b5ff]">extraordinary</span><span className="text-[#85b5ff]">.</span>
        </motion.h2>

        <div className="mt-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Grid: Social Hub Details */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between h-full gap-12">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-zinc-100 font-semibold tracking-tight leading-snug">
                Initiate a high-fidelity digital collaboration.
              </h3>
              <p className="mt-6 text-sm text-zinc-500 font-light leading-relaxed max-w-md">
                {dynamicRecruiterLine}
              </p>
            </div>

            {/* Social Channels Link Cards */}
            <div className="flex flex-col border-t border-zinc-900 mt-8">
              {/* Email row */}
              <a
                href={`mailto:${email}`}
                className="group flex items-center justify-between py-6 border-b border-zinc-900 transition-colors duration-300"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Direct Mail</span>
                  <span className="text-sm sm:text-base font-mono text-zinc-300 group-hover:text-[#85b5ff] transition-colors">{email}</span>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-[#85b5ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Github & LinkedIn */}
              <div className="grid grid-cols-2 gap-6 mt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-b border-zinc-900 transition-colors duration-300"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Source Hub</span>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-[#85b5ff] transition-colors">GitHub</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-[#85b5ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-6 border-b border-zinc-900 transition-colors duration-300"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">Professional</span>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-[#85b5ff] transition-colors">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-zinc-700 group-hover:text-[#85b5ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Grid: Interactive Contact Form Panel */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full">
            <div className="relative rounded-2xl border border-zinc-900 bg-zinc-950/20 p-8 sm:p-10 backdrop-blur-md overflow-hidden">
              {/* Fine decorative grid overlay */}
              <div className="absolute inset-0 grid-mesh opacity-[0.015] pointer-events-none" />

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  // SUCCESS STATE
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-start py-8 text-left"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#85b5ff]/20 bg-[#85b5ff]/10 text-[#85b5ff] shadow-[0_0_20px_rgba(133,181,255,0.15)]">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h4 className="mt-8 font-serif text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-none">
                      Transmission Successful.
                    </h4>
                    <p className="mt-4 text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-md">
                      Your direct inquiry has been successfully transmitted and logged inside the MongoDB system. I will review your contact details and return a response within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-10 inline-flex h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 text-[10px] font-mono tracking-widest uppercase text-zinc-400 hover:text-white hover:border-zinc-700 transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  // FORM INPUT STATE
                  <motion.form
                    key="contact-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10 space-y-8"
                  >
                    <div className="border-b border-zinc-900 pb-4">
                      <h4 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-tight">
                        Send Direct Signal
                      </h4>
                    </div>

                    {/* API ERROR BAR */}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-4 text-red-400"
                      >
                        <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                        <span className="text-xs font-light">{errorMessage}</span>
                      </motion.div>
                    )}

                    {/* FIELD: Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Ayan Pandey"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className={`w-full bg-transparent border-b py-3 text-sm sm:text-base text-white placeholder:text-zinc-700 focus:outline-none transition-all font-light ${
                          errors.name
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-zinc-900 focus:border-[#85b5ff]"
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[9px] font-mono text-red-400 mt-1">{errors.name}</span>
                      )}
                    </div>

                    {/* FIELD: Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. recruiter@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className={`w-full bg-transparent border-b py-3 text-sm sm:text-base text-white placeholder:text-zinc-700 focus:outline-none transition-all font-light ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-zinc-900 focus:border-[#85b5ff]"
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[9px] font-mono text-red-400 mt-1">{errors.email}</span>
                      )}
                    </div>

                    {/* FIELD: Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
                        Message Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Introduce your project details, schedule requirements, or role positions..."
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className={`w-full bg-transparent border-b py-3 text-sm sm:text-base text-white placeholder:text-zinc-700 focus:outline-none resize-none transition-all font-light ${
                          errors.message
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-zinc-900 focus:border-[#85b5ff]"
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[9px] font-mono text-red-400 mt-1">{errors.message}</span>
                      )}
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative flex w-full h-13 items-center justify-center gap-2 rounded-xl bg-[#85b5ff] text-[10px] font-mono font-bold uppercase tracking-widest text-black transition-all hover:bg-white hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-black" />
                          TRANSMITTING INQUIRY...
                        </>
                      ) : (
                        <>
                          TRANSMIT SIGNAL
                          <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Minimal Digital Signature Footer */}
        <motion.div
          variants={itemVariants}
          className="mt-32 w-full border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <span className="font-mono text-[9px] text-zinc-600 tracking-wider">
            © 2026 SAMAKSH SAXENA. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[9px] text-zinc-600 tracking-wider uppercase">
            [ ENGINEERED FOR HIGH-FIDELITY SYSTEMS ]
          </span>
        </motion.div>

      </motion.div>
    </section>
  );
}
