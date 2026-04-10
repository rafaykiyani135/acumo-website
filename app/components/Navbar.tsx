import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
      <div className="site-grid h-20 items-center">
        <div className="col-span-3 flex items-center">
          <Link href="/" className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase">
            Acumo<span className="text-indigo-500">.</span>Systems
          </Link>
        </div>
        <div className="col-span-6 flex justify-center space-x-12">
          <Link href="#services" className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">01/Capabilities</Link>
          <Link href="#process" className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">02/Method</Link>
          <Link href="#case-studies" className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 hover:opacity-100 transition-opacity">03/Case_Log</Link>
        </div>
        <div className="col-span-3 flex justify-end">
          <Link href="#inquiry" className="btn-sleek">Inquiry</Link>
        </div>
      </div>
    </nav>
  );
}
