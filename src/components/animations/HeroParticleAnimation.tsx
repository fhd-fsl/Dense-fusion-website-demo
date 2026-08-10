"use client";

import { useEffect, useRef } from "react";

export default function HeroParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = containerRef.current;
    if (!canvas || !wrap) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let W = wrap.clientWidth || window.innerWidth;
    let H = wrap.clientHeight || window.innerHeight;
    
    const resize = () => {
      W = wrap.clientWidth || window.innerWidth;
      H = wrap.clientHeight || window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", resize);
    resize();

    const spacing = 40;
    const spacingBase = spacing;
    const radius = 220;
    // Base color for dots (light gray)
    const baseColor = [207, 207, 207];
    // Glow color (matching your DenseFusion green vibe)
    const glowColor = [150, 220, 170];

    let mouse = { x: -9999, y: -9999 };
    let target = { x: W / 2, y: H / 2 };
    let hoveredElement: HTMLElement | null = null;
    let currentForce = 14;
    const ripples: { x: number; y: number; r: number; born: number }[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
      
      const targetEl = e.target as HTMLElement;
      hoveredElement = targetEl?.closest?.('.interactive-hover') as HTMLElement;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      hoveredElement = null;
    };

    const handleClick = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      ripples.push({
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
        r: 0,
        born: performance.now(),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // To handle mouse leaving the entire browser window
    const handleWindowMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.clientX <= 0 || (e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
        handleMouseLeave();
      }
    };
    window.addEventListener("mouseout", handleWindowMouseLeave);
    window.addEventListener("click", handleClick);

    const draw = (now: number) => {
      ctx.clearRect(0, 0, W, H);

      const targetForce = hoveredElement ? -120 : 14;
      currentForce += (targetForce - currentForce) * 0.08;

      // prune old ripples
      for (let k = ripples.length - 1; k >= 0; k--) {
        if (now - ripples[k].born > 1800) ripples.splice(k, 1);
      }

      const cols = Math.ceil(W / spacingBase) + 1;
      const rows = Math.ceil(H / spacingBase) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          let x = i * spacingBase;
          let y = j * spacingBase;

          // magnetic warp
          const dxm = x - target.x;
          const dym = y - target.y;
          const distM = Math.sqrt(dxm * dxm + dym * dym);
          let warpX = 0, warpY = 0;
          let dotOpacity = 0.5;
          if (distM < radius) {
            let push = 0;
            if (currentForce < 0) {
              const suckAmount = Math.min(1, Math.max(0, currentForce / -120));
              push = -distM * Math.pow(suckAmount, 0.8); // ease out the pull
              dotOpacity = 0.5 * (1 - Math.pow(suckAmount, 2)); // fade out faster near the end
            } else {
              push = (1 - distM / radius) * currentForce;
            }
            const ang = Math.atan2(dym, dxm);
            warpX = Math.cos(ang) * push;
            warpY = Math.sin(ang) * push;
          }

          // ripple displacement
          let rippleT = 0;
          for (const rp of ripples) {
            const age = (now - rp.born) / 1000;
            const waveR = age * 700;
            const dxr = x - rp.x;
            const dyr = y - rp.y;
            const dr = Math.sqrt(dxr * dxr + dyr * dyr);
            const band = Math.abs(dr - waveR);
            if (band < 60) {
              const strength = (1 - age / 1.8) * (1 - band / 60);
              rippleT = Math.max(rippleT, strength);
            }
          }

          const px = x + warpX;
          const py = y + warpY;

          const dx2 = x - target.x;
          const dy2 = y - target.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          const tCursor = dist2 < radius ? (1 - dist2 / radius) : 0;
          const t = Math.max(tCursor, rippleT);

          if (t <= 0.02) {
            ctx.beginPath();
            ctx.arc(px, py, 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${dotOpacity})`;
            ctx.fill();
            continue;
          }

          const r = baseColor[0] + (glowColor[0] - baseColor[0]) * t;
          const g = baseColor[1] + (glowColor[1] - baseColor[1]) * t;
          const b = baseColor[2] + (glowColor[2] - baseColor[2]) * t;
          const size = 1 + t * 3.8;
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${dotOpacity + t * 0.5})`;
          ctx.fill();
        }
      }

      let currentDestX = mouse.x;
      let currentDestY = mouse.y;

      if (hoveredElement) {
        const hRect = hoveredElement.getBoundingClientRect();
        const wrapRect = wrap.getBoundingClientRect();
        currentDestX = (hRect.left - wrapRect.left + hRect.width / 2) * (W / wrapRect.width);
        currentDestY = (hRect.top - wrapRect.top + hRect.height / 2) * (H / wrapRect.height);
      }

      target.x += (currentDestX - target.x) * 0.35;
      target.y += (currentDestY - target.y) * 0.35;

      animationFrameId = requestAnimationFrame(draw);
    };
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleWindowMouseLeave);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes gridReveal {
          0% { clip-path: inset(0% 100% 0% 0%); opacity: 0.2; }
          50% { opacity: 1; }
          100% { clip-path: inset(0% 0% 0% 0%); opacity: 1; }
        }
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 40px 40px; }
        }
      `}</style>
      <div 
        ref={containerRef} 
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Background CSS Grid with mask for center fading */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(#cfcfcf 1px, transparent 1px), linear-gradient(90deg, #cfcfcf 1px, transparent 1px)',
            backgroundSize: '40px 40px, 40px 40px',
            WebkitMaskImage: 'radial-gradient(40% 70% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.5) 100%)',
            maskImage: 'radial-gradient(40% 70% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.5) 100%)',
            clipPath: 'inset(0% 100% 0% 0%)',
            animation: 'gridReveal 1.1s cubic-bezier(0.25, 0.1, 0.25, 1) forwards, gridMove 3s linear infinite'
          }}
        />
        
        {/* Canvas for magnetic dots */}
        <div className="absolute inset-0 pointer-events-none">
          <canvas ref={canvasRef} className="block h-full w-full" />
        </div>
      </div>
    </>
  );
}
