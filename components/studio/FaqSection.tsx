"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="my-20 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 text-studio-gold">
          <HelpCircle className="w-4 h-4" />
          <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
            {t("Got Questions?", "अक्सर पूछे जाने वाले सवाल")}
          </span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl text-studio-cream font-light">
          {t("Frequently Asked Questions", "महत्वपूर्ण प्रश्न व उनके उत्तर")}
        </h3>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {siteConfig.faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-studio-card border border-studio-border overflow-hidden transition-all duration-300"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-studio-ivory hover:text-studio-gold transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded text-[9px] uppercase font-sans font-bold bg-studio-gold/15 text-studio-gold">
                    {faq.category}
                  </span>
                  <span className="font-serif text-base sm:text-lg">
                    {t(faq.questionEn, faq.questionHi)}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-studio-gold flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-studio-ivoryMuted font-light leading-relaxed border-t border-studio-border/50">
                      {t(faq.answerEn, faq.answerHi)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

