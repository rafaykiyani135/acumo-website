import Image from "next/image";
import Link from "next/link";
// @ts-ignore - TS complains but webpack handles the png import
import heroBg from "../../assets/bg-image-hero2.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full bg-[#f8f8f8] overflow-hidden flex flex-col items-center justify-start pt-48 pb-32 font-sans">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={heroBg}
          alt="Hands Touching Background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-[5.5rem] leading-[1.05] tracking-[-0.03em] font-extrabold text-black mb-6">
          Bold Ideas That<br />Start With Vision.
        </h1>

        <p className="text-[#333333] text-[1.125rem] max-w-[500px] mb-8 leading-snug font-medium">
          We help modern brands craft digital stories that<br />inspire action and drive results.
        </p>

        <Link href="#contact" className="bg-black text-white px-7 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl w-max mx-auto">
          Get In Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mt-0.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </Link>
      </div>

      {/* Embedded Widgets / Bottom Layout */}
      <div className="absolute w-full bottom-0 left-0 z-10 pb-16 flex flex-col items-center">
        <div className="relative w-full max-w-[1400px] mx-auto px-6 md:px-12">

          {/* Metrics row */}
          <div className="flex flex-wrap justify-between items-center gap-8 text-[#333333] max-w-[1000px] mx-auto pr-16 md:pr-0">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[1.1rem] font-medium">Throughput</span>
              <span className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">4.2k /sec</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[1.1rem] font-medium">Availability</span>
              <span className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">99.99%</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[1.1rem] font-medium">Network</span>
              <span className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">L7 WAF</span>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="text-[1.1rem] font-medium">Latency</span>
              <span className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">&lt;12 ms</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
