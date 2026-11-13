"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

interface LightboxProps {
  isOpen: boolean;
  activeId: string | null;
  items: typeof siteConfig.galleryItems;
  onClose: () => void;
  onSelect: (id: string) => void;
}

export function LightboxModal({
  isOpen,
  activeId,
  items,
  onClose,
  onSelect,
}: LightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const currentIndex = items.findIndex((i) => i.id === activeId);
  const currentItem = items[currentIndex];

  const handleNext = useCallback(() => {
    if (currentIndex < items.length - 1) {
      onSelect(items[currentIndex + 1].id);
      setIsZoomed(false);
    } else {
      onSelect(items[0].id); // loop back
      setIsZoomed(false);
    }
  }, [currentIndex, items, onSelect]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelect(items[currentIndex - 1].id);
      setIsZoomed(false);
    } else {
      onSelect(items[items.length - 1].id); // loop to end
      setIsZoomed(false);
    }
  }, [currentIndex, items, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="text-xs text-studio-ivoryMuted">
            <span className="font-serif text-studio-cream text-base">
              {currentIndex + 1}
            </span>{" "}
            / {items.length}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2 rounded-full bg-studio-dark/60 text-studio-ivory hover:text-studio-gold border border-studio-gold/20"
              title="Toggle zoom"
              aria-label="Toggle zoom"
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-studio-dark/60 text-studio-ivory hover:text-studio-gold border border-studio-gold/20"
              title="Close (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 text-studio-ivory hover:text-studio-gold hover:bg-black/80 transition-all border border-studio-gold/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-black/50 text-studio-ivory hover:text-studio-gold hover:bg-black/80 transition-all border border-studio-gold/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Center Image Container */}
        <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto p-4 flex items-center justify-center">
          <ImageProtectionWrapper className="relative w-full h-full flex items-center justify-center">
            <div
              className={`relative w-full h-full max-h-[75vh] transition-transform duration-300 cursor-zoom-in ${
                isZoomed ? "scale-125 cursor-zoom-out" : "scale-100"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={currentItem.imageUrl}
                alt={currentItem.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
          </ImageProtectionWrapper>
        </div>

        {/* Bottom Captions & Info */}
        <div className="absolute bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black via-black/80 to-transparent pt-6 pb-6 px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-1">
            <h3 className="font-serif text-lg sm:text-xl text-studio-ivory">
              {currentItem.title}
            </h3>
            {currentItem.location && (
              <p className="text-xs text-studio-gold flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentItem.location}</span>
              </p>
            )}
            <p className="text-xs text-studio-ivoryMuted/80 font-light max-w-xl mx-auto">
              {currentItem.caption}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

