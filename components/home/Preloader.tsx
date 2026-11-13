"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { useAudio } from "@/components/providers/AudioProvider";
import { Volume2 } from "lucide-react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const { playMusic } = useAudio();

  useEffect(() => {
    // Check if preloader has already been shown in this tab session
    const hasLoaded = sessionStorage.getItem("pps_preloaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("pps_preloaded", "true");
      // Attempt to play music when intro completes
      playMusic();
    }, 3800);

    return () => clearTimeout(timer);
  }, [playMusic]);

  const handleDismiss = () => {
    setLoading(false);
    sessionStorage.setItem("pps_preloaded", "true");
    playMusic();
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: [0.77, 0, 0.175, 1] }}
          onClick={handleDismiss}
          className="fixed inset-0 z-50 flex items-center justify-center bg-studio-dark overflow-hidden cursor-pointer select-none"
        >
          {/* Top Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#0a0a0a] border-b border-studio-gold/20 z-10"
          />

          {/* Bottom Curtain */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a0a0a] border-t border-studio-gold/20 z-10"
          />

          {/* Center Aperture & Logo Animation Container */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Camera Shutter / Aperture Blades SVG animation */}
            <motion.div
              initial={{ scale: 0.75, rotate: -60, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="relative w-44 h-44 mb-4 flex items-center justify-center"
            >
              {/* Outer Golden Ring with subtle pulse */}
              <div className="absolute inset-0 rounded-full border border-studio-gold/30 animate-pulse" />
              <div className="absolute inset-2 rounded-full border border-studio-gold/15" />

              {/* Shutter Blades SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full text-studio-gold/40">
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "50px 50px" }}
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    stroke="#c9a24b"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    fill="none"
                    opacity="0.4"
                  />
                </motion.g>
              </svg>

              {/* Logo in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo variant="preloader" showLink={false} />
              </div>
            </motion.div>

            {/* Subtle Progress Loading Bar */}
            <div className="w-52 h-[2px] bg-studio-gold/20 rounded-full overflow-hidden mt-6 relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 3.2, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-studio-goldLight via-studio-gold to-studio-cream"
              />
            </div>

            {/* Action Buttons & Hints */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={handleDismiss}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-studio-gold/30 bg-studio-dark/60 text-studio-cream hover:bg-studio-gold/10 hover:border-studio-gold transition-all text-[11px] font-sans tracking-[0.2em] uppercase"
              >
                <Volume2 className="w-3.5 h-3.5 text-studio-gold" />
                <span>Enter Experience ♫</span>
              </button>

              <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-studio-ivoryMuted/60">
                Click anywhere or scroll to explore
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
