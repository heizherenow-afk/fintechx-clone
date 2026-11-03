import React from "react";
import { SITE_CONTENT } from "../data/content";
import { BoltIcon, ShieldCheckIcon, TrendingUpIcon } from "./icons/Icons";

export const BentoFeatures: React.FC = () => {
  const { features } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative bg-[#07080C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Intelligent Infrastructure
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything you need to invest confidently
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Professional tools designed for active traders and long-term investors managing diverse multi-asset portfolios.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Large Span 2 */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#0C0E15] border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {features[0].tag}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">
                {features[0].badge}
              </span>
            </div>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {features[0].title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
              {features[0].description}
            </p>

            {/* Interactive Visual Element */}
            <div className="mt-8 p-4 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <TrendingUpIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Suggested Reallocation</div>
                  <div className="text-xs text-neutral-400">Shift 8% from Tech Growth to Value & Gold</div>
                </div>
              </div>
              <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400">
                +3.2% Projected Yield
              </span>
            </div>
          </div>

          {/* Card 2: 1 Col */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C0E15] border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {features[1].tag}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white tracking-tight">
              {features[1].title}
            </h3>
            <p className="mt-3 text-sm text-neutral-400">
              {features[1].description}
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-300 border border-white/5 font-mono">
                12,000+ Banks
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-neutral-300 border border-white/5 font-mono">
                50+ Chains
              </span>
            </div>
          </div>

          {/* Card 3: 1 Col */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0C0E15] border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              {features[2].tag}
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white tracking-tight">
              {features[2].title}
            </h3>
            <p className="mt-3 text-sm text-neutral-400">
              {features[2].description}
            </p>
            <div className="mt-8 p-3 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-300 flex items-center gap-2">
              <BoltIcon className="w-4 h-4 text-blue-400" />
              <span>Drift Alert: Crypto weighting exceed 15%</span>
            </div>
          </div>

          {/* Card 4: Span 2 */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#0C0E15] border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {features[3].tag}
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {features[3].title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
              {features[3].description}
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-neutral-400">Rate Hike +50bps</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">+1.4%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-neutral-400">Tech Selloff -10%</div>
                <div className="text-sm font-bold text-amber-400 mt-1">-2.1%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-neutral-400">Dollar Crash -5%</div>
                <div className="text-sm font-bold text-emerald-400 mt-1">+3.8%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs text-neutral-400">Recession Stress</div>
                <div className="text-sm font-bold text-blue-400 mt-1">Balanced</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
