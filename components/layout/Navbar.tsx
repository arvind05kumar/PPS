"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageSquare, MapPin, Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll-down, show on scroll-up
      if (currentScrollY > lastScrollY && currentScrollY > 180) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: t("Home", "होम") },
    { href: "/#portfolio", label: t("Portfolio", "पोर्टफोलियो") },
    { href: "/#wedding-story", label: t("Wedding Story", "वेडिंग स्टोरी") },
    { href: "/#films", label: t("Films", "फ़िल्में") },
    { href: "/#packages", label: t("Packages", "पैकेज") },
    { href: "/studio", label: t("Studio & Services", "स्टूडियो व सेवाएं"), badge: "Shop" },
    { href: "/#inquiry", label: t("Contact", "संपर्क") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isScrolled
            ? "bg-studio-dark/90 backdrop-blur-md border-b border-studio-gold/15 py-3 shadow-lg shadow-black/30"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 2xl:gap-6">
            {/* Logo - Strictly flex-shrink-0 so it NEVER gets squished */}
            <div className="flex-shrink-0 mr-2 sm:mr-4 2xl:mr-8">
              <Logo variant="horizontal" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-6 flex-shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative text-[11px] 2xl:text-xs tracking-wider 2xl:tracking-widest uppercase transition-colors font-medium py-1 group whitespace-nowrap",
                      isActive
                        ? "text-studio-gold"
                        : "text-studio-ivory hover:text-studio-cream"
                    )}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 px-1.5 py-0.5 text-[8.5px] font-sans font-bold uppercase bg-studio-gold text-studio-dark rounded-full tracking-normal">
                        {link.badge}
                      </span>
                    )}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 h-[1.5px] bg-studio-gold transition-all duration-300",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Controls */}
            <div className="hidden xl:flex items-center gap-2.5 2xl:gap-3 flex-shrink-0">
              <SoundToggle />
              <LanguageToggle />

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%20Bhaskendra%20Photography%2C%20I%20want%20to%20enquire%20about%20wedding%20coverage.`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 px-4 2xl:px-5 py-2 rounded-full bg-gradient-to-r from-studio-gold to-studio-cream text-studio-dark font-sans text-[11px] 2xl:text-xs font-semibold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(201,162,75,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t("Book Your Date", "तारीख बुक करें")}</span>
              </a>
            </div>

            {/* Mobile Actions: Language & Hamburger (Visible below xl: 1280px) */}
            <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden flex-shrink-0">
              <LanguageToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 sm:p-2 rounded-lg text-studio-ivory hover:text-studio-gold border border-studio-gold/25 bg-studio-card/60"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-studio-dark/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 xl:hidden"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-studio-gold/20 pb-4">
              <Logo variant="horizontal" showLink={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-studio-gold/30 text-studio-ivory hover:text-studio-gold hover:border-studio-gold"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Navigation Links */}
            <div className="flex flex-col gap-4 py-8 overflow-y-auto">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-xl font-serif tracking-wider text-studio-ivory hover:text-studio-gold py-1.5 transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] font-sans font-bold bg-studio-gold text-studio-dark rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions & Studio Quick Info */}
            <div className="border-t border-studio-gold/20 pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs text-studio-ivoryMuted">
                <MapPin className="w-4 h-4 text-studio-gold flex-shrink-0" />
                <span>{siteConfig.locationName}, {siteConfig.address.city}</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${siteConfig.contact.primaryPhone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-studio-gold/40 text-studio-cream text-xs font-sans tracking-wide hover:bg-studio-surface transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-studio-gold" />
                  <span>Call Primary</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Namaste%20Bhaskendra%20Photography%2C%20I%20want%20to%20enquire%20about%20wedding%20coverage.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-studio-gold text-studio-dark text-xs font-semibold tracking-wide hover:bg-studio-cream transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
