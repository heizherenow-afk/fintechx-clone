import React, { useState } from "react";
import { SITE_CONTENT } from "../data/content";
import { ChevronDownIcon } from "./icons/Icons";

export const FAQAccordion: React.FC = () => {
  const { faqs } = SITE_CONTENT;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Clear Answers
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Find quick answers to common questions about the platform, integrations, and security.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#0B0D14] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 text-white hover:text-blue-400 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            Still have questions?{" "}
            <a href="./contact.html" className="text-blue-400 hover:underline font-semibold">
              Reach out to our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
