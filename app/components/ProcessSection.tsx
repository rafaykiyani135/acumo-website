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
      <section id="process" className="py-24 lg:py-40 bg-black text-white px-6 w-full relative">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Area */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-[3rem] font-sans font-medium tracking-[-0.02em] leading-[1.1] text-white">
                Engineering-led protocols for scalable systems.
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-[3rem] font-sans font-medium tracking-[-0.02em] leading-[1.1] text-white/40 mt-1">
                Build with confidence. Architected for scale.
              </h3>
            </div>
            <button
              onClick={startReview}
              className="whitespace-nowrap px-6 py-4 rounded-[5px] bg-[#1a1a1a] hover:bg-white hover:text-black border border-white/10 text-white/90 text-[13px] tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] font-medium"
            >
              Start Architecture Review
            </button>
          </div>

          {/* Bento Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 h-auto lg:h-[700px]">

            {/* Card 01 - Tall Left Column */}
            <div className="col-span-1 border border-white/10 rounded-[5px] p-8 flex flex-col justify-between relative overflow-hidden group min-h-[500px]">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#111] transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                  <img src="/process-img11.png" alt="Audit" className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
                </div>
              </div>

              {/* Content Top */}
              <div className="flex justify-between items-start z-10 relative">
                <span className="text-white/50 font-mono text-[13px] tracking-widest">01/</span>
                <span className="text-white/50 text-[14px] tracking-wide uppercase font-medium">Technical Audit</span>
              </div>

              {/* Content Bottom */}
              <div className="z-10 relative mt-auto pt-20">
                <h3 className="text-3xl lg:text-[2.25rem] font-medium leading-[1.05] tracking-tight mb-5 text-white/95">
                  Deconstruct the<br />Critical Path
                </h3>
                <p className="text-white/60 text-[14px] lg:text-[15px] leading-relaxed max-w-[90%]">
                  We decompose your existing stack to find the critical path. Every project starts with an architecture blueprint designed for 10x growth.
                </p>
              </div>
            </div>

            {/* Right Column Wrapper */}
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-4 lg:gap-6 min-h-[500px]">

              {/* Card 02 - Wide Top */}
              <div className="flex-[1.1] border border-white/10 rounded-[5px] p-8 flex flex-col justify-between relative overflow-hidden group min-h-[250px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="w-full h-full bg-[#111] transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                    <img src="/process-img22.png" alt="POC Validation" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-black/20"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start z-10 relative">
                  <h3 className="text-2xl lg:text-[2.25rem] font-medium tracking-tight text-white/95">Stress Testing Reality</h3>
                  <span className="text-white/50 font-mono text-[13px] tracking-widest pl-4 shrink-0">02/</span>
                </div>
                <div className="z-10 relative mt-12 lg:mt-auto max-w-lg hidden lg:block">
                  <p className="text-white/60 text-[15px] leading-relaxed max-w-[80%]">
                    Isolated proofs of concept to verify the core logic before deploying a single line of production code.
                  </p>
                </div>
              </div>

              {/* Bottom Row - Two Cards */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 min-h-[250px]">

                {/* Card 03 - Text heavy */}
                <div className="border border-white/10 bg-[#151515] rounded-[5px] p-8 flex flex-col justify-between group relative overflow-hidden">
                  <div className="flex justify-between items-start z-10 relative">
                    <span className="text-white/50 text-[14px] tracking-wide uppercase font-medium">Iterative Build</span>
                    <span className="text-white/50 font-mono text-[13px] tracking-widest">03/</span>
                  </div>

                  <div className="z-10 relative my-6">
                    <p className="text-white/80 text-[15px] lg:text-[1.05rem] leading-[1.6] font-medium">
                      From complex data models to real-time syncs, trust what you build with every engineering sprint we execute.
                    </p>
                  </div>

                  <div className="z-10 relative mt-auto">
                    <button className="px-5 py-3 rounded-[12px] bg-white/5 hover:bg-white/10 border border-white/5 text-white/80 text-[13px] tracking-wide transition-all shadow-sm">
                      Explore Methodology
                    </button>
                  </div>
                </div>

                {/* Card 04 - Square Image */}
                <div className="border border-white/10 rounded-[5px] p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[#111] transition-transform duration-[1.5s] ease-out group-hover:scale-105">
                      <img src="/process-img44.png" alt="Scale" className="w-full h-full object-cover opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start z-10 relative">
                    <span className="text-white/50 text-[14px] tracking-wide uppercase font-medium">Just Scale</span>
                    <span className="text-white/50 font-mono text-[13px] tracking-widest pl-4">04/</span>
                  </div>

                  <div className="z-10 relative mt-auto pt-16 flex justify-center pb-2">
                    <p className="text-white/70 text-[13px] font-medium tracking-wide text-center uppercase">
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
        <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12 transition-opacity duration-700 ${reviewStep > 4 ? 'opacity-0' : 'opacity-100'}`}>

          {/* Progress line */}
          <div className="absolute top-12 left-10 md:left-20 right-10 md:right-20 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-[3.5s] ease-linear"
              style={{ width: `${(reviewStep / 4) * 100}%` }}
            ></div>
          </div>

          <div className="absolute top-8 right-10 md:right-20 z-[101]">
            <button onClick={() => setReviewStep(5)} className="text-white/50 hover:text-white font-mono text-[10px] tracking-widest uppercase transition-colors">Abort Sequence [X]</button>
          </div>

          <div className="w-full max-w-5xl relative h-[60vh] md:h-[70vh] flex items-center justify-center perspective-[1200px]">

            {/* Step 1 */}
            <div className={`absolute w-full h-full bg-[#111] border border-white/10 rounded-[5px] overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 1 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 1 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0">
                <img src="/process-img1.png" className="w-full h-full object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-white text-black px-3 py-1 font-mono text-[11px] font-bold tracking-widest">PHASE 01</div>
                <span className="text-white/50 tracking-widest uppercase font-medium text-sm">Technical Audit</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[-0.04em] text-white leading-[0.9] mb-6">Deconstruct the<br />Critical Path.</h2>
                <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed">We decompose your existing stack to find the critical path. Every project starts with an architecture blueprint designed for 10x growth.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`absolute w-full h-full bg-[#111] border border-white/10 rounded-[5px] overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 2 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 2 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0 flex justify-end">
                <img src="/process-img2.png" className="w-2/3 h-full object-cover opacity-60 relative -right-12" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-white text-black px-3 py-1 font-mono text-[11px] font-bold tracking-widest">PHASE 02</div>
                <span className="text-white/50 tracking-widest uppercase font-medium text-sm">POC Validation</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[-0.04em] text-white leading-[0.9] mb-6">Stress Testing<br />Reality.</h2>
                <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed">Isolated proofs of concept to verify the core logic before deploying a single line of production code. Eliminating assumptions entirely.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`absolute w-full h-full bg-[#0a0a0a] border border-white/10 rounded-[5px] overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 3 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 3 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-white text-black px-3 py-1 font-mono text-[11px] font-bold tracking-widest">PHASE 03</div>
                <span className="text-white/50 tracking-widest uppercase font-medium text-sm">Iterative Build</span>
              </div>
              <div className="z-10 mt-auto relative">
                <div className="absolute -top-40 right-10 opacity-10">
                  <svg width="200" height="200" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_10s_linear_infinite]" /></svg>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[-0.04em] text-white leading-[0.9] mb-6">Sprint &<br />Execute.</h2>
                <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed">From complex data models to real-time syncs, trust what you build with every engineering sprint we systematically execute.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`absolute w-full h-full bg-[#111] border border-white/10 rounded-[5px] overflow-hidden flex flex-col justify-between p-8 md:p-16 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${reviewStep === 4 ? 'opacity-100 scale-100 translate-y-0' :
              reviewStep > 4 ? 'opacity-0 scale-105 -translate-y-12 blur-sm' :
                'opacity-0 scale-95 translate-y-12 blur-sm pointer-events-none'
              }`}>
              <div className="absolute inset-0 z-0">
                <img src="/process-img4.png" className="w-full h-full object-cover opacity-80 scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              <div className="z-10 flex items-center gap-4">
                <div className="bg-white text-black px-3 py-1 font-mono text-[11px] font-bold tracking-widest">PHASE 04</div>
                <span className="text-white/50 tracking-widest uppercase font-medium text-sm">Scale</span>
              </div>
              <div className="z-10 mt-auto">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-[-0.04em] text-white leading-[0.9] mb-6">Zero-Downtime<br />Global Deployment.</h2>
                <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed">We orchestrate the exact path to production, ensuring infinite scale and immutable infrastructure via fully managed CI/CD environments.</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
