"use client";

import { useEffect, useRef } from "react";

export default function DefenseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame: number;
    let angle = 0;
    
    const targets = Array.from({ length: 8 }, () => ({
      x: (Math.random() - 0.5) * 1.5,
      y: (Math.random() - 0.5) * 1.5,
      alpha: 0
    }));

    const render = () => {
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(cx, cy) * 0.9;

      ctx.clearRect(0, 0, width, height);

      // Light theme grid (Dark green on transparent/white)
      ctx.strokeStyle = "rgba(0, 109, 64, 0.1)"; // Very faint dark green
      ctx.lineWidth = 1;
      
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (radius * i) / 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.stroke();

      // Radar Sweep - Slowed down
      angle += 0.015; // Slower radar
      
      const sweep = ctx.createConicGradient(angle - 0.5, cx, cy);
      sweep.addColorStop(0, "rgba(0, 109, 64, 0)");
      sweep.addColorStop(1, "rgba(0, 109, 64, 0.15)");
      
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.5, angle);
      ctx.closePath();
      ctx.fillStyle = sweep;
      ctx.fill();

      // Sweep line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.strokeStyle = "rgba(0, 109, 64, 0.5)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Targets
      targets.forEach(t => {
        const tx = cx + t.x * radius;
        const ty = cy + t.y * radius;
        
        const tAngle = Math.atan2(t.y, t.x);
        let diff = angle % (Math.PI * 2) - tAngle;
        if (diff < 0) diff += Math.PI * 2;
        
        if (diff >= 0 && diff < 0.2) {
          t.alpha = 1;
        } else {
          t.alpha = Math.max(0, t.alpha - 0.015);
        }

        if (t.alpha > 0) {
          ctx.beginPath();
          ctx.arc(tx, ty, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 109, 64, ${t.alpha})`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(tx, ty, 8 + (1-t.alpha)*10, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 109, 64, ${t.alpha * 0.5})`;
          ctx.stroke();
        }
      });

      frame = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
