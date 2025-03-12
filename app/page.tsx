import AboutSection from "@/components/homepage/aboutSection";
import CertificateSection from "@/components/homepage/certificateSection";
import MainSection from "@/components/homepage/mainSection";
import ProjectSection from "@/components/homepage/projectSection";
import SkillsAndProjects from "@/components/homepage/skillsAndProjects";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: 'MyPortfolio - Beranda',
};

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <div className="bg-gradient-custom">
        <CertificateSection />
        <SkillsAndProjects />
        <ProjectSection />
      </div>
    </>
  );
}
