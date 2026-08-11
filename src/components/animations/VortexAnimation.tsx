"use client";

import { useEffect, useRef } from "react";

export default function VortexAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const init = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    const animate = () => {
      if (!ctx) return;
      // time moves the spiral inwards/outwards
      time += 0.015;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.75;
      const cy = canvas.height * 0.65;
      
      const N = 65; // Reduced to make the center hole bigger
      const sides = 6; // Hexagon
      const maxRadius = canvas.width * 0.8;
      
      // The fraction along the edge for the next vertex. 
      // Controls how tight the spiral is.
      const f = 0.08; 
      
      // Derived continuous scaling and rotation per step
      const k = Math.sqrt(1 - f + f * f);
      const phi = Math.atan2(f * Math.sqrt(3) / 2, 1 - f / 2);

      // Draw from back (inner center) to front (outer edge)
      // to ensure consistent rendering if we used blending, 
      // but for wireframes it's fine either way.
      for (let i = N; i >= 0; i--) {
        // Continuous parameter t allows smooth infinite animation
        const t = i - (time % 1);
        if (t < 0) continue; // skip if it's beyond the outer edge

        const radius = maxRadius * Math.pow(k, t);
        // Add global rotation so the entire vortex spins continuously
        const rotation = t * phi + time * 0.2;

        const vertices = [];
        for (let s = 0; s < sides; s++) {
          const angle = rotation + (s / sides) * Math.PI * 2;
          vertices.push({
            x: cx + Math.cos(angle) * radius,
            y: cy + Math.sin(angle) * radius,
          });
        }

        // Normalize t to 0-1 for color mapping (0 = outer, 1 = inner)
        const p = t / N;
        
        let r, g, b;
        if (p < 0.6) {
            // Outer (very dark green) to Middle (bright green)
            const t2 = p / 0.6;
            r = Math.floor(5 + (64 - 5) * t2);
            g = Math.floor(20 + (168 - 20) * t2);
            b = Math.floor(10 + (101 - 10) * t2);
        } else {
            // Middle (bright green) to Inner (light blue/teal)
            const t2 = (p - 0.6) / 0.4;
            r = Math.floor(64 + (120 - 64) * t2);
            g = Math.floor(168 + (210 - 168) * t2);
            b = Math.floor(101 + (225 - 101) * t2);
        }

        // Fade out outer edges and inner center to prevent abrupt popping (heartbeat effect)
        let alpha = 1;
        if (p < 0.15) {
            alpha = p / 0.15; // smooth fade into the dark background at outer edge
        } else if (p > 0.95) {
            alpha = (1 - p) / 0.05; // smooth fade out at the very center hole
        }
        
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`; 
        ctx.lineWidth = 1.5;

        // Draw Polygon Ring
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for (let s = 1; s < sides; s++) {
          ctx.lineTo(vertices[s].x, vertices[s].y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}
