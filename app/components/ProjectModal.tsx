"use client";

interface ProjectData {
  title: string;
  industry: string;
  image: string;
  desc: string;
  outcome: string;
  tech: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/98 backdrop-blur-3xl overflow-y-auto p-4 md:p-12">
      <div className="w-full max-w-6xl bg-surface/50 border border-white/5 p-8 md:p-16 rounded-2xl shadow-2xl relative">
        
        {/* Header navigation bar */}
        <div className="flex justify-between items-center mb-16 md:mb-24">
          <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-muted font-bold">
            Project_Manifest
          </div>
          <button 
            onClick={onClose} 
            className="font-mono text-[10px] hover:text-[#1e3a8a] uppercase tracking-[0.3em] transition-colors font-bold cursor-pointer"
          >
            [ Close_X ]
          </button>
        </div>

        {/* Detailed Grid content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h3 className="text-4xl md:text-6xl font-spartan font-black uppercase tracking-tighter text-text-primary mb-8 select-none">
              {project.title}
            </h3>
            
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-12 font-medium font-sans">
              {project.desc}
            </p>
            
            <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#1e3a8a] mb-6 font-bold">
              Technical_Stack
            </div>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="font-mono text-[9px] border border-stroke bg-surface/60 px-3.5 py-2 uppercase tracking-widest text-muted font-bold rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div>
            {/* Outcome KPI Card */}
            <div className="border border-white/5 p-8 md:p-10 bg-surface/40 rounded-2xl mb-12 shadow-sm">
              <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#1e3a8a] mb-4 font-bold">
                Efficiency_Gain
              </div>
              <div className="text-2xl md:text-3xl font-spartan font-black uppercase tracking-tighter text-text-primary">
                {project.outcome}
              </div>
            </div>
            
            {/* Visual showcase image */}
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full rounded-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 shadow-md" 
            />
          </div>
        </div>

      </div>
    </div>
  );
}
