"use client";

import React from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "@/components/providers/AudioProvider";

export function SoundToggle() {
  const { isPlaying, toggleSound } = useAudio();

  return (
    <button
      onClick={toggleSound}
      type="button"
      title={isPlaying ? "Mute gentle instrumental music" : "Play gentle lovely instrumental music"}
      className="group relative flex items-center gap-2 px-3 py-1.5 rounded-full border border-studio-gold/30 bg-studio-card/80 hover:bg-studio-surface text-studio-cream hover:border-studio-gold transition-all duration-300 text-xs shadow-md flex-shrink-0"
      aria-label={isPlaying ? "Mute gentle instrumental music" : "Play gentle lovely instrumental music"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-studio-gold animate-pulse flex-shrink-0" />
          <div className="flex items-end gap-0.5 h-3">
            <span className="w-0.5 bg-studio-gold rounded-full animate-bounce h-2" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 bg-studio-gold rounded-full animate-bounce h-3" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 bg-studio-gold rounded-full animate-bounce h-1.5" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-[11px] font-sans tracking-wide hidden sm:inline text-studio-gold whitespace-nowrap">
            Instrumental
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-studio-ivoryMuted group-hover:text-studio-cream flex-shrink-0" />
          <span className="text-[11px] font-sans tracking-wide hidden sm:inline text-studio-ivoryMuted group-hover:text-studio-cream whitespace-nowrap">
            Music
          </span>
        </>
      )}
    </button>
  );
}
