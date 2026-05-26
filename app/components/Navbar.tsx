import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute w-full top-0 z-50 pt-8 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between relative min-h-[80px] md:min-h-[128px]">
        {/* Left Column: Hyperlinks */}
        <div className="flex items-center justify-start z-10">
          <div className="hidden md:flex items-center gap-10 text-[14px] font-mono font-bold uppercase tracking-[0.1em] text-white/70">
            <Link href="#services" className="hover:bg-[linear-gradient(to_top,#2563FF_0%,#2563FF_50%,#1E3A8A_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Services</Link>
            <Link href="#process" className="hover:bg-[linear-gradient(to_top,#2563FF_0%,#2563FF_50%,#1E3A8A_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Process</Link>
            <Link href="#case-studies" className="hover:bg-[linear-gradient(to_top,#2563FF_0%,#2563FF_50%,#1E3A8A_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Our Work</Link>
          </div>
        </div>

        {/* Center Column: Logo (Absolutely centered for perfect balance) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center z-10 pointer-events-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/acumo-logo2.png" 
              alt="Acumo Logo" 
              width={500} 
              height={120} 
              className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-[1.02] transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Column: CTA */}
        <div className="flex items-center justify-end z-10 text-[13px] font-mono font-bold uppercase tracking-[0.15em]">
          <Link href="#inquiry" className="bg-white text-black px-6 py-2.5 md:px-8 md:py-3.5 rounded-[5px] hover:bg-[linear-gradient(to_top,#2563FF_0%,#2563FF_50%,#1E3A8A_100%)] hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] focus:ring-2 focus:ring-offset-2 focus:ring-white text-xs md:text-[13px]">
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
