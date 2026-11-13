"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function Marquee() {
  const items = [
    "Weddings",
    "Pre-Wedding",
    "Matrimonial",
    "Cinematic Films",
    "Event Management",
    "Photo Albums",
    "Custom Frames",
    "Traditional Rituals",
    "All Types of Photo Work",
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-studio-gold/25 bg-studio-dark/95 py-4 select-none">
      {/* Decorative gradient masks for fading edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-studio-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-studio-dark to-transparent" />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {/* Render twice for continuous infinite seamless loop */}
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 sm:mx-10">
            <span className="font-serif text-sm sm:text-base tracking-[0.25em] uppercase text-studio-cream/90 hover:text-studio-gold transition-colors font-medium">
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-studio-gold ml-6 sm:ml-10 opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}

