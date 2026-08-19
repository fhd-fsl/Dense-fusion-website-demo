"use client";

import { useEffect, useRef } from "react";

export default function FinanceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame: number;
    let isVisible = false;
    let offset = 0;
    
    // Generate random market data points
    const points: number[] = [];
    let currentY = 0.5;
    for (let i = 0; i < 50; i++) {
      points.push(currentY);
      currentY += (Math.random() - 0.45) * 0.15; // slightly upward trend
      if (currentY < 0.1) currentY = 0.1;
      if (currentY > 0.9) currentY = 0.9;
    }

    const render = () => {
      if (!isVisible) return;
      const width = canvas.width = canvas.offsetWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, width < 768 ? 1.5 : 2);
      const height = canvas.height = canvas.offsetHeight;
      
      ctx.clearRect(0, 0, width, height);
      offset += 0.5;
      if (offset >= width / 20) {
        offset = 0;
        points.shift();
        let nextY = points[points.length - 1] + (Math.random() - 0.45) * 0.15;
        if (nextY < 0.1) nextY = 0.1;
        if (nextY > 0.9) nextY = 0.9;
        points.push(nextY);
      }

      const pointWidth = width / 20;

      // Draw grid
      ctx.strokeStyle = "rgba(0, 109, 64, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < height; i += height / 5) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const px = i * pointWidth - offset;
        const py = height - points[i] * height;
        if (i === 0) ctx.moveTo(px, py);
        else {
          const prevPx = (i - 1) * pointWidth - offset;
          const prevPy = height - points[i-1] * height;
          // smooth curve
          const cx = (px + prevPx) / 2;
          ctx.bezierCurveTo(cx, prevPy, cx, py, px, py);
        }
      }
      
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "rgba(109, 194, 127, 0.4)");
      gradient.addColorStop(1, "rgba(0, 109, 64, 0)");

      // Fill area
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Stroke line
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const px = i * pointWidth - offset;
        const py = height - points[i] * height;
        if (i === 0) ctx.moveTo(px, py);
        else {
          const prevPx = (i - 1) * pointWidth - offset;
          const prevPy = height - points[i-1] * height;
          const cx = (px + prevPx) / 2;
          ctx.bezierCurveTo(cx, prevPy, cx, py, px, py);
        }
      }
      ctx.strokeStyle = "#6DC27F";
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Floating dots (data particles)
      for (let i = 0; i < points.length; i += 4) {
        const px = i * pointWidth - offset;
        const py = height - points[i] * height;
        if (px > 0 && px < width) {
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
          ctx.strokeStyle = "#006D40";
          ctx.stroke();
        }
      }

      frame = requestAnimationFrame(render);
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            render();
          }
        } else {
          isVisible = false;
          if (frame) cancelAnimationFrame(frame);
        }
      });
    }, { threshold: 0 });
    observer.observe(canvasRef.current || canvas);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
