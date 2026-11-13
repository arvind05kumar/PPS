"use client";

import React from "react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-studio-gold/30 bg-studio-card/80 hover:bg-studio-surface text-studio-cream hover:border-studio-gold transition-all duration-300 text-xs shadow-md"
      title={language === "en" ? "हिंदी में देखें" : "Switch to English"}
      aria-label="Toggle language"
    >
      <Languages className="w-3.5 h-3.5 text-studio-gold" />
      <span className="font-medium tracking-wide">
        {language === "en" ? "हिन्दी" : "English"}
      </span>
    </button>
  );
}

