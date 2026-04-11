"use client";

import { useState } from "react";

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      id: "01",
      title: ["DISTRIBUTED", "SYSTEMS"],
      subtitle: "FAULT-TOLERANT ARCHITECTURE",
      giantTextPart1: "ZERO",
      giantTextPart2: "LATENCY.",
      desc: "Architecting global consistency and extreme throughput across distributed nodes. We build immutable infrastructure that scales dynamically under any load.",
      bgImg: "/accordion-img1.png"
    },
    {
      id: "02",
      title: ["AI", "PIPELINES"],
      subtitle: "PRODUCTION GRADE INTELLIGENCE",
      giantTextPart1: "PURE",
      giantTextPart2: "LOGIC.",
      desc: "Integrating RAG and fine-tuned LLMs into heavily secured pipelines. Guaranteeing all algorithmic outputs are completely grounded in your proprietary data.",
      bgImg: "/accordion-img2.png"
    },
    {
      id: "03",
      title: ["TECHNICAL", "INTERFACES"],
      subtitle: "HIGH-DENSITY DATA UIs",
      giantTextPart1: "FLUID",
      giantTextPart2: "MOTION.",
      desc: "Crafting technical dashboards tailored for developers and analysts. Prioritizing instant data-visualization and low-latency interactions over generic layouts.",
      bgImg: "/accordion-img3.png"
    },
    {
      id: "04",
      title: ["CLOUD", "NATIVE"],
      subtitle: "INFRASTRUCTURE AS CODE",
      giantTextPart1: "SCALE",
      giantTextPart2: "INFINITE.",
      desc: "Automating the exact path to production. Leveraging Kubernetes and Terraform to build secure, scalable, and completely managed CI/CD environments.",
      bgImg: "/accordion-img4.png"
    }
  ];

  return (
    <section id="services" className="w-full font-sans overflow-hidden bg-black border-y border-white/10 border-t-0">
      <div className="w-full min-h-[600px] md:h-[75vh] lg:h-[90vh] flex flex-col md:flex-row relative">
        {services.map((svc, idx) => {
          const isHovered = hoveredIndex === idx;
          const isDefaultExp = hoveredIndex === null && idx === 1; // Default second item open
          const isActive = isHovered || isDefaultExp;

          return (
            <div 
              key={svc.id}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col cursor-pointer ${
                isActive ? 'md:flex-[4] lg:flex-[5] flex-[2]' : 'md:flex-1 flex-[0.5]'
              } min-w-0 group overflow-hidden bg-black`}
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0 transition-transform duration-[2s] ease-out group-hover:scale-105 group-hover:rotate-1 origin-center">
                <img 
                  src={svc.bgImg} 
                  alt={svc.title.join(" ")} 
                  className={`w-full h-full object-cover transition-opacity duration-1000 ${isActive ? 'opacity-70' : 'opacity-40'}`} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none"></div>
                <div className={`absolute inset-0 bg-indigo-900/10 mix-blend-overlay transition-opacity duration-1000 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>

              {/* Inactive Tab View (Vertical or Bottom) */}
              <div className={`absolute bottom-8 left-6 lg:left-10 z-20 transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
                isActive ? 'opacity-0 translate-y-12 pointer-events-none' : 'opacity-100 translate-y-0 delay-200'
              }`}>
                <span className="block text-white/40 font-mono text-sm tracking-widest mb-4">{svc.id}</span>
                <h3 className="text-xl lg:text-3xl font-extrabold tracking-tighter text-white uppercase leading-[1.05]">
                  {svc.title.map((word, i) => (
                    <span key={i} className="block">{word}</span>
                  ))}
                </h3>
              </div>

              {/* Active Expanded Content */}
              <div className={`absolute inset-0 flex flex-col justify-center px-6 lg:px-16 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive ? 'opacity-100 translate-x-0 delay-100' : 'opacity-0 -translate-x-32 pointer-events-none'
              }`}>
                
                <div className="flex flex-col lg:flex-row lg:items-end w-full max-w-[1400px] mx-auto gap-8 lg:gap-16 relative z-30">
                  
                  {/* Giant Typography Block */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6 lg:mb-10 overflow-hidden">
                       <span className="text-white text-xl font-mono tracking-widest leading-none">{svc.id}</span>
                       <div className="h-[1px] w-12 bg-white/30"></div>
                       <span className="text-indigo-300 text-xs md:text-sm tracking-[0.3em] uppercase leading-none font-semibold">{svc.subtitle}</span>
                    </div>

                    <h3 className="text-white font-sans text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-black leading-[0.8] tracking-[-0.04em] uppercase">
                      <span className="block transform transition-transform duration-1000 delay-100 hover:translate-x-4 cursor-default">
                        {svc.giantTextPart1}
                      </span>
                      <span 
                        className="text-transparent italic font-serif font-light ml-8 md:ml-16 lg:ml-24 block transform transition-transform duration-1000 delay-200 hover:translate-x-8 cursor-default" 
                        style={{ WebkitTextStroke: '2px rgba(255,255,255,0.95)' }}
                      >
                        {svc.giantTextPart2}
                      </span>
                    </h3>
                  </div>

                  {/* Context Glass Block */}
                  <div className="lg:max-w-[400px] backdrop-blur-2xl bg-white/5 border border-white/10 p-8 lg:p-10 rounded-[2.5rem] lg:mb-12 shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-transform duration-[1.5s] hover:-translate-y-2">
                    <p className="text-white/80 text-[1.1rem] leading-relaxed font-medium mb-10">
                      {svc.desc}
                    </p>
                    <button className="text-white font-bold tracking-[0.2em] uppercase text-[10px] w-full border border-white/30 rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                      Explore Architecture ↗
                    </button>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
