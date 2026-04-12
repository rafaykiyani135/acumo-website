export default function Footer() {
  return (
    <footer className="py-24 lg:py-32 bg-[#f8f8f8] border-t border-black/5 w-full">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
            <div className="font-mono text-[13px] font-bold tracking-[0.4em] uppercase mb-10 text-[#111]">
              Acumo<span className="text-indigo-500">.</span>Systems
            </div>
            <p className="text-black/60 max-w-sm text-[1.05rem] leading-[1.6] font-medium">
              Engineering infrastructure for the ambitious. We build systems that endure.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3 flex flex-col">
            <div className="text-[#111] text-xs font-mono tracking-[0.2em] uppercase font-bold mb-8">Network</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-black/50">
              <li><a href="#" className="hover:text-[#111] transition-colors">GitHub_Acumo</a></li>
              <li><a href="#" className="hover:text-[#111] transition-colors">X.com_Acumo</a></li>
              <li><a href="#" className="hover:text-[#111] transition-colors">LinkedIn_Profile</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3 flex flex-col">
            <div className="text-[#111] text-xs font-mono tracking-[0.2em] uppercase font-bold mb-8">Deployment</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-black/30">
              <li>Available_Q2_2026</li>
              <li>Tirana_Engineering</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-24 lg:mt-32 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-black/40 tracking-[0.3em] uppercase text-center md:text-left">
            ©2026_ACUMO_SYSTEMS_GLOBAL_GROUP
          </div>
          <div className="font-mono text-[10px] text-black/50 tracking-[0.2em] uppercase">
            Sleek_Infrastructure_Protocol
          </div>
        </div>
      </div>
    </footer>
  );
}
