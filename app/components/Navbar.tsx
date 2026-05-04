import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute w-full top-0 z-50 pt-8 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/acumo-logo.png" 
              alt="Acumo Logo" 
              width={500} 
              height={120} 
              className="h-32 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              priority
            />
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[14px] font-mono font-bold uppercase tracking-[0.1em] text-white/70">
            <Link href="#services" className="hover:bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Services</Link>
            <Link href="#process" className="hover:bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Process</Link>
            <Link href="#case-studies" className="hover:bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300">Our Work</Link>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[13px] font-mono font-bold uppercase tracking-[0.15em]">
          <Link href="#inquiry" className="bg-white text-black px-8 py-3.5 rounded-[5px] hover:bg-[linear-gradient(to_top,#5457e6_0%,#5457e6_50%,#003059_100%)] hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.1)] focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
