"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Calendar,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Phone,
  Send,
  Heart,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { formatWhatsAppMessage } from "@/lib/utils";

export function FinalCtaInquiry() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding Photography & Film",
    eventDate: "",
    city: "Bhagalpur",
    message: "",
  });

  const [dateStatus, setDateStatus] = useState<"idle" | "available" | "booked">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Check date against booked dates config
  const handleDateChange = (selectedDate: string) => {
    setFormData((prev) => ({ ...prev, eventDate: selectedDate }));
    if (!selectedDate) {
      setDateStatus("idle");
      return;
    }

    const isBooked = siteConfig.bookedDates.includes(selectedDate);
    if (isBooked) {
      setDateStatus("booked");
    } else {
      setDateStatus("available");
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#c9a24b", "#e8d9a0", "#f6efe6"],
        });
      } catch {}
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);

    try {
      // 1. Post to internal API
      await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Trigger grand celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#c9a24b", "#e8d9a0", "#dfbe6f", "#d98282"],
        });
      } catch {}

      setSubmitted(true);

      // 2. Format message and launch WhatsApp
      const waText = formatWhatsAppMessage(formData);
      const waUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${waText}`;

      // Open WhatsApp in new tab after brief feedback
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
        setSubmitting(false);
      }, 700);
    } catch {
      // Fallback direct WhatsApp redirect
      const waText = formatWhatsAppMessage(formData);
      window.open(`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${waText}`, "_blank");
      setSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="relative py-24 sm:py-32 bg-[#0d0d0d] text-studio-ivory overflow-hidden">
      {/* Background glow and subtle film texture */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-studio-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dramatic Copy & Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-studio-gold">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs uppercase font-sans tracking-[0.3em] font-semibold">
                {t("Let's Connect", "शुभ शुरुआत")}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-studio-ivory leading-tight">
              {t("Let's Create Your Forever Story", "आइए रचें आपकी अमर वैवाहिक कहानी")}
            </h2>

            <p className="text-sm sm:text-base text-studio-ivoryMuted font-light leading-relaxed">
              {t(
                "Dates for auspicious wedding seasons fill up months in advance. Share your celebration details or pick your date to verify availability instantly.",
                "शुभ लग्न की तिथियां कई महीने पहले आरक्षित हो जाती हैं। अपनी शादी या उत्सव की तारीख दर्ज करें और तत्काल उपलब्धता जांचें।"
              )}
            </p>

            {/* Quick Contact & Studio Timings Cards */}
            <div className="pt-4 space-y-3">
              <div className="p-4 rounded-xl bg-studio-card/80 border border-studio-border text-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-studio-gold/15 flex items-center justify-center text-studio-gold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-studio-gold block">
                      Direct Studio Hotline
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.primaryPhone}`}
                      className="text-sm font-medium text-studio-cream hover:text-studio-gold transition-colors"
                    >
                      {siteConfig.contact.primaryPhoneFormatted}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="px-3 py-1.5 rounded-full bg-studio-surface text-[11px] font-sans text-studio-cream hover:bg-studio-gold hover:text-studio-dark transition-colors"
                >
                  Call Now
                </a>
              </div>

              <div className="p-4 rounded-xl bg-studio-card/80 border border-studio-border text-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-studio-gold/15 flex items-center justify-center text-studio-gold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-studio-gold block">
                      Alternate Line
                    </span>
                    <a
                      href={`tel:${siteConfig.contact.secondaryPhone}`}
                      className="text-sm font-medium text-studio-cream hover:text-studio-gold transition-colors"
                    >
                      {siteConfig.contact.secondaryPhoneFormatted}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${siteConfig.contact.secondaryPhone}`}
                  className="px-3 py-1.5 rounded-full bg-studio-surface text-[11px] font-sans text-studio-cream hover:bg-studio-gold hover:text-studio-dark transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Date Checker + Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-studio-card/90 border border-studio-gold/40 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between border-b border-studio-border pb-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-studio-cream">
                    {t("Check Date & Inquire", "तारीख उपलब्धता व पूछताछ")}
                  </h3>
                  <p className="text-xs text-studio-ivoryMuted">
                    {t("Instant WhatsApp confirmation", "तुरंत व्हाट्सएप व फोन पर उत्तर")}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-studio-gold/10 flex items-center justify-center text-studio-gold">
                  <Heart className="w-4 h-4" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-studio-cream">
                    {t("Thank You! Redirecting to WhatsApp...", "धन्यवाद! व्हाट्सएप पर ले जाया जा रहा है...")}
                  </h4>
                  <p className="text-xs text-studio-ivoryMuted max-w-sm mx-auto">
                    {t(
                      "Your wedding details have been compiled. Master artist Bhaskendra Prasad will review and connect with you directly.",
                      "आपकी जानकारी दर्ज हो गई है। भास्केंद्र प्रसाद जी आपसे जल्द ही संपर्क करेंगे।"
                    )}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-studio-gold underline hover:text-studio-cream pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5">
                        {t("Your Name", "आपका नाम")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm placeholder:text-studio-ivoryMuted/40"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5">
                        {t("WhatsApp Number", "व्हाट्सएप / फोन नंबर")} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm placeholder:text-studio-ivoryMuted/40"
                      />
                    </div>
                  </div>

                  {/* Event Type & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5">
                        {t("Service Required", "सेवा का प्रकार")}
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm"
                      >
                        <option value="Wedding Photography & Film">Wedding Photography & Film</option>
                        <option value="Cinematic Video (4K)">Cinematic Video (4K UHD)</option>
                        <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                        <option value="Matrimonial Photography">Matrimonial Photography</option>
                        <option value="Traditional Videography">Traditional Videography</option>
                        <option value="Event Photo & Video Coverage">Event Photo & Video Coverage</option>
                        <option value="Photo Framing & Albums">Photo Framing & Albums</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5">
                        {t("Event City / Venue", "शहर / वेन्यू")}
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Bhagalpur, Patna, etc."
                        className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm placeholder:text-studio-ivoryMuted/40"
                      />
                    </div>
                  </div>

                  {/* "Save the Date" Date Picker with Live Availability Checker */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-studio-gold" />
                        <span>{t("Select Wedding / Event Date", "तारीख चुनें (उपलब्धता जांच)")}</span>
                      </span>
                      {dateStatus === "available" && (
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t("Date Available! 🎉", "तारीख उपलब्ध है!")}</span>
                        </span>
                      )}
                      {dateStatus === "booked" && (
                        <span className="text-[10px] text-amber-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{t("High Demand / Limited Slots", "व्यस्त लग्न तिथि")}</span>
                        </span>
                      )}
                    </label>

                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleDateChange(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm"
                    />

                    {/* Date Status Banner */}
                    {dateStatus === "available" && (
                      <div className="mt-2 p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {t(
                            "Great news! Our lead crew is currently available on this date. Lock your slot early.",
                            "शुभ समाचार! इस तिथि पर हमारी टीम उपलब्ध है। शीघ्र अपनी तारीख बुक करें।"
                          )}
                        </span>
                      </div>
                    )}
                    {dateStatus === "booked" && (
                      <div className="mt-2 p-2.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>
                          {t(
                            "This date is an auspicious Muhurat with limited remaining slots. Please inquire via WhatsApp immediately.",
                            "इस तिथि पर अत्यंत व्यस्तता है। कृपया तुरंत व्हाट्सएप पर संपर्क कर उपलब्धता सुनिश्चित करें।"
                          )}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Message / Notes */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-sans font-semibold text-studio-cream mb-1.5">
                      {t("Special Notes / Ritual Details", "अतिरिक्त जानकारी या रस्में")}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your wedding ceremonies, expected guests, or special requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-studio-surface border border-studio-border focus:border-studio-gold focus:outline-none text-studio-ivory text-sm placeholder:text-studio-ivoryMuted/40"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-studio-goldLight via-studio-gold to-studio-cream hover:opacity-95 text-studio-dark font-sans text-xs sm:text-sm font-bold uppercase tracking-widest shadow-xl hover:shadow-[0_0_25px_rgba(201,162,75,0.4)] transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>{t("Processing...", "कृपया प्रतीक्षा करें...")}</span>
                    ) : (
                      <>
                        <MessageSquare className="w-4 h-4 fill-studio-dark" />
                        <span>{t("Submit Inquiry via WhatsApp", "व्हाट्सएप पर जानकारी भेजें")}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-studio-ivoryMuted/70 pt-1">
                    {t(
                      "No spam ever. We respect your sacred family occasions.",
                      "आपकी गोपनीयता और सम्मान हमारी सर्वोच्च प्राथमिकता है।"
                    )}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

