# Prasad Photo & Video Studio | Bhaskendra Photography

> **"All Types of Photo Work"**  
> Luxury wedding cinematography, portrait photography, custom Italian framing shop, and digital utility cyber-cafe services in Badi Khanjarpur, Bhagalpur. Directed by **Bhaskendra Prasad**.

---

## 🌟 Project Overview

This website is a production-grade, highly animated web platform with two core portals:
1. **Home / Portfolio Site (`/`)**: A romantic, cinematic showcase engineered to convert wedding couples, featuring:
   - Camera shutter aperture preloader with curtain reveal
   - Looping 4K wedding video hero with letter-by-letter animated typography
   - Shareable personalized portfolio links (e.g. `/?for=Rahul-Priya` greets the couple with `"Hello Rahul & Priya 💍"`)
   - Infinite gold marquee ticker
   - About snippet with animated stat counters & founder tribute
   - 3D tilt hover cards for all 6 disciplines
   - Filterable masonry portfolio gallery with full-screen gesture/keyboard lightbox
   - Lazy-loaded wedding films cinema player modal
   - Pinned GSAP ScrollTrigger "A Wedding Story" sequence (Getting Ready → Haldi → Baraat → Pheras → Vidaai)
   - Draggable before/after RAW vs master retouched color grade slider
   - Silver, Gold, Platinum royal packages with quote/rate toggle
   - 6-step animated timeline
   - Auto-sliding couple testimonials
   - Framing & canvas teasers
   - Instagram-style live grid
   - "Save the Date" instant date availability checker tool & WhatsApp inquiry form
2. **Studio Details Page (`/studio`)**: A dedicated shop page detailing every commercial and digital service:
   - Real-time **"Open Now / Closed"** live badge based on current IST time
   - Complete 6 service categories with pricing and inclusions
   - Dedicated Matrimonial Photography spotlight
   - Searchable & filterable online cyber-cafe grid (passport photos, Xerox, form filling, lamination, PVC cards)
   - Standardized rate card / mini price list
   - Frequently asked questions (FAQ) interactive accordion
   - Turn-by-turn Google Maps embed, directions, and instant booking CTAs

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP ScrollTrigger
- **Smooth Scrolling**: Lenis
- **Visuals**: Canvas bokeh particles & subtle film-grain overlay
- **Icons**: Lucide React
- **Typography**: Cormorant Garamond, Playfair Display, Inter, Great Vibes, Noto Serif Devanagari

---

## 🚀 Getting Started Locally

### 1. Prerequisites
- Node.js 18.x or 20.x or higher
- npm, pnpm, or yarn

### 2. Installation
```bash
# Clone or navigate into the repository
cd PPS

# Install all dependencies
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 How to Update Content & Photos (For Non-Developers)

All studio text, phone numbers, prices, booked dates, gallery photos, and headlines are centralized in a single configuration file:

📁 **`config/site.ts`**

### To change phone numbers or WhatsApp:
```typescript
contact: {
  primaryPhone: "+917717732061",
  primaryPhoneFormatted: "+91 77177 32061",
  secondaryPhone: "+919430926577",
  secondaryPhoneFormatted: "+91 94309 26577",
  whatsappNumber: "917717732061",
  email: "bhaskarphotography4321@gmail.com",
}
```

### To add or update photos:
Add your images to `/public/images/` or use high-resolution cloud links in `siteConfig.galleryItems` inside `config/site.ts`.

### To update package pricing:
Modify `siteConfig.packages` in `config/site.ts`. You can toggle `showStartingPrice` to `true` (e.g. `₹75,000`) or `false` ("Contact for quote").

### To update booked dates for the "Save the Date" checker:
Add dates (format `YYYY-MM-DD`) to `siteConfig.bookedDates`:
```typescript
bookedDates: [
  "2026-11-20",
  "2026-12-04",
  // add more dates here
]
```

---

## 🌐 Deploying to Vercel

1. Push your code to a GitHub / GitLab repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Bhaskendra Photography website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Next.js will be automatically detected.
4. Click **"Deploy"**. Your site will be live within 60 seconds with SSL and global edge distribution!

---

## 🏷️ Connecting a Custom Domain (e.g. `bhaskendraphotography.com`)

1. Open your project on Vercel Dashboard → **Settings** → **Domains**.
2. Type your domain name (e.g. `bhaskendraphotography.com` or `prasadphotostudio.com`) and click **Add**.
3. In your domain registrar (GoDaddy, Namecheap, Hostinger, etc.):
   - Add an **A Record** pointing `@` to `76.76.21.21`
   - Add a **CNAME Record** pointing `www` to `cname.vercel-dns.com`
4. Vercel will verify the records and automatically issue a free SSL certificate.

---

## 📱 Mobile & WhatsApp Sharing Features

- **Personalized Links**: Send links like `https://your-domain.com/?for=Amit-Pooja` to clients via WhatsApp. The hero will automatically display:  
  **"Hello Amit & Pooja 💍"**
- **Tap-to-Call**: Direct calling support for both `+91 77177 32061` and `+91 94309 26577`.
- **Image Protection**: Right-click download is disabled with a polite copyright tooltip, and portfolio images have an elegant translucent watermark badge.
- **Bi-lingual Support**: One-click toggle between English and authentic Devanagari Hindi.

---

© Bhaskendra Photography • Prasad Photo & Video Studio, Badi Khanjarpur

