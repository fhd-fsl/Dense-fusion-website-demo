"use client";

import { useEffect, useRef } from "react";

export default function EducationAnimation() {
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
      const dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.5 : 2);
      const cx = width / 2;
      const cy = height / 2;
      
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Draw nucleus
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fillStyle = "#6DC27F";
      ctx.fill();
      
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#6DC27F";

      const rings = 3;
      const radiusX = Math.min(width, height) * 0.4;
      const radiusY = radiusX * 0.3;

      for (let i = 0; i < rings; i++) {
        const ringAngle = (Math.PI / rings) * i;
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ringAngle + time * 0.1);
        
        // Draw orbit
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(0, 109, 64, 0.4)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw electron
        const electronAngle = time * (1.5 + i * 0.2);
        const ex = Math.cos(electronAngle) * radiusX;
        const ey = Math.sin(electronAngle) * radiusY;
        
        ctx.beginPath();
        ctx.arc(ex, ey, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#006D40";
        ctx.fill();

        ctx.restore();
      }

      ctx.shadowBlur = 0;
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
