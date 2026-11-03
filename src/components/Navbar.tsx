import React, { useState } from "react";
import { SITE_CONTENT } from "../data/content";
import { Logo, ArrowRightIcon } from "./icons/Icons";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-[#0B0D13]/80 border border-white/10 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
        <a href="./index.html" className="flex items-center gap-2">
          <Logo />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {SITE_CONTENT.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="./contact.html"
            className="text-sm font-medium text-neutral-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </a>
          <a
            href="./contact.html"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Try it free</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl backdrop-blur-2xl bg-[#0B0D13]/95 border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-4">
          {SITE_CONTENT.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-neutral-200 hover:text-white py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="./contact.html"
              className="w-full py-2.5 text-center text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-white"
            >
              Sign In
            </a>
            <a
              href="./contact.html"
              className="w-full py-2.5 text-center text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20"
            >
              Try it free
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
