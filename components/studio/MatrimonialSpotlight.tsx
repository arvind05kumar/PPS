"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, HeartHandshake, CheckCircle, Clock, Camera } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { ImageProtectionWrapper } from "@/components/ui/Watermark";

export function MatrimonialSpotlight() {
  const { t } = useLanguage();

  const benefits = [
    {
      title: "Gentle Posing Direction",
      titleHi: "सहज व गरिमापूर्ण पोजिंग",
      desc: "Our master photographer guides your posture, smile, and head tilt so you look relaxed and naturally confident.",
    },
    {
      title: "Flattering Studio Lighting",
      titleHi: "प्राकृतिक स्टूडियो लाइटिंग",
      desc: "Soft directional keylights that highlight facial features and skin glow without harsh flash or synthetic shadows.",
    },
    {
      title: "Dual Attire Guidance",
      titleHi: "पारंपरिक व फॉर्मल लुक",
      desc: "Shoot in two distinct looks—one traditional ethnic (Saree / Kurta) and one elegant modern formal.",
    },
    {
      title: "Same-Day High-Res Delivery",
      titleHi: "उसी दिन डिजिटल डिलीवरी",
      desc: "Receive web-ready portrait files for WhatsApp & matrimony portals, plus lab prints for physical biodatas.",
    },
  ];

  return (
    <section className="relative py-20 bg-[#141414] text-studio-ivory rounded-3xl border border-studio-gold/30 p-8 sm:p-14 my-16 overflow-hidden shadow-2xl">
      {/* Decorative ambient aura */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-studio-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Photos Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <ImageProtectionWrapper className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-studio-gold/25 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
              alt="Matrimonial Portrait Bride"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </ImageProtectionWrapper>
          <ImageProtectionWrapper className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-studio-gold/25 shadow-xl translate-y-4">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80"
              alt="Matrimonial Portrait Groom"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </ImageProtectionWrapper>
        </div>

        {/* Right Column: Explanatory Content */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <HeartHandshake className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Specialized Studio Discipline", "विशेषज्ञ सेवा")}
            </span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-studio-cream font-light leading-tight">
            {t(
              "The Art of Matrimonial Photography",
              "मैट्रिमोनियल पोर्ट्रेट्स—पहली नजर में विश्वास और गरिमा"
            )}
          </h3>

          <p className="text-sm text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "In Indian matrimonial alliances, the biodata portrait is the very first window into a bride or groom's personality and familial grace. A poorly lit mobile selfie or heavily filtered snapshot fails to do justice to your true self.",
              "विवाह के प्रस्तावों और बायोडाटा में तस्वीर का सबसे बड़ा महत्व होता है। एक अच्छी और गरिमापूर्ण तस्वीर रिश्ते के लिए पहला सकारात्मक प्रभाव डालती है।"
            )}
          </p>

          <p className="text-sm text-studio-ivoryMuted font-light leading-relaxed">
            {t(
              "At Prasad Photo & Video Studio, we craft portraits that exude authenticity, poise, and dignified warmth. We know how to put camera-shy individuals at complete ease within minutes.",
              "हमारे स्टूडियो में हम बहुत ही शालीनता और सहजता के साथ पोर्ट्रेट्स लेते हैं, जिससे आपकी वास्तविक सुंदरता और व्यक्तित्व उभर कर सामने आता है।"
            )}
          </p>

          {/* Key Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-studio-border">
            {benefits.map((b, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-studio-cream">
                  <CheckCircle className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                  <span>{t(b.title, b.titleHi)}</span>
                </div>
                <p className="text-[11px] text-studio-ivoryMuted/80 pl-5">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%2C%20I%20would%20like%20to%20book%20a%20Matrimonial%20Portrait%20session%20at%20your%20studio.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-studio-gold hover:bg-studio-cream text-studio-dark font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t("Book Matrimonial Shoot (₹499)", "मैट्रिमोनियल शूट बुक करें (₹499)")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

