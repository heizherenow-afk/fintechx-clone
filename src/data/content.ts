export interface NavItem {
  label: string;
  href: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  badge?: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export const SITE_CONTENT = {
  brand: {
    name: "FintechX",
    tagline: "AI Finance & Investment Platform",
    description: "Optimize your investments with AI-driven analysis, real-time tracking, and intelligent recommendations.",
  },
  navigation: [
    { label: "Home", href: "./index.html" },
    { label: "Home 2", href: "./home-2.html" },
    { label: "Features", href: "./features.html" },
    { label: "Pricing", href: "./pricing.html" },
    { label: "About", href: "./about.html" },
    { label: "Blog", href: "./blog.html" },
    { label: "FAQs", href: "./faqs.html" },
  ] as NavItem[],
  hero: {
    badge: "AI-Powered Financial Intelligence",
    headline: "Smarter decisions start with clear data",
    subheadline: "Optimize your investments with AI-driven analysis, real-time tracking, and intelligent recommendations.",
    primaryCta: { text: "Start Free Trial", href: "./contact.html" },
    secondaryCta: { text: "Book a Demo", href: "./request-demo.html" },
    stats: [
      { value: "10,000+", label: "Active Investors" },
      { value: "$250M+", label: "Assets Tracked" },
      { value: "99.9%", label: "Uptime SLA" },
    ]
  },
  problemSection: {
    tag: "The Challenge",
    title: "Challenges of managing investments today",
    description: "Financial data is spread across platforms and is hard to understand without complex manual calculations.",
    metrics: [
      {
        value: "68%",
        label: "Data Fragmentation",
        description: "Of modern investors struggle with scattered portfolio data across multiple brokerages and wallets.",
      },
      {
        value: "55%",
        label: "Missed Timing",
        description: "Miss key market reallocation opportunities due to delayed reporting and disconnected tools.",
      },
    ] as MetricItem[]
  },
  features: [
    {
      id: "ai-insights",
      tag: "Real-Time Intelligence",
      title: "AI-Driven Portfolio Optimization",
      description: "Continuous algorithmic analysis assesses risk profiles and generates tailored asset reallocation recommendations.",
      badge: "AI Powered",
    },
    {
      id: "multi-asset",
      tag: "Unified Tracking",
      title: "Multi-Asset Aggregation",
      description: "Track equities, fixed income, crypto, and private equity from over 12,000 financial institutions globally in one dashboard.",
    },
    {
      id: "automated-rebalance",
      tag: "Smart Automation",
      title: "Automated Rebalancing Alerts",
      description: "Set tolerance boundaries and receive instant notifications or automated execution when portfolio drift occurs.",
    },
    {
      id: "risk-metrics",
      tag: "Advanced Analytics",
      title: "Deep Risk & Stress Testing",
      description: "Simulate macro market shifts, interest rate changes, and inflation shocks against your net holdings.",
    },
  ] as FeatureItem[],
  howItWorks: [
    {
      step: "01",
      title: "Connect your accounts",
      description: "Link your brokerages, exchanges, and wallets in under 2 minutes with bank-grade 256-bit encryption.",
      metric: "2 Minutes",
    },
    {
      step: "02",
      title: "AI analyzes your holdings",
      description: "Our machine learning engine scans historical returns, fee structures, and market exposures to pinpoint risks.",
      metric: "100% Automated",
    },
    {
      step: "03",
      title: "Execute smarter moves",
      description: "Receive actionable, plain-English recommendations to hedge downside risk and capture upside yield.",
      metric: "+32% Faster",
    },
  ],
  security: {
    tag: "Security & Compliance",
    title: "Your data is protected at every level",
    description: "We employ enterprise-grade security protocols to ensure your financial assets and personal privacy remain strictly protected.",
    points: [
      "SOC-2 Type II Certified infrastructure",
      "AES-256 bit end-to-end data encryption",
      "Strict zero-knowledge privacy architecture",
      "Biometric and multi-factor authentication (MFA)",
      "Continuous automated compliance scanning",
      "No selling of user financial data — ever",
    ],
  },
  audience: [
    {
      title: "Individual Investors",
      subtitle: "For personal wealth creators",
      metric: "+32% Faster",
      description: "Eliminate manual spreadsheets and gain hedge-fund caliber insights for your personal stock, crypto, and real estate portfolio.",
    },
    {
      title: "Financial Teams & Family Offices",
      subtitle: "For funds & wealth managers",
      metric: "Real-Time",
      description: "Collaborate seamlessly across client accounts with role-based access, automated compliance reporting, and audited logs.",
    },
  ],
  testimonials: [
    {
      quote: "FintechX has transformed how I monitor my diversified portfolio. The AI insights flagged an overweight tech exposure that saved me thousands during the correction.",
      author: "Marcus Vance",
      role: "Angel Investor & Tech Founder",
      avatar: "./assets/images/6Cpw9mUhAwWR6Wtb6CU9sRAiHw.png",
      rating: 5,
    },
    {
      quote: "The interface is gorgeous, ultra-fast, and provides clarity no legacy broker can match. It feels like having a quantitative analyst in your pocket.",
      author: "Elena Rostova",
      role: "Managing Partner, Apex Capital",
      avatar: "./assets/images/HbrgA5s1znVs1SRbwK5IpSIzg.png",
      rating: 5,
    },
    {
      quote: "Connecting 8 different brokerages took literally 90 seconds. The unified view and instant stress test simulations are worth every penny.",
      author: "David Chen",
      role: "Private Equity Associate",
      avatar: "./assets/images/eGyHJz0mjTQQwjdSrIehVh1Y4.png",
      rating: 5,
    },
  ] as TestimonialItem[],
  pricing: [
    {
      name: "Starter",
      description: "Ideal for individual investors getting started with intelligent portfolio tracking.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        "Up to 3 connected brokerages / wallets",
        "Real-time asset tracking",
        "Weekly AI performance digest",
        "Standard email support",
      ],
      ctaText: "Get Started Free",
      ctaHref: "./waitlist.html",
    },
    {
      name: "Pro",
      description: "For active investors who need continuous AI recommendations and deep risk models.",
      monthlyPrice: 29,
      yearlyPrice: 24,
      popular: true,
      features: [
        "Unlimited connected accounts",
        "Real-time AI rebalancing triggers",
        "Macro stress-testing & risk scores",
        "Tax-loss harvesting suggestions",
        "Priority 24/7 dedicated support",
      ],
      ctaText: "Start 14-Day Free Trial",
      ctaHref: "./contact.html",
    },
    {
      name: "Enterprise",
      description: "Designed for family offices, syndicates, and financial advisory teams.",
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        "Multi-member workspace & permissions",
        "Custom institutional API feeds",
        "White-glove account onboarding",
        "Custom PDF report generation",
        "Dedicated account manager & SLA",
      ],
      ctaText: "Request Enterprise Demo",
      ctaHref: "./request-demo.html",
    },
  ] as PricingPlan[],
  faqs: [
    {
      question: "How does FintechX connect to my financial institutions?",
      answer: "We connect using industry-standard encrypted API protocols (such as Plaid and MX). We never store your banking credentials, and our access is strictly read-only.",
    },
    {
      question: "Can FintechX execute trades directly on my behalf?",
      answer: "No. By default, FintechX operates on a read-only advisory model. It delivers recommendations and alerts. You retain 100% control over executing trades through your own brokerages.",
    },
    {
      question: "Is there a free trial for the Pro plan?",
      answer: "Yes, we offer a full-featured 14-day free trial on all paid tiers with zero lock-in contracts. You can downgrade or cancel anytime with one click.",
    },
    {
      question: "Which asset classes does the platform support?",
      answer: "We support global equities, ETFs, fixed income bonds, crypto assets, commodities, precious metals, and custom alternative investments.",
    },
    {
      question: "How secure is my financial data?",
      answer: "We are SOC-2 Type II certified. All data in transit and at rest is secured via AES-256 encryption. We never sell, rent, or share personal investment data with third parties.",
    },
  ] as FAQItem[],
};
