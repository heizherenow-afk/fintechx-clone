import React from "react";
import { SITE_CONTENT } from "../data/content";
import { ArrowRightIcon, BoltIcon, TrendingUpIcon } from "./icons/Icons";

export const Hero: React.FC = () => {
  const { hero } = SITE_CONTENT;

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-blue-600/20 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-48 left-1/4 w-[350px] h-[350px] bg-cyan-500/15 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-semibold text-blue-300 shadow-inner mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{hero.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]">
          Smarter decisions start with{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
            clear data
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{hero.primaryCta.text}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
          <a
            href={hero.secondaryCta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{hero.secondaryCta.text}</span>
          </a>
        </div>

        {/* Hero Dashboard Preview Card */}
        <div className="mt-16 sm:mt-20 relative mx-auto max-w-5xl">
          <div className="p-2 sm:p-3 rounded-3xl bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/15 shadow-2xl shadow-blue-950/50 backdrop-blur-sm">
            <div className="relative rounded-2xl bg-[#090B10] border border-white/10 overflow-hidden">
              {/* Browser bar preview */}
              <div className="px-4 py-3 bg-[#0E1118] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs text-neutral-400 font-mono px-3 py-1 bg-black/40 rounded-md border border-white/5">
                  app.fintechx.io/portfolio
                </div>
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Sync
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Metric 1 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
                    <span>Total Portfolio Value</span>
                    <TrendingUpIcon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white">$482,910.45</div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <span>+$34,180.20 (8.4%)</span>
                    <span className="text-neutral-500 font-normal">past 30 days</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
                    <span>AI Risk Score</span>
                    <BoltIcon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-cyan-300">Low / Optimal</div>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-neutral-400">
                    <span>Beta: 0.84 • Sharpe: 2.14</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-neutral-400 text-xs font-medium">
                    <span>Active Recommendations</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      3 New
                    </span>
                  </div>
                  <div className="mt-2 text-xl font-bold text-white">Rebalance Tech ETF</div>
                  <div className="mt-2 text-xs text-neutral-400">
                    Lock in +14% gains, hedge via S&P short put.
                  </div>
                </div>
              </div>

              {/* Portfolio Graph Mockup */}
              <div className="px-6 pb-6">
                <div className="h-44 sm:h-56 w-full rounded-xl bg-gradient-to-t from-blue-600/10 via-cyan-500/5 to-transparent border border-white/5 flex items-end p-4 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,150 C120,130 180,170 300,100 C420,30 500,110 620,60 C700,20 750,40 800,10 L800,200 L0,200 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M0,150 C120,130 180,170 300,100 C420,30 500,110 620,60 C700,20 750,40 800,10"
                      stroke="#38BDF8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute top-6 right-8 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-xs text-white">
                    Peak Return: <span className="text-emerald-400 font-bold">+24.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/10">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
