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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-3xl overflow-y-auto pt-20 pb-20">
      <div className="w-full max-w-6xl h-fit min-h-[85vh] bg-black border border-white/10 p-16">
        <div className="flex justify-between items-start mb-24">
          <div className="label-tech">Project_Manifest</div>
          <button onClick={onClose} className="font-mono text-[12px] hover:text-indigo-500 uppercase tracking-[0.3em] transition-colors">[ Close_X ]</button>
        </div>
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-8xl font-bold tracking-tighter mb-12">{project.title}</h3>
            <p className="text-3xl text-neutral-400 leading-relaxed mb-16 font-medium">{project.desc}</p>
            <div className="label-tech mb-8 !text-white opacity-40">Technical_Stack</div>
            <div className="flex flex-wrap gap-4">
              {project.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] border border-white/10 px-3 py-1.5 uppercase tracking-widest">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="border border-white/5 p-12 bg-neutral-900/30 mb-12">
              <div className="label-tech mb-6 !text-indigo-400">Efficiency_Gain</div>
              <div className="text-4xl font-bold tracking-tight">{project.outcome}</div>
            </div>
            <img src={project.image} alt={project.title} className="w-full border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
