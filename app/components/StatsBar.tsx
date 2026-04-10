"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

function Counter({ end, duration = 2000, decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function: easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      
      setCount(ease * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={countRef}>{count.toFixed(decimals)}</span>;
}

export default function StatsBar() {
  return (
    <div className="section-border py-20 relative overflow-hidden bg-black/50 backdrop-blur-sm">
      <div className="site-grid">
        <div className="col-span-12 md:col-span-3 border-r border-white/5 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Throughput</div>
          <div className="text-6xl font-bold tracking-tighter">
            <Counter end={4.2} decimals={1} />
            <span className="text-indigo-200">k</span>
            <span className="text-indigo-500 text-2xl font-mono ml-2">/sec</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 border-r border-white/5 px-0 md:px-8 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Availability</div>
          <div className="text-6xl font-bold tracking-tighter">
            <Counter end={99.99} decimals={2} />
            <span className="text-indigo-500 text-2xl font-mono ml-2">%</span>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3 border-r border-white/5 px-0 md:px-8 mb-8 md:mb-0">
          <div className="label-tech !before:hidden mb-4 opacity-40">Network</div>
          <div className="text-6xl font-bold tracking-tighter animate-pulse">L7<span className="text-indigo-500 text-2xl font-mono ml-2">_WAF</span></div>
        </div>
        <div className="col-span-12 md:col-span-3 px-0 md:px-8">
          <div className="label-tech !before:hidden mb-4 opacity-40">Latency</div>
          <div className="text-6xl font-bold tracking-tighter">
            <span className="text-indigo-200 opacity-50">&lt;</span>
            <Counter end={12} />
            <span className="text-indigo-500 text-2xl font-mono ml-2">ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}
