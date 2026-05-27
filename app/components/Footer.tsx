import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full overflow-x-hidden border-t border-white/5 bg-bg py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="mb-8 sm:col-span-2 lg:col-span-6 lg:mb-0">
            <div className="mb-8 sm:mb-10">
              <Link href="/">
                <Image
                  src="/acumo-logo2.png"
                  alt="Acumo Logo"
                  width={400}
                  height={100}
                  className="h-16 w-auto max-w-[200px] object-contain transition-transform duration-300 hover:scale-[1.02] drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] sm:h-20 lg:h-24"
                  priority
                />
              </Link>
            </div>
            <p className="text-muted max-w-sm text-[15px] leading-[1.6] font-medium font-sans">
              Engineering infrastructure for the ambitious. We build systems that endure.
            </p>
          </div>

          <div className="flex flex-col sm:col-span-1 lg:col-span-3">
            <div className="mb-6 text-xs font-mono font-bold uppercase tracking-[0.2em] text-text-primary sm:mb-8">Socials</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-muted font-bold">
              <li><a href="#" className="hover:text-text-primary transition-colors">GitHub</a></li>
              <li><a href="https://www.instagram.com/acumo.ai/" className="hover:text-text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          <div className="flex flex-col sm:col-span-1 lg:col-span-3">
            <div className="mb-6 text-xs font-mono font-bold uppercase tracking-[0.2em] text-text-primary sm:mb-8">Deployment</div>
            <ul className="font-mono text-[10px] space-y-5 uppercase tracking-[0.15em] text-muted/60 font-bold">
              <li>Edge Runtime Active</li>
              <li>CI/CD pipeline: Green</li>
            </ul>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[10px] text-muted/60 tracking-[0.2em] uppercase font-bold">
            Made with ❤️ for us, by us
          </div>
        </div>
      </div>
    </footer>
  );
}
