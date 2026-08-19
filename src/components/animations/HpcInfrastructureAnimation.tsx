"use client";

import { useEffect, useRef } from "react";

export default function HpcInfrastructureAnimation() {
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

    // Brand colors
    const COL = {
      darkGreen: "#0E7441",
      baseGreen: "#1C9659",
      medGreen: "#2FB873",
      lightGreen: "#46DA90",
      deepBlack: "#0B0B0B",
      charcoal: "#1B1B1B",
      medGray: "#484848",
      lightGray: "#AAAAAA",
      paleGray: "#E5EBEB",
      white: "#FDFFFF",
    };

    let W = 0, H = 0, dpr = 1, U = 1, animId: number;
    let isVisible = false;

    function rgba(hex: string, a: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${a})`;
    }

    function resize() {
      const rect = wrapper!.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      dpr = Math.min(window.devicePixelRatio || 1, rect.width < 768 ? 1.5 : 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      U = Math.min(W, H) / 15.5; // Scaled down to prevent label clipping
    }

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(wrapper);
    }
    window.addEventListener("resize", resize);
    resize();

    // Isometric projection mapping
    function toScreen(gx: number, gy: number, gz: number = 0) {
      const sx = W * 0.5 + (gx - gy) * 0.866 * U * 2.2;
      const sy = H * 0.70 + (gx + gy) * 0.5 * U * 2.2 - gz * U * 2.2;
      return { x: sx, y: sy };
    }

    // Infrastructure Nodes (Racks)
    const racks = [
      { id: 0, gx: -1.4, gy: -1.4, h: 2.2, type: "GPU Cluster" },
      { id: 1, gx: 1.4,  gy: -1.4, h: 1.8, type: "NVMe Storage" },
      { id: 2, gx: -1.4, gy: 1.4,  h: 2.2, type: "Compute Node" },
      { id: 3, gx: 1.4,  gy: 1.4,  h: 1.5, type: "Core Switch" },
      { id: 4, gx: 0,    gy: 0,    h: 2.8, type: "Master Node" }, 
    ];

    // Data Connections (Bezier paths)
    const connections = [
      { from: 4, to: 0, h1: 0, h2: 0 },
      { from: 4, to: 1, h1: 1.5, h2: 1.0 },
      { from: 4, to: 2, h1: 2.5, h2: 1.8 },
      { from: 4, to: 3, h1: 0, h2: 0 },
      { from: 0, to: 2, h1: 1.2, h2: 1.5 },
      { from: 1, to: 3, h1: 0.5, h2: 0.8 },
      { from: 0, to: 3, h1: 2.0, h2: 1.2 },
      { from: 2, to: 1, h1: 0, h2: 0 }
    ];

    // Particles moving along connections
    interface Particle {
      connIdx: number;
      t: number;
      speed: number;
      size: number;
      color: string;
    }
    const particles: Particle[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        connIdx: Math.floor(Math.random() * connections.length),
        t: Math.random(),
        speed: 0.15 + Math.random() * 0.4,
        size: 0.04 + Math.random() * 0.08,
        color: Math.random() > 0.5 ? COL.baseGreen : COL.medGreen
      });
    }

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      ctx!.beginPath();
      ctx!.moveTo(x + r, y);
      ctx!.lineTo(x + w - r, y);
      ctx!.arcTo(x + w, y, x + w, y + r, r);
      ctx!.lineTo(x + w, y + h - r);
      ctx!.arcTo(x + w, y + h, x + w - r, y + h, r);
      ctx!.lineTo(x + r, y + h);
      ctx!.arcTo(x, y + h, x, y + h - r, r);
      ctx!.lineTo(x, y + r);
      ctx!.arcTo(x, y, x + r, y, r);
      ctx!.closePath();
    }

    function getBezierPoint(t: number, p0: any, p1: any, p2: any) {
      const mt = 1 - t;
      return {
        x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
        y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y
      };
    }

    function drawFloorGrid() {
      // Clean, subtle grey grid
      ctx!.lineWidth = Math.max(1, W * 0.001);
      
      for (let i = -7; i <= 7; i++) {
        const alpha = 0.4 - Math.abs(i) * 0.05;
        if (alpha <= 0) continue;
        
        ctx!.strokeStyle = rgba(COL.medGray, alpha * 0.3);
        
        // X lines
        ctx!.beginPath();
        const p1 = toScreen(-7, i);
        const p2 = toScreen(7, i);
        ctx!.moveTo(p1.x, p1.y); ctx!.lineTo(p2.x, p2.y); ctx!.stroke();

        // Y lines
        ctx!.beginPath();
        const p3 = toScreen(i, -7);
        const p4 = toScreen(i, 7);
        ctx!.moveTo(p3.x, p3.y); ctx!.lineTo(p4.x, p4.y); ctx!.stroke();
      }
    }

    function drawDetailedRack(r: any, time: number) {
      const { gx, gy, h, type, id } = r;
      const w = 0.5, d = 0.5;

      const pts = {
        b_bl: toScreen(gx - w/2, gy + d/2, 0),
        b_br: toScreen(gx + w/2, gy + d/2, 0),
        b_tr: toScreen(gx + w/2, gy - d/2, 0),
        b_tl: toScreen(gx - w/2, gy - d/2, 0),
        t_bl: toScreen(gx - w/2, gy + d/2, h),
        t_br: toScreen(gx + w/2, gy + d/2, h),
        t_tr: toScreen(gx + w/2, gy - d/2, h),
        t_tl: toScreen(gx - w/2, gy - d/2, h),
      };

      // Soft drop shadow on the floor
      ctx!.fillStyle = rgba(COL.charcoal, 0.15);
      ctx!.beginPath();
      const shadowOffset = U * 0.3;
      ctx!.moveTo(pts.b_bl.x, pts.b_bl.y + shadowOffset); 
      ctx!.lineTo(pts.b_br.x + shadowOffset*2, pts.b_br.y + shadowOffset);
      ctx!.lineTo(pts.b_tr.x + shadowOffset*2, pts.b_tr.y - shadowOffset*0.5); 
      ctx!.lineTo(pts.b_tl.x, pts.b_tl.y - shadowOffset*0.5);
      ctx!.fill();

      // Right Face (Darkest)
      ctx!.fillStyle = rgba(COL.charcoal, 0.95);
      ctx!.beginPath(); ctx!.moveTo(pts.b_br.x, pts.b_br.y); ctx!.lineTo(pts.b_tr.x, pts.b_tr.y);
      ctx!.lineTo(pts.t_tr.x, pts.t_tr.y); ctx!.lineTo(pts.t_br.x, pts.t_br.y); ctx!.fill();

      // Front Face (Base Charcoal)
      ctx!.fillStyle = rgba(COL.medGray, 0.95);
      ctx!.beginPath(); ctx!.moveTo(pts.b_bl.x, pts.b_bl.y); ctx!.lineTo(pts.b_br.x, pts.b_br.y);
      ctx!.lineTo(pts.t_br.x, pts.t_br.y); ctx!.lineTo(pts.t_bl.x, pts.t_bl.y); ctx!.fill();

      // Top Face (Lightest)
      ctx!.fillStyle = rgba(COL.lightGray, 0.95);
      ctx!.beginPath(); ctx!.moveTo(pts.t_bl.x, pts.t_bl.y); ctx!.lineTo(pts.t_br.x, pts.t_br.y);
      ctx!.lineTo(pts.t_tr.x, pts.t_tr.y); ctx!.lineTo(pts.t_tl.x, pts.t_tl.y); ctx!.fill();

      // Edges for definition
      ctx!.strokeStyle = rgba(COL.white, 0.2);
      ctx!.lineWidth = Math.max(1, W * 0.001);
      ctx!.beginPath();
      ctx!.moveTo(pts.t_bl.x, pts.t_bl.y); ctx!.lineTo(pts.t_br.x, pts.t_br.y);
      ctx!.lineTo(pts.t_tr.x, pts.t_tr.y); ctx!.lineTo(pts.t_tl.x, pts.t_tl.y); ctx!.closePath(); ctx!.stroke();
      
      ctx!.strokeStyle = rgba(COL.charcoal, 0.3);
      ctx!.beginPath(); ctx!.moveTo(pts.b_br.x, pts.b_br.y); ctx!.lineTo(pts.t_br.x, pts.t_br.y); ctx!.stroke();

      // --- Internal Server Blades & LEDs (Front Face) ---
      const units = Math.floor(h * 5);
      for (let i = 1; i < units; i++) {
        const uz = (h / units) * i;
        const p1 = toScreen(gx - w/2 + 0.05, gy + d/2, uz);
        const p2 = toScreen(gx + w/2 - 0.05, gy + d/2, uz);

        // Server slot separation (Dark lines on the grey face)
        ctx!.strokeStyle = rgba(COL.charcoal, 0.6);
        ctx!.lineWidth = Math.max(1, U * 0.03);
        ctx!.beginPath(); ctx!.moveTo(p1.x, p1.y); ctx!.lineTo(p2.x, p2.y); ctx!.stroke();

        // LEDs
        const ledCount = id === 4 ? 4 : 2;
        for(let l=0; l<ledCount; l++) {
          const lx = p1.x + (p2.x - p1.x) * (0.85 - l*0.12);
          const ly = p1.y + (p2.y - p1.y) * (0.85 - l*0.12) - U * 0.05;
          
          const isProcessing = Math.sin(time * (3 + id + l) + i * 1.5) > 0;
          
          if (isProcessing) {
            ctx!.fillStyle = COL.baseGreen;
            ctx!.beginPath(); ctx!.arc(lx, ly, Math.max(1.5, U * 0.025), 0, Math.PI*2); ctx!.fill();
            // Core Glow
            ctx!.fillStyle = rgba(COL.baseGreen, 0.3);
            ctx!.beginPath(); ctx!.arc(lx, ly, Math.max(3, U * 0.08), 0, Math.PI*2); ctx!.fill();
          } else {
            // Off state LED
            ctx!.fillStyle = rgba(COL.charcoal, 0.8);
            ctx!.beginPath(); ctx!.arc(lx, ly, Math.max(1, U * 0.02), 0, Math.PI*2); ctx!.fill();
          }
        }
      }


    }

    function drawDataConnections(time: number, dt: number) {
      // 1. Physical Cables
      connections.forEach((c) => {
        const r1 = racks[c.from];
        const r2 = racks[c.to];

        const p1 = toScreen(r1.gx, r1.gy, c.h1);
        const p2 = toScreen(r2.gx, r2.gy, c.h2);
        
        const midZ = (c.h1 + c.h2) / 2;
        const droop = midZ > 0 ? -0.4 : 0;
        const xySpread = midZ === 0 ? 1.5 : 0.2; 
        
        const cp = toScreen((r1.gx + r2.gx)/2, (r1.gy + r2.gy)/2 - xySpread, Math.max(0, midZ + droop));

        ctx!.strokeStyle = rgba(COL.medGray, 0.15);
        ctx!.lineWidth = Math.max(2, U * 0.08);
        ctx!.beginPath();
        ctx!.moveTo(p1.x, p1.y);
        ctx!.quadraticCurveTo(cp.x, cp.y, p2.x, p2.y);
        ctx!.stroke();
      });

      // 2. Data Packets
      particles.forEach(p => {
        p.t += p.speed * dt;
        if (p.t > 1) {
          p.t = 0;
          p.connIdx = Math.floor(Math.random() * connections.length); 
        }

        const c = connections[p.connIdx];
        const r1 = racks[c.from];
        const r2 = racks[c.to];
        const p1 = toScreen(r1.gx, r1.gy, c.h1);
        const p2 = toScreen(r2.gx, r2.gy, c.h2);
        const midZ = (c.h1 + c.h2) / 2;
        const droop = midZ > 0 ? -0.4 : 0;
        const xySpread = midZ === 0 ? 1.5 : 0.2;
        const cp = toScreen((r1.gx + r2.gx)/2, (r1.gy + r2.gy)/2 - xySpread, Math.max(0, midZ + droop));

        const pt = getBezierPoint(p.t, p1, cp, p2);
        
        // Mathematically precise tail (no jitter/lag during frame drops)
        const tailLength = 0.15; 
        const tailStartT = Math.max(0, p.t - tailLength);
        
        if (p.t > 0.01) {
           ctx!.beginPath();
           const startPt = getBezierPoint(tailStartT, p1, cp, p2);
           ctx!.moveTo(startPt.x, startPt.y);
           
           const samples = 4;
           for (let s = 1; s <= samples; s++) {
               const sampleT = tailStartT + (p.t - tailStartT) * (s / samples);
               const sampPt = getBezierPoint(sampleT, p1, cp, p2);
               ctx!.lineTo(sampPt.x, sampPt.y);
           }
           
           const tailGrad = ctx!.createLinearGradient(startPt.x, startPt.y, pt.x, pt.y);
           tailGrad.addColorStop(0, rgba(p.color, 0));
           tailGrad.addColorStop(1, rgba(p.color, 0.8));
           
           ctx!.strokeStyle = tailGrad;
           ctx!.lineWidth = Math.max(2, p.size * U * 0.8);
           ctx!.lineCap = "round";
           ctx!.stroke();
        }

        // Draw packet head
        ctx!.fillStyle = p.color;
        ctx!.beginPath(); ctx!.arc(pt.x, pt.y, p.size * U, 0, Math.PI*2); ctx!.fill();
      });
    }

    // Static fallback
    if (prefersReducedMotion) {
      resize();
      if (W > 0 && H > 0) {
        ctx!.clearRect(0, 0, W, H);
        drawFloorGrid();
        drawDataConnections(0, 0);
        const sortedRacks = [...racks].sort((a, b) => a.gy - b.gy);
        sortedRacks.forEach(r => drawDetailedRack(r, 0));
      }
      return;
    }

    // --- Animate ---
    let lastTs = 0;
    function animate(ts: number) {
      if (!isVisible) return;
      if (W === 0 || H === 0) { animId = requestAnimationFrame(animate); return; }
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 1/60;
      lastTs = ts;
      const time = ts / 1000;

      ctx!.clearRect(0, 0, W, H);

      drawFloorGrid();
      drawDataConnections(time, dt);

      // Sort racks back-to-front (smaller gy is further back)
      const sortedRacks = [...racks].sort((a, b) => a.gy - b.gy);
      sortedRacks.forEach(r => drawDetailedRack(r, time));

      animId = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animId = requestAnimationFrame(animate);
          }
        } else {
          isVisible = false;
          if (animId) cancelAnimationFrame(animId);
        }
      });
    }, { threshold: 0 });
    observer.observe(wrapper);

    return () => {
      observer.disconnect();
      if (animId) cancelAnimationFrame(animId);
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
