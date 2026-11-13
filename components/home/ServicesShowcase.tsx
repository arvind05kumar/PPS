"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof siteConfig.services)[0];
  index: number;
}) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 3D tilt physics values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        data-cursor="view"
        className="group relative h-full rounded-2xl bg-studio-card border border-studio-border hover:border-studio-gold/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
      >
        {/* Card Header & Image */}
        <div className="relative h-60 w-full overflow-hidden bg-studio-dark">
          <ImageProtectionWrapper className="w-full h-full">
            <Image
              src={service.image}
              alt={service.titleEn}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          </ImageProtectionWrapper>
          <div className="absolute inset-0 bg-gradient-to-t from-studio-card via-studio-card/30 to-transparent" />

          {/* Tag badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-sans font-semibold tracking-widest bg-studio-dark/85 text-studio-gold border border-studio-gold/30 backdrop-blur-md">
              {service.tag}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl text-studio-ivory group-hover:text-studio-cream transition-colors">
              {t(service.titleEn, service.titleHi)}
            </h3>
            <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light leading-relaxed">
              {t(service.shortDescEn, service.shortDescHi)}
            </p>
          </div>

          {/* Feature checklist */}
          <div className="pt-2 border-t border-studio-border/60">
            <ul className="space-y-1.5">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-studio-ivoryMuted/90">
                  <Check className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="pt-4 flex items-center justify-between">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.titleEn)}%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-studio-gold hover:text-studio-cream transition-colors"
            >
              <span>{t("Inquire Service", "पूछताछ करें")}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/studio"
              className="text-[11px] text-studio-ivoryMuted hover:text-studio-ivory transition-colors"
            >
              {t("Details →", "विवरण →")}
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesShowcase() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-studio-dark text-studio-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Artisanal Offerings", "हमारी मुख्य सेवाएं")}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-studio-ivory">
            {t("Crafted for Your Once-In-A-Lifetime Day", "जीवन के सबसे महत्वपूर्ण दिन के लिए तैयार")}
          </h2>
          <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "Every ceremony carries its own rhythm and sanctity. We specialize across six foundational photography and videography disciplines.",
              "हर रस्म का अपना महत्व और गरिमा है। हमारी विशेषज्ञ टीम इन छह प्रमुख विधाओं में निपुण है।"
            )}
          </p>
        </div>

        {/* 6 Services Grid (Hover Reveal & 3D Tilt) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

