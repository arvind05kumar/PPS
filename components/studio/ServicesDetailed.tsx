"use client";

import React from "react";
import {
  Camera,
  Video,
  Calendar,
  Frame,
  Printer,
  Monitor,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Video,
  Calendar,
  Frame,
  Printer,
  Monitor,
};

export function ServicesDetailed() {
  const { t } = useLanguage();

  return (
    <section id="services-detailed" className="my-16 space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 text-studio-gold">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
            {t("Comprehensive Capabilities", "विस्तृत सेवा विवरण")}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-cream">
          {t("Every Service Under One Roof", "एक ही छत के नीचे सभी फ़ोटो व डिजिटल सुविधाएं")}
        </h2>
        <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light max-w-xl mx-auto">
          {t(
            "Explore our full catalog categorized across photography, cinematography, events, framing, printing, and digital utility.",
            "फ़ोटोग्राफ़ी से लेकर फ़्रेमिंग, लैब प्रिंट्स और सरकारी ऑनलाइन फॉर्म तक हमारी सभी प्रमुख सेवाएं।"
          )}
        </p>
      </div>

      {/* Categories Detailed Cards */}
      <div className="space-y-12">
        {siteConfig.studioServicesCategories.map((category, catIdx) => {
          const IconComp = iconMap[category.iconName] || Sparkles;

          return (
            <div
              key={category.id}
              className="rounded-3xl bg-studio-card border border-studio-border p-6 sm:p-10 shadow-xl space-y-6"
            >
              {/* Category Top Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-studio-border pb-6">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-studio-gold/15 border border-studio-gold/30 flex items-center justify-center text-studio-gold flex-shrink-0">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-studio-gold font-semibold">
                      Category 0{catIdx + 1}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-studio-cream">
                      {t(category.titleEn, category.titleHi)}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light max-w-md">
                  {t(category.summaryEn, category.summaryHi)}
                </p>
              </div>

              {/* Items Inside Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 rounded-xl bg-studio-surface border border-studio-border/70 hover:border-studio-gold/40 transition-all flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-base text-studio-ivory group-hover:text-studio-gold transition-colors font-medium">
                          {t(item.nameEn, item.nameHi)}
                        </h4>
                        {item.popular && (
                          <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-studio-gold text-studio-dark font-sans font-bold">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-studio-ivoryMuted font-light leading-relaxed">
                        {item.descEn}
                      </p>
                    </div>

                    {item.startingPrice && (
                      <div className="pt-2 border-t border-studio-border/50 flex items-center justify-between text-xs">
                        <span className="text-studio-ivoryMuted/70 text-[10px] uppercase tracking-wider">
                          From:
                        </span>
                        <span className="font-sans font-semibold text-studio-gold">
                          {item.startingPrice}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

