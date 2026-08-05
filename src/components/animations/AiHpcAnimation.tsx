"use client";

import { useEffect, useRef } from "react";

export default function AiHpcAnimation() {
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

    function resize() {
      const rect = wrapper!.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      dpr = window.devicePixelRatio || 1;
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(wrapper);
    }
    window.addEventListener("resize", resize);
    resize();

    // --- 3D Helper ---
    // Simple perspective projection
    const fov = 800;
    function project(x: number, y: number, z: number) {
      const scale = fov / (fov + z);
      return {
        x: W / 2 + x * scale,
        y: H / 2 + y * scale * 0.9, // 10% vertical squish
        s: scale
      };
    }

    // --- Generate HPC Base Racks ---
    const hpcRacks: any[] = [];
    const rackRows = 1;
    const racksPerRow = 4;
    const spacingX = 170; // Increased to spread servers wider
    
    for (let c = 0; c < racksPerRow; c++) {
      hpcRacks.push({
        x: (c - (racksPerRow-1)/2) * spacingX,
        yBase: 280, // Moved lower
        yTop: 60,   // Moved lower
        z: 250,
        active: 0
      });
    }

    // --- Generate AI Brain Nodes ---
    const aiNodes: any[] = [];
    const aiCount = 80;
    const brainRadius = 160; // Increased radius
    for (let i = 0; i < aiCount; i++) {
      // Random point in sphere
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * brainRadius;

      aiNodes.push({
        basex: r * Math.sin(phi) * Math.cos(theta) * 1.3, // Stretched horizontally
        basey: r * Math.sin(phi) * Math.sin(theta) - 180, // Lifted much higher
        basez: r * Math.cos(phi) + 300,
        x: 0, y: 0, z: 0,
        fire: Math.random()
      });
    }

    // --- Data Streams (Integration) ---
    const streams: any[] = [];
    for (let i = 0; i < 20; i++) {
      streams.push({
        hpcIdx: Math.floor(Math.random() * hpcRacks.length),
        aiIdx: Math.floor(Math.random() * aiNodes.length),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01
      });
    }

    function rgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    function draw(time: number) {
      ctx!.clearRect(0, 0, W, H);
      
      // Scale everything to fit nicely (Decreased denominator to scale UP)
      const globalScale = (Math.min(W, H) / 580) * 1.08;

      // 1. Update AI Brain rotation
      const angle = time * 0.2;
      const sinA = Math.sin(angle);
      const cosA = Math.cos(angle);
      
      aiNodes.forEach((n, i) => {
        // Rotate around Y axis
        n.x = n.basex * cosA - (n.basez - 300) * sinA;
        n.z = n.basex * sinA + (n.basez - 300) * cosA + 300;
        // Organic bobbing
        n.y = n.basey + Math.sin(time * 2 + i) * 10;
        // Firing logic
        n.fire -= 0.02;
        if (n.fire < 0 && Math.random() < 0.01) n.fire = 1;
      });

      // 2. Draw Data Streams (HPC -> AI)
      streams.forEach(s => {
        s.progress += s.speed;
        if (s.progress > 1) {
          s.progress = 0;
          s.hpcIdx = Math.floor(Math.random() * hpcRacks.length);
          s.aiIdx = Math.floor(Math.random() * aiNodes.length);
          hpcRacks[s.hpcIdx].active = 1; // Trigger flash on HPC
          aiNodes[s.aiIdx].fire = 1; // Trigger flash on AI
        }

        const rack = hpcRacks[s.hpcIdx];
        const an = aiNodes[s.aiIdx];
        
        // Stream starts from the TOP of the rack
        const p1 = project(rack.x * globalScale, rack.yTop * globalScale, rack.z);
        const p2 = project(an.x * globalScale, an.y * globalScale, an.z);
        
        // Draw faint track
        ctx!.beginPath();
        ctx!.moveTo(p1.x, p1.y);
        ctx!.lineTo(p2.x, p2.y);
        ctx!.strokeStyle = rgba(COL.medGray, 0.1);
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // Draw moving packet
        const currX = p1.x + (p2.x - p1.x) * s.progress;
        const currY = p1.y + (p2.y - p1.y) * s.progress;
        
        ctx!.beginPath();
        ctx!.arc(currX, currY, 2.5 * p1.s, 0, Math.PI * 2);
        ctx!.fillStyle = COL.baseGreen;
        ctx!.fill();
        
        // Packet glow
        ctx!.beginPath();
        ctx!.arc(currX, currY, 6 * p1.s, 0, Math.PI * 2);
        ctx!.fillStyle = rgba(COL.lightGreen, 0.3);
        ctx!.fill();
      });

      // 3. Draw HPC Racks & Floor Cables
      
      // Draw floor cables connecting racks
      ctx!.strokeStyle = rgba(COL.baseGreen, 0.2);
      ctx!.lineWidth = 2;
      ctx!.beginPath();
      for (let i = 0; i < hpcRacks.length - 1; i++) {
         const p1 = project(hpcRacks[i].x * globalScale, 280 * globalScale, 250);
         const p2 = project(hpcRacks[i+1].x * globalScale, 280 * globalScale, 250);
         ctx!.moveTo(p1.x, p1.y);
         ctx!.lineTo(p2.x, p2.y);
      }
      ctx!.stroke();

      const sortedHpc = [...hpcRacks].sort((a, b) => b.z - a.z);
      sortedHpc.forEach((rack, idx) => {
        rack.active -= 0.02;
        if (rack.active < 0) rack.active = 0;

        const w = 32; // Half-width of rack (wider)
        const d = 26; // Half-depth of rack (deeper)
        
        // 3D coordinates for the rack corners
        const fz = rack.z - d;
        const bz = rack.z + d;
        
        const f_tl = project((rack.x - w) * globalScale, rack.yTop * globalScale, fz);
        const f_tr = project((rack.x + w) * globalScale, rack.yTop * globalScale, fz);
        const f_bl = project((rack.x - w) * globalScale, rack.yBase * globalScale, fz);
        const f_br = project((rack.x + w) * globalScale, rack.yBase * globalScale, fz);
        
        const b_tl = project((rack.x - w) * globalScale, rack.yTop * globalScale, bz);
        const b_tr = project((rack.x + w) * globalScale, rack.yTop * globalScale, bz);
        
        // Floor shadow
        ctx!.fillStyle = rgba(COL.charcoal, 0.1);
        ctx!.beginPath();
        ctx!.ellipse(
           (f_bl.x + f_br.x)/2, 
           f_bl.y + 5, 
           Math.abs(f_br.x - f_bl.x)*0.8, 
           Math.abs(f_br.x - f_bl.x)*0.3, 
           0, 0, Math.PI*2
        );
        ctx!.fill();

        // Right/Left side face depending on perspective
        if (rack.x < 0) {
           // Draw right face
           const b_br = project((rack.x + w) * globalScale, rack.yBase * globalScale, bz);
           ctx!.fillStyle = rgba(COL.charcoal, 0.9);
           ctx!.beginPath();
           ctx!.moveTo(f_tr.x, f_tr.y); ctx!.lineTo(b_tr.x, b_tr.y);
           ctx!.lineTo(b_br.x, b_br.y); ctx!.lineTo(f_br.x, f_br.y);
           ctx!.fill();
        } else {
           // Draw left face
           const b_bl = project((rack.x - w) * globalScale, rack.yBase * globalScale, bz);
           ctx!.fillStyle = rgba(COL.charcoal, 0.9);
           ctx!.beginPath();
           ctx!.moveTo(f_tl.x, f_tl.y); ctx!.lineTo(b_tl.x, b_tl.y);
           ctx!.lineTo(b_bl.x, b_bl.y); ctx!.lineTo(f_bl.x, f_bl.y);
           ctx!.fill();
        }

        // Front Face (Base)
        ctx!.fillStyle = rgba(COL.charcoal, 0.95);
        ctx!.beginPath();
        ctx!.moveTo(f_tl.x, f_tl.y); ctx!.lineTo(f_tr.x, f_tr.y);
        ctx!.lineTo(f_br.x, f_br.y); ctx!.lineTo(f_bl.x, f_bl.y);
        ctx!.fill();
        
        // Inset Front Panel (Details)
        const inset = 3;
        ctx!.fillStyle = "#111111"; // Darker inset
        ctx!.beginPath();
        ctx!.moveTo(f_tl.x + inset, f_tl.y + inset*2); 
        ctx!.lineTo(f_tr.x - inset, f_tr.y + inset*2);
        ctx!.lineTo(f_br.x - inset, f_br.y - inset); 
        ctx!.lineTo(f_bl.x + inset, f_bl.y - inset);
        ctx!.fill();
        
        // Top Face
        ctx!.fillStyle = rgba(COL.medGray, 0.95);
        ctx!.beginPath();
        ctx!.moveTo(f_tl.x, f_tl.y); ctx!.lineTo(f_tr.x, f_tr.y);
        ctx!.lineTo(b_tr.x, b_tr.y); ctx!.lineTo(b_tl.x, b_tl.y);
        ctx!.fill();
        
        // Wireframe edges
        ctx!.strokeStyle = rgba(COL.lightGray, 0.2);
        ctx!.lineWidth = 1;
        ctx!.stroke();

        // High-detail Server Blades & LEDs
        const groups = 4;
        const bladesPerGroup = 4;
        
        for (let g = 0; g < groups; g++) {
           const groupStartY = f_tl.y + inset*3 + (f_bl.y - f_tl.y - inset*6) * (g / groups);
           const groupEndY = f_tl.y + inset*3 + (f_bl.y - f_tl.y - inset*6) * ((g + 0.8) / groups);
           
           for (let b = 0; b < bladesPerGroup; b++) {
              const ly = groupStartY + (groupEndY - groupStartY) * (b / (bladesPerGroup - 1));
              
              // Blade line
              ctx!.strokeStyle = rgba(COL.lightGray, 0.15);
              ctx!.beginPath();
              ctx!.moveTo(f_tl.x + inset + 2, ly);
              ctx!.lineTo(f_tr.x - inset - 2, ly);
              ctx!.stroke();

              // Blinking LEDs on the right side of the blades
              const isFiring = rack.active > 0 || Math.sin(time * 5 + idx * 2 + g + b) > 0.9;
              if (isFiring && b % 2 === 0) { // Only put LEDs on every other blade in the group to look dense but not crowded
                 const lx = f_tl.x + (f_tr.x - f_tl.x) * 0.75;
                 ctx!.fillStyle = COL.lightGreen;
                 ctx!.beginPath();
                 ctx!.arc(lx, ly, 1.2 * f_tl.s, 0, Math.PI*2);
                 ctx!.fill();
                 
                 // Small glow
                 ctx!.fillStyle = rgba(COL.lightGreen, 0.4);
                 ctx!.beginPath();
                 ctx!.arc(lx, ly, 3 * f_tl.s, 0, Math.PI*2);
                 ctx!.fill();
              }
           }
        }
      });

      // 4. Draw AI Brain
      const sortedAi = [...aiNodes].sort((a, b) => b.z - a.z);
      
      // Draw neural connections
      ctx!.strokeStyle = rgba(COL.medGray, 0.15);
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      for (let i = 0; i < sortedAi.length; i++) {
        for (let j = i + 1; j < sortedAi.length; j++) {
          const dx = sortedAi[i].x - sortedAi[j].x;
          const dy = sortedAi[i].y - sortedAi[j].y;
          const dz = sortedAi[i].z - sortedAi[j].z;
          const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (dist < 60) {
            const p1 = project(sortedAi[i].x * globalScale, sortedAi[i].y * globalScale, sortedAi[i].z);
            const p2 = project(sortedAi[j].x * globalScale, sortedAi[j].y * globalScale, sortedAi[j].z);
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx!.stroke();

      // Draw neurons
      sortedAi.forEach(an => {
        const p = project(an.x * globalScale, an.y * globalScale, an.z);
        
        const isFiring = an.fire > 0;
        
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, (isFiring ? 4 : 2.5) * p.s, 0, Math.PI * 2);
        ctx!.fillStyle = isFiring ? COL.lightGreen : COL.charcoal;
        ctx!.fill();
        
        if (isFiring) {
          ctx!.beginPath();
          ctx!.arc(p.x, p.y, 8 * p.s * an.fire, 0, Math.PI * 2);
          ctx!.fillStyle = rgba(COL.baseGreen, 0.3 * an.fire);
          ctx!.fill();
        }
      });
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
