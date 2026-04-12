"use client";

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-40 bg-black text-white px-6 w-full">
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
          <button className="whitespace-nowrap px-6 py-4 rounded-[5px] bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-white/90 text-[13px] tracking-wide transition-colors">
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
                 <img src="/process-img1.png" alt="Audit" className="w-full h-full object-cover opacity-50" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
               </div>
            </div>

            {/* Content Top */}
            <div className="flex justify-between items-start z-10 relative">
              <span className="text-white/50 font-mono text-[13px] tracking-widest">01/</span>
              <span className="text-white/50 text-[14px] tracking-wide">Technical Audit</span>
            </div>

            {/* Content Bottom */}
            <div className="z-10 relative mt-auto pt-20">
              <h3 className="text-3xl lg:text-[2.25rem] font-medium leading-[1.05] tracking-tight mb-5 text-white/95">
                Deconstruct the<br/>Critical Path
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
                   <img src="/process-img2.png" alt="POC Validation" className="w-full h-full object-cover opacity-50" />
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
                  <span className="text-white/50 text-[14px] tracking-wide">Iterative Build</span>
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
                     <img src="/process-img4.png" alt="Scale" className="w-full h-full object-cover opacity-60" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                   </div>
                </div>

                <div className="flex justify-between items-start z-10 relative">
                  <span className="text-white/50 text-[14px] tracking-wide">Just Scale</span>
                  <span className="text-white/50 font-mono text-[13px] tracking-widest pl-4">04/</span>
                </div>

                <div className="z-10 relative mt-auto pt-16 flex justify-center pb-2">
                  <p className="text-white/70 text-[13px] font-medium tracking-wide text-center">
                    Zero-Downtime Global Deployment
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
