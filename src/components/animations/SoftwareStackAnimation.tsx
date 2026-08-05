"use client";

import { useEffect, useRef } from "react";

export default function SoftwareStackAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const COL = {
      baseGreen: "#1C9659",
      lightGreen: "#46DA90",
      charcoal: "#1B1B1B",
      medGray: "#484848",
      lightGray: "#E5EBEB",
    };

    let W = 0, H = 0, dpr = 1, animId: number;
    let U = 1;

    function resize() {
      const rect = wrapper!.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      U = Math.min(W, H) / 10;
    }

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(wrapper);
    }
    window.addEventListener("resize", resize);
    resize();

    // Isometric projection
    function toScreen(gx: number, gy: number, gz: number) {
      const scale = 0.9; // Adjusted to guarantee no corner clipping
      const sx = W * 0.5 + (gx - gy) * 0.866 * U * scale; // Perfectly centered
      const sy = H * 0.72 + (gx + gy) * 0.5 * U * scale - gz * U * scale * 1.15; // Centered vertically
      return { x: sx, y: sy };
    }

    function rgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    // Stack Layers with workload blocks
    const layers = [
      { z: 0, label: "Hardware Abstraction", blocks: [] as any[] },
      { z: 1.5, label: "OS / Kernel", blocks: [] as any[] },
      { z: 3.0, label: "Libraries & Middleware", blocks: [] as any[] },
      { z: 4.5, label: "Application Layer", blocks: [] as any[] },
    ];

    layers.forEach(layer => {
       for(let x = -1.6; x <= 1.6; x += 0.4) {
          for(let y = -1.6; y <= 1.6; y += 0.4) {
             layer.blocks.push({
                gx: x, gy: y,
                chaosPhase: Math.random() * Math.PI * 2,
                chaosSpeed: 2 + Math.random() * 3
             });
          }
       }
    });

    function draw(time: number) {
      ctx!.clearRect(0, 0, W, H);
      
      // Scanner smoothly oscillates up and down
      // As it sweeps down, it organizes. As it sweeps up, chaos slowly reclaims from the bottom.
      const scannerZ = 2.3 + Math.sin(time * 1.0) * 2.5; // Sweeps between 4.8 and -0.2 to stay strictly within bounds

      // Sort layers by Z-index (Painter's algorithm)
      // We will draw from bottom to top (lowest Z first)

      // Draw Layers
      layers.forEach((layer, idx) => {
         // Determine if scanner is hitting this layer
         const distToScanner = Math.abs(layer.z - scannerZ);
         const isScanned = distToScanner < 0.4;
         const scanIntensity = Math.max(0, 1 - distToScanner / 0.4);

         // Draw the glass plane
         const p1 = toScreen(-2, -2, layer.z);
         const p2 = toScreen(2, -2, layer.z);
         const p3 = toScreen(2, 2, layer.z);
         const p4 = toScreen(-2, 2, layer.z);

         // Plane fill
         ctx!.beginPath();
         ctx!.moveTo(p1.x, p1.y); ctx!.lineTo(p2.x, p2.y);
         ctx!.lineTo(p3.x, p3.y); ctx!.lineTo(p4.x, p4.y);
         ctx!.fillStyle = isScanned ? rgba(COL.baseGreen, 0.15) : rgba(COL.charcoal, 0.03);
         ctx!.fill();
         
         // Plane border
         ctx!.strokeStyle = isScanned ? rgba(COL.lightGreen, 0.8) : rgba(COL.medGray, 0.2);
         ctx!.lineWidth = isScanned ? 2 : 1;
         ctx!.stroke();
         
         // Layer thickness (bottom edge)
         const t1 = toScreen(-2, -2, layer.z - 0.1);
         const t2 = toScreen(2, -2, layer.z - 0.1);
         const t3 = toScreen(2, 2, layer.z - 0.1);
         
         ctx!.fillStyle = rgba(COL.charcoal, isScanned ? 0.4 : 0.1);
         ctx!.beginPath();
         ctx!.moveTo(p2.x, p2.y); ctx!.lineTo(p3.x, p3.y);
         ctx!.lineTo(t3.x, t3.y); ctx!.lineTo(t2.x, t2.y);
         ctx!.fill();

         // Draw Workload Blocks (3D pillars on the glass)
         // Calculate optimization state: 0 = chaotic, 1 = perfectly synchronized
         // If layer is above scanner (layer.z > scannerZ), it has been scanned -> optimized (1)
         // As scanner approaches from above, smoothly transition to 1
         const optFactor = layer.z > scannerZ ? 1 : Math.max(0, 1 - (scannerZ - layer.z) * 1.5);
         
         // Sort blocks by painter's algorithm (x and y)
         const sortedBlocks = [...layer.blocks].sort((a, b) => (b.gx + b.gy) - (a.gx + a.gy));
         
         sortedBlocks.forEach(b => {
            const chaoticHeight = 0.1 + Math.sin(time * b.chaosSpeed + b.chaosPhase) * 0.4;
            const syncedHeight = 0.2 + Math.sin(time * 3 + b.gx * 2 + b.gy * 2) * 0.2;
            
            // Interpolate height based on optimization factor
            const height = chaoticHeight * (1 - optFactor) + syncedHeight * optFactor;
            const bz = layer.z + height;
            
            const bw = 0.15; // Block half-width
            
            const bottom = toScreen(b.gx, b.gy, layer.z);
            const top = toScreen(b.gx, b.gy, bz);
            
            const f_tl = toScreen(b.gx - bw, b.gy - bw, bz);
            const f_tr = toScreen(b.gx + bw, b.gy - bw, bz);
            const f_bl = toScreen(b.gx - bw, b.gy - bw, layer.z);
            const f_br = toScreen(b.gx + bw, b.gy - bw, layer.z);
            
            const b_tl = toScreen(b.gx - bw, b.gy + bw, bz);
            
            // Draw Right/Left face
            ctx!.fillStyle = rgba(COL.charcoal, optFactor * 0.5 + 0.4);
            ctx!.beginPath();
            const b_tr = toScreen(b.gx + bw, b.gy + bw, bz);
            const b_br = toScreen(b.gx + bw, b.gy + bw, layer.z);
            ctx!.moveTo(f_tr.x, f_tr.y); ctx!.lineTo(b_tr.x, b_tr.y);
            ctx!.lineTo(b_br.x, b_br.y); ctx!.lineTo(f_br.x, f_br.y);
            ctx!.fill();

            // Draw Front face
            ctx!.fillStyle = rgba(COL.charcoal, optFactor * 0.5 + 0.6);
            ctx!.beginPath();
            ctx!.moveTo(f_tl.x, f_tl.y); ctx!.lineTo(f_tr.x, f_tr.y);
            ctx!.lineTo(f_br.x, f_br.y); ctx!.lineTo(f_bl.x, f_bl.y);
            ctx!.fill();

            // Draw Top face
            ctx!.fillStyle = optFactor > 0.8 ? rgba(COL.baseGreen, height * 1.5) : rgba(COL.medGray, 0.9);
            ctx!.beginPath();
            ctx!.moveTo(f_tl.x, f_tl.y); ctx!.lineTo(f_tr.x, f_tr.y);
            ctx!.lineTo(b_tr.x, b_tr.y); ctx!.lineTo(b_tl.x, b_tl.y);
            ctx!.fill();
            
            // Wireframe
            ctx!.strokeStyle = optFactor > 0.8 ? rgba(COL.lightGreen, 0.5) : rgba(COL.lightGray, 0.1);
            ctx!.lineWidth = 1;
            ctx!.stroke();
         });
      });

      // Draw Scanner Plane Over everything
      const s_w = 2.2; // Reverted back to perfectly wide horizontal overhang
      const s1 = toScreen(-s_w, -s_w, scannerZ);
      const s2 = toScreen(s_w, -s_w, scannerZ);
      const s3 = toScreen(s_w, s_w, scannerZ);
      const s4 = toScreen(-s_w, s_w, scannerZ);

      ctx!.beginPath();
      ctx!.moveTo(s1.x, s1.y); ctx!.lineTo(s2.x, s2.y);
      ctx!.lineTo(s3.x, s3.y); ctx!.lineTo(s4.x, s4.y);
      ctx!.fillStyle = rgba(COL.lightGreen, 0.05);
      ctx!.fill();
      
      // Scanner border
      ctx!.strokeStyle = rgba(COL.lightGreen, 0.6);
      ctx!.lineWidth = 1;
      ctx!.stroke();
      
      // Scanner glow corner
      const g1 = toScreen(-s_w, s_w, scannerZ);
      ctx!.fillStyle = COL.lightGreen;
      ctx!.beginPath();
      ctx!.arc(g1.x, g1.y, 4, 0, Math.PI * 2);
      ctx!.fill();
      ctx!.fillStyle = rgba(COL.lightGreen, 0.5);
      ctx!.beginPath();
      ctx!.arc(g1.x, g1.y, 10, 0, Math.PI * 2);
      ctx!.fill();
    }

    if (prefersReducedMotion) {
      resize();
      if (W > 0 && H > 0) draw(0);
      return;
    }

    let lastTs = 0;
    function animate(ts: number) {
      if (W === 0 || H === 0) { animId = requestAnimationFrame(animate); return; }
      const time = ts / 1000;
      draw(time);
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      if (ro) ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-full bg-transparent"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
