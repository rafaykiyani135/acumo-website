export default function Footer() {
  return (
    <footer className="py-40 section-border bg-black">
      <div className="site-grid">
        <div className="col-span-12 md:col-span-6 mb-20 md:mb-0">
          <div className="font-mono text-[12px] font-bold tracking-[0.4em] uppercase mb-12">Acumo<span className="text-indigo-500">.</span>Systems</div>
          <p className="text-neutral-500 max-w-sm text-base leading-relaxed font-medium">Engineering infrastructure for the ambitious. We build systems that endure.</p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="label-tech !before:hidden mb-10 opacity-30">Network</div>
          <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.25em]">
            <li><a href="#" className="hover:text-indigo-500 transition-colors">GitHub/Acumo</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">X.com/Acumo</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">LinkedIn_Profile</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="label-tech !before:hidden mb-10 opacity-30">Deployment</div>
          <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.25em] text-neutral-600">
            <li>Available_Q2_2026</li>
            <li>Tirana_Engineering</li>
          </ul>
        </div>
        <div className="col-span-12 mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[10px] text-neutral-800 tracking-[0.5em] uppercase text-center md:text-left">©2026_ACUMO_SYSTEMS_GLOBAL_GROUP</div>
          <div className="label-tech !text-neutral-800 !before:hidden">Sleek_Infrastructure_Protocol</div>
        </div>
      </div>
    </footer>
  );
}
