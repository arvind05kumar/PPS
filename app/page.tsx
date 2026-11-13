import React, { Suspense } from "react";
import { Preloader } from "@/components/home/Preloader";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { FeaturedGallery } from "@/components/home/FeaturedGallery";
import { WeddingFilms } from "@/components/home/WeddingFilms";
import { WeddingStoryScroll } from "@/components/home/WeddingStoryScroll";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { PackagesSection } from "@/components/home/PackagesSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { FramesTeaser } from "@/components/home/FramesTeaser";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { FinalCtaInquiry } from "@/components/home/FinalCtaInquiry";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-studio-dark text-studio-ivory selection:bg-studio-gold selection:text-studio-dark overflow-x-hidden">
      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Hero with video background, letter-by-letter reveal & personalized param */}
      <Suspense fallback={<div className="min-h-screen bg-studio-dark flex items-center justify-center text-studio-gold">Loading...</div>}>
        <Hero />
      </Suspense>

      {/* 3. Marquee Strip */}
      <Marquee />

      {/* 4. About Snippet */}
      <AboutSnippet />

      {/* 5. Services Showcase (in exact order with 3D tilt hover) */}
      <ServicesShowcase />

      {/* 6. Featured Work / Portfolio Gallery (Masonry, category tabs & lightbox) */}
      <FeaturedGallery />

      {/* 7. Wedding Films (Thumbnails + Lazy-loaded video modal) */}
      <WeddingFilms />

      {/* 8. 'A Wedding Story' Scroll Experience (Pinned GSAP sequence) */}
      <WeddingStoryScroll />

      {/* 9. Before/After Color Retouch Slider */}
      <BeforeAfterSlider />

      {/* 10. Packages (Silver, Gold, Platinum) */}
      <PackagesSection />

      {/* 11. Process Timeline (01 to 06) */}
      <ProcessTimeline />

      {/* 12. Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 13. Frames & Albums Teaser (Linking to /studio) */}
      <FramesTeaser />

      {/* 14. Instagram-style Grid */}
      <InstagramGrid />

      {/* 15. Final CTA + Save the Date tool & WhatsApp Inquiry Form */}
      <FinalCtaInquiry />
    </main>
  );
}

