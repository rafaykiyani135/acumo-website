import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-24 lg:py-32 bg-bg border-t border-white/5 w-full">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
            <div className="mb-10">
              <Link href="/">
                <Image 
                  src="/acumo-logo2.png" 
                  alt="Acumo Logo" 
                  width={400} 
                  height={100} 
                  className="h-24 w-auto object-contain hover:scale-[1.02] transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                  priority
                />
              </Link>
            </div>
            <p className="text-muted max-w-sm text-[15px] leading-[1.6] font-medium font-sans">
              Engineering infrastructure for the ambitious. We build systems that endure.
            </p>
          </div>
          
          <div className="col-span-6 md:col-span-3 flex flex-col">
            <div className="text-text-primary text-xs font-mono tracking-[0.2em] uppercase font-bold mb-8">Network</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-muted font-bold">
              <li><a href="#" className="hover:text-text-primary transition-colors">GitHub_Acumo</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">X.com_Acumo</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">LinkedIn_Profile</a></li>
            </ul>
          </div>
          
          <div className="col-span-6 md:col-span-3 flex flex-col">
            <div className="text-text-primary text-xs font-mono tracking-[0.2em] uppercase font-bold mb-8">Deployment</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-muted/60 font-bold">
              <li>Available_Q2_2026</li>
              <li>Tirana_Engineering</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 lg:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-muted/40 tracking-[0.3em] uppercase text-center md:text-left font-bold">
            ©2026_ACUMO_SYSTEMS_GLOBAL_GROUP
          </div>
          <div className="font-mono text-[10px] text-muted/60 tracking-[0.2em] uppercase font-bold">
            Sleek_Infrastructure_Protocol
          </div>
        </div>
      </div>
    </footer>
  );
}
