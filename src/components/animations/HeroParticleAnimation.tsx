"use client";

import { useEffect, useRef } from "react";

export default function HeroParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor(canvas.width / 20); // slightly fewer but larger
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 3 + 1.5,
        });
      }
    };
    initParticles();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#006D40"; // gradientGreen1
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (dist < 180) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            // Create gradient line between the two particles
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(0, 109, 64, ${1 - dist / 180})`);
            gradient.addColorStop(1, `rgba(109, 194, 127, ${1 - dist / 180})`);

            ctx.lineWidth = (1 - dist / 180) * 1.5;
            ctx.strokeStyle = gradient;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, transparent 30%, black 70%)",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, transparent 30%, black 70%)"
      }}
    >
      <canvas ref={canvasRef} className="block h-full w-full opacity-50" />
    </div>
  );
}
