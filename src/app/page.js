import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col bg-obsidian">
      {/* Visual background elements */}
      <div className="absolute inset-0 grid-mesh grid-mesh-fade pointer-events-none z-0" />
      
      {/* Sections scroll flow */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <TechStack />
        <Certifications />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
