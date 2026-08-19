"use client";

import { useEffect, useRef } from "react";

export default function WaveParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame: number;
    let time = 0;
    let isVisible = false;

    const isMobile = (canvas.offsetWidth || window.innerWidth) < 768;
    const SEPARATION = isMobile ? 40 : 30;
    const AMOUNTX = isMobile ? 40 : 70;
    const AMOUNTY = isMobile ? 18 : 30;

    const render = () => {
      if (!isVisible) return;
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          const z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
          
          // Creates the flowing wave effect
          const y = (Math.sin((ix + time) * 0.3) * 30) + (Math.sin((iy + time) * 0.3) * 30);
          
          // 3D projection
          const fov = 400;
          const distance = fov + z + 300;
          
          if (distance > 0) {
            const scale = fov / distance;
            const x2d = (x * scale) + width / 2;
            const y2d = (y * scale) + height * 0.7; // Position near the bottom
            
            // Fade out in the distance and at the edges
            const alpha = Math.min(1, Math.max(0, scale * 1.5 - 0.5)) * Math.min(1, (AMOUNTX - Math.abs(ix - AMOUNTX/2)*2) / AMOUNTX);
            
            if (alpha > 0.05) {
                ctx.beginPath();
                ctx.arc(x2d, y2d, scale * 1.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
                ctx.fill();
            }
          }
        }
      }

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
    
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
