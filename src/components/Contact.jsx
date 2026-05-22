"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Mail, Globe, ArrowUpRight, Loader2 } from "lucide-react";

// Inline SVG Github component
function GithubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Inline SVG LinkedIn component
function LinkedinIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
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

  return (
    <section id="contact" className="relative py-32 px-6 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Visual background radial aura */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 pointer-events-none z-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.04)_0%,transparent_80%)] blur-3xl" />

      {/* Section Header */}
      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-xs tracking-widest text-indigo-400 uppercase">
          [ 06 // PROJECT COMMENCEMENT ]
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
          Get In <span className="font-serif italic font-light text-indigo-200">Touch</span>
        </h2>
        <div className="h-[1px] w-24 bg-indigo-500/30 mt-2" />
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Grid: Social Hub Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white tracking-tight leading-snug">
              Let's create something <br />
              <span className="font-serif italic font-light text-indigo-200">uniquely cinematic</span> together.
            </h3>
            <p className="mt-6 text-sm text-zinc-400 font-light leading-relaxed max-w-sm">
              I am open to engineering contracts, design system consultations, and full-time full-stack contributions. Drop me a brief message and I'll respond within 24 hours.
            </p>
          </div>

          {/* Social Channels Link Cards */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:contact@samaksh.dev"
              className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-zinc-800/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/60 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Direct Email</span>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors">contact@samaksh.dev</span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/samaksh34"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-zinc-800/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    <GithubIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">GitHub</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://linkedin.com/in/samaksh"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-zinc-950/40 hover:border-zinc-800/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    <LinkedinIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">LinkedIn</span>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-600 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Grid: Interactive Contact Form Panel */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl border border-white/5 bg-zinc-950/30 p-6 sm:p-8 md:p-10 backdrop-blur-sm overflow-hidden">
            {/* Fine decorative grid overlay */}
            <div className="absolute inset-0 grid-mesh opacity-[0.03] pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === "success" ? (
                // SUCCESS STATE
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h4 className="mt-6 text-xl sm:text-2xl font-semibold text-white tracking-tight">
                    Transmission Successful
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                    Thank you. Your message has been safely logged inside the MongoDB store. I'll get back to your contact details within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900/60 px-5 text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all active:scale-[0.98]"
                  >
                    Send Another Inquiry
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
                  className="relative z-10 space-y-6"
                >
                  <h4 className="text-lg font-semibold text-white tracking-tight border-b border-white/5 pb-4">
                    Send A Message
                  </h4>

                  {/* API ERROR BAR */}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-red-400"
                    >
                      <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                      <span className="text-xs font-light">{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* FIELD: Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
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
                      className={`w-full h-11 px-4 text-sm rounded-xl border bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:outline-none focus:bg-zinc-950 transition-all font-light ${
                        errors.name
                          ? "border-red-500/30 focus:border-red-500"
                          : "border-white/5 focus:border-indigo-500/50"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-400">{errors.name}</span>
                    )}
                  </div>

                  {/* FIELD: Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
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
                      className={`w-full h-11 px-4 text-sm rounded-xl border bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:outline-none focus:bg-zinc-950 transition-all font-light ${
                        errors.email
                          ? "border-red-500/30 focus:border-red-500"
                          : "border-white/5 focus:border-indigo-500/50"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-400">{errors.email}</span>
                    )}
                  </div>

                  {/* FIELD: Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-medium">
                      Message Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Introduce your project details, schedule requirements, or role positions..."
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status === "loading"}
                      className={`w-full p-4 text-sm rounded-xl border bg-zinc-950/50 text-white placeholder:text-zinc-600 focus:outline-none focus:bg-zinc-950 resize-none transition-all font-light ${
                        errors.message
                          ? "border-red-500/30 focus:border-red-500"
                          : "border-white/5 focus:border-indigo-500/50"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-red-400">{errors.message}</span>
                    )}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative flex w-full h-12 items-center justify-center gap-2 rounded-xl bg-white text-xs font-semibold text-black transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-black" />
                        Transmitting Inquiry...
                      </>
                    ) : (
                      <>
                        Transmit Message
                        <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
