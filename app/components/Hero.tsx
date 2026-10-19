"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ROLES = [
  "AI Chatbots",
  "Voice Agents",
  "AEO Solutions",
  "Custom Systems"
];

// Brand-mapped palette (see globals.css @theme): brand-vibrant #2563FF, brand-light #60A5FA,
// brand-deep #1E3A8A, brand-bg-deep #070D16.
const GRID_MASK =
  "radial-gradient(ellipse 80% 80% at 50% 45%, #000 0%, transparent 85%)";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through business roles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance Animations
  useEffect(() => {
    // Entrance timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Reveal name heading
    if (nameRef.current) {
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2 },
        0.1
      );
    }

    // Blur in eyebrow, description, and CTAs
    const elementsToBlur = [];
    if (eyebrowRef.current) elementsToBlur.push(eyebrowRef.current);
    if (descRef.current) elementsToBlur.push(descRef.current);
    if (ctaRef.current) elementsToBlur.push(ctaRef.current);

    if (elementsToBlur.length > 0) {
      tl.fromTo(
        elementsToBlur,
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, stagger: 0.1 },
        0.3
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[780px] w-full flex-col overflow-hidden bg-brand-bg-deep pt-24 lg:pt-32 px-[clamp(20px,4vw,56px)]"
    >
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none">
        {/* 1. Corner glows */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 55% 75% at 100% 0%, rgba(37,99,255,0.5) 0%, transparent 70%)",
              "radial-gradient(ellipse 45% 50% at 0% 100%, rgba(30,58,138,0.2) 0%, transparent 100%)",
            ].join(", "),
          }}
        />

        {/* 2. Technical grid, faded toward the edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(to right, rgba(96,165,250,0.07) 1px, transparent 1px)",
              "linear-gradient(to bottom, rgba(96,165,250,0.05) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "120px 120px",
            maskImage: GRID_MASK,
            WebkitMaskImage: GRID_MASK,
          }}
        />

        {/* 3. Bottom horizon line + soft glow */}
        <div
          className="absolute bottom-0 left-[20%] h-[90px] w-[60%]"
          style={{
            background:
              "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(37,99,255,0.3) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-[8%] h-px w-[84%]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.7) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Hero Content (centered in the remaining space) */}
      <div className="relative z-10 flex w-full min-w-0 flex-1 items-center justify-center">
        <div className="mx-auto flex w-full min-w-0 flex-col items-center gap-7 pb-24 pt-[72px] text-center">
          {/* Brand Name Title */}
          <h1
            ref={nameRef}
            className="name-reveal mx-auto max-w-[20ch] select-none font-spartan text-[clamp(44px,7.4vw,104px)] font-black uppercase leading-[1.02] tracking-[-0.03em] text-text-primary [text-wrap:balance]"
          >
            Grow your revenue with{" "}
            <em className="font-display font-bold italic text-brand-light">Acumo</em>
          </h1>

          {/* Tagline + description */}
          <div className="flex w-full flex-col items-center gap-3">
            {/* Dynamic Role Cycling Line */}
            <div className="min-h-[3.1rem] max-w-xl px-2 text-center font-sans text-[clamp(18px,2vw,22px)] font-medium leading-snug text-[#dce6f7] [text-wrap:balance] sm:min-h-[1.6em]">
              We build{" "}
              <span
                key={roleIndex}
                className="animate-role-fade-in inline-block whitespace-nowrap font-display text-[1.2em] font-bold italic text-brand-light"
              >
                {ROLES[roleIndex]}
              </span>{" "}
              - engineered for scale.
            </div>

            {/* Product Description */}
            <p
              ref={descRef}
              className="blur-in max-w-[660px] font-sans text-[clamp(15px,1.4vw,18px)] font-normal leading-[1.6] text-muted"
            >
              Building high-performance AI-native products — from intelligent agents and RAG systems to full-stack SaaS — with obsessive attention to the details that make digital experiences exceptional.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="blur-in mt-2 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#inquiry"
              className="inline-flex h-12 min-w-[44px] items-center justify-center rounded-[10px] border border-brand-light/50 bg-brand-vibrant/25 px-[26px] font-sans text-[15px] font-medium text-white transition-colors duration-300 hover:bg-brand-vibrant/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-deep"
            >
              Start scoping
            </a>

            <a
              href="#case-studies"
              className="inline-flex h-12 min-w-[44px] items-center justify-center rounded-[10px] border border-white/30 bg-transparent px-[26px] font-sans text-[15px] font-medium text-white transition-colors duration-300 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-deep"
            >
              See Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
