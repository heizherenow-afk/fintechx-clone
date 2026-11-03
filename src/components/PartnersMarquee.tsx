import React from "react";

const PARTNERS = [
  "Stripe", "Plaid", "Coinbase", "Robinhood", "Interactive Brokers", "Polygon", "Binance", "Alpaca"
];

export const PartnersMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-[#08090D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400">
          Trusted by traders and integrated with leading financial networks
        </p>
      </div>

      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div className="flex shrink-0 items-center gap-12 sm:gap-20 animate-marquee py-2">
          {PARTNERS.concat(PARTNERS).map((partner, idx) => (
            <div
              key={`${partner}-${idx}`}
              className="flex items-center gap-2.5 text-neutral-400 hover:text-white transition-colors duration-200"
            >
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-white">
                {partner[0]}
              </div>
              <span className="text-lg font-bold tracking-tight">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
