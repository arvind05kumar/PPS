"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Instagram, MapPin, Clock, ArrowUpRight, Heart } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-studio-dark text-studio-ivory border-t border-studio-border pt-16 pb-12 overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-24 bg-studio-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-studio-border">
          {/* Column 1: Brand & Owner */}
          <div className="space-y-4">
            <Logo variant="full" />
            <div className="pt-2 text-center md:text-left">
              <p className="text-xs text-studio-ivoryMuted leading-relaxed">
                {t(
                  "Crafting timeless wedding sagas, cinematic love stories, and high-fashion heirloom portraits across Bihar and beyond.",
                  "शाही शादियों, सिनेमैटिक लव स्टोरीज़ और जीवनभर संजोने योग्य खूबसूरत यादों को कैमरे में कैद करने का आपका विश्वसनीय संस्थान।"
                )}
              </p>
              <div className="mt-4 pt-3 border-t border-studio-border/60">
                <span className="text-[10px] uppercase tracking-widest text-studio-gold font-sans font-semibold block">
                  Studio Founder & Lead Director
                </span>
                <span className="font-serif text-base text-studio-cream">
                  {siteConfig.owner}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-studio-cream border-b border-studio-gold/20 pb-2">
              {t("Explore Portfolio", "पोर्टफोलियो")}
            </h4>
            <ul className="space-y-2.5 text-xs text-studio-ivoryMuted">
              <li>
                <Link href="/#portfolio" className="hover:text-studio-gold transition-colors flex items-center justify-between group">
                  <span>{t("Royal Weddings", "शाही शादियां")}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#wedding-story" className="hover:text-studio-gold transition-colors flex items-center justify-between group">
                  <span>{t("A Wedding Story Experience", "वेडिंग स्टोरी अनुभव")}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#films" className="hover:text-studio-gold transition-colors flex items-center justify-between group">
                  <span>{t("Cinematic 4K Films", "4K सिनेमाई फ़िल्में")}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/#packages" className="hover:text-studio-gold transition-colors flex items-center justify-between group">
                  <span>{t("Packages & Inclusions", "वेडिंग पैकेज")}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/studio" className="hover:text-studio-gold transition-colors flex items-center justify-between group text-studio-gold font-medium">
                  <span>{t("Studio Details & All Services", "स्टूडियो व सभी सेवाएं")}</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-studio-gold/20 text-studio-gold rounded">All</span>
                </Link>
              </li>
              <li>
                <Link href="/#inquiry" className="hover:text-studio-gold transition-colors flex items-center justify-between group">
                  <span>{t("Save the Date / Inquire", "तारीख चेक व पूछताछ")}</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Studio Timings */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-studio-cream border-b border-studio-gold/20 pb-2">
              {t("Direct Contact", "सीधा संपर्क")}
            </h4>
            <ul className="space-y-3 text-xs text-studio-ivoryMuted">
              <li>
                <span className="text-[10px] uppercase tracking-wider text-studio-gold block mb-0.5">
                  Primary Phone / WhatsApp:
                </span>
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="text-studio-ivory hover:text-studio-gold font-medium text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-studio-gold" />
                  {siteConfig.contact.primaryPhoneFormatted}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-studio-gold block mb-0.5">
                  Secondary / Alternate:
                </span>
                <a
                  href={`tel:${siteConfig.contact.secondaryPhone}`}
                  className="text-studio-ivory hover:text-studio-gold font-medium text-sm flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-studio-gold" />
                  {siteConfig.contact.secondaryPhoneFormatted}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-studio-gold block mb-0.5">
                  Email Inquiries:
                </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-studio-ivory hover:text-studio-gold transition-colors flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="text-[10px] uppercase tracking-wider text-studio-gold block mb-0.5">
                  Instagram:
                </span>
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-studio-ivory hover:text-studio-gold transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-studio-gold" />
                  {siteConfig.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Signboard Tagline */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-studio-cream border-b border-studio-gold/20 pb-2">
              {t("Visit The Studio", "स्टूडियो लोकेशन")}
            </h4>
            <div className="text-xs text-studio-ivoryMuted space-y-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-studio-cream">{siteConfig.studioName}</p>
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.area}, {siteConfig.address.city} - {siteConfig.address.pincode}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-[11px] text-studio-cream">
                <Clock className="w-3.5 h-3.5 text-studio-gold flex-shrink-0" />
                <span>{siteConfig.timings.displayString}</span>
              </div>
            </div>

            {/* Embedded Google Maps link / preview */}
            <div className="relative rounded-lg overflow-hidden border border-studio-gold/25 h-28 mt-2 group">
              <iframe
                title="Prasad Photo & Video Studio Map"
                src={siteConfig.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              />
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/40 hover:bg-black/20 flex items-center justify-center text-[11px] font-sans font-semibold text-studio-cream gap-1 backdrop-blur-[1px] transition-all"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-studio-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with SEO title & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-studio-ivoryMuted text-center md:text-left">
          <div>
            <p className="font-medium text-studio-cream">
              Prasad Photo & Video Studio | Bhaskendra Photography, {siteConfig.locationName}
            </p>
            <p className="text-[11px] text-studio-gold/90 mt-0.5 font-script text-base">
              &ldquo;{siteConfig.tagline}&rdquo; — {siteConfig.taglineHindi}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[11px]">
            <span>© {new Date().getFullYear()} Bhaskendra Photography. All rights reserved.</span>
            <span className="text-studio-ivoryMuted">
              Made and managed by{" "}
              <a
                href="https://visionforgelabs.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-studio-gold hover:text-studio-cream underline underline-offset-4 font-medium transition-colors"
              >
                Vision Forge Labs
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

