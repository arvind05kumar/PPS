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
          <span className="text-[8.5px] uppercase tracking-[0.25em] text-studio-cream font-medium leading-none mb-0.5 pl-0.5">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-8 sm:h-9 2xl:h-10 w-auto object-contain hover:brightness-110 transition-all duration-300"
          />
        </div>
      )}

      {variant === "full" && (
        <div className="flex flex-col items-center text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-studio-cream font-medium mb-1">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-16 sm:h-20 w-auto object-contain hover:brightness-110 transition-all duration-300 filter drop-shadow-[0_0_15px_rgba(201,162,75,0.2)]"
          />
          <span className="text-[10px] tracking-[0.18em] text-studio-ivoryMuted/70 font-sans mt-2">
            Prasad Photo & Video Studio • Badi Khanjarpur
          </span>
        </div>
      )}

      {variant === "preloader" && (
        <div className="flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.45em] text-studio-cream font-medium mb-2">
            Jai Guru
          </span>
          <img
            src="/images/logo-transparent.png"
            alt="Bhaskendra Photography"
            className="h-28 sm:h-32 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(201,162,75,0.5)]"
          />
          <p className="text-xs tracking-[0.25em] text-studio-cream/80 uppercase mt-2">
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
