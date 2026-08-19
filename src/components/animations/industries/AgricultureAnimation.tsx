"use client";

import { useEffect, useRef } from "react";

export default function AgricultureAnimation() {
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
      time += 0.02;

      const hexSize = 25;
      const hexWidth = Math.sqrt(3) * hexSize;
      const hexHeight = 2 * hexSize;
      
      const cols = Math.ceil(width / hexWidth) + 1;
      const rows = Math.ceil(height / (hexHeight * 0.75)) + 1;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const x = c * hexWidth + (r % 2 === 1 ? hexWidth / 2 : 0);
          const y = r * hexHeight * 0.75;
          
          // distance from center
          const dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.5 : 2);
          const dx = x - width / 2;
          const dy = y - height / 2;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          // wave animation
          const wave = Math.sin(dist * 0.05 - time) * 0.5 + 0.5;
          
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + Math.PI / 6;
            // scale hexagon based on wave
            const pSize = hexSize * (0.3 + wave * 0.6);
            const px = x + Math.cos(angle) * pSize;
            const py = y + Math.sin(angle) * pSize;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          
          // Interpolate color based on wave
          // Dark green to Light green
          const rColor = 0 + (109 - 0) * wave;
          const gColor = 109 + (194 - 109) * wave;
          const bColor = 64 + (127 - 64) * wave;
          
          ctx.fillStyle = `rgba(${rColor}, ${gColor}, ${bColor}, ${0.1 + wave * 0.6})`;
          ctx.fill();
          ctx.strokeStyle = `rgba(109, 194, 127, 0.2)`;
          ctx.stroke();
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
    observer.observe(canvasRef.current || canvas);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
