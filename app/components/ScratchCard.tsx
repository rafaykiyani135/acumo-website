"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

// 8x8 Bayer matrix for ordered dithering (normalised to 0..1 below)
const BAYER_8 = [
  0, 32, 8, 40, 2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44, 4, 36, 14, 46, 6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
  3, 35, 11, 43, 1, 33, 9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47, 7, 39, 13, 45, 5, 37,
  63, 31, 55, 23, 61, 29, 53, 21,
].map((v) => (v + 0.5) / 64);

// Acumo palette: brand-vibrant (#2563FF) dithered against brand-bg-deep (#070D16)
const INK_LIGHT: [number, number, number] = [37, 99, 255];
const INK_DARK: [number, number, number] = [7, 13, 22];

const AUTO_REVEAL_RATIO = 0.6; // auto-complete once 60% has been scratched
const REVEAL_SPEED = 1.1; // dissolve progress per second

type ScratchState = {
  cols: number;
  rows: number;
  cell: number;
  brush: number;
  width: number;
  height: number;
  mask: Float32Array;
  image: ImageData | null;
  buffer: HTMLCanvasElement | null;
  reveal: number;
  revealTarget: number;
  lastPoint: { x: number; y: number } | null;
  visible: boolean;
};

export default function ScratchCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const revealedRef = useRef(false);

  const stateRef = useRef<ScratchState>({
    cols: 0,
    rows: 0,
    cell: 5,
    brush: 26,
    width: 0,
    height: 0,
    mask: new Float32Array(0),
    image: null,
    buffer: null,
    reveal: 0,
    revealTarget: 0,
    lastPoint: null,
    visible: false,
  });

  const setRevealState = useCallback((value: boolean) => {
    revealedRef.current = value;
    setRevealed(value);
    const s = stateRef.current;
    s.revealTarget = value ? 1.02 : 0;
    if (!value) s.mask.fill(0);
  }, []);

  // Paint a soft brush stamp into the mask (in CSS px). Soft edges get dithered -> ragged pixel trail.
  const stamp = useCallback((cx: number, cy: number) => {
    const s = stateRef.current;
    const rc = s.brush / s.cell;
    const gx = cx / s.cell;
    const gy = cy / s.cell;
    const x0 = Math.max(0, Math.floor(gx - rc));
    const x1 = Math.min(s.cols - 1, Math.ceil(gx + rc));
    const y0 = Math.max(0, Math.floor(gy - rc));
    const y1 = Math.min(s.rows - 1, Math.ceil(gy + rc));

    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const d = Math.hypot(x + 0.5 - gx, y + 0.5 - gy);
        if (d >= rc) continue;
        const value = Math.min(1, (1 - d / rc) * 2.4);
        const idx = y * s.cols + x;
        if (value > s.mask[idx]) s.mask[idx] = value;
      }
    }
  }, []);

  const scratchTo = useCallback(
    (x: number, y: number) => {
      const s = stateRef.current;
      const last = s.lastPoint;
      if (last) {
        const dist = Math.hypot(x - last.x, y - last.y);
        const step = Math.max(1, s.brush * 0.3);
        const steps = Math.ceil(dist / step);
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          stamp(last.x + (x - last.x) * t, last.y + (y - last.y) * t);
        }
      } else {
        stamp(x, y);
      }
      s.lastPoint = { x, y };
    },
    [stamp]
  );

  useEffect(() => {
    const card = cardRef.current;
    const canvas = canvasRef.current;
    if (!card || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const s = stateRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setup = () => {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height || rect.width <= 0 || rect.height <= 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const isSmall = rect.width < 640;

      s.width = rect.width;
      s.height = rect.height;
      s.cell = isSmall ? 4 : 5;
      s.brush = isSmall ? 20 : 26;
      s.cols = Math.ceil(rect.width / s.cell);
      s.rows = Math.ceil(rect.height / s.cell);

      // Scratch progress resets on resize; a fully revealed card stays revealed via `reveal`
      s.mask = new Float32Array(s.cols * s.rows);

      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);

      const buffer = s.buffer ?? document.createElement("canvas");
      buffer.width = s.cols;
      buffer.height = s.rows;
      s.buffer = buffer;
      s.image = buffer.getContext("2d")?.createImageData(s.cols, s.rows) ?? null;
    };

    // Slowly drifting blob field in 0..1, computed in CSS px so blob size is independent of cell size
    const field = (px: number, py: number, t: number, cx: number, cy: number) =>
      0.5 +
      0.27 * Math.sin(px * 0.0062 + t * 0.5) * Math.cos(py * 0.0095 - t * 0.35) +
      0.17 * Math.sin((px * 0.7 - py) * 0.0085 + t * 0.27) +
      0.13 * Math.cos(Math.hypot(px - cx, py - cy) * 0.013 - t * 0.8);

    let raf = 0;
    let last = performance.now();
    let frame = 0;
    const start = last;

    const render = (now: number) => {
      raf = requestAnimationFrame(render);
      if (!s.visible || !s.image || !s.buffer) return;

      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      frame++;

      // Animate the "Show it" dissolve
      if (s.reveal !== s.revealTarget) {
        const dir = Math.sign(s.revealTarget - s.reveal);
        s.reveal += dir * REVEAL_SPEED * dt;
        if ((dir > 0 && s.reveal > s.revealTarget) || (dir < 0 && s.reveal < s.revealTarget)) {
          s.reveal = s.revealTarget;
        }
      }

      const t = prefersReducedMotion ? 0 : (now - start) / 1000;
      const cx = s.width * (0.5 + 0.35 * Math.sin(t * 0.13));
      const cy = s.height * (0.5 + 0.3 * Math.cos(t * 0.17));
      const data = s.image.data;
      const { cols, rows, cell, mask, reveal } = s;
      let cleared = 0;

      for (let y = 0; y < rows; y++) {
        const py = y * cell;
        const rowBase = (y & 7) * 8;
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const o = idx * 4;
          const threshold = BAYER_8[rowBase + (x & 7)];

          if (mask[idx] > threshold || reveal > threshold) {
            data[o + 3] = 0;
            if (mask[idx] > 0.5) cleared++;
            continue;
          }

          const ink = field(x * cell, py, t, cx, cy) > threshold ? INK_LIGHT : INK_DARK;
          data[o] = ink[0];
          data[o + 1] = ink[1];
          data[o + 2] = ink[2];
          data[o + 3] = 255;
        }
      }

      s.buffer.getContext("2d")?.putImageData(s.image, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = false;
      const scale = canvas.width / s.width;
      ctx.drawImage(s.buffer, 0, 0, cols * cell * scale, rows * cell * scale);

      // Auto-complete the reveal once most of the card is scratched
      if (!revealedRef.current && frame % 20 === 0 && cleared / (cols * rows) > AUTO_REVEAL_RATIO) {
        setRevealState(true);
      }
    };

    setup();
    raf = requestAnimationFrame(render);

    const resizeObserver = new ResizeObserver(() => setup());
    resizeObserver.observe(card);

    // Only animate while on screen
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        s.visible = entry.isIntersecting;
      },
      { rootMargin: "100px" }
    );
    intersectionObserver.observe(card);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [setRevealState]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (revealedRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    scratchTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handlePointerEnd = () => {
    stateRef.current.lastPoint = null;
  };

  return (
    <section
      aria-label="Acumo AI scratch card"
      className="w-full bg-bg px-4 pb-12 sm:px-6 sm:pb-16"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerDown={handlePointerMove}
          onPointerLeave={handlePointerEnd}
          onPointerUp={(e) => e.pointerType !== "mouse" && handlePointerEnd()}
          onPointerCancel={handlePointerEnd}
          className="@container relative aspect-[16/10] w-full cursor-crosshair select-none overflow-hidden rounded-2xl bg-bg sm:aspect-[2/1] lg:aspect-[2.06/1]"
          style={{ touchAction: "pan-y" }}
        >
          {/* Revealed layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="whitespace-nowrap font-spartan text-[15cqw] font-black uppercase leading-none tracking-[-0.02em] text-text-primary">
              Acumo <span className="text-brand-vibrant">AI</span>
            </p>
          </div>

          {/* Scratch-off layer */}
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
          />

          <button
            type="button"
            onClick={() => setRevealState(!revealed)}
            onPointerMove={(e) => e.stopPropagation()}
            aria-pressed={revealed}
            className="absolute bottom-3 right-3 z-10 rounded-lg bg-text-primary px-3 py-2 font-sans text-xs font-medium text-brand-bg-deep shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-all duration-200 hover:bg-white hover:shadow-[0_0_18px_rgba(37,99,255,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-vibrant focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:bottom-4 sm:right-4"
          >
            {revealed ? "Cover it" : "Show it"}
          </button>
        </div>
      </div>
    </section>
  );
}
