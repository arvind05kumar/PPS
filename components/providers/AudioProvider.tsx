"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggleSound: () => void;
  playMusic: () => Promise<boolean>;
  pauseMusic: () => void;
  hasUserInteracted: boolean;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleSound: () => {},
  playMusic: async () => false,
  pauseMusic: () => {},
  hasUserInteracted: false,
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(false);
  const userExplicitlyPausedRef = useRef(false);

  // Keep ref in sync with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Smooth fade-in
  const fadeIn = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    
    // Set low initial volume if supported
    try {
      audio.volume = 0.05;
    } catch {
      // iOS Safari ignores volume property, which is normal
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;

          // Ramp up volume gradually to 35% for gentle ambiance
          fadeIntervalRef.current = setInterval(() => {
            try {
              if (audio.volume < 0.35) {
                audio.volume = Math.min(0.35, Number((audio.volume + 0.05).toFixed(2)));
              } else {
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
              }
            } catch {
              if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
            }
          }, 100);
          return true;
        })
        .catch((err) => {
          // Autoplay blocked by browser policy until user gesture
          console.debug("Audio play awaiting direct user gesture:", err?.message || err);
          return false;
        });
    }
    return Promise.resolve(false);
  }, []);

  // Smooth fade-out
  const fadeOut = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    fadeIntervalRef.current = setInterval(() => {
      try {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, Number((audio.volume - 0.05).toFixed(2)));
        } else {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          audio.pause();
          setIsPlaying(false);
          isPlayingRef.current = false;
        }
      } catch {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        audio.pause();
        setIsPlaying(false);
        isPlayingRef.current = false;
      }
    }, 60);
  }, []);

  const playMusic = useCallback(async (): Promise<boolean> => {
    const audio = audioRef.current;
    if (!audio) return false;
    userExplicitlyPausedRef.current = false;
    setHasUserInteracted(true);
    return await fadeIn(audio);
  }, [fadeIn]);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    userExplicitlyPausedRef.current = true;
    fadeOut(audio);
  }, [fadeOut]);

  const toggleSound = useCallback(() => {
    setHasUserInteracted(true);
    if (isPlayingRef.current) {
      pauseMusic();
    } else {
      playMusic();
    }
  }, [pauseMusic, playMusic]);

  // Robust universal interaction & scroll listener
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Preload audio buffer immediately
    try {
      audio.load();
    } catch {
      // ignore
    }

    const events = [
      "scroll",
      "wheel",
      "touchstart",
      "touchend",
      "touchmove",
      "pointerdown",
      "pointerup",
      "mousedown",
      "mouseup",
      "click",
      "keydown",
    ];

    const tryAutoPlay = () => {
      // If user deliberately paused, do not restart
      if (userExplicitlyPausedRef.current) return;
      if (isPlayingRef.current) return;

      const p = audio.play();
      if (p !== undefined) {
        p.then(() => {
          setIsPlaying(true);
          isPlayingRef.current = true;
          setHasUserInteracted(true);

          // Fade in to gentle 35%
          try {
            audio.volume = 0.05;
          } catch {
            // ignore
          }

          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          fadeIntervalRef.current = setInterval(() => {
            try {
              if (audio.volume < 0.35) {
                audio.volume = Math.min(0.35, Number((audio.volume + 0.05).toFixed(2)));
              } else {
                if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
              }
            } catch {
              if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
            }
          }, 100);

          // Success: cleanup interaction listeners
          events.forEach((ev) => {
            window.removeEventListener(ev, tryAutoPlay, true);
            document.removeEventListener(ev, tryAutoPlay, true);
          });
        }).catch(() => {
          // Keep waiting for next gesture if passive scroll was blocked by Chrome policy
        });
      }
    };

    // Attach capturing listeners to both document and window for maximum responsiveness
    events.forEach((ev) => {
      window.addEventListener(ev, tryAutoPlay, { capture: true, passive: true });
      document.addEventListener(ev, tryAutoPlay, { capture: true, passive: true });
    });

    // Also try immediately (some browsers allow autoplay if user has visited before or interacted with tab)
    tryAutoPlay();

    return () => {
      events.forEach((ev) => {
        window.removeEventListener(ev, tryAutoPlay, true);
        document.removeEventListener(ev, tryAutoPlay, true);
      });
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    };
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        toggleSound,
        playMusic,
        pauseMusic,
        hasUserInteracted,
      }}
    >
      {/* 
        CRITICAL: Never use `display: none` (`hidden`) for background audio,
        as WebKit/Safari will deactivate decoder pipelines on hidden elements.
        Off-screen positioning with opacity 0 ensures 100% reliable decoding.
      */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        style={{
          position: "fixed",
          top: "-9999px",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/audio/wedding-instrumental.m4a" type="audio/mp4" />
        <source src="/audio/wedding-instrumental.ogg" type="audio/ogg" />
      </audio>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
