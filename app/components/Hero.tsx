import Image from "next/image";
import { Terminal, Activity, ChevronRight, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full bg-black overflow-hidden flex flex-col items-center justify-center font-sans">

      {/* Background Image / Atmosphere Mask */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black">
        <Image
          src="/bg-image-hero4.png"
          alt="Atmosphere Background"
          fill
          className="object-cover object-center mix-blend-screen opacity-50"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-center text-center -mt-32 md:-mt-48">

        {/* Clean, High-Conversion Typography Layout */}
        <h1 className="flex flex-col items-center justify-center text-white z-20 max-w-4xl px-4">
          <span className="font-sans font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-white">
            Launch your Product in days, <span className="font-serif italic font-light text-white/80 pr-2">instead of months.</span>
          </span>
        </h1>

        {/* Floating Active Component Preview */}
        <div className="mt-16 md:mt-20 w-full flex justify-center group z-30 relative perspective-[1000px]">
          <div className="relative w-full max-w-xl bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-[5px] p-1 transform transition-all duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105 hover:-translate-y-4 hover:border-white/20">

            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-[#111]/80 rounded-t-[4px]">
              <div className="flex items-center gap-3">
                <Terminal size={12} className="text-white/40" />
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">acumo-deploy-subsystem</span>
              </div>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-red-500/50 transition-colors duration-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-yellow-500/50 transition-colors duration-500 delay-100"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-green-500/50 transition-colors duration-500 delay-200"></div>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-[11px] leading-[1.8] text-left text-white/40 h-[190px] overflow-hidden relative">

              {/* Logs container that scrolls up silently on hover */}
              <div className="flex flex-col gap-2 transform transition-transform duration-[2.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[85px] relative z-10 w-full">

                <div className="flex items-start gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500 delay-[0ms]">
                  <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span>[SYS]: Initializing edge infrastructure... <span className="text-white/20">ok</span></span>
                </div>

                <div className="flex items-start gap-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500 delay-[200ms]">
                  <Activity size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-emerald-400/80">Telemetry stream bolted. Global Latency: &lt;12ms</span>
                </div>

                <div className="flex items-center gap-3 mt-3 mb-3 p-3 bg-white-[0.02] border border-white/5 rounded-[4px] group-hover:bg-white-[0.04] group-hover:border-white/10 transition-colors duration-1000">
                  <Cpu size={14} className="text-white/50" />
                  <div className="flex-1 mx-2">
                    <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                      <div className="h-full bg-blue-500 w-[30%] group-hover:w-[94%] transition-all duration-[2s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-[300ms]"></div>
                    </div>
                  </div>
                  <span className="text-white/50 text-[10px] tracking-widest uppercase">CPU_Allocation</span>
                </div>

                <div className="flex items-start gap-3 opacity-30 group-hover:opacity-100 transition-opacity duration-700 delay-[400ms]">
                  <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span>[WORKER]: Compiling production models... <span className="text-yellow-400/80">pending</span></span>
                </div>

                <div className="flex items-start gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[1200ms]">
                  <ChevronRight size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-emerald-400/80">[WORKER]: Models deployed. Immutable state locked.</span>
                </div>

                <div className="flex items-start gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[1600ms]">
                  <ChevronRight size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="w-[6px] h-[12px] bg-white text-transparent animate-pulse mt-1">_</span>
                </div>

              </div>

              {/* Top & Bottom Fade out masks */}
              <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0a0a0a]/90 to-transparent pointer-events-none z-20"></div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20"></div>

            </div>
          </div>
        </div>
      </div>

      {/* Embedded Widgets / Bottom Layout */}
      <div className="absolute w-full bottom-0 left-0 z-10 pb-12 flex flex-col items-center">
        <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12">

          {/* Metrics row rendered for dark backgrounds */}
          <div className="flex flex-wrap justify-between items-center gap-8 text-white/60 max-w-[1000px] mx-auto pr-16 md:pr-0 border-t border-white/10 pt-8 mt-12">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono uppercase tracking-widest text-[10px] text-white/40">Throughput</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans">4.2k <span className="text-white/40 text-lg">/sec</span></span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono uppercase tracking-widest text-[10px] text-white/40">Availability</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans">99.99%</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono uppercase tracking-widest text-[10px] text-white/40">Network</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans">L7 WAF</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-mono uppercase tracking-widest text-[10px] text-white/40">Latency</span>
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-sans">&lt;12 <span className="text-white/40 text-lg">ms</span></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
