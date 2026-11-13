"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ROLES = ["AI Chatbots", "Voice Agents", "AEO Solutions", "Custom Systems"];

// Placeholder proof points - swap for real numbers when available.
const STATS_LEFT = [
  { value: "24/7", label: "Always-on agents" },
  { value: "3", label: "Chat, voice, flows" },
];
const STATS_RIGHT = [
  { value: "100%", label: "Custom-built" },
  { value: "<2wk", label: "Typical MVP launch" },
];

/* ------------------------------------------------------------------ */
/* Background: gradient glow + equalizer-style vertical line texture   */
/* ------------------------------------------------------------------ */

function BarsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STEP = 6; // css px between lines
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let rand: number[] = [];
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.ceil(w / STEP);
      rand = Array.from({ length: n }, () => Math.random());
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < rand.length; i++) {
        const x = i * STEP + 2;
        const u = x / w;
        // tight centre focus, fades out toward the dark edges
        const focus = Math.exp(-Math.pow((u - 0.5) / 0.24, 2));
        const env = 0.18 + 0.82 * focus;
        const wob = Math.sin(i * 0.42 + t * 0.0009) * 0.5 + Math.sin(i * 1.17 - t * 0.0014) * 0.5;
        const bh = h * 0.9 * env * (0.5 + 0.38 * rand[i] + 0.12 * wob);
        const a = 0.06 + 0.16 * focus; // subtle: strongest only in the bright core
        const g = ctx.createLinearGradient(0, h, 0, h - bh);
        g.addColorStop(0, `rgba(255,214,190,${a * 1.4})`);
        g.addColorStop(0.4, `rgba(170,205,255,${a})`);
        g.addColorStop(1, "rgba(96,165,250,0)");
        ctx.fillStyle = g;
        ctx.fillRect(x, h - bh, 1, bh);
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = (t: number) => {
      if (t - last > 33) {
        draw(t);
        last = t;
      }
      raf = requestAnimationFrame(loop);
    };

    resize();
    draw(0);
    if (!reduce) raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      resize();
      draw(0);
    });
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />;
}

function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 select-none">
      {/* colour field: deep navy at top, electric blue column, warm glow at the base */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            // bright near-white core rising from the base = the "hot spot"
            "radial-gradient(ellipse 9% 46% at 50% 88%, rgba(225,238,255,0.85) 0%, rgba(147,197,253,0.35) 45%, transparent 100%)",
            // warm glow at the very base
            "radial-gradient(ellipse 26% 26% at 50% 100%, rgba(255,150,100,1) 0%, rgba(255,99,110,0.55) 45%, transparent 100%)",
            // electric blue column
            "radial-gradient(ellipse 24% 60% at 50% 70%, rgba(37,99,255,0.95) 0%, rgba(37,99,255,0.35) 50%, transparent 100%)",
            // wide blue floor, tighter so edges fall off to black
            "radial-gradient(ellipse 62% 40% at 50% 100%, rgba(37,99,255,0.8) 0%, rgba(30,58,138,0.45) 50%, transparent 100%)",
            // near-black base
            "linear-gradient(to bottom, #020409 0%, #03060D 45%, #050A1A 100%)",
          ].join(", "),
        }}
      />

      {/* light equalizer streaks (animated, subtle) */}
      <BarsCanvas />

      {/* fine vertical line texture across the whole background - soft, not in your face */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(2,4,9,0.28) 0px, rgba(2,4,9,0.28) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* side vignettes push the edges toward black for contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 85% at 50% 75%, transparent 40%, rgba(1,2,6,0.85) 100%)",
        }}
      />

      {/* top fade keeps the headline zone deep and readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(1,2,6,0.95) 0%, rgba(1,2,6,0.35) 35%, transparent 55%)",
        }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cards                                                               */
/* ------------------------------------------------------------------ */

function Stat({ value, label, align }: { value: string; label: string; align: "left" | "right" }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <div className="font-display text-4xl leading-none text-text-primary">{value}</div>
      <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-light/80">
        {label}
      </div>
    </div>
  );
}

// Frosted frame (blue to coral glass) wrapping a light inner panel, like the reference.
function Frame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-3 flex items-center gap-2 pl-1 font-mono text-[11px] tracking-wide text-white/90">
        <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A5B]" />
        {label}
      </div>
      <div className="rounded-[30px] border border-white/35 bg-gradient-to-b from-white/20 via-white/10 to-[#FF8A5B]/30 p-2.5 shadow-[0_30px_80px_rgba(5,9,18,0.55)] backdrop-blur-xl">
        <div className="relative h-[330px] overflow-hidden rounded-[22px] bg-[#0B1220] p-4 text-white">
          {children}
        </div>
      </div>
    </div>
  );
}

function ChatPanel() {
  return (
    <div className="flex h-full flex-col font-sans text-[12.5px] leading-snug">
      <div className="mb-3 flex items-center gap-2.5 border-b border-white/10 pb-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-vibrant font-display text-sm italic text-white">
          A
        </div>
        <div>
          <div className="text-[12px] font-semibold">Acumo Assistant</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Online
          </div>
        </div>
        <span className="ml-auto rounded-full bg-[#FF8A5B]/15 px-2 py-0.5 font-mono text-[9px] uppercase text-[#FF8A5B]">
          Live
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="max-w-[78%] self-start rounded-2xl rounded-bl-sm bg-white/[0.08] px-3 py-2 text-white/85">
          Hi! Any table free Friday at 8pm?
        </div>
        <div className="max-w-[82%] self-end rounded-2xl rounded-br-sm bg-brand-vibrant px-3 py-2 text-white">
          Yes - party of how many?
        </div>
        <div className="max-w-[60%] self-start rounded-2xl rounded-bl-sm bg-white/[0.08] px-3 py-2 text-white/85">
          4 people
        </div>
        <div className="max-w-[88%] self-end rounded-2xl rounded-br-sm bg-brand-vibrant px-3 py-2 text-white">
          Booked for 4, Friday 8pm. Confirmation sent to your email.
        </div>
        <div className="mt-auto flex items-center gap-1 px-1">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="hero-typing-dot h-1.5 w-1.5 rounded-full bg-brand-vibrant"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2">
        <span className="flex-1 text-[11px] text-white/35">Type a message...</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-vibrant text-[11px] text-white">
          ↑
        </span>
      </div>
    </div>
  );
}

function VoicePanel() {
  const bars = Array.from({ length: 46 });
  return (
    <div className="flex h-full flex-col font-sans">
      <div className="flex items-center justify-between">
        <div className="flex rounded-full border border-white/10 bg-white/[0.05] p-0.5 font-mono text-[10px]">
          <span className="rounded-full bg-brand-vibrant px-2.5 py-1 text-white">Live</span>
          <span className="px-2.5 py-1 text-white/45">Transcript</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[11px] font-semibold">
          <span className="text-brand-vibrant">✦</span> Auto Qualify
        </div>
      </div>

      <div className="relative mt-4 flex flex-1 items-center justify-center">
        <div className="flex h-full w-full items-center justify-center gap-[3px]">
          {bars.map((_, i) => (
            <span
              key={i}
              className="hero-wave-bar w-[3px] rounded-full"
              style={{
                height: `${22 + ((i * 53) % 70)}%`,
                animationDelay: `${(i % 11) * 0.09}s`,
                background: i % 5 === 0 ? "#FF8A5B" : "#2563FF",
                opacity: i % 5 === 0 ? 0.75 : 0.9,
              }}
            />
          ))}
        </div>
        <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#0B1220] bg-white shadow-[0_0_0_4px_rgba(37,99,255,0.25)]" />
      </div>

      <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2.5 text-[11.5px] leading-snug text-white/85">
        <div className="mb-1 flex items-center justify-between font-mono text-[9.5px] uppercase text-white/40">
          <span>Inbound - Sarah M.</span>
          <span className="text-[#FF8A5B]">02:14</span>
        </div>
        &ldquo;I need a quote for a full website rebuild.&rdquo;
        <span className="mt-1.5 block font-mono text-[9.5px] text-emerald-400">
          ✓ Lead qualified - booked a call
        </span>
      </div>
    </div>
  );
}

function AutomationPanel() {
  const ticks = Array.from({ length: 21 });
  const tracks = [
    { label: "Form submitted", color: "#2563FF", left: "0%", width: "38%" },
    { label: "AI enriches lead", color: "#FF8A5B", left: "22%", width: "50%" },
    { label: "CRM + Slack synced", color: "#F5B83D", left: "48%", width: "48%" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col bg-[#0B1220] p-4 text-white">
      <div className="flex items-center justify-between font-mono text-[9.5px] text-white/50">
        <span>00:00</span>
        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-emerald-300">Running</span>
        <span>00:02</span>
      </div>
      <div className="mt-2 flex h-4 items-end justify-between border-b border-white/15 pb-1">
        {ticks.map((_, i) => (
          <span key={i} className={`w-px bg-white/30 ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
        ))}
      </div>

      <div className="relative mt-4 flex flex-1 flex-col gap-3">
        <span className="absolute -top-2 bottom-8 left-[46%] z-10 w-px bg-brand-light">
          <span className="absolute -left-[3px] -top-1 h-[7px] w-[7px] rounded-full bg-brand-light" />
        </span>
        {tracks.map((t) => (
          <div key={t.label} className="relative h-9 rounded-lg bg-white/[0.05]">
            <div
              className="absolute top-0 flex h-full items-center rounded-lg px-2.5 font-sans text-[11px] font-semibold text-[#0B1220]"
              style={{ left: t.left, width: t.width, background: t.color }}
            >
              <span className="truncate">{t.label}</span>
            </div>
          </div>
        ))}

        <div className="mt-auto grid grid-cols-3 gap-2 font-mono text-[9.5px] text-white/60">
          {[
            ["Runs today", "148"],
            ["Avg time", "1.8s"],
            ["Errors", "0"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white/[0.06] px-2 py-1.5">
              <div className="font-display text-base text-white">{v}</div>
              {k}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((p) => (p + 1) % ROLES.length), 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (titleRef.current)
        tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 }, 0.1);
      if (fadeRef.current)
        tl.fromTo(
          fadeRef.current.children,
          { opacity: 0, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
          0.35
        );
      if (cardsRef.current)
        tl.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 120 },
          { opacity: 1, y: 0, duration: 1.3, stagger: 0.15 },
          0.6
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[860px] w-full flex-col overflow-hidden bg-brand-bg-deep px-[clamp(20px,4vw,56px)] pt-24 sm:pt-28 lg:min-h-[1000px] lg:pt-36"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col">
        <div className="relative flex flex-col items-center text-center">
          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 flex-col gap-9 lg:flex">
            {STATS_LEFT.map((s) => (
              <Stat key={s.label} {...s} align="left" />
            ))}
          </div>
          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-9 lg:flex">
            {STATS_RIGHT.map((s) => (
              <Stat key={s.label} {...s} align="right" />
            ))}
          </div>

          <h1
            ref={titleRef}
            className="mx-auto max-w-[14ch] select-none font-display text-[clamp(42px,8vw,112px)] font-normal leading-[0.98] tracking-[-0.02em] text-text-primary [text-wrap:balance]"
          >
            Automate at the Speed of{" "}
            <em className="font-display italic text-brand-vibrant [text-shadow:0_0_30px_rgba(37,99,255,0.45)]">Growth.</em>
          </h1>

          <div ref={fadeRef} className="flex flex-col items-center">
            <div className="mt-6 min-h-[3.1rem] max-w-xl px-2 font-sans text-[clamp(17px,1.8vw,21px)] font-medium leading-snug text-[#dce6f7] [text-wrap:balance] sm:min-h-[1.6em]">
              We build{" "}
              <span
                key={roleIndex}
                className="animate-role-fade-in inline-block whitespace-nowrap font-display text-[1.2em] font-bold italic text-brand-vibrant [text-shadow:0_0_20px_rgba(37,99,255,0.4)]"
              >
                {ROLES[roleIndex]}
              </span>{" "}
              that turn conversations into revenue.
            </div>

            <p className="mt-2 max-w-[560px] font-sans text-[clamp(14px,1.3vw,16px)] leading-[1.6] text-[#b6c4dc]">
              AI-native products - from intelligent agents and RAG systems to full-stack SaaS -
              engineered for scale, built with obsessive attention to detail.
            </p>

            {/* CTAs - same pill language as the navbar "Start Project" button */}
            <div className="mt-9 flex w-full max-w-[340px] flex-col items-stretch gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              {/* Primary */}
              <a
                href="#inquiry"
                className="group relative inline-flex items-center justify-center rounded-full p-[1.5px] shadow-[0_0_40px_rgba(37,99,255,0.55)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(37,99,255,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span className="accent-gradient absolute inset-0 rounded-full opacity-90" />
                <span className="relative z-10 flex w-full items-center justify-between gap-4 overflow-hidden rounded-full bg-gradient-to-b from-[#3B74FF] to-brand-vibrant py-1.5 pl-7 pr-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white sm:justify-center">
                  <span className="hero-cta-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/35 to-transparent" />
                  Start scoping
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm text-brand-vibrant transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </span>
              </a>

              {/* Secondary */}
              <a
                href="#case-studies"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-7 py-[15px] font-sans text-xs font-bold uppercase tracking-wider text-text-primary backdrop-blur-md transition-all duration-300 hover:border-brand-light/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                See our work
                <span className="text-sm font-normal text-white/60 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </a>
            </div>

            {/* Mobile / tablet stats: compact glass strip */}
            <div className="mt-10 grid w-full max-w-[560px] grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md sm:grid-cols-4 lg:hidden">
              {[...STATS_LEFT, ...STATS_RIGHT].map((s, i) => (
                <div
                  key={s.label}
                  className={`px-3 py-4 text-center ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10 sm:border-b-0" : ""} ${i === 1 ? "sm:border-r" : ""}`}
                >
                  <div className="font-display text-[28px] leading-none text-text-primary">{s.value}</div>
                  <div className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-brand-light/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product cards: larger, more visible; only the bottom edge is clipped */}
        <div
          ref={cardsRef}
          className="hero-cards-scroll -mx-[clamp(20px,4vw,56px)] mt-auto flex translate-y-12 snap-x snap-mandatory items-end gap-4 overflow-x-auto px-[clamp(20px,4vw,56px)] pt-16 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0"
        >
          <Frame
            label="AI Chatbot"
            className="w-[82%] shrink-0 snap-center md:w-auto md:-rotate-[2deg] md:origin-bottom-right"
          >
            <ChatPanel />
          </Frame>
          <Frame label="Voice Agent" className="w-[82%] shrink-0 snap-center md:w-auto md:-translate-y-8">
            <VoicePanel />
          </Frame>
          <Frame
            label="Automation Builder"
            className="w-[82%] shrink-0 snap-center md:w-auto md:-translate-y-3 md:rotate-[3deg] md:origin-bottom-left"
          >
            <AutomationPanel />
          </Frame>
        </div>
      </div>
    </section>
  );
}
