"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import NeuralNetworkAnimation from "./NeuralNetworkAnimation";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: "01",
      title: ["DISTRIBUTED", "SYSTEMS"],
      subtitle: "FAULT-TOLERANT ARCHITECTURE",
      desc: "Architecting global consistency and extreme throughput across distributed nodes. We build immutable infrastructure that scales dynamically under any load.",
    },
    {
      id: "02",
      title: ["AI", "PIPELINES"],
      subtitle: "PRODUCTION GRADE INTELLIGENCE",
      desc: "Integrating RAG and fine-tuned LLMs into heavily secured pipelines. Guaranteeing all algorithmic outputs are completely grounded in your proprietary data.",
    },
    {
      id: "03",
      title: ["TECHNICAL", "INTERFACES"],
      subtitle: "HIGH-DENSITY DATA UIs",
      desc: "Crafting technical dashboards tailored for developers and analysts. Prioritizing instant data-visualization and low-latency interactions over generic layouts.",
    },
    {
      id: "04",
      title: ["CLOUD", "NATIVE"],
      subtitle: "INFRASTRUCTURE AS CODE",
      desc: "Automating the exact path to production. Leveraging Kubernetes and Terraform to build secure, scalable, and completely managed CI/CD environments.",
    }
  ];

  const nextService = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const currentService = services[activeIndex];

  return (
    <section id="services" className="w-full min-h-screen bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)] text-white flex items-center relative overflow-hidden px-6 md:px-12 lg:px-20 xl:px-32 py-16 lg:py-0">
      {/* Background Graphic - subtle grid to maintain technical brand identity */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-0 top-0 w-full h-full bg-grid"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full relative z-10 gap-12 lg:gap-20">
        {/* Main Content Column */}
        <div className="lg:flex-[1.2] w-full py-20">
          <div key={activeIndex} className="animate-fade-up" style={{ animationDuration: '1.8s' }}>
            {/* Service Index & Label */}
            <div className="flex items-center gap-4 mb-16 overflow-hidden">
              <span className="font-mono text-sm tracking-[0.4em] text-white/40 uppercase">
                {currentService.id} / {services.length}
              </span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-indigo-300 font-bold">
                Execution Platform
              </span>
            </div>

            {/* Dynamic Title */}
            <div className="mb-14">
              <h2 className="text-[clamp(3rem,8vw,7.5rem)] font-black tracking-tighter uppercase leading-[0.85] text-white">
                {currentService.title.map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h2>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse"></div>
                <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 uppercase">
                  {currentService.subtitle}
                </p>
              </div>
            </div>

            {/* Description Block */}
            <div className="max-w-xl md:max-w-2xl lg:max-w-3xl">
              <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-[1.3] tracking-tight text-white/80">
                {currentService.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Animation Column - Visible only on large screens */}
        <div className="hidden lg:flex lg:flex-1 justify-center items-center h-full pointer-events-none">
          <div className="w-full max-w-[600px] xl:max-w-[700px] opacity-80">
            <NeuralNetworkAnimation key={activeIndex} />
          </div>
        </div>
      </div>

      <div className="z-20 flex flex-col items-end gap-6 mt-12 lg:mt-0 lg:absolute lg:bottom-12 lg:right-12 xl:bottom-24 xl:right-24 ml-auto">
        <button
          onClick={nextService}
          className="group relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 border border-white/20 rounded-full hover:border-white transition-all duration-700 overflow-hidden cursor-pointer bg-[#081659] shadow-sm"
          aria-label="Next Service"
        >
          {/* Fill effect background */}
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>

          <div className="relative z-10 flex flex-col items-center">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-[#003059] group-hover:translate-x-1.5 transition-all duration-500 ease-out" />
          </div>
        </button>

        <div className="flex flex-col items-end gap-1 pointer-events-none">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-50 text-white">Shift Protocol</span>
          <div className="flex gap-1">
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 ${i === activeIndex ? 'w-8 bg-indigo-300' : 'w-3 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Aesthetic Side Label - Subtle Vertical Text */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 rotate-90 origin-right pointer-events-none hidden xl:block">
        <span className="font-mono text-[10px] tracking-[1em] uppercase opacity-10 whitespace-nowrap">
          Core Capabilities Matrix 2026
        </span>
      </div>
    </section>
  );
}
