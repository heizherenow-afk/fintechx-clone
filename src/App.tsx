import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PartnersMarquee } from "./components/PartnersMarquee";
import { ProblemStats } from "./components/ProblemStats";
import { BentoFeatures } from "./components/BentoFeatures";
import { DashboardShowcase } from "./components/DashboardShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { SecurityTrust } from "./components/SecurityTrust";
import { TargetAudience } from "./components/TargetAudience";
import { MetricsBanner } from "./components/MetricsBanner";
import { Testimonials } from "./components/Testimonials";
import { PricingTable } from "./components/PricingTable";
import { FAQAccordion } from "./components/FAQAccordion";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06070A] text-white selection:bg-blue-500 selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PartnersMarquee />
        <ProblemStats />
        <BentoFeatures />
        <DashboardShowcase />
        <HowItWorks />
        <SecurityTrust />
        <TargetAudience />
        <MetricsBanner />
        <Testimonials />
        <PricingTable />
        <FAQAccordion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
