import React, { useState } from "react";
import { SITE_CONTENT } from "../data/content";
import { CheckIcon, ArrowRightIcon } from "./icons/Icons";

export const PricingTable: React.FC = () => {
  const { pricing } = SITE_CONTENT;
  const [annualBilling, setAnnualBilling] = useState(true);

  return (
    <section id="pricing" className="py-24 sm:py-32 relative bg-[#07080C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Plans & Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Transparent pricing without hidden fees
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Choose the plan that fits your portfolio size and analytical needs. Switch or cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                !annualBilling ? "bg-white text-black shadow-lg" : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-1.5 px-5 py-2 text-xs font-semibold rounded-full transition-all ${
                annualBilling ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25" : "text-neutral-400 hover:text-white"
              }`}
            >
              <span>Annual billing</span>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-white/20 font-bold">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {pricing.map((plan) => {
            const price = annualBilling ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative p-8 sm:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-950/40 via-[#0D101A] to-[#0A0C13] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 scale-[1.02]"
                    : "bg-[#0B0D14] border border-white/10 hover:border-white/20 shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-[11px] font-bold tracking-wider text-white uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                  <p className="mt-2 text-xs text-neutral-400 min-h-[32px]">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-5xl font-black text-white">${price}</span>
                    <span className="text-xs text-neutral-400 font-medium">/ month</span>
                  </div>
                  {annualBilling && plan.monthlyPrice > 0 && (
                    <div className="text-[11px] text-emerald-400 mt-1">Billed annually (${price * 12}/yr)</div>
                  )}

                  <ul className="mt-8 space-y-3.5 pt-6 border-t border-white/10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                        <CheckIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <a
                    href={plan.ctaHref}
                    className={`w-full py-3.5 px-4 rounded-xl text-center text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
