"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Users,
  ShieldCheck,
  Camera,
  Sparkles,
  PackageCheck,
  Milestone,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  Users,
  ShieldCheck,
  Camera,
  Sparkles,
  PackageCheck,
};

export function ProcessTimeline() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-[#101010] text-studio-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Milestone className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Our Seamless Workflow", "हमारी कार्यप्रणाली")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("From First Greeting to Heirloom Delivery", "प्रथम संपर्क से एल्बम डिलीवरी तक का सफर")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "We have streamlined every stage of your photography experience so you can savor your wedding days with complete peace of mind.",
              "हमने हर चरण को पारदर्शी और सहज बनाया है ताकि आप बिना किसी चिंता के अपने विवाह के हर पल का आनंद ले सकें।"
            )}
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1.5px] bg-studio-gold/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {siteConfig.processSteps.map((step, idx) => {
              const IconComponent = iconMap[step.icon] || Sparkles;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-6 sm:p-8 rounded-2xl bg-studio-card border border-studio-border hover:border-studio-gold/50 transition-all duration-300 group shadow-lg"
                >
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-studio-gold/40 group-hover:text-studio-gold transition-colors">
                      {step.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-studio-surface border border-studio-gold/25 flex items-center justify-center text-studio-gold group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl text-studio-cream group-hover:text-studio-gold transition-colors mb-2">
                    {t(step.titleEn, step.titleHi)}
                  </h3>
                  <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light leading-relaxed">
                    {t(step.descEn, step.descHi)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

