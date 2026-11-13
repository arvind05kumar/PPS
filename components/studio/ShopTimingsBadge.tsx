"use client";

import React, { useState, useEffect } from "react";
import { Clock, CheckCircle2, Moon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ShopTimingsBadge() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [currentTimeStr, setCurrentTimeStr] = useState("");

  useEffect(() => {
    const checkStatus = () => {
      // Calculate current IST time
      const now = new Date();
      // IST is UTC + 5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istDate = new Date(utcTime + 3600000 * 5.5);

      const hours = istDate.getHours();
      const minutes = istDate.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = siteConfig.timings.openHour * 60 + siteConfig.timings.openMinute;
      const closeMinutes = siteConfig.timings.closeHour * 60 + siteConfig.timings.closeMinute;

      const open = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;
      setIsOpen(open);

      // Format time string
      const formatted = istDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTimeStr(formatted);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-2 rounded-2xl bg-studio-card border border-studio-border shadow-md">
      {isOpen ? (
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-emerald-400">
            {t("Studio Open Now", "स्टूडियो अभी खुला है")}
          </span>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider text-rose-400">
            {t("Studio Closed for Today", "स्टूडियो अभी बंद है")}
          </span>
        </div>
      )}

      <span className="hidden sm:inline h-4 w-[1px] bg-studio-border" />

      <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-studio-ivoryMuted">
        <Clock className="w-3.5 h-3.5 text-studio-gold" />
        <span>{siteConfig.timings.displayString}</span>
      </div>
    </div>
  );
}
