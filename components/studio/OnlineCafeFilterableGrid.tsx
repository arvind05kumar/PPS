"use client";

import React, { useState } from "react";
import { Search, Monitor, Clock, FileText, CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function OnlineCafeFilterableGrid() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t("All Services", "सभी सेवाएं") },
    { id: "photo", label: t("Passport & Visa Photos", "पासपोर्ट फ़ोटो") },
    { id: "print", label: t("Printout & Xerox", "प्रिंट व ज़ेरॉक्स") },
    { id: "forms", label: t("Online Exam & Job Forms", "ऑनलाइन फॉर्म") },
    { id: "utility", label: t("Scanning & Lamination", "स्कैनिंग व लेमिनेशन") },
  ];

  const filteredServices = siteConfig.onlineCafeServices.filter((service) => {
    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.nameHi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="cafe" className="space-y-8 my-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-studio-border pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-studio-gold">
            <Monitor className="w-4 h-4" />
            <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
              {t("Digital Utility Wing", "ऑनलाइन कैफ़े व सरकारी फॉर्म सुविधा")}
            </span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-studio-cream font-light">
            {t("Fast, Accurate Online Cafe & Document Hub", "त्वरित प्रिंटआउट, ज़ेरॉक्स व ऑनलाइन आवेदन")}
          </h3>
          <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light max-w-2xl">
            {t(
              "High-speed laser printing, 5-minute passport photos, document scanning, and government exam form filling right inside our shop.",
              "5 मिनट में पासपोर्ट साइज फोटो, ब्लैक/व्हाइट व कलर ज़ेरॉक्स, लेमिनेशन और सभी प्रकार के प्रतियोगी परीक्षाओं के ऑनलाइन फॉर्म भरने की विश्वसनीय सुविधा।"
            )}
          </p>
        </div>

        {/* WhatsApp Print Dispatch Pill */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%2C%20I%20am%20sending%20a%20document%20for%20printout%20%2F%20Xerox.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-sans tracking-wide transition-colors self-start md:self-auto shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t("Send Document via WhatsApp", "व्हाट्सएप पर भेजें प्रिंट के लिए")}</span>
        </a>
      </div>

      {/* Search Bar & Category Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-sans tracking-wider transition-all",
                activeCategory === cat.id
                  ? "bg-studio-gold text-studio-dark font-semibold shadow-md"
                  : "bg-studio-card text-studio-ivoryMuted hover:text-studio-cream border border-studio-border"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-studio-ivoryMuted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("Search service (e.g. passport, xerox)...", "सर्च करें (उदा. पासपोर्ट, ज़ेरॉक्स)...")}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-xs text-studio-ivory placeholder:text-studio-ivoryMuted/50"
          />
        </div>
      </div>

      {/* Filtered Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-studio-card/80 border border-studio-border hover:border-studio-gold/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-studio-gold font-sans font-semibold px-2 py-0.5 rounded bg-studio-gold/10">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-studio-ivoryMuted">
                    <Clock className="w-3 h-3 text-studio-gold" />
                    <span>{item.estimatedTime}</span>
                  </div>
                </div>

                <h4 className="font-serif text-base text-studio-cream group-hover:text-studio-gold transition-colors pt-1">
                  {t(item.name, item.nameHi)}
                </h4>
              </div>

              <div className="pt-3 border-t border-studio-border/60 flex items-center justify-between text-xs">
                <span className="text-studio-ivoryMuted">Starting rate:</span>
                <span className="font-sans font-semibold text-studio-gold text-sm">
                  {item.startingRate}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-studio-ivoryMuted text-xs">
            {t("No matching online cafe service found. Please contact us on WhatsApp.", "कोई सेवा नहीं मिली। कृपया व्हाट्सएप पर संपर्क करें।")}
          </div>
        )}
      </div>
    </div>
  );
}

