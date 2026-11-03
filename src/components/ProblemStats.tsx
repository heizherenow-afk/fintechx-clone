import React from "react";
import { SITE_CONTENT } from "../data/content";

export const ProblemStats: React.FC = () => {
  const { problemSection } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-400 mb-4">
            {problemSection.tag}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {problemSection.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            {problemSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problemSection.metrics.map((metric, i) => (
            <div
              key={i}
              className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 shadow-2xl backdrop-blur-md overflow-hidden group hover:border-blue-500/40 transition-all duration-300"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/25 transition-all duration-500" />

              <div className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight">
                {metric.label}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
