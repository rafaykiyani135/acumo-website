"use client";

import React, { useState, useEffect } from "react";
import { Bot, CheckCircle2 } from "lucide-react";

const logsList = [
  "INCOMING VOICE CAPTURE: SECURE CHANNEL CONNECTED",
  "DECOMPOSING PROSPECT INQUIRY: QUALIFYING BUDGET & TIMELINES...",
  "DATABASE INTEGRATION MATCHED: TUESDAY AT 10:00 AM SECURED IN CALENDAR",
  "TRANSMITTING CONFIRMATION LOG: SMS SENT TO PROSPECT RETENTION LEAD",
  "RECEPTION PIPELINE OPTIMIZED: ON STANDBY FOR NEXT DISPATCH"
];

export default function ProcessSection() {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [heights, setHeights] = useState<number[]>(new Array(72).fill(3));

  // Loop dynamic updates for log list text
  useEffect(() => {
    const textTimer = setInterval(() => {
      setCurrentTextIdx(prev => (prev + 1) % logsList.length);
    }, 4500);
    return () => clearInterval(textTimer);
  }, []);

  // requestAnimationFrame real-time voice waveform simulation loop
  useEffect(() => {
    let frameId: number;
    let phase = 0;

    const animate = () => {
      phase += 0.04;
      const newHeights = Array.from({ length: 72 }, (_, i) => {
        // Generate beautiful localized wave peaks that revolve smoothly
        const peak1 = Math.exp(-Math.pow((i - 18 - Math.sin(phase) * 8) / 3.5, 2)) * 24;
        const peak2 = Math.exp(-Math.pow((i - 52 - Math.cos(phase * 1.3) * 7) / 4.2, 2)) * 18;
        const noise = Math.random() * 3.5;
        
        // Base dash line thickness (2px) + computed peak waveforms
        return 2 + Math.max(peak1, peak2) + noise;
      });

      setHeights(newHeights);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="process" className="py-24 lg:py-40 bg-[#0b1220] border-b border-white/5 w-full overflow-hidden text-text-primary">
      {/* Background subtle visuals */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[180px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#1e3a8a]/10 rounded-full blur-[180px]"></div>
      </div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Section Heading - Minimal & Clean */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/5">
          <div>
            <h2 className="text-5xl md:text-6xl font-spartan font-black tracking-tighter mb-4 uppercase text-text-primary select-none">
              Conversational Engine
            </h2>
            <p className="text-sm font-mono text-muted max-w-lg">
              Qualify leads, book appointments, and capture missed revenue 24/7.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Context */}
          <div className="lg:col-span-5 flex flex-col justify-center font-sans">
            <div className="flex items-center gap-2 mb-4 font-mono text-[10px] text-[#1e3a8a] font-bold uppercase tracking-wider">
              <Bot size={12} />
              <span>Interactive Agents</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-spartan font-black tracking-tighter mb-6 uppercase text-text-primary">
              Conversational Chat & Voice AI
            </h3>
            <p className="text-muted leading-relaxed text-sm mb-8 font-medium">
              Never miss a booking again. We construct and integrate dedicated, ultra-low latency voice and text receptionists that address client inquiries, qualify prospects, and commit meetings to calendars in real-time, round the clock.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 font-mono text-[9px] text-muted uppercase tracking-widest font-bold">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={10} className="text-[#1e3a8a]" />
                <span>Appt Scheduler</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={10} className="text-[#1e3a8a]" />
                <span>CRM Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={10} className="text-[#1e3a8a]" />
                <span>SMS Verifications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={10} className="text-[#1e3a8a]" />
                <span>Voice Operations</span>
              </div>
            </div>
          </div>

          {/* Minimal Floating SVG Waveform (No Bounding Cards/Boxes) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[350px] w-full select-none text-center">
            
            <svg 
              width="240" 
              height="240" 
              viewBox="0 0 240 240" 
              className="text-text-primary drop-shadow-[0_0_20px_rgba(255,255,255,0.18)]"
            >
              {heights.map((len, i) => {
                const angle = (i / 72) * Math.PI * 2;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                
                // Radius of inner visualizer circle
                const rInner = 82;
                const x1 = 120 + rInner * cos;
                const y1 = 120 + rInner * sin;
                
                // Radius of outer dynamic wave point
                const x2 = 120 + (rInner + len) * cos;
                const y2 = 120 + (rInner + len) * sin;
                
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                );
              })}
            </svg>

            {/* Status updates centered directly underneath */}
            <div className="mt-12 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] animate-pulse"></span>
                <span className="font-mono text-[9px] text-[#1e3a8a] uppercase tracking-[0.25em] font-bold">
                  VOICE AGENT ONLINE
                </span>
              </div>
              <p className="text-[11px] md:text-xs font-mono text-text-primary tracking-tight font-bold max-w-md h-12 flex items-center justify-center">
                {logsList[currentTextIdx]}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
