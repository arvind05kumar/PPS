"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function StudioContactMap() {
  const { t } = useLanguage();

  return (
    <section id="contact-studio" className="my-20 space-y-12">
      {/* 2 Big CTAs: Visit Our Studio & Book a Free Consultation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CTA 1: Visit Our Studio */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1813] to-[#121212] border border-studio-gold/40 p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-sans font-semibold tracking-widest bg-studio-gold/20 text-studio-gold border border-studio-gold/30">
              Walk-ins Always Welcome
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-studio-cream">
              {t("Visit Our Studio in Person", "स्टूडियो पधारें व सैंपल्स देखें")}
            </h3>
            <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light leading-relaxed">
              {t(
                "Drop by for chai, touch our real printed velvet photobooks, and explore hundreds of Italian wooden and acrylic frames on display.",
                "बड़ी खंजरपुर स्थित स्टूडियो पधारें। चाय पर चर्चा करें, असली प्रिंटेड एल्बम्स और इटैलियन फ्रेम्स की विशाल वैरायटी खुद देखें।"
              )}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-studio-gold hover:bg-studio-cream text-studio-dark font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <Navigation className="w-4 h-4 fill-studio-dark" />
              <span>{t("Get Turn-by-Turn Directions", "गूगल मैप्स पर रास्ता देखें")}</span>
            </a>
          </div>
        </div>

        {/* CTA 2: Book a Free Consultation */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#161616] to-[#0f0f0f] border border-studio-border p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-2xl">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-sans font-semibold tracking-widest bg-studio-surface text-studio-cream border border-studio-border">
              Direct with Bhaskendra Prasad
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-studio-cream">
              {t("Book a Free Consultation", "निःशुल्क परामर्श बुक करें")}
            </h3>
            <p className="text-xs sm:text-sm text-studio-ivoryMuted font-light leading-relaxed">
              {t(
                "Have specific dates or family customs? Schedule a 15-minute phone or studio discussion to finalize your customized coverage.",
                "अपनी शादी के दिन और बजट के अनुसार 15 मिनट का निःशुल्क परामर्श बुक करें।"
              )}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%20Bhaskendra%20ji%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20my%20wedding.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-studio-surface hover:bg-studio-gold hover:text-studio-dark border border-studio-gold/40 text-studio-cream font-sans text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("Book Free Consultation on WhatsApp", "व्हाट्सएप पर समय बुक करें")}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Address & Embedded Google Maps Section */}
      <div className="rounded-3xl bg-studio-card border border-studio-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 p-8 sm:p-10 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-studio-gold">
              <MapPin className="w-4 h-4" />
              <span className="text-xs uppercase font-sans tracking-[0.25em] font-semibold">
                {siteConfig.locationName} Hub
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-studio-cream">
              {siteConfig.studioName}
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-studio-ivoryMuted pt-2">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-studio-gold flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.landmark},{" "}
                  {siteConfig.address.area}, {siteConfig.address.city} - {siteConfig.address.pincode},{" "}
                  {siteConfig.address.state}
                </span>
              </p>

              <p className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-studio-gold flex-shrink-0" />
                <span>{siteConfig.timings.displayString}</span>
              </p>

              <div className="pt-2 border-t border-studio-border/60 space-y-2">
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-studio-gold flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.primaryPhone}`}
                    className="hover:text-studio-gold transition-colors font-medium text-studio-cream"
                  >
                    Primary: {siteConfig.contact.primaryPhoneFormatted}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-studio-gold flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.secondaryPhone}`}
                    className="hover:text-studio-gold transition-colors font-medium text-studio-cream"
                  >
                    Alternate: {siteConfig.contact.secondaryPhoneFormatted}
                  </a>
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-studio-gold flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-studio-gold transition-colors break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%2C%20I%20am%20outside%20the%20shop%20%2F%20need%20directions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={siteConfig.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-studio-gold hover:bg-studio-cream text-studio-dark text-xs font-bold text-center flex items-center justify-center gap-2 transition-colors shadow-md"
            >
              <Navigation className="w-4 h-4 fill-studio-dark" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Embedded Google Map Column */}
        <div className="lg:col-span-7 relative min-h-[380px] bg-studio-surface border-t lg:border-t-0 lg:border-l border-studio-border">
          <iframe
            title="Prasad Photo & Video Studio Google Map Location"
            src={siteConfig.address.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "380px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full filter contrast-125"
          />
        </div>
      </div>
    </section>
  );
}

