"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscoverySandbox from "./components/DiscoverySandbox";
import Services from "./components/Services";
import ProcessSection from "./components/ProcessSection";
import CaseLog from "./components/CaseLog";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";

interface Project {
  id: string;
  title: string;
  industry: string;
  image: string;
  desc: string;
  outcome: string;
  tech: string[];
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProject = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for fade out if we add it later
  };

  // Lock vertical scroll when modal is open; never re-enable horizontal scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [isModalOpen]);

  return (
    <main className="min-h-screen w-full max-w-[100vw] overflow-x-hidden">
      <Navbar />
      <Hero />
      <DiscoverySandbox />
      <Services />
      <ProcessSection />
      <CaseLog onOpenProject={handleOpenProject} />
      <InquiryForm />
      <Footer />
      
      <ProjectModal 
        isOpen={isModalOpen} 
        project={selectedProject} 
        onClose={handleCloseProject} 
      />
    </main>
  );
}
