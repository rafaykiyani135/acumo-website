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
    <section id="case-studies" className="py-24 lg:py-40 w-full relative overflow-hidden bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)]">

      <div className="max-w-[1500px] mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-indigo-200 text-sm font-mono tracking-widest leading-none font-bold">05</span>
              <div className="h-[1px] w-12 bg-indigo-200/50"></div>
              <span className="text-white/60 text-xs tracking-[0.3em] uppercase leading-none font-semibold">Engineering Log</span>
            </div>

            <h2 className="text-white font-sans text-[clamp(3rem,12vw,8rem)] font-black leading-[0.8] tracking-[-0.04em] uppercase">
              CASE <br className="hidden sm:block" />
              <span className="text-transparent italic font-serif font-light ml-[clamp(1rem,8vw,8rem)] block" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
                STUDIES.
              </span>
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.values(projectsData).map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-[5px] cursor-pointer overflow-hidden shadow-2xl transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-indigo-200/50 hover:shadow-[0_20px_40px_rgba(199,210,254,0.05)]"
              onClick={() => onOpenProject(project)}
            >
              <div className="w-full h-[320px] overflow-hidden relative bg-[#111]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent opacity-90"></div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-indigo-200 uppercase font-semibold">{project.industry.replace('_', ' ')}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-white/30">{project.id.padStart(2, '0')}/</span>
                </div>

                <h3 className="text-[2rem] font-bold tracking-tight text-white mb-4 group-hover:text-indigo-200 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-[15px] leading-[1.6] text-white/60 mb-8 font-medium max-w-[95%]">
                  {project.desc}
                </p>

                <div className="mt-auto pt-6 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 group-hover:bg-indigo-200/10 group-hover:text-indigo-200 transition-colors duration-500 text-white/70 font-mono text-[10px] tracking-wider rounded-[3px] uppercase border border-white/5 group-hover:border-indigo-200/30">
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
