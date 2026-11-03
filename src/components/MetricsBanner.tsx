import React from "react";

export const MetricsBanner: React.FC = () => {
  return (
    <section className="py-20 relative border-y border-white/5 bg-[#090B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Powering smarter investment decisions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400">
            Real-time insights, advanced analytics, and secure infrastructure working together seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-5xl font-black text-white">10,000+</div>
            <div className="mt-2 text-xs sm:text-sm text-neutral-400">Active Investors</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-5xl font-black text-blue-400">$250M+</div>
            <div className="mt-2 text-xs sm:text-sm text-neutral-400">Assets Tracked</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-5xl font-black text-cyan-300">12,000+</div>
            <div className="mt-2 text-xs sm:text-sm text-neutral-400">Supported Banks</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl sm:text-5xl font-black text-emerald-400">99.9%</div>
            <div className="mt-2 text-xs sm:text-sm text-neutral-400">Platform Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
