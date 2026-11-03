import React from "react";
import { ArrowRightIcon } from "./icons/Icons";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl rounded-3xl p-10 sm:p-16 bg-gradient-to-br from-blue-900/40 via-[#0E1322] to-[#0A0D16] border border-blue-500/30 text-center shadow-2xl overflow-hidden">
          {/* Ambient blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[100px] pointer-events-none" />

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to invest smarter?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Join thousands of investors using AI insights and real-time data to track portfolios and make better financial decisions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="./contact.html"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02]"
            >
              <span>Get Started Free</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="./request-demo.html"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-[1.02]"
            >
              <span>Schedule a Demo</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-neutral-400">
            No credit card required • 14-day free trial on Pro features • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};
