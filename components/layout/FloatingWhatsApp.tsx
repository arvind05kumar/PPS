"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = encodeURIComponent(
    "Namaste, I saw your portfolio and want to enquire about wedding coverage."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Expandable Quick Options Popover */}
      {isOpen && (
        <div className="mb-3 w-72 bg-studio-card/95 backdrop-blur-md border border-studio-gold/40 rounded-2xl p-4 shadow-2xl shadow-black/60 text-studio-ivory animate-fade-in">
          <div className="flex items-center justify-between border-b border-studio-border pb-2.5 mb-3">
            <div>
              <p className="font-serif text-sm font-semibold text-studio-cream">
                Bhaskendra Photography
              </p>
              <p className="text-[10px] text-studio-gold">
                {t("Typically replies within minutes", "कुछ ही मिनटों में उत्तर")}
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-studio-ivoryMuted hover:text-studio-cream p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Primary WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${defaultMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-white">
                    {t("Chat on WhatsApp", "व्हाट्सएप पर बात करें")}
                  </span>
                  <span className="text-[10px] text-emerald-400">
                    {siteConfig.contact.primaryPhoneFormatted}
                  </span>
                </div>
              </div>
              <ChevronUp className="w-4 h-4 rotate-90 text-emerald-400" />
            </a>

            {/* Alternate Phone Call */}
            <a
              href={`tel:${siteConfig.contact.secondaryPhone}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-studio-surface hover:bg-studio-dark border border-studio-gold/25 text-studio-cream text-xs transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-studio-gold/20 flex items-center justify-center text-studio-gold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold block text-studio-ivory">
                    {t("Call Alternate Number", "अल्टरनेट नंबर पर कॉल")}
                  </span>
                  <span className="text-[10px] text-studio-ivoryMuted">
                    {siteConfig.contact.secondaryPhoneFormatted}
                  </span>
                </div>
              </div>
              <ChevronUp className="w-4 h-4 rotate-90 text-studio-gold" />
            </a>
          </div>

          <div className="mt-3 pt-2 text-center text-[10px] text-studio-ivoryMuted border-t border-studio-border/50">
            {t("Owner: Bhaskendra Prasad • Badi Khanjarpur", "प्रो. भास्केंद्र प्रसाद • बड़ी खंजरपुर")}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg shadow-emerald-900/40 hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
        aria-label="Contact on WhatsApp or Call"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />

        <span className="text-xs font-sans font-semibold tracking-wide hidden sm:inline">
          {t("Chat With Us", "संपर्क करें")}
        </span>
      </button>
    </div>
  );
}

