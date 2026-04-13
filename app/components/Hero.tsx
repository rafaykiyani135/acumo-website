import Image from "next/image";
import { Bayon, Allison } from 'next/font/google';

const bayon = Bayon({ subsets: ['latin'], weight: '400' });
const allison = Allison({ subsets: ['latin'], weight: '400' });

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
        
        {/* Insane Typography Layout */}
        <h1 className="flex flex-col items-center justify-center text-white select-none w-full whitespace-nowrap">
          
          {/* Top Line */}
          <div className="flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-6 lg:gap-x-8">
            <span className={`${bayon.className} text-[7vw] md:text-[6vw] lg:text-[5.5vw] leading-none uppercase tracking-wide text-white`}>
              YOUR IDEAS
            </span>
            <span className={`${allison.className} text-[9vw] md:text-[7.5vw] lg:text-[7vw] leading-none lowercase text-white/90 transform -rotate-2 -mt-2 md:-mt-4 lg:-mt-6`}>
              plus
            </span>
            <span className={`${bayon.className} text-[7vw] md:text-[6vw] lg:text-[5.5vw] leading-none uppercase tracking-wide text-white`}>
              OUR EXECUTION
            </span>
          </div>

          {/* Bottom Line */}
          <div className="flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-6 lg:gap-x-8 mt-2 md:mt-4 lg:mt-6">
            <span className={`${allison.className} text-[9vw] md:text-[7.5vw] lg:text-[7vw] leading-none lowercase text-white/90 transform -rotate-2 -mt-2 md:-mt-4 lg:-mt-6`}>
              equals
            </span>
            <span className={`${bayon.className} text-[7vw] md:text-[6vw] lg:text-[5.5vw] leading-none uppercase tracking-wide text-white`}>
              ENDLESS POSSIBILITIES
            </span>
          </div>
          
        </h1>
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
