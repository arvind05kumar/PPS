"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, SlidersHorizontal } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

export function BeforeAfterSlider() {
  const { t } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const info = siteConfig.beforeAfter;

  return (
    <section className="relative py-24 sm:py-32 bg-[#121212] text-studio-ivory overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <SlidersHorizontal className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Post-Production Mastery", "मास्टर कलर व रीटचिंग कला")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t(info.title, "रॉ कैमरा फ़ाइल से शाही फिनिश तक")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              info.subtitle,
              "कैमरे के अनप्रोसेस्ड रॉ डेटा से लेकर हाई-एंड स्किन रीटच और सिनेमैटिक कलर ग्रेडिंग। स्लाइडर को ड्रैग करके देखें अंतर।"
            )}
          </p>
        </div>

        {/* Draggable Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            data-cursor="drag"
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-studio-gold/30 cursor-ew-resize bg-black touch-none"
          >
            {/* After Image (Full width background layer) */}
            <ImageProtectionWrapper className="absolute inset-0 w-full h-full">
              <Image
                src={info.afterImage}
                alt="After Professional Color Grade"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            </ImageProtectionWrapper>

            {/* Before Image (Clipped layer using clipPath) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <ImageProtectionWrapper className="relative w-full h-full">
                <Image
                  src={info.beforeImage}
                  alt="Before RAW Unprocessed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover filter saturate-50 brightness-90"
                  priority
                />
              </ImageProtectionWrapper>
            </div>

            {/* Draggable Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical Gold Line */}
              <div className="w-[2.5px] h-full bg-gradient-to-b from-studio-gold via-studio-cream to-studio-gold shadow-[0_0_12px_rgba(201,162,75,0.9)]" />

              {/* Center Handle Knob */}
              <div className="absolute w-11 h-11 rounded-full bg-studio-dark border-2 border-studio-gold flex items-center justify-center shadow-xl text-studio-gold">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* Floating Labels */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-black/75 text-studio-ivoryMuted backdrop-blur-md border border-white/10">
                {info.rawLabel}
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full text-[10px] font-sans font-semibold uppercase tracking-wider bg-studio-dark/85 text-studio-gold backdrop-blur-md border border-studio-gold/40 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3 h-3 text-studio-gold" />
                {info.editedLabel}
              </span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-studio-ivoryMuted/70 font-sans tracking-wide">
            {t("Drag slider left and right to inspect", "स्लाइडर को दाएं-बाएं खिसका कर अंतर देखें")}
          </div>
        </div>
      </div>
    </section>
  );
}

