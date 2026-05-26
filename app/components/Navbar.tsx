"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      // Determine active section for scroll highlights
      const sections = ["services", "process", "case-studies"];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-6 md:px-12 pointer-events-none">
      <div 
        className={`w-full max-w-[1500px] flex items-center justify-between relative px-6 md:px-10 py-3.5 rounded-full backdrop-blur-lg border border-white/10 bg-surface/45 transition-all duration-300 pointer-events-auto ${
          scrolled ? "shadow-md shadow-black/30 bg-surface/65 border-white/15 py-3" : ""
        }`}
      >
        
        {/* Left Column: Nav Links */}
        <div className="flex items-center justify-start z-10">
          <div className="flex items-center gap-1 sm:gap-2">
            <Link 
              href="#services" 
              className={`font-sans text-[11px] sm:text-xs uppercase tracking-wider rounded-full px-3 py-1.5 transition-all duration-300 ${
                activeSection === "services" 
                  ? "text-text-primary bg-stroke/60 font-bold" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/40"
              }`}
            >
              Services
            </Link>
            <Link 
              href="#process" 
              className={`font-sans text-[11px] sm:text-xs uppercase tracking-wider rounded-full px-3 py-1.5 transition-all duration-300 ${
                activeSection === "process" 
                  ? "text-text-primary bg-stroke/60 font-bold" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/40"
              }`}
            >
              Process
            </Link>
            <Link 
              href="#case-studies" 
              className={`font-sans text-[11px] sm:text-xs uppercase tracking-wider rounded-full px-3 py-1.5 transition-all duration-300 ${
                activeSection === "case-studies" 
                  ? "text-text-primary bg-stroke/60 font-bold" 
                  : "text-muted hover:text-text-primary hover:bg-stroke/40"
              }`}
            >
              Our Work
            </Link>
          </div>
        </div>

        {/* Center Column: Logo (Absolutely centered for perfect balance) */}
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center z-10 pointer-events-auto">
          <Link href="/" className="flex items-center">
            <Image 
              src="/acumo-logo2.png" 
              alt="Acumo Logo" 
              width={320} 
              height={80} 
              className="h-14 md:h-22 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:scale-[1.03] transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Column: CTA */}
        <div className="flex items-center justify-end z-10">
          <Link 
            href="#inquiry" 
            className="relative group font-sans rounded-full overflow-hidden p-[1px] inline-flex items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            {/* Ambient accent ring shown on hover */}
            <span className="absolute inset-[-2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
            
            {/* Inner text content wrapped in bg-surface */}
            <span className="relative z-10 px-4 py-1.5 sm:px-5 sm:py-2 bg-surface text-text-primary rounded-full backdrop-blur-md border border-white/5 flex items-center gap-1 uppercase tracking-wider text-[10px] font-bold">
              Start Project <span className="text-[11px] font-normal">↗</span>
            </span>
          </Link>
        </div>

      </div>
    </nav>
  );
}
