'use client'
import AboutSection from "@/components/homepage/aboutSection";
import CertificateSection from "@/components/homepage/cSection";
import Footer from "@/components/homepage/Footer";
import MainSection from "@/components/homepage/mainSection";
import ProjectSection from "@/components/homepage/projectSection";

export default function Home() {
  return (
    <div>
      <MainSection />
      <AboutSection />
      <CertificateSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
