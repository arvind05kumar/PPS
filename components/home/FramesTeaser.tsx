"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Frame, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FramesTeaser() {
  const { t } = useLanguage();

  const offerings = [
    {
      title: "Royal Italian Wooden Frames",
      titleHi: "रॉयल इटैलियन वुडन फ़्रेम",
      desc: "Rich antique gold & deep teak moulding handcrafted to preserve your wedding portraits.",
      descHi: "शाही नक्काशीदार और गोल्ड मोल्डिंग फ्रेम, जो हर कमरे को शाही लुक देते हैं।",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Luxury Velvet Photobooks",
      titleHi: "प्रीमियम वेलवेट वेडिंग एल्बम्स",
      desc: "Waterproof, non-tearable crystal pages bound in custom acrylic & plush velvet covers.",
      descHi: "वाटरप्रूफ, नॉन-टियरेबल शीट्स और एक्रेलिक ग्लास कवर के साथ लाइफटाइम वारंटी।",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=700&q=80",
    },
    {
      title: "Borderless High-Gloss Acrylics",
      titleHi: "हाई-ग्लॉस एक्रेलिक ग्लास आर्ट",
      desc: "Ultra-modern frameless clarity with deep luminous contrast and floating wall mounts.",
      descHi: "बिना बॉर्डर वाला आधुनिक फ्लोटिंग एक्रेलिक फ्रेम, जो तस्वीरों में जीवंत चमक भरता है।",
      image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section className="relative py-24 sm:py-28 bg-[#121212] text-studio-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-studio-gold">
              <Frame className="w-4 h-4" />
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
                {t("Framing & Albums Craft", "फ़्रेमिंग व एल्बम निर्माण")}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
              {t("Heirloom Wall Art & Velvet Books", "दीवारों की शान—शाही फ़्रेम्स व एल्बम")}
            </h2>
            <p className="text-sm text-studio-ivoryMuted font-light leading-relaxed">
              {t(
                "Do not let your precious wedding memories remain locked in digital screens. Turn them into grand Italian wall art and handcrafted albums right at our Badi Khanjarpur shop.",
                "अपनी शादी की यादों को सिर्फ फोन में कैद न रहने दें। हमारी शॉप पर उपलब्ध सैकड़ों इटैलियन मोल्डिंग्स और एक्रेलिक फ्रेम्स से घर को सजाएं।"
              )}
            </p>
          </div>

          <Link
            href="/studio#frames"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-studio-gold hover:bg-studio-cream text-studio-dark font-sans text-xs font-bold uppercase tracking-widest transition-all self-start md:self-auto shadow-lg hover:shadow-studio-gold/25"
          >
            <span>{t("Explore Framing Catalog", "फ़्रेमिंग कैटलॉग देखें")}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Teaser Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-studio-card border border-studio-border hover:border-studio-gold/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-studio-dark">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-studio-card via-black/30 to-transparent" />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl text-studio-cream group-hover:text-studio-gold transition-colors">
                  {t(item.title, item.titleHi)}
                </h3>
                <p className="text-xs text-studio-ivoryMuted font-light leading-relaxed">
                  {t(item.desc, item.descHi)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

