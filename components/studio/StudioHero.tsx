"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, MapPin, Sparkles, Phone, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ShopTimingsBadge } from "@/components/studio/ShopTimingsBadge";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

export function StudioHero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 bg-studio-dark text-studio-ivory overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-studio-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb / Category */}
        <div className="flex items-center gap-2 text-xs text-studio-gold uppercase tracking-widest font-semibold mb-4">
          <Link href="/" className="hover:text-studio-cream transition-colors">
            {t("Home", "होम")}
          </Link>
          <span>/</span>
          <span className="text-studio-cream">
            {t("Studio & Complete Services", "स्टूडियो व समस्त सेवाएं")}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Intro & Live Badge */}
          <div className="lg:col-span-7 space-y-6">
            <ShopTimingsBadge />

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-studio-ivory leading-tight break-words">
              {siteConfig.studioName}
            </h1>

            <p className="text-base sm:text-lg text-studio-gold font-serif italic">
              &ldquo;{siteConfig.tagline}&rdquo; — {siteConfig.taglineHindi}
            </p>

            <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed max-w-2xl">
              {t(
                `Founded and directed by ${siteConfig.owner}, our Badi Khanjarpur studio is a one-stop sanctuary for world-class wedding cinematography, portrait photography, custom Italian framing, fine-art printing, and everyday digital cyber-cafe utility services.`,
                `${siteConfig.owner} द्वारा संचालित यह प्रतिष्ठान ${siteConfig.locationName} में विश्वस्तरीय विवाह वीडियोग्राफी, भव्य फोटोग्राफी, इटैलियन फ्रेम निर्माण, फोटो लैब प्रिंटिंग और ऑनलाइन डिजिटल कैफे सेवाओं का संपूर्ण केंद्र है।`
              )}
            </p>

            {/* Quick stats / highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-studio-border">
              <div className="space-y-0.5">
                <span className="font-serif text-2xl text-studio-cream">10+ Years</span>
                <span className="text-[11px] text-studio-ivoryMuted block">Serving Bhagalpur</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-serif text-2xl text-studio-cream">500+</span>
                <span className="text-[11px] text-studio-ivoryMuted block">Weddings Captured</span>
              </div>
              <div className="space-y-0.5">
                <span className="font-serif text-2xl text-studio-cream">7 Days</span>
                <span className="text-[11px] text-studio-ivoryMuted block">Open 9AM – 9:30PM</span>
              </div>
            </div>

            {/* Quick jump anchor links */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="#services-detailed"
                className="px-3.5 py-1.5 rounded-full text-xs bg-studio-card border border-studio-border text-studio-ivoryMuted hover:text-studio-cream hover:border-studio-gold transition-colors"
              >
                All 6 Categories ↓
              </a>
              <a
                href="#cafe"
                className="px-3.5 py-1.5 rounded-full text-xs bg-studio-card border border-studio-border text-studio-ivoryMuted hover:text-studio-cream hover:border-studio-gold transition-colors"
              >
                Online Cafe Services ↓
              </a>
              <a
                href="#rates"
                className="px-3.5 py-1.5 rounded-full text-xs bg-studio-card border border-studio-border text-studio-ivoryMuted hover:text-studio-cream hover:border-studio-gold transition-colors"
              >
                Price List / Rate Card ↓
              </a>
              <a
                href="#contact-studio"
                className="px-3.5 py-1.5 rounded-full text-xs bg-studio-card border border-studio-border text-studio-ivoryMuted hover:text-studio-cream hover:border-studio-gold transition-colors"
              >
                Address & Map ↓
              </a>
            </div>
          </div>

          {/* Right Column: Studio Shop / Master Photographer Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-3xl border border-studio-gold/25 translate-x-3 translate-y-3 pointer-events-none" />

              <ImageProtectionWrapper className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-studio-dark shadow-2xl border border-studio-gold/30">
                <Image
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=85"
                  alt="Studio Gear & Team at Prasad Photo & Video Studio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover filter contrast-[1.08]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-studio-dark/85 backdrop-blur-md border border-studio-gold/30">
                  <p className="font-serif text-base text-studio-cream font-medium">
                    {siteConfig.owner}
                  </p>
                  <p className="text-xs text-studio-gold mt-0.5">
                    Proprietor & Master Wedding Cinematographer
                  </p>
                  <p className="text-[11px] text-studio-ivoryMuted mt-1">
                    Badi Khanjarpur, Bhagalpur
                  </p>
                </div>
              </ImageProtectionWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
