import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute w-full top-0 z-50 pt-8 px-6 md:px-12 flex justify-center">
      <div className="w-full max-w-[1600px] flex items-center justify-between">
        <div className="flex items-center gap-10 md:gap-16">
          <Link href="/" className="text-white text-[1.8rem] font-black tracking-[-0.04em] flex items-center">
            ACUMO<span className="text-[12px] font-black align-top relative -top-3 ml-0.5 opacity-40">®</span>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-[14px] font-mono font-bold uppercase tracking-[0.1em] text-white/70">
            <Link href="#services" className="hover:text-white transition-colors duration-300">Services</Link>
            <Link href="#process" className="hover:text-white transition-colors duration-300">Process</Link>
            <Link href="#case-studies" className="hover:text-white transition-colors duration-300">Our Work</Link>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[13px] font-mono font-bold uppercase tracking-[0.15em] text-black">
          <Link href="#inquiry" className="bg-white text-black px-8 py-3.5 rounded-[5px] hover:bg-gray-200 transition-colors duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] focus:ring-2 focus:ring-offset-2 focus:ring-white">
            Start Project
          </Link>
        </div>
      </div>
    </nav>
  );
}
