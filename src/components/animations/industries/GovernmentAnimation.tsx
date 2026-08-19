"use client";

import { useEffect, useRef } from "react";

export default function GovernmentAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame: number;
    let isVisible = false;
    let time = 0;

    const render = () => {
      if (!isVisible) return;
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      time += 0.003;

      const dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.5 : 2);
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.4;
      
      ctx.strokeStyle = "rgba(0, 109, 64, 0.25)"; 
      ctx.lineWidth = 1.5;

      // Draw globe boundary
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Latitudes (horizontal arcs)
      const numLatitudes = 5;
      for (let i = 1; i <= numLatitudes; i++) {
        const yOffset = radius * Math.cos((i * Math.PI) / (numLatitudes + 1));
        const rX = Math.sqrt(radius * radius - yOffset * yOffset);
        
        ctx.beginPath();
        ctx.ellipse(cx, cy + yOffset, rX, rX * 0.2, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Longitudes (vertical arcs spinning)
      const numLongitudes = 8;
      for (let i = 0; i < numLongitudes; i++) {
        const angle = time + (i * Math.PI) / numLongitudes;
        const cosA = Math.cos(angle);
        const rX = radius * Math.abs(cosA);
        
        ctx.beginPath();
        if (Math.abs(cosA) > 0.01) {
            ctx.ellipse(cx, cy, rX, radius, 0, 0, Math.PI * 2);
        } else {
            ctx.moveTo(cx, cy - radius);
            ctx.lineTo(cx, cy + radius);
        }
        ctx.stroke();
      }
      
      // Dots removed as requested

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
