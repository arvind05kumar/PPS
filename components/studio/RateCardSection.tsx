"use client";

import React from "react";
import { Tag, Sparkles, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function RateCardSection() {
  const { t } = useLanguage();

  return (
    <section id="rates" className="my-16 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 text-studio-gold">
          <Tag className="w-4 h-4" />
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
            {t("Studio Price List", "रेट कार्ड व शुल्क सूची")}
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-studio-cream font-light">
          {t("Clear, Honest & Transparent Pricing", "स्पष्ट, उचित व पारदर्शी दरें")}
        </h3>
        <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light">
          {t(
            "All rates are editable and standardized. Bulk quantities and custom frames available upon request.",
            "सभी मानक सेवाओं की दरें नीचे दी गई हैं। थोक कार्य व विशेष साइज के लिए छूट उपलब्ध है।"
          )}
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.rateCard.map((group, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-studio-card border border-studio-border p-6 space-y-4 shadow-xl"
          >
            <h4 className="font-serif text-xl text-studio-gold border-b border-studio-gold/20 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-studio-gold" />
              <span>{group.category}</span>
            </h4>

            <div className="divide-y divide-studio-border/60">
              {group.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="py-3 flex items-center justify-between text-xs sm:text-sm gap-4"
                >
                  <span className="text-studio-ivory font-light">
                    {item.service}
                  </span>
                  <div className="text-right flex-shrink-0">
                    <span className="font-sans font-bold text-studio-cream">
                      {item.rate}
                    </span>
                    <span className="text-[10px] text-studio-ivoryMuted block">
                      {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%2C%20I%20saw%20the%20rate%20card%20on%20your%20website%20and%20want%20to%20place%20an%20order.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-studio-gold hover:bg-studio-cream text-studio-dark font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-studio-dark" />
          <span>{t("Inquire on WhatsApp for Custom Size", "कस्टम साइज व ऑर्डर के लिए व्हाट्सएप करें")}</span>
        </a>
      </div>
    </section>
  );
}

