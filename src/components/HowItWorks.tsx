import React from "react";
import { SITE_CONTENT } from "../data/content";

export const HowItWorks: React.FC = () => {
  const { howItWorks } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative bg-[#080A0F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Simple 3-Step Process
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start investing in minutes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Connect your accounts, let AI analyze your data, and get clear insights to invest with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-[#0D0F17] border border-white/10 flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-white/30 group-hover:text-blue-400/80 transition-colors">
                    {item.step}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-neutral-300">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-blue-400 font-semibold">
                <span>Step {item.step} Complete</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
