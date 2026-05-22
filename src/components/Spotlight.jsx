"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Spotlight() {
  // Motion values to bypass React's standard re-render cycle for maximum performance
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Smooth, organic spring physics that make the glow trail fluidly behind the cursor
  const springConfig = { damping: 45, stiffness: 220, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of spotlight's width/height (250px) to keep it centered on mouse
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-10 hidden h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,rgba(139,92,246,0.04)_45%,rgba(6,182,212,0.01)_70%,transparent_100%)] blur-3xl transition-opacity duration-1000 md:block"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  );
}
