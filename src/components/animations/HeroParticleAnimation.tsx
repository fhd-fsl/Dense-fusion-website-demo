"use client";

import { useEffect, useRef } from "react";
import useIsMobile from "@/components/hooks/useIsMobile";

export default function HeroParticleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobileState = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = containerRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let W = wrap.clientWidth || window.innerWidth;
    let H = wrap.clientHeight || window.innerHeight;

    const resize = () => {
      W = wrap.clientWidth || window.innerWidth;
      H = wrap.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, W < 768 ? 1.5 : 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    window.addEventListener("resize", resize);
    resize();

    const isMobile = W < 768;
    const spacing = isMobile ? 56 : 40;
    const spacingBase = spacing;
    const radius = isMobile ? 140 : 220;
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
      if (!isVisible) return;
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(draw);
          }
        } else {
          isVisible = false;
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
        }
      });
    }, { threshold: 0 });
    
    observer.observe(wrap);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleWindowMouseLeave);
      window.removeEventListener("click", handleClick);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const circuitPaths = [
    // Bus 1 (Left to Bottom-Center)
    "M 0 250 L 200 250 L 300 350 L 450 350",
    "M 0 260 L 190 260 L 290 360 L 450 360",
    "M 0 270 L 180 270 L 280 370 L 450 370",
    "M 0 280 L 170 280 L 270 380 L 450 380",
    "M 0 290 L 160 290 L 260 390 L 450 390",
    "M 0 300 L 150 300 L 250 400 L 450 400",
    "M 0 310 L 140 310 L 240 410 L 450 410",
    "M 0 320 L 130 320 L 230 420 L 450 420",

    // Bus 2 (Right to Top-Center)
    "M 800 100 L 600 100 L 500 200 L 350 200",
    "M 800 110 L 610 110 L 510 210 L 350 210",
    "M 800 120 L 620 120 L 520 220 L 350 220",
    "M 800 130 L 630 130 L 530 230 L 350 230",
    "M 800 140 L 640 140 L 540 240 L 350 240",
    "M 800 150 L 650 150 L 550 250 L 350 250",
    "M 800 160 L 660 160 L 560 260 L 350 260",
    "M 800 170 L 670 170 L 570 270 L 350 270",

    // Bus 3 (Top to Right-Center)
    "M 300 0 L 300 100 L 400 200 L 400 300",
    "M 310 0 L 310 90 L 410 190 L 410 300",
    "M 320 0 L 320 80 L 420 180 L 420 300",
    "M 330 0 L 330 70 L 430 170 L 430 300",
    "M 340 0 L 340 60 L 440 160 L 440 300",
    "M 350 0 L 350 50 L 450 150 L 450 300",
    "M 360 0 L 360 40 L 460 140 L 460 300",
    "M 370 0 L 370 30 L 470 130 L 470 300",

    // Bus 4 (Bottom to Left-Center)
    "M 600 600 L 600 500 L 500 400 L 300 400",
    "M 590 600 L 590 490 L 490 390 L 300 390",
    "M 580 600 L 580 480 L 480 380 L 300 380",
    "M 570 600 L 570 470 L 470 370 L 300 370",
    "M 560 600 L 560 460 L 460 360 L 300 360",
    "M 550 600 L 550 450 L 450 350 L 300 350",
    "M 540 600 L 540 440 L 440 340 L 300 340",
    "M 530 600 L 530 430 L 430 330 L 300 330",

    // Cluster Top-Left
    "M 0 50 L 80 50 L 150 120 L 250 120",
    "M 0 60 L 70 60 L 140 130 L 250 130",
    "M 0 70 L 60 70 L 130 140 L 250 140",
    "M 0 80 L 50 80 L 120 150 L 250 150",
    "M 0 120 L 60 120 L 100 80 L 180 80",
    "M 0 130 L 70 130 L 110 90 L 180 90",
    "M 0 140 L 80 140 L 120 100 L 180 100",
    "M 100 0 L 100 40 L 150 90 L 220 90",
    "M 110 0 L 110 30 L 160 80 L 220 80",

    // Cluster Bottom-Right
    "M 800 400 L 700 400 L 600 500 L 550 500",
    "M 800 410 L 710 410 L 610 510 L 550 510",
    "M 800 420 L 720 420 L 620 520 L 550 520",
    "M 800 430 L 730 430 L 630 530 L 550 530",
    "M 800 480 L 750 480 L 680 410 L 600 410",
    "M 800 490 L 760 490 L 690 420 L 600 420",
    "M 700 600 L 700 560 L 650 510 L 580 510",
    "M 690 600 L 690 570 L 640 520 L 580 520",

    // Cluster Top-Right
    "M 800 20 L 700 20 L 650 70 L 550 70",
    "M 800 30 L 710 30 L 660 80 L 550 80",
    "M 800 40 L 720 40 L 670 90 L 550 90",
    "M 600 0 L 600 30 L 550 80",
    "M 610 0 L 610 40 L 560 90",
    "M 500 0 L 500 40 L 550 90",

    // Cluster Bottom-Left
    "M 0 500 L 100 500 L 150 450 L 250 450",
    "M 0 510 L 90 510 L 140 460 L 250 460",
    "M 0 520 L 80 520 L 130 470 L 250 470",
    "M 200 600 L 200 570 L 250 520",
    "M 190 600 L 190 560 L 240 510",

    // Center Jumble (Random cross-connections)
    "M 250 150 L 300 200 L 350 200",
    "M 250 120 L 320 190 L 400 190",
    "M 450 350 L 500 300 L 550 300",
    "M 450 370 L 520 300 L 580 300",
    "M 300 330 L 250 280 L 200 280",
    "M 400 280 L 450 330 L 500 330"
  ];

  return (
    <>
      <style>{`
        @keyframes circuitPulse {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -1000; }
        }
        .circuit-pulse path {
          stroke-dasharray: 40 800;
          animation: circuitPulse 8s linear infinite;
        }
      `}</style>
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* Circuit Board with center mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: 'radial-gradient(45% 75% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 100%)',
            maskImage: 'radial-gradient(45% 75% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,1) 100%)',
          }}
        >
          <svg 
            className="absolute inset-0 pointer-events-none opacity-20 md:opacity-40 h-full w-full" 
            viewBox="0 0 800 600" 
            preserveAspectRatio={isMobileState ? "none" : "xMidYMid slice"}
          >
            {/* Base Paths */}
            <g stroke="#b3b3b3" strokeWidth="1" fill="none" opacity="0.6">
              {circuitPaths.map((d, i) => (
                <path key={`base-${i}`} d={d} />
              ))}
            </g>

            {/* Vias */}
            <g fill="#ffffff" stroke="#b3b3b3" strokeWidth="1.5">
              {circuitPaths.map((d, i) => {
                const match = d.match(/L\s+(\d+)\s+(\d+)\s*$/);
                if (!match) return null;
                return <circle key={`via-${i}`} cx={match[1]} cy={match[2]} r="2" />;
              })}
            </g>

            {/* Animated Pulses */}
            <g stroke="#1C9659" strokeWidth="1.5" fill="none" className="circuit-pulse">
              {circuitPaths.map((d, i) => (
                <path 
                  key={`pulse-${i}`} 
                  d={d} 
                  style={{ animationDelay: `-${(i * 0.73) % 4}s` }} 
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Canvas for magnetic dots */}
        <div className="absolute inset-0 pointer-events-none">
          <canvas ref={canvasRef} className="block h-full w-full" />
        </div>
      </div>
    </>
  );
}
