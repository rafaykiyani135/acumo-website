"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number;
  orbitRadius: number;
  angularSpeed: number;
}

const InteractiveParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  // Customizable Constants
  const PARTICLE_COUNT = 300;
  const CONNECT_DISTANCE = 160;
  const REPULSE_DISTANCE = 180;
  const REPULSE_STRENGTH = 0.5;
  const RETURN_SPEED = 4.5;
  const FRICTION = 0.95;
  const COLORS = ["#6366f1", "#ffffff"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const newParticles: Particle[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        newParticles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          angle: Math.random() * Math.PI * 2,
          orbitRadius: Math.random() * 40 + 10,
          angularSpeed: (Math.random() - 0.5) * 0.015,
        });
      }
      particlesRef.current = newParticles;
    };

    let animationFrameId: number;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Orbital Physics
        p.angle += p.angularSpeed;
        const targetX = p.originX + Math.cos(p.angle) * p.orbitRadius;
        const targetY = p.originY + Math.sin(p.angle) * (p.orbitRadius * 0.6); // Elliptical

        // 2. Interaction
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < REPULSE_DISTANCE) {
            const force = (REPULSE_DISTANCE - distance) / REPULSE_DISTANCE;
            const ax = (dx / distance) * force * REPULSE_STRENGTH * 8;
            const ay = (dy / distance) * force * REPULSE_STRENGTH * 8;
            p.vx += ax;
            p.vy += ay;
          }
        }

        // 3. Friction and System-wide Drift
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        
        // Slow core drift
        p.originX += 0.05;
        if (p.originX > canvas.width) p.originX = 0;

        // 4. Return to Orbital Target Force
        const tdx = targetX - p.x;
        const tdy = targetY - p.y;
        p.vx += tdx * (RETURN_SPEED * 0.001);
        p.vy += tdy * (RETURN_SPEED * 0.001);

        p.x += p.vx;
        p.y += p.vy;

        // 5. Draw Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DISTANCE) {
            ctx.beginPath();
            const opacity = 1 - dist / CONNECT_DISTANCE;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // 6. Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ filter: "blur(0.5px)" }}
    />
  );
};

export default InteractiveParticles;
