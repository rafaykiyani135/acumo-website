"use client";

import { useState, useEffect } from "react";

export default function ProcessSection() {
  const [reviewStep, setReviewStep] = useState(0);

  const startReview = () => {
    if (reviewStep === 0) setReviewStep(1);
  };

  useEffect(() => {
    if (reviewStep > 0 && reviewStep <= 4) {
      const timer = setTimeout(() => {
        setReviewStep(prev => prev + 1);
      }, 3500); // 3.5 seconds per card for optimal reading
      return () => clearTimeout(timer);
    } else if (reviewStep > 4) {
      // Allow fade out animation to finish before unmounting
      const timer = setTimeout(() => {
        setReviewStep(0);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [reviewStep]);

  return (
    <>
      <section id="process" className="py-24 lg:py-40 bg-[#0b1220] text-text-primary px-6 w-full relative border-b border-white/5">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-spartan font-black uppercase tracking-tighter leading-[1.1] text-text-primary">
                Engineering-led protocols for scalable systems.
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-[2.25rem] font-display italic text-[#1e3a8a] mt-2 font-bold">
                Build with confidence. Architected for scale.
              </h3>
            </div>
            
            <button
              onClick={startReview}
              className="relative group font-sans rounded-full overflow-hidden p-[1px] inline-flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shrink-0"
            >
              {/* Ambient hover ring */}
              <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              
              {/* Button text */}
              <span className="relative z-10 px-6 py-3.5 bg-surface text-text-primary rounded-full backdrop-blur-md border border-white/5 flex items-center uppercase tracking-wider text-[11px] font-bold">
                Start Architecture Review
              </span>
            </button>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-auto lg:h-[700px]">

            {/* Card 01 - Tall Left Column */}
            <div className="col-span-1 border border-white/5 bg-surface/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[500px] hover:border-[#1e3a8a] transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-surface transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                  <img src="/process-img11.png" alt="Audit" className="w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/25"></div>
                </div>
              </div>

              {/* Content Top */}
              <div className="flex justify-between items-start z-10 relative">
                <span className="text-[#1e3a8a] font-mono text-[13px] tracking-widest font-bold">01/</span>
                <span className="text-muted text-[11px] tracking-widest uppercase font-mono font-bold">Technical Audit</span>
              </div>

              {/* Content Bottom */}
              <div className="z-10 relative mt-auto pt-20">
                <h3 className="text-3xl lg:text-[2.25rem] font-spartan font-black uppercase tracking-tighter leading-[1.05] mb-5 text-text-primary">
                  Deconstruct the<br />Critical Path
                </h3>
                <p className="text-muted text-[14px] lg:text-[15px] leading-relaxed max-w-[90%] font-sans font-medium">
                  We decompose your existing stack to find the critical path. Every project starts with an architecture blueprint designed for 10x growth.
                </p>
              </div>
            </div>

            {/* Right Column Wrapper */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-6 min-h-[500px]">

              {/* Card 02 - Wide Top */}
              <div className="flex-[1.1] border border-white/5 bg-surface/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group min-h-[250px] hover:border-[#1e3a8a] transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-surface transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                    <img src="/process-img22.png" alt="POC Validation" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start z-10 relative">
                  <h3 className="text-2xl lg:text-[2.25rem] font-spartan font-black uppercase tracking-tighter text-text-primary">Stress Testing Reality</h3>
                  <span className="text-[#1e3a8a] font-mono text-[13px] tracking-widest pl-4 shrink-0 font-bold">02/</span>
                </div>
                <div className="z-10 relative mt-12 lg:mt-auto max-w-lg hidden lg:block">
                  <p className="text-muted text-[15px] leading-relaxed max-w-[80%] font-sans font-medium">
                    Isolated proofs of concept to verify the core logic before deploying a single line of production code.
                  </p>
                </div>
              </div>

              {/* Bottom Row - Two Cards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 min-h-[250px]">

                {/* Card 03 - Text heavy */}
                <div className="border border-white/5 bg-surface/30 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden hover:border-[#1e3a8a] transition-all duration-500">
                  <div className="flex justify-between items-start z-10 relative">
                    <span className="text-muted text-[11px] tracking-widest uppercase font-mono font-bold">Iterative Build</span>
                    <span className="text-[#1e3a8a] font-mono text-[13px] tracking-widest font-bold">03/</span>
                  </div>

                  <div className="z-10 relative my-6">
                    <p className="text-text-primary/90 text-[14px] lg:text-[15px] leading-[1.6] font-medium font-sans">
                      From complex data models to real-time syncs, trust what you build with every engineering sprint we execute.
                    </p>
                  </div>

                  <div className="z-10 relative mt-auto">
                    <button className="px-5 py-2.5 rounded-full bg-surface border border-stroke hover:border-[#1e3a8a] text-text-primary text-[11px] tracking-widest uppercase transition-all duration-300 font-bold font-mono">
                      Explore Methodology
                    </button>
                  </div>
                </div>

                {/* Card 04 - Square Image */}
                <div className="border border-white/5 bg-surface/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#1e3a8a] transition-all duration-500">
                  <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-surface transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                      <img src="/process-img44.png" alt="Scale" className="w-full h-full object-cover opacity-60" />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start z-10 relative">
                    <span className="text-muted text-[11px] tracking-widest uppercase font-mono font-bold">Just Scale</span>
                    <span className="text-[#1e3a8a] font-mono text-[13px] tracking-widest pl-4 font-bold">04/</span>
                  </div>

                  <div className="z-10 relative mt-auto pt-16 flex justify-center pb-2">
                    <p className="text-text-primary/80 text-[11px] font-mono tracking-widest text-center uppercase font-bold">
                      Zero-Downtime Deployment
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic Modal Overlay */}
      {reviewStep > 0 && (
        <div className={`fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12 transition-opacity duration-700 ${reviewStep > 4 ? 'opacity-0' : 'opacity-100'}`}>

          {/* Progress line */}
          <div className="absolute top-12 left-10 md:left-20 right-10 md:right-20 h-1.5 bg-surface/60 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-[#1e3a8a] transition-all duration-[3.5s] ease-linear"
              style={{ width: `${(reviewStep / 4) * 100}%` }}
            ></div>
          </div>

          <div className="absolute top-8 right-10 md:right-20 z-[101]">
            <button onClick={() => setReviewStep(5)} className="text-muted hover:text-text-primary font-mono text-[10px] tracking-widest uppercase transition-colors font-bold">Abort Sequence [X]</button>
          </div>

          <div className="w-full max-w-5xl relative h-[60vh] md:h-[70vh] flex items-center justify-center perspective-[1200px]">

            {/* Step 1 */}
            <div className={`absolute w-full h-full bg-surface/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 1 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 1 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0">
                <img src="/process-img1.png" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-[#1e3a8a] text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-[3px]">PHASE 01</div>
                <span className="text-muted font-mono tracking-widest uppercase font-bold text-xs">Technical Audit</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-black uppercase tracking-tighter text-text-primary leading-[0.9] mb-6">Deconstruct the<br />Critical Path.</h2>
                <p className="text-lg md:text-2xl text-muted max-w-2xl leading-relaxed font-sans font-medium">We decompose your existing stack to find the critical path. Every project starts with an architecture blueprint designed for 10x growth.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`absolute w-full h-full bg-surface/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 2 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 2 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0 flex justify-end">
                <img src="/process-img2.png" className="w-2/3 h-full object-cover opacity-50 relative -right-12" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-[#1e3a8a] text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-[3px]">PHASE 02</div>
                <span className="text-muted font-mono tracking-widest uppercase font-bold text-xs">POC Validation</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-black uppercase tracking-tighter text-text-primary leading-[0.9] mb-6">Stress Testing<br />Reality.</h2>
                <p className="text-lg md:text-2xl text-muted max-w-2xl leading-relaxed font-sans font-medium">Isolated proofs of concept to verify the core logic before deploying a single line of production code. Eliminating assumptions entirely.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`absolute w-full h-full bg-surface/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 3 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 3 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-[#1e3a8a] text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-[3px]">PHASE 03</div>
                <span className="text-muted font-mono tracking-widest uppercase font-bold text-xs">Iterative Build</span>
              </div>
              <div className="z-10 mt-auto relative">
                <div className="absolute -top-40 right-10 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" /></svg>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-black uppercase tracking-tighter text-text-primary leading-[0.9] mb-6">Sprint &<br />Execute.</h2>
                <p className="text-lg md:text-2xl text-muted max-w-2xl leading-relaxed font-sans font-medium">From complex data models to real-time syncs, trust what you build with every engineering sprint we systematically execute.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`absolute w-full h-full bg-surface/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 4 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 4 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0">
                <img src="/process-img4.png" className="w-full h-full object-cover opacity-60 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-[#1e3a8a] text-white px-3 py-1 font-mono text-[10px] font-bold tracking-widest uppercase rounded-[3px]">PHASE 04</div>
                <span className="text-muted font-mono tracking-widest uppercase font-bold text-xs">Scale</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-spartan font-black uppercase tracking-tighter text-text-primary leading-[0.9] mb-6">Zero-Downtime<br />Global Deployment.</h2>
                <p className="text-lg md:text-2xl text-muted max-w-2xl leading-relaxed font-sans font-medium">We orchestrate the exact path to production, ensuring infinite scale and immutable infrastructure via fully managed CI/CD environments.</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
