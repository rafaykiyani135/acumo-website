"use client";

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
    <section id="case-studies" className="py-40 section-border">
      <div className="site-grid">
        <div className="col-span-12 mb-24 flex justify-between items-end">
          <h2 className="text-7xl font-bold tracking-tighter">Case Log.</h2>
          <div className="font-mono text-[11px] text-neutral-600 tracking-[0.3em]">ENGINEERING_HISTORY v2.4</div>
        </div>

        <div className="col-span-12">
          {Object.values(projectsData).map((project, index) => (
            <div 
              key={project.id}
              className={`group border-white/5 py-14 cursor-pointer hover:bg-white/[0.01] transition-all px-6 flex items-center justify-between ${index === 0 ? "border-y" : "border-b"}`}
              onClick={() => onOpenProject(project)}
            >
              <div className="flex items-center space-x-20">
                <span className="font-mono text-[11px] text-neutral-700">{project.id.padStart(3, '0')}</span>
                <div>
                  <h3 className="text-5xl font-bold tracking-tight group-hover:translate-x-3 transition-transform duration-500">{project.title}</h3>
                  <div className="label-tech !before:hidden opacity-30 mt-3">{project.industry}</div>
                </div>
              </div>
              <div className="hidden md:flex space-x-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {project.tech.slice(0, 2).map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-widest uppercase">{t.replace('-', '_')}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
