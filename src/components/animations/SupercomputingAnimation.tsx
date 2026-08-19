"use client";

import { useEffect, useRef } from "react";

export default function SupercomputingAnimation() {
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

    // Brand colors from DenseFusion palette
    const COL = {
      darkGreen: "#0E7441",
      baseGreen: "#1C9659",
      medGreen: "#2FB873",
      lightGreen: "#46DA90",
      olDarkGreen: "#458853",
      olBaseGreen: "#6DC27F",
      olMedGreen: "#84DF97",
      olLightGreen: "#9CFCB0",
      deepBlack: "#0B0B0B",
      charcoal: "#1B1B1B",
      medGray: "#484848",
      lightGray: "#AAAAAA",
      white: "#FDFFFF",
    };

    let W = 0, H = 0, dpr = 1, animId: number;
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
    }

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(resize);
      ro.observe(wrapper);
    }
    window.addEventListener("resize", resize);
    resize();

    // --- Data parameters ---
    const lineDataPoints = 60;
    
    // Bar chart bases
    const barData = [0.65, 0.82, 0.45, 0.91, 0.73, 0.58];
    const barLabels = ["CPU", "GPU", "MEM", "NET", "I/O", "EFF"];

    // Gauge data
    const gauges = [
      { label: "UTILIZATION", target: 0.88, color: COL.lightGreen },
      { label: "THROUGHPUT", target: 0.82, color: COL.medGreen },
      { label: "ROI INDEX", target: 0.75, color: COL.olBaseGreen },
    ];

    // KPI counters
    const kpis = [
      { label: "PETAFLOPS", value: 2.4, suffix: " PF", decimals: 2 },
      { label: "LATENCY", value: 0.8, suffix: " μs", decimals: 2 },
      { label: "COST SAVED", value: 340, suffix: "K", decimals: 0, prefix: "$" },
    ];

    // Floating data dots (background ambiance)
    interface DataDot {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }
    const dots: DataDot[] = [];
    function initDots() {
      dots.length = 0;
      for (let i = 0; i < 40; i++) {
        dots.push({
          x: Math.random() * 2000, y: Math.random() * 1000, // scaled to screen later
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
          size: 1 + Math.random() * 2,
          alpha: 0.05 + Math.random() * 0.15,
          color: [COL.medGreen, COL.lightGreen, COL.olMedGreen][Math.floor(Math.random() * 3)],
        });
      }
    }
    initDots();

    // --- Dynamic Value Generators (Continuous) ---
    function getLineValue(xNormalized: number, time: number) {
      const t = xNormalized - time * 0.15;
      const base = 0.5;
      const wave1 = Math.sin(t * 12) * 0.2;
      const wave2 = Math.sin(t * 28) * 0.1;
      const wave3 = Math.cos(t * 5) * 0.15;
      return Math.min(0.9, Math.max(0.1, base + wave1 + wave2 + wave3));
    }

    function getBarValue(i: number, time: number) {
      const base = barData[i];
      const fluctuation = Math.sin(time * (1.2 + i * 0.4) + i * 2.5) * 0.12;
      const noise = Math.cos(time * 4 + i) * 0.03;
      return Math.min(0.95, Math.max(0.1, base + fluctuation + noise));
    }

    function getGaugeValue(i: number, time: number) {
      const base = gauges[i].target;
      const jitter = Math.sin(time * 2.5 + i * 4) * 0.05 + Math.sin(time * 1.2 + i) * 0.03;
      return Math.min(0.99, Math.max(0.1, base + jitter));
    }

    function getKPIValue(i: number, time: number) {
      const base = kpis[i].value;
      const fluctuation = Math.sin(time * 0.8 + i * 3) * (base * 0.03); 
      return base + fluctuation;
    }

    // --- Rendering Helpers ---
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

    // Draws a styled panel background and returns the inner content bounding box
    function drawPanel(x: number, y: number, w: number, h: number, title: string) {
      const r = Math.min(12, W * 0.01);
      
      // Dark gradient background (Charcoal to Deep Black)
      const grad = ctx!.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, rgba(COL.charcoal, 0.75));
      grad.addColorStop(1, rgba(COL.deepBlack, 0.85));
      
      ctx!.fillStyle = grad;
      roundRect(x, y, w, h, r);
      ctx!.fill();
      
      // Subtle border
      ctx!.strokeStyle = rgba(COL.medGray, 0.25);
      ctx!.lineWidth = 1;
      ctx!.stroke();

      // Title
      const padX = w * 0.06;
      const padY = h * 0.08;
      const titleFs = Math.max(9, Math.min(14, W * 0.012));
      
      ctx!.font = `600 ${titleFs}px Inter, system-ui, sans-serif`;
      ctx!.fillStyle = rgba(COL.white, 0.7);
      ctx!.textAlign = "left";
      ctx!.fillText(title, x + padX, y + padY + titleFs);

      // Return inner bounding box for content drawing
      const titleOffset = titleFs * 2;
      return {
        ix: x + padX,
        iy: y + padY + titleOffset,
        iw: w - padX * 2,
        ih: h - padY * 2 - titleOffset
      };
    }

    function drawSubtleGrid() {
      ctx!.strokeStyle = rgba(COL.medGray, 0.04);
      ctx!.lineWidth = 0.5;
      const step = Math.max(20, W / 40);
      for (let x = 0; x < W; x += step) {
        ctx!.beginPath(); ctx!.moveTo(x, 0); ctx!.lineTo(x, H); ctx!.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx!.beginPath(); ctx!.moveTo(0, y); ctx!.lineTo(W, y); ctx!.stroke();
      }
    }

    function drawDataDots(time: number, dt: number) {
      for (const d of dots) {
        // Map to current screen size
        let sx = (d.x / 2000) * W;
        let sy = (d.y / 1000) * H;
        
        d.x += d.vx * dt * 60;
        d.y += d.vy * dt * 60;
        
        if (d.x < 0 || d.x > 2000) d.vx *= -1;
        if (d.y < 0 || d.y > 1000) d.vy *= -1;
        
        const flicker = 0.7 + Math.sin(time * 2 + d.x * 0.01) * 0.3;
        ctx!.fillStyle = rgba(d.color, d.alpha * flicker);
        ctx!.beginPath();
        ctx!.arc(sx, sy, d.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    // --- Main Panel Draw Functions ---
    function drawLineChart(time: number, x: number, y: number, w: number, h: number) {
      const box = drawPanel(x, y, w, h, "LIVE PERFORMANCE TELEMETRY");
      
      // Axes
      ctx!.strokeStyle = rgba(COL.medGray, 0.15);
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.moveTo(box.ix, box.iy); 
      ctx!.lineTo(box.ix, box.iy + box.ih); 
      ctx!.lineTo(box.ix + box.iw, box.iy + box.ih);
      ctx!.stroke();

      // Guide lines
      for (let i = 0; i < 4; i++) {
        const gy = box.iy + box.ih * (1 - (i + 1) / 4);
        ctx!.strokeStyle = rgba(COL.medGray, 0.08);
        ctx!.beginPath(); ctx!.moveTo(box.ix, gy); ctx!.lineTo(box.ix + box.iw, gy); ctx!.stroke();
      }

      // Generate points
      const points = [];
      for (let i = 0; i < lineDataPoints; i++) {
        const xNorm = i / (lineDataPoints - 1);
        const yVal = getLineValue(xNorm, time);
        points.push({ x: box.ix + xNorm * box.iw, y: box.iy + box.ih * (1 - yVal) });
      }

      // Area fill
      ctx!.beginPath();
      ctx!.moveTo(box.ix, box.iy + box.ih);
      for (let i = 0; i < points.length; i++) {
        ctx!.lineTo(points[i].x, points[i].y);
      }
      ctx!.lineTo(box.ix + box.iw, box.iy + box.ih);
      ctx!.closePath();
      
      const areaGrad = ctx!.createLinearGradient(0, box.iy, 0, box.iy + box.ih);
      areaGrad.addColorStop(0, rgba(COL.baseGreen, 0.2));
      areaGrad.addColorStop(1, rgba(COL.baseGreen, 0.01));
      ctx!.fillStyle = areaGrad;
      ctx!.fill();

      // Line stroke
      ctx!.beginPath();
      for (let i = 0; i < points.length; i++) {
        i === 0 ? ctx!.moveTo(points[i].x, points[i].y) : ctx!.lineTo(points[i].x, points[i].y);
      }
      const lineGrad = ctx!.createLinearGradient(box.ix, 0, box.ix + box.iw, 0);
      lineGrad.addColorStop(0, rgba(COL.baseGreen, 0.4));
      lineGrad.addColorStop(0.5, rgba(COL.medGreen, 0.9));
      lineGrad.addColorStop(1, rgba(COL.lightGreen, 1));
      ctx!.strokeStyle = lineGrad;
      ctx!.lineWidth = Math.max(2, W * 0.002);
      ctx!.lineJoin = "round";
      ctx!.stroke();

      // Leading endpoint dot
      const lastPt = points[points.length - 1];
      ctx!.fillStyle = rgba(COL.lightGreen, 0.25 + Math.sin(time * 6) * 0.15);
      ctx!.beginPath(); ctx!.arc(lastPt.x, lastPt.y, W * 0.012, 0, Math.PI * 2); ctx!.fill();
      ctx!.fillStyle = rgba(COL.lightGreen, 1);
      ctx!.beginPath(); ctx!.arc(lastPt.x, lastPt.y, Math.max(3, W * 0.003), 0, Math.PI * 2); ctx!.fill();
    }

    function drawBarChart(time: number, x: number, y: number, w: number, h: number) {
      const box = drawPanel(x, y, w, h, "REAL-TIME WORKLOAD ANALYSIS");
      const barCount = barData.length;
      
      // Calculate spacing
      const gap = box.iw * 0.05;
      const totalGaps = gap * (barCount - 1);
      const barW = (box.iw - totalGaps) / barCount;

      for (let i = 0; i < barCount; i++) {
        const bx = box.ix + i * (barW + gap);
        const val = getBarValue(i, time);
        
        // Reserve space for labels
        const labelSpace = box.ih * 0.2;
        const maxBarH = box.ih - labelSpace;
        const bh = maxBarH * val;
        const by = box.iy + maxBarH - bh;

        // Bar gradient
        const grad = ctx!.createLinearGradient(0, by, 0, box.iy + maxBarH);
        if (val > 0.8) {
          grad.addColorStop(0, rgba(COL.lightGreen, 0.85));
          grad.addColorStop(1, rgba(COL.medGreen, 0.4));
        } else if (val > 0.6) {
          grad.addColorStop(0, rgba(COL.medGreen, 0.75));
          grad.addColorStop(1, rgba(COL.baseGreen, 0.35));
        } else {
          grad.addColorStop(0, rgba(COL.olBaseGreen, 0.65));
          grad.addColorStop(1, rgba(COL.olDarkGreen, 0.3));
        }
        ctx!.fillStyle = grad;
        roundRect(bx, by, barW, bh, Math.min(4, barW * 0.15));
        ctx!.fill();

        // X-axis Label
        const labelFs = Math.max(8, Math.min(11, W * 0.008));
        ctx!.font = `500 ${labelFs}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.lightGray, 0.6);
        ctx!.textAlign = "center";
        ctx!.fillText(barLabels[i], bx + barW / 2, box.iy + maxBarH + labelFs * 1.5);

        // Value Label (on top of bar)
        const valFs = Math.max(8, Math.min(10, W * 0.007));
        ctx!.font = `600 ${valFs}px monospace`;
        ctx!.fillStyle = rgba(COL.olMedGreen, 0.85);
        ctx!.fillText(Math.round(val * 100) + "%", bx + barW / 2, by - valFs * 0.5);
      }
    }

    function drawGauges(time: number, x: number, y: number, w: number, h: number) {
      const box = drawPanel(x, y, w, h, "SYSTEM HEALTH GAUGES");
      
      const gaugeCount = gauges.length;
      const gaugeW = box.iw / gaugeCount;
      const r = Math.min(gaugeW * 0.35, box.ih * 0.35); // Radius constrained by width or height

      for (let i = 0; i < gaugeCount; i++) {
        const g = gauges[i];
        const cx = box.ix + gaugeW * (i + 0.5);
        const cy = box.iy + box.ih * 0.4;
        const value = getGaugeValue(i, time);

        // Arc track
        const startAngle = Math.PI * 0.75;
        const endAngle = Math.PI * 2.25;
        ctx!.strokeStyle = rgba(COL.medGray, 0.15);
        ctx!.lineWidth = Math.max(4, r * 0.15);
        ctx!.lineCap = "round";
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, startAngle, endAngle);
        ctx!.stroke();

        // Arc value
        const valueAngle = startAngle + (endAngle - startAngle) * value;
        const arcGrad = ctx!.createLinearGradient(cx - r, cy, cx + r, cy);
        arcGrad.addColorStop(0, rgba(COL.darkGreen, 0.8));
        arcGrad.addColorStop(1, rgba(g.color, 1));
        ctx!.strokeStyle = arcGrad;
        ctx!.lineWidth = Math.max(4, r * 0.15);
        ctx!.beginPath();
        ctx!.arc(cx, cy, r, startAngle, valueAngle);
        ctx!.stroke();
        ctx!.lineCap = "butt";

        // Tip glow
        const tipX = cx + Math.cos(valueAngle) * r;
        const tipY = cy + Math.sin(valueAngle) * r;
        ctx!.fillStyle = rgba(g.color, 0.5 + Math.sin(time * 5 + i) * 0.2);
        ctx!.beginPath(); ctx!.arc(tipX, tipY, r * 0.15, 0, Math.PI * 2); ctx!.fill();

        // Value text inside gauge
        const valFs = Math.max(12, Math.min(22, r * 0.55));
        ctx!.font = `700 ${valFs}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.white, 0.9);
        ctx!.textAlign = "center";
        ctx!.fillText(Math.round(value * 100) + "%", cx, cy + valFs * 0.2);

        // Label under gauge
        const lblFs = Math.max(8, Math.min(11, r * 0.25));
        ctx!.font = `500 ${lblFs}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.lightGray, 0.6);
        ctx!.fillText(g.label, cx, cy + r + lblFs * 2);
      }
    }

    function drawKPIs(time: number, x: number, y: number, w: number, h: number) {
      const box = drawPanel(x, y, w, h, "OPTIMIZATION METRICS");
      
      const kpiCount = kpis.length;
      const kpiW = box.iw / kpiCount;

      for (let i = 0; i < kpiCount; i++) {
        const k = kpis[i];
        const cx = box.ix + kpiW * (i + 0.5);
        const cy = box.iy + box.ih * 0.35;
        const val = getKPIValue(i, time);

        // Main Value
        const valFs = Math.max(16, Math.min(30, box.iw * 0.08));
        ctx!.font = `700 ${valFs}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.lightGreen, 0.95);
        ctx!.textAlign = "center";
        
        let displayVal = k.decimals > 0 ? val.toFixed(k.decimals) : Math.round(val).toString();
        if(k.decimals === 0 && val >= 1000) displayVal = Math.round(val).toLocaleString();
        
        ctx!.fillText((k.prefix || "") + displayVal + k.suffix, cx, cy);

        // Label
        const lblFs = Math.max(8, Math.min(12, box.iw * 0.035));
        ctx!.font = `500 ${lblFs}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.lightGray, 0.6);
        ctx!.fillText(k.label, cx, cy + lblFs * 1.8);

        // Active trend arrow (flickering slightly to look live)
        const arrowY = cy + lblFs * 3.8;
        const arrowSize = Math.max(5, lblFs * 0.5);
        const arrowAlpha = 0.6 + Math.sin(time * 3 + i) * 0.25;
        
        ctx!.fillStyle = rgba(COL.medGreen, arrowAlpha);
        ctx!.beginPath();
        ctx!.moveTo(cx - arrowSize, arrowY);
        ctx!.lineTo(cx, arrowY - arrowSize);
        ctx!.lineTo(cx + arrowSize, arrowY);
        ctx!.closePath();
        ctx!.fill();
        
        ctx!.font = `500 ${lblFs * 0.9}px Inter, system-ui, sans-serif`;
        ctx!.fillStyle = rgba(COL.medGreen, arrowAlpha);
        ctx!.fillText("OPTIMIZING...", cx, arrowY + lblFs * 1.2);
      }
    }

    // Static fallback
    if (prefersReducedMotion) {
      resize();
      if (W > 0 && H > 0) {
        ctx!.clearRect(0, 0, W, H);
        drawSubtleGrid();
        
        // Layout Config
        const gap = W * 0.03;
        const leftX = W * 0.05, leftW = W * 0.48;
        const rightX = leftX + leftW + gap, rightW = W * 0.39;
        
        drawLineChart(10, leftX, H * 0.08, leftW, H * 0.45);
        drawBarChart(10, leftX, H * 0.56, leftW, H * 0.36);
        drawGauges(10, rightX, H * 0.08, rightW, H * 0.40);
        drawKPIs(10, rightX, H * 0.51, rightW, H * 0.41);
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

      drawSubtleGrid();
      drawDataDots(time, dt);
      
      // Layout Configuration (proportional to canvas)
      const isMobile = W < 768;
      
      if (isMobile) {
        // Single column layout on mobile to prevent text overlap
        const cx = W * 0.05;
        const cw = W * 0.9;
        const ch = H * 0.42;
        const gapY = H * 0.06;
        
        drawLineChart(time, cx, H * 0.05, cw, ch);
        drawGauges(time, cx, H * 0.05 + ch + gapY, cw, ch);
      } else {
        // Desktop 2x2 layout
        const gap = W * 0.03;
        const leftX = W * 0.05;
        const leftW = W * 0.48;
        
        const rightX = leftX + leftW + gap;
        const rightW = W * 0.39; // Leaves W * 0.05 padding on right

        drawLineChart(time, leftX, H * 0.08, leftW, H * 0.45);
        drawBarChart(time, leftX, H * 0.56, leftW, H * 0.36);
        
        drawGauges(time, rightX, H * 0.08, rightW, H * 0.40);
        drawKPIs(time, rightX, H * 0.51, rightW, H * 0.41);
      }

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
      className="relative w-full h-full"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
