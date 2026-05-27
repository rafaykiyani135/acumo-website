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
    <section
      id="services"
      className="relative w-full overflow-x-hidden border-b border-white/5 bg-bg px-4 py-24 text-text-primary sm:px-6 md:px-12 lg:min-h-screen lg:px-20 lg:py-0 xl:px-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div className="absolute left-0 top-0 h-full w-full bg-grid animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1400px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="min-w-0 flex-1 py-8 lg:py-20">
            <div key={activeIndex} className="animate-role-fade-in">
              <div className="mb-10 sm:mb-14">
                <h2 className="font-spartan text-[clamp(2rem,10vw,7.5rem)] font-black uppercase leading-[0.85] tracking-tighter text-text-primary">
                  {currentService.title.map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h2>
                <div className="mt-6 flex items-center gap-4 sm:mt-8">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#1e3a8a] animate-pulse" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted sm:text-xs sm:tracking-[0.2em]">
                    {currentService.subtitle}
                  </p>
                </div>
              </div>

              <p className="max-w-3xl text-lg font-medium leading-[1.35] tracking-tight text-text-primary/80 sm:text-xl md:text-2xl lg:text-3xl">
                {currentService.desc}
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:items-end sm:justify-between lg:hidden">
              <button
                type="button"
                onClick={nextService}
                className="group relative flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface/50 shadow-sm transition-all duration-700 hover:border-[#1e3a8a]"
                aria-label="Next Service"
              >
                <div className="absolute inset-0 translate-y-full bg-[#1e3a8a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
                <ArrowRight className="relative z-10 h-5 w-5 text-text-primary transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-white" />
              </button>
              <div className="flex flex-col items-center gap-1 sm:items-end">
             
                <div className="flex gap-1">
                  {services.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeIndex ? "w-8 bg-[#1e3a8a]" : "w-3 bg-white/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden min-w-0 flex-1 justify-center lg:flex">
            <div className="w-full max-w-[600px] opacity-60 xl:max-w-[700px]">
              <NeuralNetworkAnimation key={activeIndex} />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-8 right-6 hidden flex-col items-end gap-6 lg:flex xl:bottom-24 xl:right-24">
          <button
            type="button"
            onClick={nextService}
            className="group pointer-events-auto relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-white/10 bg-surface/50 shadow-sm transition-all duration-700 hover:border-[#1e3a8a]"
            aria-label="Next Service"
          >
            <div className="absolute inset-0 translate-y-full bg-[#1e3a8a] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <ArrowRight className="relative z-10 h-6 w-6 text-text-primary transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-white" />
          </button>
          <div className="flex flex-col items-end gap-1">
         
            <div className="flex gap-1">
              {services.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === activeIndex ? "w-8 bg-[#1e3a8a]" : "w-3 bg-white/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
