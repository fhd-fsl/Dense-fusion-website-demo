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
    let isVisible = false;

    const init = () => {
      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;
      const isMob = w < 768;
      const dpr = Math.min(window.devicePixelRatio || 1, isMob ? 1.5 : 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      const ctx2 = canvas.getContext("2d");
      if (ctx2) ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const animate = () => {
      if (!ctx || !isVisible) return;
      // time moves the spiral inwards/outwards
      time += 0.015;
      
      const cw = canvas.parentElement?.clientWidth || canvas.width;
      const ch = canvas.parentElement?.clientHeight || canvas.height;

      ctx.clearRect(0, 0, cw, ch);

      const cx = cw * 0.75;
      const cy = ch * 0.65;
      
      const isMob = cw < 768;
      const N = isMob ? 40 : 65; // Reduced on mobile
      const sides = 6; // Hexagon
      const maxRadius = cw * (isMob ? 0.6 : 0.8);
      
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animate();
          }
        } else {
          isVisible = false;
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0 });
    
    observer.observe(canvas);

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    />
  );
}
