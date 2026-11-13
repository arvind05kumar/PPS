"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WeddingStoryScroll() {
  const { t } = useLanguage();
  const stages = siteConfig.weddingStoryStages;
  const [activeStage, setActiveStage] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the visual story section while scrolling through chapters
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${stages.length * 100}%`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const index = Math.min(
            stages.length - 1,
            Math.floor(self.progress * stages.length)
          );
          setActiveStage(index);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stages.length]);

  const currentStageData = stages[activeStage];

  return (
    <section
      id="wedding-story"
      ref={containerRef}
      className="relative min-h-screen bg-[#0b0b0b] text-studio-ivory flex items-center justify-center py-16 sm:py-24 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-studio-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <BookOpen className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("A Wedding Story Experience", "एक संपूर्ण वैवाहिक कथा")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("From Getting Ready to the Sacred Vidaai", "श्रृंगार से विदाई तक—हर रस्म की गाथा")}
          </h2>
        </div>

        {/* Story Stage Nav Pills (clickable for quick jump on desktop & mobile) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {stages.map((st, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-sans tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeStage === idx
                  ? "bg-studio-gold text-studio-dark font-bold shadow-[0_0_15px_rgba(201,162,75,0.4)]"
                  : "bg-studio-card/70 text-studio-ivoryMuted hover:text-studio-cream border border-studio-border"
              }`}
            >
              <span>{t(st.stage, st.stageHi)}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Story Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Pinned Story Image with Cross-fade transition */}
          <div className="lg:col-span-7 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none aspect-[16/11] rounded-2xl overflow-hidden border border-studio-gold/30 shadow-2xl bg-studio-dark">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStageData.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <ImageProtectionWrapper className="w-full h-full">
                    <Image
                      src={currentStageData.image}
                      alt={currentStageData.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover filter contrast-[1.08] brightness-95"
                      priority
                    />
                  </ImageProtectionWrapper>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Stage badge in corner */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-studio-dark/80 backdrop-blur-md border border-studio-gold/30 text-[11px] font-sans font-semibold text-studio-gold uppercase tracking-widest">
                    {t(currentStageData.stage, currentStageData.stageHi)}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Narrative Story Text */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStageData.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-studio-gold">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold">
                    {t(currentStageData.stage, currentStageData.stageHi)}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-studio-cream font-light leading-snug">
                  {t(currentStageData.title, currentStageData.titleHi)}
                </h3>

                <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
                  {t(currentStageData.description, currentStageData.descriptionHi)}
                </p>

                {/* Emotional Quote callout */}
                <div className="p-4 rounded-xl bg-studio-card/80 border-l-2 border-studio-gold text-xs sm:text-sm italic font-serif text-studio-cream/90 flex items-start gap-3 mt-4">
                  <Heart className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5 fill-studio-gold/20" />
                  <span>&ldquo;{currentStageData.quote}&rdquo;</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Next/Prev controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                disabled={activeStage === 0}
                onClick={() => setActiveStage((p) => Math.max(0, p - 1))}
                className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold border border-studio-border bg-studio-card text-studio-ivoryMuted hover:text-studio-cream disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                ← Previous Chapter
              </button>
              <button
                disabled={activeStage === stages.length - 1}
                onClick={() => setActiveStage((p) => Math.min(stages.length - 1, p + 1))}
                className="px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold border border-studio-gold/40 bg-studio-gold/10 text-studio-gold hover:bg-studio-gold hover:text-studio-dark disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                Next Chapter →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

