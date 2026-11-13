"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";

interface AudioContextType {
  isPlaying: boolean;
  toggleSound: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  toggleSound: () => {},
  playMusic: () => {},
  pauseMusic: () => {},
});

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasAutoPlayedRef = useRef(false);
  const userExplicitlyPausedRef = useRef(false);

  // Initialize audio instance
  useEffect(() => {
    if (typeof window === "undefined") return;

    const audio = new Audio();
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.35; // gentle, romantic volume

    const canPlayM4A = audio.canPlayType("audio/mp4");
    if (canPlayM4A) {
      audio.src = "/audio/wedding-instrumental.m4a";
    } else {
      audio.src = "/audio/wedding-instrumental.ogg";
    }

    audioRef.current = audio;

    return () => {
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const fadeIn = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    audio.volume = 0.05;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          fadeIntervalRef.current = setInterval(() => {
            if (audio.volume < 0.35) {
              audio.volume = Math.min(0.35, audio.volume + 0.05);
            } else {
              if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
            }
          }, 120);
        })
        .catch(() => {
          // Browser prevented autoplay before gesture
        });
    }
  }, []);

  const fadeOut = useCallback((audio: HTMLAudioElement) => {
    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume = Math.max(0, audio.volume - 0.05);
      } else {
        if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
        audio.pause();
        setIsPlaying(false);
      }
    }, 80);
  }, []);

  const playMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    fadeIn(audio);
  }, [fadeIn]);

  const pauseMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    userExplicitlyPausedRef.current = true;
    fadeOut(audio);
  }, [fadeOut]);

  const toggleSound = useCallback(() => {
    if (isPlaying) {
      pauseMusic();
    } else {
      userExplicitlyPausedRef.current = false;
      playMusic();
    }
  }, [isPlaying, pauseMusic, playMusic]);

  // Requirement: "website load hote ke sath jo bhi user scroll krega suru, vese hi music automatic on ho jana chahiye"
  useEffect(() => {
    const handleFirstScroll = () => {
      if (hasAutoPlayedRef.current || userExplicitlyPausedRef.current) return;

      const audio = audioRef.current;
      if (!audio) return;

      hasAutoPlayedRef.current = true;
      fadeIn(audio);

      // Clean up scroll listeners once triggered
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };

    window.addEventListener("scroll", handleFirstScroll, { passive: true });
    window.addEventListener("wheel", handleFirstScroll, { passive: true });
    window.addEventListener("touchmove", handleFirstScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleFirstScroll);
      window.removeEventListener("wheel", handleFirstScroll);
      window.removeEventListener("touchmove", handleFirstScroll);
    };
  }, [fadeIn]);

  return (
    <AudioContext.Provider value={{ isPlaying, toggleSound, playMusic, pauseMusic }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}

