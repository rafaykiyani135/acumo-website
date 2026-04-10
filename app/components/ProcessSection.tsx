"use client";

import { useState } from "react";

const processData = {
  "1": {
    title: "01 / Technical Audit",
    desc: "We decompose your existing stack to find the critical path. Every project starts with an architecture blueprint designed for 10x growth."
  },
  "2": {
    title: "02 / POC Validation",
    desc: "We build isolated proofs of concept to verify the core logic. We test for throughput and security before a single line of production code is written."
  },
  "3": {
    title: "03 / Iterative Build",
    desc: "High-frequency engineering sprints. We use strict type systems and peer-reviewed PRs to ensure the system is immutable and performant."
  },
  "4": {
    title: "04 / Performance Scale",
    desc: "Zero-downtime deployment to global regions. Once live, we monitor telemetry 24/7 to optimize resource allocation and minimize latency."
  }
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<keyof typeof processData>("1");

  const data = processData[activeStep];

  return (
    <section id="process" className="py-40 section-border">
      <div className="site-grid items-center">
        <div className="col-span-12 md:col-span-5 mb-20 md:mb-0">
          <div className="label-tech mb-8">The Protocol</div>
          <h2 className="text-7xl font-bold tracking-tighter mb-10">How we work.</h2>
          
          <div id="process-content">
            <div className="animate-fade-up" key={activeStep}>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">{data.title}</h3>
              <p className="text-2xl text-neutral-500 leading-relaxed max-w-sm font-medium">
                {data.desc}
              </p>
            </div>
          </div>
        </div>

        {/* The Technical Schematic */}
        <div className="col-span-12 md:col-span-7 flex justify-end">
          <div className="relative w-full aspect-square md:w-[520px] md:h-[520px] border border-white/10 bg-neutral-950/50 flex items-center justify-center">
            <div className="absolute inset-0 bg-grid opacity-20"></div>
            
            {/* Schematic UI */}
            <svg className="w-[80%] h-[80%] text-white/5" viewBox="0 0 100 100">
              <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.2" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.2" />
            </svg>

            {/* Interactive Nodes */}
            {[
              { step: "1", label: "Audit", top: "20%", left: "20%", translate: "-translate-x-1/2 -translate-y-1/2" },
              { step: "2", label: "POC", bottom: "20%", left: "20%", translate: "-translate-x-1/2 translate-y-1/2" },
              { step: "3", label: "Ship", top: "20%", right: "20%", translate: "translate-x-1/2 -translate-y-1/2" },
              { step: "4", label: "Scale", bottom: "20%", right: "20%", translate: "translate-x-1/2 translate-y-1/2" }
            ].map((node) => (
              <button
                key={node.step}
                className={`absolute w-16 h-16 flex flex-col items-center group ${node.translate}`}
                style={{
                  top: node.top,
                  left: node.left,
                  right: node.right,
                  bottom: node.bottom
                }}
                onClick={() => setActiveStep(node.step as keyof typeof processData)}
              >
                <div className={`rounded-full mb-3 transition-all ${
                  activeStep === node.step 
                  ? "w-3.5 h-3.5 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
                  : "w-2.5 h-2.5 bg-neutral-800 group-hover:bg-indigo-500"
                }`}></div>
                <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  activeStep === node.step ? "text-white" : "text-neutral-500 group-hover:text-white"
                }`}>{node.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
