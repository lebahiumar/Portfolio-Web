
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { DesignsSection } from "@/components/sections/designs-section";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function PortfolioPage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <DesignsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
