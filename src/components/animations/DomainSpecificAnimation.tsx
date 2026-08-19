"use client";

import React, { useEffect, useRef } from "react";

export default function DomainSpecificAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = false;
    let W = 0;
    let H = 0;
    
    // Scale unit based on canvas size
    let U = 100;

    // Colors
    const COL = {
      baseGreen: "#006D40",
      lightGreen: "#6DC27F",
      darkGreen: "#004728",
      charcoal: "#050505",
      lightGray: "#E5E5E5",
      medGray: "#A3A3A3",
    };

    function rgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    }

    // 3D Engine Parameters
    const fov = 800;
    function project(x: number, y: number, z: number) {
      const scale = fov / (fov + z + 4); // +4 moves the camera back
      return {
        x: W / 2 + x * U * scale,
        y: H * 0.5 + y * U * scale, // Re-centered since text was removed
        scale: scale
      };
    }

    // Rotation helper
    function rotateY(x: number, z: number, angle: number) {
      return {
        x: x * Math.cos(angle) - z * Math.sin(angle),
        z: x * Math.sin(angle) + z * Math.cos(angle)
      };
    }
    
    function rotateX(y: number, z: number, angle: number) {
      return {
        y: y * Math.cos(angle) - z * Math.sin(angle),
        z: y * Math.sin(angle) + z * Math.cos(angle)
      };
    }

    // --- Particles & Shapes ---
    const isMobile = (canvas.parentElement?.getBoundingClientRect()?.width || window.innerWidth) < 768;
    const NUM_PARTICLES = isMobile ? 200 : 400;
    const particles: any[] = [];
    
    // Initialize particles at random positions
    for(let i=0; i<NUM_PARTICLES; i++) {
       particles.push({
          x: (Math.random() - 0.5) * 4,
          y: (Math.random() - 0.5) * 4,
          z: (Math.random() - 0.5) * 4,
          tx: 0, ty: 0, tz: 0, // Target position
          colorPhase: Math.random() * Math.PI * 2
       });
    }

    // Shape Generators
    function setShapeDNA() {
      for(let i=0; i<NUM_PARTICLES; i++) {
        const p = particles[i];
        // 2 strands, 200 particles each
        const strand = i % 2;
        const index = Math.floor(i / 2);
        
        const t = (index / 200) * Math.PI * 6; // 3 full turns
        const radius = 1.0;
        
        const phase = strand === 0 ? 0 : Math.PI;
        
        p.tx = Math.cos(t + phase) * radius;
        p.tz = Math.sin(t + phase) * radius;
        p.ty = (index / 200) * 4 - 2; // from -2 to 2
      }
    }

    function setShapeSphere() {
      for(let i=0; i<NUM_PARTICLES; i++) {
        const p = particles[i];
        const phi = Math.acos(1 - 2 * (i + 0.5) / NUM_PARTICLES);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;
        const radius = 1.8;
        
        p.tx = Math.cos(theta) * Math.sin(phi) * radius;
        p.ty = Math.cos(phi) * radius;
        p.tz = Math.sin(theta) * Math.sin(phi) * radius;
      }
    }

    function setShapeWave() {
      for(let i=0; i<NUM_PARTICLES; i++) {
        const p = particles[i];
        const row = Math.floor(i / 20);
        const col = i % 20;
        
        p.tx = (col / 19) * 4 - 2;
        p.tz = (row / 19) * 4 - 2;
        // ty will be dynamically updated in the draw loop to make it wave!
        p.ty = 0; 
      }
    }

    // Shape State Machine
    const shapes = ["SPHERE", "WAVE", "DNA"];
    let currentShape = 0;
    let timeInShape = 0;

    function transitionShape() {
       currentShape = (currentShape + 1) % shapes.length;
       const shapeName = shapes[currentShape];
       
       if (shapeName === "DNA") setShapeDNA();
       else if (shapeName === "SPHERE") setShapeSphere();
       else if (shapeName === "WAVE") setShapeWave();
    }
    
    // Initial shape
    setShapeSphere();

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, W < 768 ? 1.5 : 2);
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        W = rect.width;
        H = rect.height;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx?.scale(dpr, dpr);
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        
        // Scale everything based on canvas width to remain responsive
        U = Math.min(W, H) / 5.5; // Slightly smaller to prevent edge overlap
      }
    }

    window.addEventListener("resize", resize);
    resize();

    let startTime = Date.now();
    let globalRot = 0;

    function draw() {
      if (!isVisible) return;
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const dt = 1/60; // Approximate dt

      // Solid background
      ctx!.fillStyle = "#ffffff";
      ctx!.fillRect(0, 0, W, H);
      
      // Global slow rotation
      globalRot += 0.005;

      // Handle Shape Transitions
      timeInShape += dt;
      if (timeInShape > 4.5) {
         timeInShape = 0;
         transitionShape();
      }

      // Update Wave Shape Dynamically if active
      if (shapes[currentShape] === "WAVE") {
         for(let i=0; i<NUM_PARTICLES; i++) {
            const p = particles[i];
            const waveY = Math.sin(p.tx * 1.5 + elapsed * 2) * 0.5 + Math.cos(p.tz * 1.5 + elapsed * 1.5) * 0.5;
            p.ty = waveY;
         }
      }

      // Draw Connection Lines (Optimization: only draw nearby points)
      // We will sort points by Z and draw them back-to-front
      const renderPoints = particles.map(p => {
         // Interpolate position towards target
         // A bit of spring physics makes the transition snappy and organic
         p.x += (p.tx - p.x) * 0.08;
         p.y += (p.ty - p.y) * 0.08;
         p.z += (p.tz - p.z) * 0.08;
         
         // Apply global rotation
         let r = rotateY(p.x, p.z, globalRot);
         // Slight tilt down
         let tilt = rotateX(p.y, r.z, -0.3);
         
         return {
            orig: p,
            rx: r.x,
            ry: tilt.y,
            rz: tilt.z
         };
      });
      
      // Add satellites if in SPHERE shape
      if (shapes[currentShape] === "SPHERE") {
          let satAlpha = 1;
          if (timeInShape < 1.0) satAlpha = timeInShape;
          else if (timeInShape > 3.5) satAlpha = (4.5 - timeInShape);
          
          if (satAlpha > 0) {
              const numSatellites = 3;
              for(let i=0; i<numSatellites; i++) {
                  const orbitSpeed = 1.5;
                  const orbitRadius = 2.4;
                  const angle = elapsed * orbitSpeed + (i * Math.PI * 2 / numSatellites);
                  
                  const sx = Math.cos(angle) * orbitRadius;
                  const sz = Math.sin(angle) * orbitRadius;
                  const sy = Math.sin(angle * 2) * 0.8; // Wobble
                  
                  let r = rotateY(sx, sz, globalRot);
                  let tilt = rotateX(sy, r.z, -0.3);
                  
                  renderPoints.push({
                      orig: { isSatellite: true, alpha: satAlpha, angle: angle, orbitRadius: orbitRadius },
                      rx: r.x,
                      ry: tilt.y,
                      rz: tilt.z
                  });
              }
          }
      }

      // Sort for painter's algorithm
      renderPoints.sort((a, b) => b.rz - a.rz);
      
      // Draw Connections (Web/Mesh effect)
      // Only draw lines if within a certain distance, and only a limited number to save perf
      ctx!.lineWidth = 0.5;
      for (let i = 0; i < renderPoints.length; i++) {
         const p1 = renderPoints[i];
         if (p1.orig.isSatellite) continue; // Don't draw mesh lines from satellites
         
         let connections = 0;
         for (let j = i + 1; j < renderPoints.length && connections < 3; j++) {
            const p2 = renderPoints[j];
            if (p2.orig.isSatellite) continue;
            
            const dx = p1.rx - p2.rx;
            const dy = p1.ry - p2.ry;
            const dz = p1.rz - p2.rz;
            const distSq = dx*dx + dy*dy + dz*dz;
            
            if (distSq < 0.3) {
               const proj1 = project(p1.rx, p1.ry, p1.rz);
               const proj2 = project(p2.rx, p2.ry, p2.rz);
               
               // Fade lines based on distance and depth
               const alpha = Math.max(0, 0.4 - distSq);
               ctx!.strokeStyle = rgba(COL.medGray, alpha);
               ctx!.beginPath();
               ctx!.moveTo(proj1.x, proj1.y);
               ctx!.lineTo(proj2.x, proj2.y);
               ctx!.stroke();
               connections++;
            }
         }
      }

      // Draw Particles and Satellites
      renderPoints.forEach(p => {
         const proj = project(p.rx, p.ry, p.rz);
         const depthAlpha = Math.max(0.1, Math.min(1, 1 - (p.rz / 4)));
         
         if (p.orig.isSatellite) {
             const satAlpha = p.orig.alpha * depthAlpha;
             ctx!.fillStyle = rgba(COL.baseGreen, satAlpha);
             ctx!.beginPath();
             ctx!.arc(proj.x, proj.y, 4 * proj.scale, 0, Math.PI * 2);
             ctx!.fill();
             
             ctx!.strokeStyle = rgba(COL.lightGreen, satAlpha * 0.4);
             ctx!.lineWidth = 1.5;
             ctx!.beginPath();
             for(let step = 0; step < 15; step++) {
                 const trailAngle = p.orig.angle - (step * 0.05);
                 const trx = Math.cos(trailAngle) * p.orig.orbitRadius;
                 const trz = Math.sin(trailAngle) * p.orig.orbitRadius;
                 const try_y = Math.sin(trailAngle * 2) * 0.8;
                 
                 let tr = rotateY(trx, trz, globalRot);
                 let ttilt = rotateX(try_y, tr.z, -0.3);
                 const tproj = project(tr.x, ttilt.y, ttilt.z);
                 
                 if (step === 0) ctx!.moveTo(tproj.x, tproj.y);
                 else ctx!.lineTo(tproj.x, tproj.y);
             }
             ctx!.stroke();
         } else {
             const size = 3 * proj.scale;
             const isGreen = Math.sin(elapsed * 2 + p.orig.colorPhase) > 0;
             ctx!.fillStyle = isGreen ? rgba(COL.lightGreen, depthAlpha) : rgba(COL.charcoal, depthAlpha);
             ctx!.beginPath();
             ctx!.arc(proj.x, proj.y, size, 0, Math.PI * 2);
             ctx!.fill();
         }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    }

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
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
