import React from "react";
import type { Metadata } from "next";
import { StudioHero } from "@/components/studio/StudioHero";
import { ServicesDetailed } from "@/components/studio/ServicesDetailed";
import { MatrimonialSpotlight } from "@/components/studio/MatrimonialSpotlight";
import { OnlineCafeFilterableGrid } from "@/components/studio/OnlineCafeFilterableGrid";
import { RateCardSection } from "@/components/studio/RateCardSection";
import { FaqSection } from "@/components/studio/FaqSection";
import { StudioContactMap } from "@/components/studio/StudioContactMap";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Studio Details & All Services | ${siteConfig.studioName}, Badi Khanjarpur`,
  description: `Complete services of ${siteConfig.studioName} (Bhaskendra Photography) in Badi Khanjarpur, Bhagalpur. Wedding photography, 4K video, matrimonial portraits, custom frames, photo printing, Xerox & online cyber cafe services.`,
  openGraph: {
    title: `${siteConfig.studioName} | Bhaskendra Photography, Badi Khanjarpur`,
    description: `All Types of Photo Work: Wedding photography, cinematography, custom frames, passport photos, and online cafe services.`,
    url: "https://bhaskendraphotography.com/studio",
    siteName: siteConfig.brandName,
    locale: "en_IN",
    type: "website",
  },
};

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-studio-dark text-studio-ivory selection:bg-studio-gold selection:text-studio-dark">
      <StudioHero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* All 6 Service Categories */}
        <ServicesDetailed />

        {/* Dedicated Matrimonial Photography Block */}
        <MatrimonialSpotlight />

        {/* Searchable / Filterable Online Cafe Services */}
        <OnlineCafeFilterableGrid />

        {/* Mini Price List / Rate Card */}
        <RateCardSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Map, Timings, Directions & CTAs */}
        <StudioContactMap />
      </div>
    </main>
  );
}

