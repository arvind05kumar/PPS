"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Award, ArrowRight, Camera } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

function CounterItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // ms
    const increment = Math.ceil(value / (duration / 25));
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 25);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-studio-cream">
        {count}
        <span className="text-studio-gold font-normal">{suffix}</span>
      </div>
      <p className="text-xs sm:text-sm font-sans text-studio-ivoryMuted tracking-wider uppercase mt-1">
        {label}
      </p>
    </div>
  );
}

export function AboutSnippet() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 sm:py-32 bg-[#121212] text-studio-ivory overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-studio-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-studio-blush/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Mask & Gold Border */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame offset */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border border-studio-gold/30 translate-x-3 translate-y-3 pointer-events-none" />

              {/* Main Image */}
              <ImageProtectionWrapper className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/80 aspect-[4/5] bg-studio-dark">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1000&q=85"
                  alt="Bhaskendra Prasad - Prasad Photo & Video Studio, Badi Khanjarpur"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-studio-dark/80 backdrop-blur-md border border-studio-gold/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-studio-gold/20 flex items-center justify-center text-studio-gold flex-shrink-0">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-studio-cream">
                        {siteConfig.owner}
                      </p>
                      <p className="text-[11px] text-studio-ivoryMuted">
                        Founder & Master Photographer
                      </p>
                    </div>
                  </div>
                </div>
              </ImageProtectionWrapper>
            </div>
          </motion.div>

          {/* Right Column: Story & Animated Counters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Category tag */}
            <div className="inline-flex items-center gap-2 text-studio-gold">
              <Award className="w-4 h-4" />
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
                {t("The Legacy of Prasad Studio", "प्रसाद स्टूडियो की गौरवशाली विरासत")}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory leading-tight">
              {t(
                "Capturing the Sacred Warmth of Every Generation",
                "हर पीढ़ी की अनमोल यादों को सहेजने का विश्वसनीय नाम"
              )}
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
              <p>
                {t(
                  `Rooted in the vibrant cultural heart of ${siteConfig.locationName}, ${siteConfig.studioName} (led by master artist ${siteConfig.owner}) has spent over a decade documenting life's most profound vows, tears, and celebrations. Under the brand Bhaskendra Photography, we bring a cinematic wedding approach to traditional Indian ceremonies.`,
                  `${siteConfig.locationName} के हृदय में स्थित, ${siteConfig.studioName} (संस्थापक ${siteConfig.owner}) पिछले एक दशक से अधिक समय से भारतीय शादियों और उत्सवों की सबसे पवित्र भावनाओं को कैमरे में कैद कर रहा है। 'भास्केंद्र फोटोग्राफी' के अंतर्गत हम आधुनिक सिनेमाई तकनीकों और पारंपरिक रस्मों का अद्भुत संगम प्रस्तुत करते हैं।`
                )}
              </p>
              <p>
                {t(
                  "We believe weddings are not scripted photo shoots—they are living tapestries of grandfatherly blessings, sisterly mischief, tearful farewells, and the divine energy of holy pheras. Our lens remains quiet, attentive, and artistically tuned to your real story.",
                  "हमारा मानना है कि शादी कोई कृत्रिम फोटो-सेशन नहीं, बल्कि आत्मीय भावनाओं का संगम है—बुजुर्गों का आशीर्वाद, बहनों की शरारत, विदाई की नमी और पवित्र फेरों की गरिमा। हम हर रस्म को उसकी असल खूबसूरती के साथ अमर बनाते हैं।"
                )}
              </p>
            </div>

            {/* Animated Counters Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-studio-border">
              {siteConfig.stats.map((stat, idx) => (
                <CounterItem
                  key={idx}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={t(stat.labelEn, stat.labelHi)}
                />
              ))}
            </div>

            {/* Link to Studio Details */}
            <div className="pt-2">
              <Link
                href="/studio"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-studio-gold hover:text-studio-cream transition-colors group"
              >
                <span>{t("Discover Our Complete Studio Shop & Services", "स्टूडियो व सभी सेवाओं की विस्तृत जानकारी")}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

