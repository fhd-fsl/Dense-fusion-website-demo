"use client";

import { useEffect, useRef } from "react";

export default function ClimateAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame: number;
    let isVisible = false;
    const particles = Array.from({ length: 300 }, () => ({
      angle: Math.random() * Math.PI * 2,
      // Distribute particles with a hole in the middle (eye of storm)
      radius: 40 + Math.random() * 150,
      // Particles closer to center move faster
      baseSpeed: 0,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));

    // Calculate speed based on initial radius (conservation of angular momentum feel)
    particles.forEach(p => {
       p.baseSpeed = (Math.random() * 0.005 + 0.005) * (150 / Math.max(20, p.radius));
    });

    const render = () => {
      if (!isVisible) return;
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      const cx = width / 2;
      const cy = height / 2;
      
      // Light theme trail
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)"; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        // Particles orbit the center
        p.angle += p.baseSpeed;
        
        // Slight inward/outward drift
        p.radius += Math.sin(p.angle * 3) * 0.5;

        // Keep out of the eye
        if (p.radius < 30) p.radius = 30;
        if (p.radius > 200) p.radius = 200;

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        
        // Color based on distance to center (light theme greens)
        const pNorm = Math.min(1, Math.max(0, (p.radius - 30) / 170));
        ctx.fillStyle = pNorm > 0.5 ? `rgba(109, 194, 127, ${p.opacity})` : `rgba(0, 109, 64, ${p.opacity})`;
        ctx.fill();
      });

      // Draw the calm "eye"
      ctx.beginPath();
      ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 109, 64, 0.1)";
      ctx.stroke();

      frame = requestAnimationFrame(render);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            render();
          }
        } else {
          isVisible = false;
          if (frame) cancelAnimationFrame(frame);
        }
      });
    }, { threshold: 0 });
    observer.observe(canvasRef.current || canvas);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
