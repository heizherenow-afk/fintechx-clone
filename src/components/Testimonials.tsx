import React from "react";
import { SITE_CONTENT } from "../data/content";
import { StarIcon } from "./icons/Icons";

export const Testimonials: React.FC = () => {
  const { testimonials } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            10K+ Growth Community
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What investors say about the platform
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Hear from founders, angels, and portfolio managers who rely on FintechX daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0D0F17] border border-white/10 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px] overflow-hidden">
                  <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center font-bold text-white text-sm">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
