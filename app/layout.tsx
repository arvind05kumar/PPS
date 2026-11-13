import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  Inter,
  Great_Vibes,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { AudioProvider } from "@/components/providers/AudioProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  weight: ["400"],
  display: "swap",
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.studioName} | ${siteConfig.brandName}, ${siteConfig.locationName}`,
  description: `${siteConfig.tagline} — Premium Wedding Photography, 4K Cinematic Films, Pre-Wedding Shoots, Matrimonial Portraits, Photo Framing Shop, and Online Cafe Services in ${siteConfig.locationName}, Bhagalpur. Directed by ${siteConfig.owner}.`,
  keywords: [
    "Bhaskendra Photography",
    "Prasad Photo & Video Studio",
    "Wedding Photographer Bhagalpur",
    "Badi Khanjarpur Photo Studio",
    "Matrimonial Photography",
    "Pre Wedding Shoot Bihar",
    "Cinematic Wedding Films",
    "Photo Framing Badi Khanjarpur",
    "Online Cafe Bhagalpur",
    "Passport Photo Badi Khanjarpur",
    "Bhaskendra Prasad",
  ],
  authors: [{ name: siteConfig.owner }],
  creator: siteConfig.owner,
  metadataBase: new URL("https://bhaskendraphotography.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhaskendraphotography.com",
    siteName: `${siteConfig.studioName} | ${siteConfig.brandName}`,
    title: `${siteConfig.studioName} | ${siteConfig.brandName}, ${siteConfig.locationName}`,
    description: `All Types of Photo Work. Royal wedding photography, cinematic 4K video, matrimonial portraits, framing & cyber cafe services in Badi Khanjarpur.`,
    images: [
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brandName} - Royal Indian Wedding Photography`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.studioName} | ${siteConfig.brandName}`,
    description: `Every Pheras. Every Smile. Every Memory. Cinematic wedding films & photo studio in ${siteConfig.locationName}.`,
    images: ["https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD LocalBusiness Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PhotographyStudio",
  name: "Prasad Photo & Video Studio | Bhaskendra Photography",
  alternateName: "Bhaskendra Photography",
  founder: {
    "@type": "Person",
    name: "Bhaskendra Prasad",
  },
  image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a",
  telephone: siteConfig.contact.primaryPhone,
  email: siteConfig.contact.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.2445,
    longitude: 86.9934,
  },
  url: "https://bhaskendraphotography.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photo and Video Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Photography & Cinematic Film",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Matrimonial Photography",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Photo Framing & Albums",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Online Cafe & Passport Photo Services",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${playfair.variable} ${inter.variable} ${greatVibes.variable} ${devanagari.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-studio-dark text-studio-ivory font-sans antialiased overflow-x-hidden selection:bg-studio-gold selection:text-studio-dark">
        <ThemeProvider>
          <LanguageProvider>
            <AudioProvider>
              <SmoothScrollProvider>
                {/* Top Golden Scroll-Progress Bar */}
                <ScrollProgress />

                {/* Subtle Floating Ambient Bokeh Particles */}
                <ParticlesBackground />

                {/* Desktop Dynamic Custom Cursor */}
                <CustomCursor />

                {/* Sticky Hide/Show Navbar with blur */}
                <Navbar />

                {/* Page Content */}
                {children}

                {/* Unified Brand Footer */}
                <Footer />

                {/* Floating WhatsApp Quick Action with Alternate Call Button */}
                <FloatingWhatsApp />
              </SmoothScrollProvider>
            </AudioProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

