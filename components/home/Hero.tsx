"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
  const { t, language } = useLanguage();
  const searchParams = useSearchParams();
  const [personalizedGreeting, setPersonalizedGreeting] = useState<string | null>(null);
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const forParam = searchParams.get("for");
    if (forParam) {
      // Decode name e.g. "Rahul-Priya" or "Rahul & Priya" -> "Rahul & Priya"
      const decoded = decodeURIComponent(forParam).replace(/-/g, " & ");
      setPersonalizedGreeting(`Hello ${decoded} 💍`);
    }
  }, [searchParams]);

  const currentHeadline =
    language === "hi"
      ? siteConfig.hero.headlines[headlineIndex].hi
      : siteConfig.hero.headlines[headlineIndex].en;

  // Letter by letter animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 35, rotateX: -45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 120,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-studio-dark pt-20 pb-16">
      {/* Background Video Layer with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={siteConfig.hero.videoPoster}
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-[1.1] transition-transform duration-1000"
        >
          <source src={siteConfig.hero.videoUrl} type="video/mp4" />
        </video>

        {/* Cinematic Film-Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Multi-layered Vignette and Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-dark via-transparent to-studio-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-dark/70 via-transparent to-studio-dark/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Personalized Guest / Client Banner (from ?for=Rahul-Priya) */}
        {personalizedGreeting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-studio-gold/20 border border-studio-gold/60 text-studio-cream backdrop-blur-md shadow-xl"
          >
            <Heart className="w-4 h-4 fill-studio-gold text-studio-gold animate-pulse" />
            <span className="font-serif text-base tracking-wide font-medium">
              {personalizedGreeting}
            </span>
          </motion.div>
        )}

        {/* Emblem Sub-heading & Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-studio-gold" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.4em] font-sans font-semibold text-studio-gold">
            {siteConfig.brandName} • {siteConfig.locationName}
          </span>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-studio-gold" />
        </motion.div>

        {/* Big Letter-by-Letter Animated Headline */}
        <motion.h1
          key={`${currentHeadline}-${headlineIndex}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-studio-ivory tracking-tight leading-[1.15] max-w-4xl min-h-[3.8em] sm:min-h-[2.6em] flex flex-wrap justify-center items-center"
        >
          {currentHeadline.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap mx-1.5 sm:mx-2.5">
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={letterVariants}
                  className={charIdx === 0 ? "text-studio-cream" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        {/* Headline selector dots for alternate headlines */}
        <div className="flex items-center gap-2 mt-2 mb-6">
          {siteConfig.hero.headlines.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeadlineIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                headlineIndex === idx ? "w-6 bg-studio-gold" : "w-1.5 bg-studio-gold/30 hover:bg-studio-gold/60"
              }`}
              aria-label={`Show headline ${idx + 1}`}
            />
          ))}
        </div>

        {/* Emotional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm sm:text-base md:text-lg text-studio-ivoryMuted max-w-2xl font-light leading-relaxed mb-10"
        >
          {t(siteConfig.hero.subtitles.en, siteConfig.hero.subtitles.hi)}
        </motion.p>

        {/* Two High-Impact CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* CTA 1: View Our Work */}
          <Link
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-studio-gold/70 bg-studio-card/60 backdrop-blur-md text-studio-ivory hover:text-studio-gold hover:border-studio-gold text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_25px_rgba(201,162,75,0.25)] hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-studio-gold" />
            <span>{t("View Our Work", "हमारा कार्य देखें")}</span>
          </Link>

          {/* CTA 2: Book Your Date (WhatsApp) */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%20Bhaskendra%20Photography%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20enquire%20about%20booking%20my%20wedding%20date.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-studio-goldLight via-studio-gold to-studio-cream text-studio-dark text-xs sm:text-sm font-bold tracking-widest uppercase shadow-xl hover:shadow-[0_0_30px_rgba(201,162,75,0.5)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MessageCircle className="w-4 h-4 fill-studio-dark" />
            <span>{t("Book Your Date", "तारीख बुक करें")}</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none text-studio-gold/70"
      >
        <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-medium">
          {t("Scroll", "स्क्रोल करें")}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

