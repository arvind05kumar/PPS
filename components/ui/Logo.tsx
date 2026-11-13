"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "full" | "horizontal" | "mark" | "preloader";
  className?: string;
  showLink?: boolean;
}

export function Logo({ variant = "horizontal", className = "", showLink = true }: LogoProps) {
  const content = (
    <div
      className={cn(
        "group flex items-center transition-opacity duration-300 flex-shrink-0 whitespace-nowrap select-none",
        className
      )}
    >
      {variant === "mark" && (
        <img
          src="/images/logo-wings.png"
          alt="Bhaskendra Photography"
          className="h-9 w-auto object-contain hover:scale-105 transition-transform"
        />
      )}

      {variant === "horizontal" && (
        <div className="flex flex-col items-start justify-center flex-shrink-0">
          <span className="text-[9px] uppercase tracking-[0.25em] text-studio-cream font-medium leading-none mb-1 pl-1 opacity-90">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-10 sm:h-12 2xl:h-14 w-auto object-contain hover:brightness-110 transition-all duration-300 filter drop-shadow-[0_0_10px_rgba(201,162,75,0.25)]"
          />
        </div>
      )}

      {variant === "full" && (
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-studio-cream font-medium mb-1.5 opacity-90">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-20 sm:h-24 2xl:h-28 w-auto object-contain hover:brightness-110 transition-all duration-300 filter drop-shadow-[0_0_20px_rgba(201,162,75,0.35)]"
          />
          <span className="text-[11px] tracking-[0.2em] text-studio-ivoryMuted/80 font-sans mt-3 uppercase">
            Prasad Photo & Video Studio • Badi Khanjarpur
          </span>
        </div>
      )}

      {variant === "preloader" && (
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.45em] text-studio-cream font-medium mb-2.5 opacity-90">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-32 sm:h-40 w-auto object-contain filter drop-shadow-[0_0_35px_rgba(201,162,75,0.6)]"
          />
          <p className="text-xs tracking-[0.3em] text-studio-cream/90 uppercase mt-3 font-sans">
            Prasad Photo & Video Studio
          </p>
        </div>
      )}
    </div>
  );

  if (showLink) {
    return (
      <Link
        href="/"
        aria-label="Bhaskendra Photography - Home"
        className="inline-flex items-center flex-shrink-0"
      >
        {content}
      </Link>
    );
  }

  return content;
}
