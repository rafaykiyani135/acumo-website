import InteractiveParticles from "./InteractiveParticles";

export default function Hero() {
  return (
    <section className="relative pt-56 pb-40 overflow-hidden">
      <InteractiveParticles />
      <div className="site-grid relative z-10">
        <div className="col-span-12 flex flex-col items-center text-center animate-fade-up">
          <div className="label-tech mb-12 justify-center after:content-[''] after:w-4 after:h-[1px] after:bg-current after:opacity-50">Engineering Infrastructure Group</div>
          <h1 className="hero-title mb-16">
            Build for the <br /> 
            <span className="text-neutral-600">Long-term.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto" style={{ animationDelay: "0.15s" }}>
            <p className="text-xl text-neutral-400 leading-relaxed font-medium mb-16 tracking-tight">
              We partner with technical founders to architect scalable systems, deploy verifiable AI infrastructure, and engineer high-fidelity user experiences.
            </p>
            <div className="flex justify-center items-center space-x-16">
              <a href="#case-studies" className="font-mono text-[11px] underline decoration-indigo-500/50 underline-offset-[12px] hover:text-indigo-400 uppercase tracking-[0.2em] transition-colors">Shipment_Log</a>
              <a href="#process" className="font-mono text-[11px] opacity-40 hover:opacity-100 uppercase tracking-[0.2em] transition-opacity">The_Protocol</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
