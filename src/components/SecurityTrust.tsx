import React from "react";
import { SITE_CONTENT } from "../data/content";
import { ShieldCheckIcon, CheckIcon } from "./icons/Icons";

export const SecurityTrust: React.FC = () => {
  const { security } = SITE_CONTENT;

  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-blue-950/20 via-white/[0.02] to-transparent border border-blue-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>{security.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {security.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-400">
              {security.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {security.points.map((pt, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="text-sm font-medium text-neutral-200">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
