"use client";

import { useState, useEffect } from "react";
import CaseLog from "./CaseLog";
import ProjectModal from "./ProjectModal";

interface Project {
  id: string;
  title: string;
  industry: string;
  image: string;
  desc: string;
  outcome: string;
  tech: string[];
  screenshots?: string[];
}

export default function CaseStudiesSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseProject = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Lock vertical scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [isModalOpen]);

  return (
    <>
      <CaseLog onOpenProject={handleOpenProject} />
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </>
  );
}
