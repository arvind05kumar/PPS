"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(0, { damping: 28, stiffness: 350 });
  const cursorY = useSpring(0, { damping: 28, stiffness: 350 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const mode = cursorTarget.getAttribute("data-cursor");
        if (mode === "view") {
          setCursorText("View");
          setIsHovered(true);
          return;
        }
        if (mode === "play") {
          setCursorText("Play");
          setIsHovered(true);
          return;
        }
        if (mode === "drag") {
          setCursorText("Drag");
          setIsHovered(true);
          return;
        }
      }

      const isInteractive = target.closest("a, button, input, select, textarea, [role='button']");
      if (isInteractive) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer expanding ring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-studio-gold flex items-center justify-center transition-colors backdrop-blur-[0.5px]"
        style={{
          left: cursorX,
          top: cursorY,
          width: isHovered ? (cursorText ? 64 : 44) : 24,
          height: isHovered ? (cursorText ? 64 : 44) : 24,
          backgroundColor: isHovered
            ? cursorText
              ? "rgba(201, 162, 75, 0.85)"
              : "rgba(201, 162, 75, 0.15)"
            : "transparent",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-semibold tracking-wider uppercase text-studio-dark select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center pinpoint */}
      {!cursorText && (
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-studio-gold"
          style={{
            left: cursorX,
            top: cursorY,
            width: isHovered ? 4 : 5,
            height: isHovered ? 4 : 5,
          }}
        />
      )}
    </div>
  );
}

