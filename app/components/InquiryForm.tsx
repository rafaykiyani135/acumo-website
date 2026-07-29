"use client";

import { useEffect } from "react";

export default function InquiryForm() {
  // Load Calendly widget script
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="inquiry" className="w-full overflow-x-hidden border-t border-white/5 bg-[#0b1220] py-20 text-text-primary sm:py-24 lg:py-40">
      <div className="mx-auto w-full min-w-0 max-w-[1400px] px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 min-w-0">

          {/* Left Column - Typography & Info */}
          <div className="lg:w-5/12 flex flex-col justify-between min-w-0">
            <div className="min-w-0">
              <h2 className="text-text-primary font-spartan text-[clamp(2.5rem,11vw,7.5rem)] font-black leading-[0.8] tracking-[0.03em] uppercase mb-10 select-none break-words">
                START A <br />
                <span className="text-transparent text-stroke italic font-display font-bold tracking-[0.04em] block mt-3">
                  PROJECT.
                </span>
              </h2>

              <p className="text-muted max-w-sm text-[15px] leading-[1.6] font-medium font-sans">
                Book a free 30-minute scoping call. We&apos;ll discuss your technical challenges and map out the right architecture for your project.
              </p>
            </div>

            <div className="mt-20 lg:mt-32 pt-8 border-t border-white/5">
              <div className="font-mono text-[10px] text-muted uppercase tracking-[0.2em] mb-3 font-bold">Direct Channel</div>
              <a href="mailto:teamacumo@gmail.com" className="text-xl font-bold tracking-tight text-text-primary hover:text-[#1e3a8a] transition-all duration-300 font-mono">
                teamacumo@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column - Calendly Widget */}
          <div className="lg:w-7/12 mt-8 lg:mt-0">
            <div className="bg-surface/30 backdrop-blur-sm rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1e3a8a] to-transparent opacity-40"></div>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/teamacumo/30min"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
