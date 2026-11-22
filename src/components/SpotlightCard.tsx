"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  className,
  contentClassName,
  spotlightColor = "rgba(6, 182, 212, 0.16)",
  spotlightSize = 380,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // High performance pointer tracking via CSS custom properties
  // Avoids triggering React re-renders on every mouse move coordinate
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--spotlight-x", `${x}px`);
    divRef.current.style.setProperty("--spotlight-y", `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/80 dark:border-white/10 dark:bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 shadow-xs dark:shadow-none hover:shadow-xl dark:hover:shadow-[0_0_36px_rgba(6,182,212,0.12)]",
        className
      )}
      {...props}
    >
      {/* Radial Spotlight Glow Behind Content */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${spotlightSize}px at var(--spotlight-x, 0px) var(--spotlight-y, 0px), ${spotlightColor}, transparent 75%)`,
        }}
      />

      {/* Dynamic Border Shimmer on Mouse Proximity (high-contrast for both Dark & Light modes) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-3xl transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${spotlightSize * 0.7}px at var(--spotlight-x, 0px) var(--spotlight-y, 0px), var(--spotlight-shimmer, rgba(6, 182, 212, 0.4)), transparent 60%)`,
          WebkitMaskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          maskImage:
            "linear-gradient(#000, #000) content-box, linear-gradient(#000, #000)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      {/* Content wrapper */}
      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-between",
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
