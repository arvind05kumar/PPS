"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Eye, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { LightboxModal } from "@/components/home/LightboxModal";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";
import { cn } from "@/lib/utils";

export function FeaturedGallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeLightboxId, setActiveLightboxId] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? siteConfig.galleryItems
      : siteConfig.galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#101010] text-studio-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Camera className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Portfolio Gallery", "फ़ोटोग्राफ़ी पोर्टफोलियो")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("Moments Frozen in Sacred Radiance", "अनमोल लम्हों की सजीव झलकियां")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "Explore our curated collection of intimate rituals, joyous Baraats, delicate Haldi ceremonies, and timeless matrimonial portraits.",
              "विवाह, प्री-वेडिंग, हल्दी-मेहंदी और खूबसूरत पोर्ट्रेट्स का हमारा विशिष्ट संग्रह।"
            )}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-14">
          {siteConfig.portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                type="button"
                className={cn(
                  "relative px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-widest font-sans font-semibold transition-all duration-300",
                  isActive
                    ? "bg-studio-gold text-studio-dark shadow-[0_0_15px_rgba(201,162,75,0.4)]"
                    : "bg-studio-card/80 text-studio-ivoryMuted hover:text-studio-cream hover:bg-studio-surface border border-studio-border"
                )}
              >
                {t(cat.labelEn, cat.labelHi)}
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                data-cursor="view"
                onClick={() => setActiveLightboxId(item.id)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-studio-card border border-studio-border hover:border-studio-gold/60 transition-all duration-500 shadow-xl"
              >
                <ImageProtectionWrapper className="relative w-full aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover filter contrast-[1.05] brightness-95 group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-2 py-0.5 rounded text-[9px] uppercase font-sans tracking-widest bg-studio-gold text-studio-dark font-bold">
                        {item.category.replace("-", " ")}
                      </span>
                      {item.location && (
                        <span className="text-[10px] text-studio-cream flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-studio-gold" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl text-studio-ivory group-hover:text-studio-cream transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-studio-ivoryMuted font-light line-clamp-2 mt-1">
                      {item.caption}
                    </p>

                    {/* View Button hint */}
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-sans uppercase tracking-widest text-studio-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t("Click to Expand", "बड़ा करके देखें")}</span>
                    </div>
                  </div>
                </ImageProtectionWrapper>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={!!activeLightboxId}
        activeId={activeLightboxId}
        items={filteredItems}
        onClose={() => setActiveLightboxId(null)}
        onSelect={(id) => setActiveLightboxId(id)}
      />
    </section>
  );
}

