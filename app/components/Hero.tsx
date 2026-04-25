import Image from "next/image";
import { Terminal, ChevronRight, Cpu } from 'lucide-react';
import { FaReact, FaPython, FaGithub, FaNodeJs, FaDocker, FaAws, FaFigma, FaLinux } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

const ICONS = [
  { id: 1, Icon: FaReact, color: 'text-blue-400' },
  { id: 2, Icon: FaPython, color: 'text-yellow-400' },
  { id: 3, Icon: FaGithub, color: 'text-white' },
  { id: 4, Icon: SiTypescript, color: 'text-blue-500' },
  { id: 5, Icon: FaNodeJs, color: 'text-green-500' },
  { id: 6, Icon: SiNextdotjs, color: 'text-white' },
  { id: 7, Icon: FaDocker, color: 'text-blue-400' },
  { id: 8, Icon: FaAws, color: 'text-orange-400' },
  { id: 9, Icon: FaFigma, color: 'text-pink-400' },
  { id: 10, Icon: FaLinux, color: 'text-yellow-200' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-black overflow-hidden flex flex-col items-center justify-center font-sans pt-28 pb-20 md:pb-24 lg:py-20">

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

      {/* Shooting Star Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes shootingStar {
          0% { transform: translate3d(0, 0, 0) scale(0.5) rotate(0deg); opacity: 0; }
          1% { opacity: 1; scale(1); }
          14% { opacity: 1; scale(1); }
          15% { transform: translate3d(var(--tx), var(--ty), 0) scale(0.5) rotate(200deg); opacity: 0; }
          100% { transform: translate3d(var(--tx), var(--ty), 0) scale(0.5) rotate(200deg); opacity: 0; }
        }
      `}} />

      {/* Shooting Stars Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {ICONS.map((item, index) => {
          // Spread starting positions cleanly across the viewport
          const topStart = 10 + ((index * 23) % 80);
          const leftStart = 10 + ((index * 37) % 80);

          // Target trajectory
          const targetX = -100 + ((index * 41) % 200);
          const targetY = -100 + ((index * 19) % 200);

          // We use massive loop durations (20s - 35s). 
          // Because the keyframes only act during the first 15%, the icon is invisible for 85% of the time.
          // This mathematically guarantees sparse, single-element appearances without JS logic.
          const delay = (index * 2.5) % 30; // 0s to 30s initial delay stagger
          const duration = 20 + ((index * 7) % 15); // Total cycle: 20s to 35s

          return (
            <div
              key={item.id}
              className="absolute w-10 h-10 md:w-12 md:h-12 opacity-0 flex items-center justify-center bg-[#0a0a0a] border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]"
              style={{
                top: `${topStart}%`,
                left: `${leftStart}%`,
                ['--tx' as string]: `${targetX}vw`,
                ['--ty' as string]: `${targetY}vh`,
                animationName: 'shootingStar',
                animationDuration: `${duration}s`,
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: `${delay}s`
              }}
            >
              <item.Icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color} relative z-10`} />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 flex flex-col items-center justify-center text-center">

        {/* Clean, High-Conversion Typography Layout */}
        <h1 className="flex flex-col items-center justify-center text-white z-20 w-full max-w-5xl px-2 sm:px-4">
          <span className="font-sans font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.2] sm:leading-[1.1] text-white">
            Launch your Product in days, <span className="block mt-2 sm:mt-0 sm:inline font-serif italic font-light text-white/80 pr-2">instead of months.</span>
          </span>
        </h1>

        {/* Floating Active Component Preview */}
        <div className="mt-14 md:mt-16 lg:mt-20 w-full flex justify-center group z-30 relative perspective-[1000px]">
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
    </section>
  );
}
