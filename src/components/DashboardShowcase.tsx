import React from "react";
import { ArrowRightIcon } from "./icons/Icons";

export const DashboardShowcase: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Live Intelligence
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See your financial intelligence in action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Explore a real-time dashboard that brings your portfolio, insights, and risk analysis together in one clear view.
          </p>
        </div>

        {/* Big Dashboard Visual Container */}
        <div className="relative mx-auto max-w-5xl rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-1 border border-white/10 shadow-2xl">
          <div className="rounded-[22px] bg-[#0A0C12] p-6 sm:p-10 border border-white/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Model Updating
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Real-time algorithmic risk modeling across all your assets
                </h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                  Every trade, dividend, and deposit is ingested immediately. Our quant algorithms simulate market impact, calculate volatility drag, and highlight underperforming allocations before market open.
                </p>
                <div className="pt-2">
                  <a
                    href="./contact.html"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 transition-all"
                  >
                    <span>Explore Interactive Demo</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Graphical Card Preview */}
              <div className="w-full lg:w-96 p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-xl space-y-4">
                <div className="flex justify-between items-center text-xs text-neutral-400">
                  <span>Portfolio Distribution</span>
                  <span className="text-white font-mono">100% Total</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-white mb-1">
                      <span>Equities & Index ETFs</span>
                      <span>58%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full w-[58%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-white mb-1">
                      <span>Fixed Income & Bonds</span>
                      <span>22%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full w-[22%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-white mb-1">
                      <span>Crypto & Web3</span>
                      <span>12%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[12%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-white mb-1">
                      <span>Commodities & Cash</span>
                      <span>8%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full w-[8%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
