"use client";

import React from "react";

interface Project {
  id: string;
  title: string;
  industry: string;
  image: string;
  desc: string;
  outcome: string;
  tech: string[];
}

const projectsData: Record<string, Project> = {
  "1": {
    id: "1",
    title: "Chart Visualizer",
    industry: "AI_ORCHESTRATION",
    image: "https://pub-d6da5f8b739d43b9a79e7602b9a14133.r2.dev/chartvisualizer.jpg",
    desc: "An agentic platform for natural language data analysis. Converts complex conversational prompts into verified data visualizations.",
    outcome: "+240% Engagement per session.",
    tech: ["Python", "FastAPI", "React", "Docker", "GPT-4o"]
  },
  "2": {
    id: "2",
    title: "Policy Viz",
    industry: "ENTERPRISE_DATA",
    image: "https://pub-d6da5f8b739d43b9a79e7602b9a14133.r2.dev/policy-viz.jpg",
    desc: "Verified retrieval system for policy management. Eliminates hallucinations by grounding LLM outputs in vector-indexed technical documentation.",
    outcome: "40% faster resolution for Level 1 support.",
    tech: ["LangChain", "Pinecone", "Next.js", "TypeScript"]
  },
  "3": {
    id: "3",
    title: "Andent Suite",
    industry: "MEDICAL_SYSTEMS",
    image: "https://pub-d6da5f8b739d43b9a79e7602b9a14133.r2.dev/andent.jpg",
    desc: "High-density portal for dentistry clinic management. Features real-time multi-location synchronization and clinical workflow automation.",
    outcome: "Unified 12+ locations into a single pane of glass.",
    tech: ["React", "GraphQL", "Node.js", "PostgreSQL"]
  }
};

interface CaseLogProps {
  onOpenProject: (project: Project) => void;
}

export default function CaseLog({ onOpenProject }: CaseLogProps) {
  return (
    <section id="case-studies" className="py-24 lg:py-40 w-full relative overflow-hidden bg-bg border-b border-white/5">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-grid"></div>
      </div>

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <h2 className="text-text-primary font-spartan text-[clamp(3rem,12vw,8rem)] font-black leading-[0.8] tracking-tighter uppercase select-none">
              CASE <br className="hidden sm:block" />
              <span className="text-transparent italic font-display font-bold ml-[clamp(1rem,8vw,8rem)] block" style={{ WebkitTextStroke: '1px hsl(var(--text))' }}>
                STUDIES.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.values(projectsData).map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col bg-surface/35 backdrop-blur-sm border border-white/5 rounded-2xl cursor-pointer overflow-hidden shadow-2xl transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[#1e3a8a]/60 hover:shadow-[0_20px_40px_rgba(30,58,138,0.1)]"
              onClick={() => onOpenProject(project)}
            >
              <div className="w-full h-[280px] overflow-hidden relative bg-surface">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[9px] tracking-widest text-[#1e3a8a] uppercase font-bold">{project.industry.replace('_', ' ')}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted font-bold">{project.id.padStart(2, '0')}/</span>
                </div>

                <h3 className="text-[1.75rem] font-spartan font-black uppercase tracking-tighter text-text-primary mb-4 group-hover:text-[#1e3a8a] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[14px] lg:text-[15px] leading-[1.6] text-muted mb-8 font-medium font-sans max-w-[95%]">
                  {project.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span 
                        key={t} 
                        className="px-3.5 py-1.5 bg-surface text-muted group-hover:bg-[#1e3a8a]/20 group-hover:text-text-primary transition-all duration-500 font-mono text-[9px] tracking-wider rounded-full uppercase border border-stroke group-hover:border-[#1e3a8a]/30 font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
