"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X, Film, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WeddingFilms() {
  const { t } = useLanguage();
  const [activeFilm, setActiveFilm] = useState<(typeof siteConfig.weddingFilms)[0] | null>(null);

  return (
    <section id="films" className="relative py-24 sm:py-32 bg-studio-dark text-studio-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Film className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Cinematography", "सिनेमैटिक फ़िल्में")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("Moving Poetry in 4K Cinema", "भावुक व भव्य सिनेमाई अनुभव")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "Immerse yourself in our signature wedding trailers and cinematic teasers. Soundtracked by licensed emotional music and master-graded in royal tones.",
              "रॉयल कलर टोन और दिल छू लेने वाले संगीत के साथ तैयार की गई हमारी यादगार वेडिंग फ़िल्में।"
            )}
          </p>
        </div>

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.weddingFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              data-cursor="play"
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-studio-card border border-studio-border hover:border-studio-gold/60 transition-all duration-300 shadow-xl"
            >
              {/* Thumbnail with overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-studio-dark">
                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-studio-gold/90 text-studio-dark group-hover:scale-115 transition-transform shadow-lg shadow-studio-gold/30">
                    <span className="absolute inset-0 rounded-full bg-studio-gold animate-ping opacity-30" />
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 text-[10px] font-sans font-medium text-studio-ivory flex items-center gap-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-studio-gold" />
                  <span>{film.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-studio-dark/80 text-[10px] font-sans font-semibold text-studio-gold uppercase tracking-wider border border-studio-gold/25">
                  {film.category}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 space-y-1">
                <h3 className="font-serif text-lg text-studio-ivory group-hover:text-studio-cream transition-colors">
                  {film.title}
                </h3>
                <p className="text-xs text-studio-gold font-sans tracking-wide">
                  {film.couple}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeFilm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-4xl bg-studio-dark border border-studio-gold/30 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-studio-border">
              <div>
                <h3 className="font-serif text-lg text-studio-cream">
                  {activeFilm.title}
                </h3>
                <p className="text-xs text-studio-gold">
                  {activeFilm.couple} • {activeFilm.category}
                </p>
              </div>
              <button
                onClick={() => setActiveFilm(null)}
                className="p-2 rounded-full bg-studio-surface text-studio-ivory hover:text-studio-gold transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive 16:9 Iframe */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeFilm.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeFilm.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

