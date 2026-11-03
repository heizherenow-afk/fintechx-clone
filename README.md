# FintechX — 1:1 Complete Website Clone & Frontend Source

A total, pixel-perfect clone of **[FintechX (AI Finance & Investment Platform)](https://fintechx-wbs.framer.website)**.

This repository contains **both**:
1. **The Production Cloned Site**: Complete, 100% offline-capable static and hydrated mirror with every original animation, font, SVG, image, and route.
2. **The Modern React / TypeScript / Tailwind Source (`src/`)**: Clean, modular, componentized frontend source code structured for customization and integration into modern web apps.

---

## 🚀 Quick Start (Instant Launch)

You can launch and view the cloned site immediately with zero npm dependencies:

### Option 1: Python Built-in Server (Recommended)
```bash
python server.py 3000
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Node Serve
```bash
npx serve -l 3000 .
```

### Option 3: Modern React + Vite Dev Server
```bash
npm install
npm run dev
```

---

## 📁 Repository Structure

```
fintechx-clone/
├── index.html                  # Main Landing Page (Home 1) — 100% hydrated & localized
├── home-2.html                 # Alternative Landing Page (Home 2)
├── features.html               # Features deep dive & bento breakdown
├── pricing.html                # Pricing plans, billing toggles & comparison
├── faqs.html                   # Frequently Asked Questions accordion
├── changelog.html              # Product changelog & release timeline
├── contact.html                # Contact sales & support forms
├── request-demo.html           # Interactive demo scheduling flow
├── waitlist.html               # Product waitlist onboarding page
├── about.html                  # Mission, story, team & executive profiles
├── blog.html                   # Article directory & financial insights
├── server.py                   # High-performance local server with MIME & CORS headers
├── package.json                # NPM configuration & developer scripts
├── tailwind.config.js          # Tailwind theme with FintechX palette & typography
├── tsconfig.json               # TypeScript compiler config
├── vite.config.ts              # Vite bundling config
├── assets/
│   ├── images/                 # 155 original SVGs, PNGs, WebPs, illustrations & logos
│   ├── fonts/                  # 101 original WOFF2 web fonts (Bricolage Grotesque, Inter Display, Geist)
│   └── js/                     # 54 localized Framer Motion & Rolldown JS runtime modules
└── src/                        # Clean Modular React / TypeScript Source Code
    ├── App.tsx                 # Main application composition
    ├── main.tsx                # React DOM entry point
    ├── index.css               # Global Tailwind styles & font-face declarations
    ├── data/
    │   └── content.ts          # Extracted copy, navigation links, pricing tiers & FAQs
    └── components/
        ├── Navbar.tsx          # Glassmorphic header with navigation & CTA
        ├── Hero.tsx            # Main hero with animated badge, headline, CTAs & preview
        ├── PartnersMarquee.tsx # Infinite marquee of trusted fintech partners
        ├── ProblemStats.tsx    # 68% and 55% investment challenges & metrics
        ├── BentoFeatures.tsx   # Bento grid with AI analysis, automation & tools
        ├── DashboardShowcase.tsx # Live financial dashboard mockup with tickers
        ├── HowItWorks.tsx      # 3-step onboarding flow (Connect -> Analyze -> Invest)
        ├── SecurityTrust.tsx   # Encryption, SOC2, biometric security grid
        ├── TargetAudience.tsx  # Individual investors vs. Financial teams comparison
        ├── MetricsBanner.tsx   # 10,000+ investors, $250M+ assets banner
        ├── Testimonials.tsx    # Customer reviews with ratings & quotes
        ├── PricingTable.tsx    # Monthly/Yearly toggle with Starter, Pro, Enterprise
        ├── FAQAccordion.tsx    # Animated expandable accordion
        ├── FinalCTA.tsx        # High-conversion gradient CTA card
        ├── Footer.tsx          # Multi-column footer with links & newsletter
        └── icons/
            └── Icons.tsx       # Extracted SVG brand marks and UI icons
```

---

## 🎨 Design System & Highlights

- **Typography**: Primary display font is **Bricolage Grotesque** with **Inter Display** and **Geist** for body copy. All 101 font weights and unicode subsets are hosted locally in `assets/fonts/`.
- **Color Palette**:
  - Background: `#06070A`, `#0B0D13`
  - Glows & Accents: Blue (`#2563EB`, `#38BDF8`), Emerald (`#10B981`), Indigo (`#6366F1`)
  - Glassmorphic Borders: `rgba(255, 255, 255, 0.08)`
- **Animations**:
  - Full Framer Motion appear effects and springs
  - Smooth infinite logo marquee
  - Interactive monthly / annual pricing toggle
  - Animated accordion collapse/expand for FAQs
  - Responsive layout breakpoints for Desktop (1200px+), Tablet (810px-1199px), and Mobile (<810px).
