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

  const renderGiantText = (id: string, part1: string, part2: string) => {
    switch (id) {
      case "01":
        return (
          <h3 className="text-white text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[11rem] leading-[0.85] uppercase flex flex-col">
            <span className="font-sans font-black tracking-[-0.04em] transform transition-transform duration-1000 hover:translate-x-4">
              {part1}
            </span>
            <span className="font-mono font-medium opacity-80 text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[8rem] tracking-tight transform transition-transform duration-1000 delay-100 hover:translate-x-8 mt-4">
              {part2}
            </span>
          </h3>
        );
      case "02":
        return (
          <h3 className="text-white text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] leading-[0.8] flex flex-col">
            <span className="font-serif font-light italic transform transition-transform duration-1000 hover:translate-x-4">
              {part1}
            </span>
            <span className="font-sans font-black tracking-tighter transform transition-transform duration-1000 delay-100 hover:translate-x-8 uppercase ml-8 md:ml-24">
              {part2}
            </span>
          </h3>
        );
      case "03":
        return (
          <h3 className="text-white font-sans text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-bold leading-[0.8] tracking-tighter uppercase relative flex flex-col">
            <span className="transform transition-transform duration-1000 hover:scale-105 origin-left">
              {part1}
            </span>
            <span className="text-transparent relative tracking-[0.05em] transform transition-transform duration-1000 delay-100 hover:translate-x-4" style={{ WebkitTextStroke: '3px rgba(255,255,255,0.95)' }}>
              {part2}
            </span>
          </h3>
        );
      case "04":
        return (
          <div className="flex flex-col">
            <h3 className="text-white font-sans text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] font-black leading-[0.8] tracking-[-0.04em] uppercase transform transition-transform duration-1000 hover:translate-x-4">
              {part1}
            </h3>
            <div className="flex items-center gap-6 mt-6 md:mt-8 transform transition-transform duration-1000 delay-100 hover:translate-x-6">
               <div className="h-1 w-20 md:w-32 bg-white/60"></div>
               <span className="text-white font-mono text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] font-medium leading-[0.8] tracking-widest uppercase opacity-70">
                 {part2}
               </span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
                isActive ? 'opacity-100 translate-x-0 delay-100 z-30' : 'opacity-0 -translate-x-32 pointer-events-none z-0'
              }`}>
                
                <div className="flex flex-col w-full max-w-[1400px] mx-auto h-full justify-between py-12 lg:py-20 relative">
                  
                  {/* Top: Giant Typography Block */}
                  <div className="mt-4 lg:mt-8">
                    <div className="flex items-center gap-4 mb-6 lg:mb-10 overflow-hidden">
                       <span className="text-white text-xl font-mono tracking-widest leading-none">{svc.id}</span>
                       <div className="h-[1px] w-12 bg-white/30"></div>
                       <span className="text-indigo-200 text-xs md:text-sm tracking-[0.3em] uppercase leading-none font-semibold shadow-black drop-shadow-md">{svc.subtitle}</span>
                    </div>

                    {renderGiantText(svc.id, svc.giantTextPart1, svc.giantTextPart2)}
                  </div>

                  {/* Bottom: Context Paragraph */}
                  <div className="max-w-[500px] lg:max-w-[700px] mb-8 lg:mb-0 transition-transform duration-[1.5s] hover:-translate-y-2">
                    <div className="backdrop-blur-md bg-black/20 border-l-4 border-white/40 p-6 lg:p-8">
                      <p className="text-white/95 text-[1.05rem] lg:text-[1.2rem] leading-relaxed font-medium drop-shadow-lg">
                        {svc.desc}
                      </p>
                    </div>
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
