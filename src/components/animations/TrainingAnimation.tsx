"use client";

import React, { useEffect, useRef } from "react";

export default function TrainingAnimation() {
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
      const scale = fov / (fov + z + 5); 
      return {
        x: W / 2 + x * U * scale,
        y: H * 0.5 + y * U * scale, 
        scale: scale
      };
    }

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

    // --- Build Skill Tree ---
    interface Node {
       id: number;
       x: number; y: number; z: number;
       parent: number;
       children: number[];
       energy: number;
    }
    
    const nodes: Node[] = [];
    let idCounter = 0;
    
    // Root node
    nodes.push({ id: 0, x: 0, y: 2.5, z: 0, parent: -1, children: [], energy: 1 });
    
    function createTree(depth: number, maxDepth: number, px: number, py: number, pz: number, parentId: number, baseAngle: number) {
        if (depth > maxDepth) return;
        
        let numChildren = 0;
        if (depth === 0) numChildren = 4;
        else if (depth === 1) numChildren = 3;
        else if (depth === 2) numChildren = 2;
        else if (depth === 3) numChildren = 2;
        
        let spread = 0;
        if (depth === 0) spread = 3.0;
        else if (depth === 1) spread = 1.8;
        else if (depth === 2) spread = 1.0;
        else if (depth >= 3) spread = 0.6;
        
        for(let i=0; i<numChildren; i++) {
            let angle = baseAngle;
            if (depth === 0) {
               angle = (i / numChildren) * Math.PI * 2;
            } else {
               const offset = (i - (numChildren-1)/2) * 1.2;
               angle += offset;
            }
            
            const nx = px + Math.cos(angle) * spread;
            const nz = pz + Math.sin(angle) * spread;
            const ny = py - 1.2;
            
            const nid = ++idCounter;
            nodes.push({ id: nid, x: nx, y: ny, z: nz, parent: parentId, children: [], energy: 0 });
            nodes[parentId].children.push(nid);
            
            createTree(depth + 1, maxDepth, nx, ny, nz, nid, angle);
        }
    }
    
    createTree(0, 4, 0, 3.0, 0, 0, 0);

    // --- Data Beams (No travelling dots, just filling wires) ---
    interface Beam {
       sourceId: number;
       targetId: number;
       progress: number;
       speed: number;
    }
    let beams: Beam[] = [];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        W = rect.width;
        H = rect.height;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx?.scale(dpr, dpr);
        canvas.style.width = `${W}px`;
        canvas.style.height = `${H}px`;
        
        U = Math.min(W, H) / 10.9; // Decreased size by an additional 15%
      }
    }

    window.addEventListener("resize", resize);
    resize();

    let globalRot = 0;

    // Helper to draw an isometric cube at a 2D screen coordinate
    function drawIsometricCube(cx: number, cy: number, size: number, energy: number) {
        const h = size * 0.866; // sqrt(3)/2
        
        // Base Colors
        let topColor = COL.lightGray;
        let leftColor = COL.medGray;
        let rightColor = COL.charcoal;

        // If energized, transition to greens
        if (energy > 0) {
            topColor = `rgba(109, 194, 127, ${0.5 + energy * 0.5})`; // lightGreen
            leftColor = `rgba(0, 109, 64, ${0.5 + energy * 0.5})`; // baseGreen
            rightColor = `rgba(0, 71, 40, ${0.5 + energy * 0.5})`; // darkGreen
        }

        // Top face
        ctx!.fillStyle = topColor;
        ctx!.beginPath();
        ctx!.moveTo(cx, cy - size);
        ctx!.lineTo(cx + h, cy - size/2);
        ctx!.lineTo(cx, cy);
        ctx!.lineTo(cx - h, cy - size/2);
        ctx!.closePath();
        ctx!.fill();

        // Left face
        ctx!.fillStyle = leftColor;
        ctx!.beginPath();
        ctx!.moveTo(cx - h, cy - size/2);
        ctx!.lineTo(cx, cy);
        ctx!.lineTo(cx, cy + size);
        ctx!.lineTo(cx - h, cy + size/2);
        ctx!.closePath();
        ctx!.fill();

        // Right face
        ctx!.fillStyle = rightColor;
        ctx!.beginPath();
        ctx!.moveTo(cx, cy);
        ctx!.lineTo(cx + h, cy - size/2);
        ctx!.lineTo(cx + h, cy + size/2);
        ctx!.lineTo(cx, cy + size);
        ctx!.closePath();
        ctx!.fill();
    }

    function draw() {
      if (!isVisible) return;
      // Solid background
      ctx!.fillStyle = "#ffffff";
      ctx!.fillRect(0, 0, W, H);
      
      globalRot += 0.002; // Slowed down rotation

      // Spawn beams at root
      if (Math.random() < 0.15) {
         const root = nodes[0];
         if (root.children.length > 0) {
            const targetId = root.children[Math.floor(Math.random() * root.children.length)];
            // Check if a beam already exists on this wire to avoid overlapping beams
            if (!beams.find(b => b.sourceId === 0 && b.targetId === targetId)) {
                beams.push({
                   sourceId: 0,
                   targetId: targetId,
                   progress: 0,
                   speed: 0.008 + Math.random() * 0.01 // Slowed down significantly
                });
            }
         }
      }

      // Update beams
      for (let i = beams.length - 1; i >= 0; i--) {
         const b = beams[i];
         b.progress += b.speed;
         
         if (b.progress >= 1.0) {
            // Hit node!
            const targetNode = nodes[b.targetId];
            targetNode.energy = 1.0; 
            
            // Branch out
            if (targetNode.children.length > 0) {
               targetNode.children.forEach(childId => {
                  if (Math.random() < 0.8) { 
                     beams.push({
                        sourceId: b.targetId,
                        targetId: childId,
                        progress: 0,
                        speed: b.speed * 0.9 
                     });
                  }
               });
            }
            beams.splice(i, 1);
         }
      }
      
      // Decay node energy
      nodes.forEach(n => {
         if (n.id !== 0) {
            n.energy = Math.max(0, n.energy - 0.02);
         }
      });

      // Prepare Render Points
      const renderNodes = nodes.map(n => {
         let r = rotateY(n.x, n.z, globalRot);
         let tilt = rotateX(n.y, r.z, -0.2);
         return {
            orig: n,
            rx: r.x,
            ry: tilt.y,
            rz: tilt.z
         };
      });
      
      // Sort nodes for Z-rendering
      const sortedNodes = [...renderNodes].sort((a, b) => b.rz - a.rz);
      
      // Draw Connections (Base wires and Beams)
      // Wires drawn underneath nodes
      renderNodes.forEach(n => {
         if (n.orig.parent !== -1) {
            const parent = renderNodes[n.orig.parent];
            const p1 = project(n.rx, n.ry, n.rz);
            const p2 = project(parent.rx, parent.ry, parent.rz);
            
            // 1. Base Wire (Inactive)
            ctx!.strokeStyle = rgba(COL.medGray, 0.2);
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(p1.x, p1.y);
            ctx!.lineTo(p2.x, p2.y);
            ctx!.stroke();
            
            // 2. Active Beam filling the wire
            const activeBeam = beams.find(b => b.sourceId === n.orig.parent && b.targetId === n.orig.id);
            if (activeBeam) {
                // Calculate current point along the line based on progress
                const curX = p2.x + (p1.x - p2.x) * activeBeam.progress;
                const curY = p2.y + (p1.y - p2.y) * activeBeam.progress;
                
                ctx!.strokeStyle = COL.lightGreen;
                ctx!.lineWidth = 2.5;
                ctx!.beginPath();
                ctx!.moveTo(p2.x, p2.y); // Start at parent
                ctx!.lineTo(curX, curY); // Draw up to progress
                ctx!.stroke();
                
                // Add a subtle glow to the beam
                ctx!.strokeStyle = rgba(COL.baseGreen, 0.4);
                ctx!.lineWidth = 6;
                ctx!.beginPath();
                ctx!.moveTo(p2.x, p2.y);
                ctx!.lineTo(curX, curY);
                ctx!.stroke();
            } else if (n.orig.energy > 0) {
               // After beam hits, wire stays partially lit based on node energy decay
               ctx!.strokeStyle = rgba(COL.lightGreen, n.orig.energy * 0.4);
               ctx!.lineWidth = 1.5;
               ctx!.beginPath();
               ctx!.moveTo(p1.x, p1.y);
               ctx!.lineTo(p2.x, p2.y);
               ctx!.stroke();
            }
         }
      });

      // Draw Nodes as Spheres
      sortedNodes.forEach(n => {
         const proj = project(n.rx, n.ry, n.rz);
         
         const baseSize = n.orig.id === 0 ? 8 : (n.orig.children.length > 0 ? 5 : 3.5);
         const size = (baseSize + n.orig.energy * 2) * proj.scale;
         
         // Draw the node as a solid circle (sphere)
         const energy = n.orig.energy;
         ctx!.fillStyle = energy > 0 ? rgba(COL.lightGreen, 0.5 + energy*0.5) : rgba(COL.charcoal, 0.8);
         ctx!.beginPath();
         ctx!.arc(proj.x, proj.y, size, 0, Math.PI * 2);
         ctx!.fill();
         
         // Draw glow underneath if high energy
         if (n.orig.energy > 0.5 || n.orig.id === 0) {
            ctx!.fillStyle = rgba(COL.lightGreen, 0.2 * n.orig.energy);
            ctx!.beginPath();
            ctx!.arc(proj.x, proj.y, size * 2.5, 0, Math.PI * 2);
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
