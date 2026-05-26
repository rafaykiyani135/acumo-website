"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { gsap } from "gsap";

const ROLES = [
  "AI Chatbots",
  "Voice Agents",
  "AEO Solutions",
  "Custom Systems"
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
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

  // Initialize HLS video stream
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const streamUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(err => console.log("HLS play failed:", err));
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native Apple device HLS support
      video.src = streamUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(err => console.log("Native HLS play failed:", err));
      });
    }
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
      className="relative min-h-screen w-full bg-bg overflow-hidden flex flex-col items-center justify-center pt-28 pb-24 px-6 md:px-12"
    >
      {/* Background Video using HLS Stream */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          autoPlay
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover opacity-100 scale-[1.01]"
        />
        {/* Cinematic bottom gradient fade to main body */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-bg via-bg/40 to-transparent z-20"></div>
      </div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

        {/* Eyebrow
        <div 
          ref={eyebrowRef}
          className="blur-in font-sans text-[10px] sm:text-xs text-muted uppercase tracking-[0.35em] mb-6 md:mb-8 font-bold"
        >
          TECHNICAL SCOPE &bull; COLLECTION &apos;26
        </div> */}

        {/* Brand Name Title */}
        <h1
          ref={nameRef}
          className="name-reveal text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-spartan font-black uppercase tracking-tighter leading-none text-text-primary mb-8 select-none whitespace-nowrap"
        >
          Grow your revenue with Acumo AI
        </h1>

        {/* Dynamic Role Cycling Line */}
        <div className="font-sans text-lg sm:text-2xl text-text-primary/95 mb-6 tracking-tight min-h-[40px] font-medium flex items-center gap-2">
          We build{" "}
          <span
            key={roleIndex}
            className="font-display italic text-[#1e3a8a] animate-role-fade-in inline-block font-bold text-xl sm:text-3xl"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          - engineered for scale.
        </div>

        {/* Product Description */}
        <p
          ref={descRef}
          className="blur-in font-sans text-xs sm:text-sm md:text-base text-muted max-w-md mb-12 leading-relaxed font-medium"
        >
          Building high-performance AI-native products — from intelligent agents and RAG systems to full-stack SaaS — with obsessive attention to the details that make digital experiences exceptional.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="blur-in flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          {/* See Works Solid Button */}
          <a
            href="#case-studies"
            className="group relative inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider px-8 py-4 bg-text-primary text-bg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          >
            {/* Ambient accent ring shown on hover */}
            <span className="absolute inset-0 rounded-full p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-gradient">
              <span className="block w-full h-full bg-bg rounded-full"></span>
            </span>
            <span className="relative z-10 group-hover:text-text-primary transition-colors duration-300">
              See Works
            </span>
          </a>

          {/* Scoping Inquiry Solid Indigo Button */}
          <a
            href="#inquiry"
            className="group relative inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider px-8 py-4 bg-[#1e3a8a] text-white transition-all duration-300 hover:scale-105 border border-[#1e3a8a] hover:border-transparent w-full sm:w-auto"
          >
            {/* Ambient accent ring on hover */}
            <span className="absolute inset-0 rounded-full p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 accent-gradient">
              <span className="block w-full h-full bg-bg rounded-full"></span>
            </span>
            <span className="relative z-10 transition-colors duration-300">
              Start scoping
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
