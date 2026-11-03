import React from "react";
import { SITE_CONTENT } from "../data/content";

export const TargetAudience: React.FC = () => {
  const { audience } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative bg-[#07080C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Tailored Experiences
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Who this platform is built for
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Engineered to empower both standalone retail wealth creators and professional asset management firms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audience.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#0D0F17] border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {item.subtitle}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="./contact.html"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Learn how it works for you</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
