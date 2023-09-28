import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HersoSection from "@/components/HersoSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";
import React from "react";

function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HersoSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        
      </div>
      <Footer />
    </div>
  );
}

export default Home;
