"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="inquiry" className="py-24 lg:py-40 bg-black border-t border-white/5 w-full overflow-hidden text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Typography & Info */}
          <div className="lg:w-5/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <span className="text-white text-sm font-mono tracking-widest leading-none font-bold">06</span>
                 <div className="h-[1px] w-12 bg-white/20"></div>
                 <span className="text-white/60 text-xs tracking-[0.3em] uppercase leading-none font-semibold">Transmission</span>
              </div>
              
              <h2 className="text-white font-sans text-[clamp(3rem,11vw,7.5rem)] font-black leading-[0.8] tracking-[-0.04em] uppercase mb-10">
                START A <br />
                <span className="text-transparent italic font-serif font-light block mt-3" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>
                  PROJECT.
                </span>
              </h2>

              <p className="text-white/70 max-w-sm text-[1.1rem] leading-[1.6] font-medium">
                Tell us about your technical challenges. We deploy dedicated architecture teams to respond to qualified inquiries within 12 hours.
              </p>
            </div>

            <div className="mt-20 lg:mt-32 pt-8 border-t border-white/10">
               <div className="font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] mb-3">Direct Channel</div>
               <a href="mailto:engineering@acumo.dev" className="text-xl font-bold tracking-tight text-white hover:text-white/50 transition-colors">
                 engineering@acumo.dev
               </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <div className="bg-[#0a0a0a] rounded-[5px] p-8 md:p-12 lg:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/5 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-white/40 to-transparent opacity-10"></div>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-10 lg:gap-14">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Name field */}
                  <div className="flex flex-col group relative">
                    <label className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em] mb-4 group-focus-within:text-white transition-colors">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Engineering Manager" 
                      className="bg-transparent border-b border-white/10 pb-4 text-[1.05rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors" 
                      required 
                    />
                  </div>
                  
                  {/* Email field */}
                  <div className="flex flex-col group relative">
                    <label className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em] mb-4 group-focus-within:text-white transition-colors">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@company.com" 
                      className="bg-transparent border-b border-white/10 pb-4 text-[1.05rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors" 
                      required 
                    />
                  </div>
                </div>

                {/* Scope field */}
                <div className="flex flex-col group relative">
                  <label className="font-mono text-[10px] text-white/40 uppercase tracking-[0.1em] mb-4 group-focus-within:text-white transition-colors">Project Scope & Constraints</label>
                  <textarea 
                    rows={4} 
                    placeholder="System architecture requirements, latency goals, or infrastructure constraints..." 
                    className="bg-transparent border-b border-white/10 pb-4 text-[1.05rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors resize-none" 
                    required 
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pt-4 gap-6">
                  <button type="submit" className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-[#e0e0e0] text-black font-semibold text-[13px] tracking-[0.15em] rounded-[5px] transition-transform duration-300 hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-white/5 uppercase">
                    Dispatch Inquiry
                  </button>

                  {isSuccess && (
                    <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full transform transition-all animate-fade-in sm:mt-2">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      <div className="font-mono text-[10px] text-white uppercase tracking-widest font-semibold">Transmitted</div>
                    </div>
                  )}
                </div>

              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
