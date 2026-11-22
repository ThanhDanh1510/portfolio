"use client";

import { useEffect, useRef } from "react";

interface JetContrail {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dist: number;
  startTime: number;
  duration: number; // in ms
}

// Ease function for airplane motion (smooth launch, graceful glide)
function easeContrail(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function NeonCursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Click-to-Click memory
    let lastClickPos: { x: number; y: number } | null = null;
    const contrails: JetContrail[] = [];

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseDown = (e: MouseEvent) => {
      // Only handle main click
      if (e.button !== 0) return;

      const newX = e.clientX;
      const newY = e.clientY;

      if (lastClickPos) {
        const dist = Math.hypot(newX - lastClickPos.x, newY - lastClickPos.y);

        // If clicking a distinct position (> 12px), spawn a jet contrail tracer
        if (dist > 12) {
          contrails.push({
            id: Date.now() + Math.random(),
            x1: lastClickPos.x,
            y1: lastClickPos.y,
            x2: newX,
            y2: newY,
            dist,
            startTime: performance.now(),
            duration: 550, // 550ms: fast enough to feel responsive, clear enough to see travel
          });
        }
      }

      // Update previous click position
      lastClickPos = { x: newX, y: newY };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousedown", onMouseDown);

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Render airplane jet contrail tracers
      for (let i = contrails.length - 1; i >= 0; i--) {
        const c = contrails[i];
        const elapsed = time - c.startTime;
        const rawProgress = Math.min(1, elapsed / c.duration);

        if (rawProgress >= 1) {
          contrails.splice(i, 1);
          continue;
        }

        // Head and Tail progress along the trajectory
        // Head moves from 0 to 1; Tail follows closely behind, dissolving from origin
        const headT = easeContrail(Math.min(1, rawProgress * 1.35));
        const tailT = easeContrail(Math.max(0, rawProgress * 1.35 - 0.42));

        if (headT <= tailT) continue;

        // Current coordinates of Head and Tail
        const hx = c.x1 + (c.x2 - c.x1) * headT;
        const hy = c.y1 + (c.y2 - c.y1) * headT;
        const tx = c.x1 + (c.x2 - c.x1) * tailT;
        const ty = c.y1 + (c.y2 - c.y1) * tailT;

        const segDist = Math.hypot(hx - tx, hy - ty);
        if (segDist < 1) continue;

        ctx.save();
        ctx.lineCap = "round";

        // Create linear gradient from tail to head
        const grad = ctx.createLinearGradient(tx, ty, hx, hy);
        // Tail is transparent (fades away behind the airplane)
        grad.addColorStop(0, "rgba(167, 139, 250, 0)");
        grad.addColorStop(0.35, "rgba(167, 139, 250, 0.45)");
        grad.addColorStop(0.8, "rgba(6, 182, 212, 0.95)");
        grad.addColorStop(1, "rgba(255, 255, 255, 1)");

        // 1. Soft purple outer vapor trail
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = `rgba(167, 139, 250, 0.35)`;
        ctx.lineWidth = 7;
        ctx.shadowColor = "#a78bfa";
        ctx.shadowBlur = 18;
        ctx.stroke();

        // 2. Main neon cyan contrail body
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = "#06b6d4";
        ctx.shadowBlur = 10;
        ctx.stroke();

        // 3. Crisp white core near the head
        ctx.beginPath();
        const coreStartX = tx + (hx - tx) * 0.6;
        const coreStartY = ty + (hy - ty) * 0.6;
        ctx.moveTo(coreStartX, coreStartY);
        ctx.lineTo(hx, hy);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = 1.4;
        ctx.shadowBlur = 0;
        ctx.stroke();

        // 4. Glowing airplane jet head photon
        ctx.beginPath();
        ctx.arc(hx, hy, 3.2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#06b6d4";
        ctx.shadowBlur = 14;
        ctx.fill();

        // 5. Impact glow flash when reaching the destination
        if (rawProgress >= 0.72) {
          const impactAlpha = (1 - rawProgress) / 0.28;
          ctx.beginPath();
          ctx.arc(c.x2, c.y2, 5 * (1 - impactAlpha * 0.5), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, ${impactAlpha * 0.7})`;
          ctx.shadowColor = "#06b6d4";
          ctx.shadowBlur = 16;
          ctx.fill();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousedown", onMouseDown);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[99997] overflow-hidden"
    />
  );
}
