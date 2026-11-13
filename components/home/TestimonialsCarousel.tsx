"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function TestimonialsCarousel() {
  const { t } = useLanguage();
  const testimonials = siteConfig.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const item = testimonials[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 bg-studio-dark text-studio-ivory overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-studio-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Heart className="w-4 h-4 fill-studio-gold" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Love Letters", "दिलों से निकली बातें")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("Words from Our Beautiful Families", "हमारे आदरणीय परिवारों के विचार")}
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-studio-card/80 border border-studio-gold/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md"
        >
          {/* Large Quote Watermark icon */}
          <Quote className="absolute top-6 right-8 w-20 h-20 text-studio-gold/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              {/* Couple Image with Gold Ring */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 p-1 bg-gradient-to-tr from-studio-gold via-studio-cream to-studio-gold">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.coupleName}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Review Text & Rating */}
              <div className="flex-1 text-center md:text-left space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-studio-gold text-studio-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-studio-cream font-light leading-relaxed italic">
                  &ldquo;{t(item.quote, item.quoteHi)}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="pt-2">
                  <p className="font-serif text-base text-studio-ivory font-medium">
                    {item.coupleName}
                  </p>
                  <p className="text-xs text-studio-gold">
                    {item.weddingType} • {item.location} ({item.weddingDate})
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-studio-border">
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "w-8 bg-studio-gold" : "w-2 bg-studio-gold/30 hover:bg-studio-gold/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-studio-surface border border-studio-gold/30 text-studio-ivory hover:text-studio-gold hover:border-studio-gold transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2.5 rounded-full bg-studio-surface border border-studio-gold/30 text-studio-ivory hover:text-studio-gold hover:border-studio-gold transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

