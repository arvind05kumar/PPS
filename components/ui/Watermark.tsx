"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface WatermarkProps {
  children: React.ReactNode;
  className?: string;
  showWatermark?: boolean;
}

export function ImageProtectionWrapper({
  children,
  className = "",
  showWatermark = true,
}: WatermarkProps) {
  const [toastVisible, setToastVisible] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2400);
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onDragStart={(e) => e.preventDefault()}
      className={cn("relative select-none group/protect", className)}
    >
      {children}

      {/* Subtle brand watermark mark in bottom-right */}
      {showWatermark && (
        <div className="pointer-events-none absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5 opacity-60 group-hover/protect:opacity-90 transition-opacity bg-studio-dark/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-studio-gold/20">
          <span className="text-[9px] tracking-widest text-studio-cream font-serif uppercase">
            Bhaskendra Photography
          </span>
        </div>
      )}

      {/* Right-click protection tooltip notification */}
      {toastVisible && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none bg-studio-dark/95 border border-studio-gold/60 text-studio-cream text-xs px-3.5 py-2 rounded-md shadow-2xl text-center backdrop-blur-md animate-fade-in">
          <p className="font-serif text-studio-gold">Artwork Protected</p>
          <p className="text-[10px] text-studio-ivoryMuted mt-0.5">
            © Bhaskendra Photography. All rights reserved.
          </p>
        </div>
      )}
    </div>
  );
}

