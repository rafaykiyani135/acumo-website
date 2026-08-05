"use client";

import React, { useEffect, useRef, useCallback } from "react";

// 5x7 dot matrix definitions for "ACUMO AI"
const LETTER_BITMAPS: Record<string, number[][]> = {
  A: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  C: [
    [0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
  ],
  U: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  O: [
    [0, 1, 1, 1, 0],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 0],
  ],
  I: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
  ],
  " ": [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ],
};

const TEXT_SEQUENCE = ["A", "C", "U", "M", "O", " ", "A", "I"];

// Helper to draw rounded rectangle safely across browsers
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  if (typeof ctx.roundRect === "function") {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
}

export default function DotMatrixBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Animation state stored in refs to avoid re-renders on frame update
  const animationStateRef = useRef<{
    cols: number;
    rows: number;
    currentLevels: number[];
    targetLevels: number[];
    nextChangeTimes: number[];
    isTextMode: boolean;
    textUntil: number;
    bitmapGrid: boolean[][];
  }>({
    cols: 75,
    rows: 12,
    currentLevels: [],
    targetLevels: [],
    nextChangeTimes: [],
    isTextMode: false,
    textUntil: 0,
    bitmapGrid: [],
  });

  // Construct full binary bitmap for "ACUMO AI"
  const buildTextBitmap = useCallback((cols: number, rows: number) => {
    // 1. Build character bitmap array (7 rows high)
    const letterGap = 1;
    let totalTextWidth = 0;
    const charWidths: number[] = [];

    TEXT_SEQUENCE.forEach((char) => {
      const bmp = LETTER_BITMAPS[char] || LETTER_BITMAPS[" "];
      const w = bmp[0].length;
      charWidths.push(w);
      totalTextWidth += w;
    });
    totalTextWidth += (TEXT_SEQUENCE.length - 1) * letterGap;

    const textHeight = 7;
    const startRow = Math.max(0, Math.floor((rows - textHeight) / 2));
    const startCol = Math.max(0, Math.floor((cols - totalTextWidth) / 2));

    // Initialize blank grid
    const grid: boolean[][] = Array.from({ length: rows }, () =>
      Array(cols).fill(false)
    );

    let currentCol = startCol;
    TEXT_SEQUENCE.forEach((char, idx) => {
      const bmp = LETTER_BITMAPS[char] || LETTER_BITMAPS[" "];
      const charW = charWidths[idx];

      for (let r = 0; r < textHeight; r++) {
        for (let c = 0; c < charW; c++) {
          if (bmp[r] && bmp[r][c] === 1) {
            const gridR = startRow + r;
            const gridC = currentCol + c;
            if (gridR >= 0 && gridR < rows && gridC >= 0 && gridC < cols) {
              grid[gridR][gridC] = true;
            }
          }
        }
      }
      currentCol += charW + letterGap;
    });

    return grid;
  }, []);

  // Handle Trigger (Click or Keydown)
  const triggerTextReveal = useCallback(() => {
    const now = Date.now();
    const state = animationStateRef.current;
    state.isTextMode = true;
    state.textUntil = now + 1000;

    if (textTimerRef.current) {
      clearTimeout(textTimerRef.current);
    }

    textTimerRef.current = setTimeout(() => {
      state.isTextMode = false;
    }, 1000);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;

    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || 180;

      // DPR handling for ultra sharp rendering
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Desired grid properties
      const rows = 12;
      // Target cell size approx 10-16px depending on width
      const minCellStep = 14;
      const calculatedCols = Math.floor((width - 32) / minCellStep);
      const cols = Math.max(46, Math.min(90, calculatedCols));

      const state = animationStateRef.current;
      state.cols = cols;
      state.rows = rows;

      // Build text bitmap grid
      state.bitmapGrid = buildTextBitmap(cols, rows);

      // Initialize columns waveform levels if empty or resized
      const now = Date.now();
      const currentLevels: number[] = [];
      const targetLevels: number[] = [];
      const nextChangeTimes: number[] = [];

      for (let c = 0; c < cols; c++) {
        // Weighted random level for organic initial state
        const initialLevel = Math.pow(Math.random(), 1.6) * (rows * 0.75);
        currentLevels.push(initialLevel);
        targetLevels.push(initialLevel);
        nextChangeTimes.push(now + Math.random() * 1500);
      }

      state.currentLevels = currentLevels;
      state.targetLevels = targetLevels;
      state.nextChangeTimes = nextChangeTimes;
    };

    const render = () => {
      if (!ctx || !canvas) return;

      const state = animationStateRef.current;
      const cols = state.cols;
      const rows = state.rows;

      const rect = container.getBoundingClientRect();
      const width = rect.width || window.innerWidth;
      const height = rect.height || 180;

      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Update level targets & lerp position in background regardless of mode
      for (let c = 0; c < cols; c++) {
        if (!prefersReducedMotion && now >= state.nextChangeTimes[c]) {
          // Weighted towards shorter peaks with occasional tall spikes
          const isSpike = Math.random() < 0.12;
          const newTarget = isSpike
            ? (0.7 + Math.random() * 0.3) * rows
            : Math.pow(Math.random(), 1.6) * (rows * 0.75);

          state.targetLevels[c] = newTarget;
          state.nextChangeTimes[c] = now + (800 + Math.random() * 1200);
        }

        // Smooth Lerp step
        const diff = state.targetLevels[c] - state.currentLevels[c];
        state.currentLevels[c] += prefersReducedMotion ? diff : diff * 0.09;
      }

      // Check text mode timeout expiry
      const inTextMode = state.isTextMode && now < state.textUntil;

      // Calculate spacing
      const paddingX = 20;
      const paddingY = 16;
      const availW = width - paddingX * 2;
      const availH = height - paddingY * 2;

      const cellStepX = availW / cols;
      const cellStepY = availH / rows;
      const cellSize = Math.max(4, Math.min(cellStepX, cellStepY) * 0.78);
      const radius = cellSize / 2;

      const offsetX = paddingX + (availW - cols * cellStepX) / 2 + (cellStepX - cellSize) / 2;
      const offsetY = paddingY + (availH - rows * cellStepY) / 2 + (cellStepY - cellSize) / 2;

      // Render grid cells
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * cellStepX;
          const y = offsetY + r * cellStepY;

          // Determine shape: (r + c) % 2 === 0 -> rounded square, === 1 -> circle
          const isCircle = (r + c) % 2 === 1;

          let isActive = false;
          let intensity = 1.0;

          if (inTextMode) {
            isActive = !!(state.bitmapGrid[r] && state.bitmapGrid[r][c]);
            intensity = isActive ? 1.0 : 0;
          } else {
            // Wave mode: bottom-up index
            const bottomUpRow = rows - 1 - r;
            const level = state.currentLevels[c];

            if (bottomUpRow < Math.floor(level)) {
              isActive = true;
              intensity = 1.0;
            } else if (bottomUpRow === Math.floor(level)) {
              isActive = true;
              intensity = level - Math.floor(level); // fractional glow
            }
          }

          if (isActive && intensity > 0.05) {
            // Active cell: solid fill brand blue (#2563FF) with retro CRT glow
            ctx.shadowColor = "#2563FF";
            ctx.shadowBlur = Math.min(8, cellSize * 1.2) * intensity;
            ctx.fillStyle = `rgba(37, 99, 255, ${intensity})`;

            if (isCircle) {
              ctx.beginPath();
              ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
              ctx.fill();
            } else {
              drawRoundedRect(ctx, x, y, cellSize, cellSize, radius * 0.4);
              ctx.fill();
            }
            ctx.shadowBlur = 0; // reset shadow
          } else {
            // Inactive cell: thin stroke only (~10-15% opacity, no fill)
            ctx.strokeStyle = "rgba(37, 99, 255, 0.16)";
            ctx.lineWidth = 1;

            if (isCircle) {
              ctx.beginPath();
              ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2);
              ctx.stroke();
            } else {
              drawRoundedRect(ctx, x, y, cellSize, cellSize, radius * 0.4);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    initGrid();
    render();

    const handleResize = () => {
      initGrid();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [buildTextBitmap]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (textTimerRef.current) {
        clearTimeout(textTimerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      role="region"
      aria-label="ACUMO AI interactive dot matrix waveform display"
      tabIndex={0}
      onClick={triggerTextReveal}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerTextReveal();
        }
      }}
      className="relative w-full overflow-hidden bg-bg pb-12 sm:pb-16 select-none cursor-pointer outline-none focus:outline-none ring-0 focus:ring-0"
    >
      {/* Canvas Dot-Matrix Grid */}
      <div className="relative w-full h-[140px] sm:h-[160px] flex items-center justify-center">
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="block w-full h-full"
        />
      </div>

      {/* Accessible fallback text for screen readers */}
      <span className="sr-only">ACUMO AI</span>
    </section>
  );
}

