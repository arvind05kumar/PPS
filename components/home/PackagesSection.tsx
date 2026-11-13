"use client";

import React, { useState } from "react";
import { Check, Sparkles, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function PackagesSection() {
  const { t } = useLanguage();
  const [pricingMode, setPricingMode] = useState<"standard" | "custom">("standard");

  return (
    <section id="packages" className="relative py-24 sm:py-32 bg-studio-dark text-studio-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Wedding Investment", "वेडिंग पैकेज व शुल्क")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("Transparent & Royal Packages", "पारदर्शी व सुसज्जित वेडिंग पैकेज")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "Every celebration is unique. Choose from our signature curated wedding packages or request a customized itinerary tailored to your rituals.",
              "अपनी रस्मों और दिन के अनुसार उपयुक्त पैकेज चुनें या अपनी पसंद के अनुसार कस्टमाइज़ करवाएं।"
            )}
          </p>

          {/* Pricing display toggle (Starting From vs Contact for Custom Quote) */}
          <div className="inline-flex items-center p-1 rounded-full bg-studio-card border border-studio-border mt-4">
            <button
              onClick={() => setPricingMode("standard")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-sans tracking-wider transition-all duration-300",
                pricingMode === "standard"
                  ? "bg-studio-gold text-studio-dark font-semibold shadow-md"
                  : "text-studio-ivoryMuted hover:text-studio-cream"
              )}
            >
              {t("Starting Rates", "शुरुआती दरें")}
            </button>
            <button
              onClick={() => setPricingMode("custom")}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-sans tracking-wider transition-all duration-300",
                pricingMode === "custom"
                  ? "bg-studio-gold text-studio-dark font-semibold shadow-md"
                  : "text-studio-ivoryMuted hover:text-studio-cream"
              )}
            >
              {t("Custom Quotation", "कस्टम कोटेशन")}
            </button>
          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.packages.map((pkg) => {
            const isHighlight = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={cn(
                  "relative rounded-2xl flex flex-col justify-between transition-all duration-300 overflow-hidden",
                  isHighlight
                    ? "bg-gradient-to-b from-[#1c1913] to-[#121212] border-2 border-studio-gold shadow-2xl shadow-studio-gold/15 lg:-translate-y-3"
                    : "bg-studio-card border border-studio-border hover:border-studio-gold/40 shadow-xl"
                )}
              >
                {/* Popular highlight ribbon */}
                {isHighlight && (
                  <div className="bg-gradient-to-r from-studio-gold to-studio-cream text-studio-dark text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-center py-1.5 shadow-md">
                    {t("Most Popular Choice", "सर्वाधिक लोकप्रिय")}
                  </div>
                )}

                <div className="p-8 space-y-6 flex-1">
                  {/* Package Title & Tagline */}
                  <div className="space-y-2 border-b border-studio-border pb-6">
                    <h3 className="font-serif text-2xl text-studio-cream">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-studio-ivoryMuted font-light leading-relaxed">
                      {pkg.tagline}
                    </p>
                    <div className="pt-3">
                      {pricingMode === "standard" && pkg.showStartingPrice ? (
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs text-studio-gold uppercase tracking-wider">
                            Starting from
                          </span>
                          <span className="font-serif text-3xl font-normal text-studio-ivory">
                            {pkg.startingPrice}
                          </span>
                        </div>
                      ) : (
                        <div className="font-serif text-2xl text-studio-gold italic">
                          {t("Contact for Quote", "कोटेशन के लिए संपर्क करें")}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-studio-gold font-semibold">
                      {t("Key Inclusions", "पैकेज में शामिल")}
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-studio-ivoryMuted leading-relaxed">
                          <Check className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables summary */}
                  <div className="pt-4 border-t border-studio-border/60">
                    <div className="flex items-center gap-1.5 text-[11px] text-studio-cream font-sans font-medium mb-2">
                      <Clock className="w-3.5 h-3.5 text-studio-gold" />
                      <span>{t("Deliverables & Timeline", "डिलीवरी विवरण")}:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md text-[10px] bg-studio-dark/80 text-studio-ivoryMuted border border-studio-border"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-8 pt-0">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%20Bhaskendra%20Photography%2C%20I%20am%20interested%20in%20the%20*${encodeURIComponent(pkg.name)}*%20package.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs uppercase font-sans font-bold tracking-widest transition-all duration-300",
                      isHighlight
                        ? "bg-studio-gold hover:bg-studio-cream text-studio-dark shadow-lg shadow-studio-gold/25"
                        : "bg-studio-surface hover:bg-studio-gold/20 text-studio-cream border border-studio-gold/40 hover:border-studio-gold"
                    )}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t("Inquire This Package", "इस पैकेज की जानकारी लें")}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on custom tailoring */}
        <div className="mt-12 text-center text-xs text-studio-ivoryMuted max-w-xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-studio-gold flex-shrink-0" />
          <span>
            {t(
              "Need custom coverage for destination weddings or specific family rituals? We tailor packages happily.",
              "डेस्टिनेशन वेडिंग अथवा किसी विशिष्ट रस्म के लिए अलग से पैकेज कस्टमाइज़ किया जा सकता है।"
            )}
          </span>
        </div>
      </div>
    </section>
  );
}

