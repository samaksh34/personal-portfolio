import { getPortfolioData } from "@/lib/portfolio";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="relative flex-1 flex flex-col bg-obsidian">
      {/* Visual background elements */}
      <div className="absolute inset-0 grid-mesh grid-mesh-fade pointer-events-none z-0" />
      
      {/* Sections scroll flow */}
      <div className="relative z-10 w-full flex flex-col">
        <Hero personalInfo={data.personalInfo} />
        <Experience experienceData={data.experience} personalInfo={data.personalInfo} />
        <Services servicesData={data.services} />
        <Projects projectsData={data.projects} />
        <TechStack categoriesData={data.techStack} />
        <FAQ faqData={data.faqs} />
        <Contact contactInfo={data.personalInfo.contact} recruiterLine={data.personalInfo.recruiterLine} />
      </div>
    </main>
  );
}
