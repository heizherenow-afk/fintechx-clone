import React from "react";
import { Logo } from "./icons/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="pt-20 pb-12 border-t border-white/10 bg-[#050609] text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b border-white/5">
          {/* Brand Col */}
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-neutral-400 max-w-sm leading-relaxed">
              AI-powered financial analytics and portfolio optimization platform built for modern retail investors and asset managers.
            </p>
            <div className="mt-6 flex items-center gap-3 text-neutral-400">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-neutral-300">All Systems Operational</span>
            </div>
          </div>

          {/* Product Col */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="./features.html" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="./pricing.html" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="./home-2.html" className="hover:text-white transition-colors">Home 2</a></li>
              <li><a href="./changelog.html" className="hover:text-white transition-colors">Changelog</a></li>
              <li><a href="./request-demo.html" className="hover:text-white transition-colors">Request Demo</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="./about.html" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="./blog.html" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="./contact.html" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="./waitlist.html" className="hover:text-white transition-colors">Waitlist</a></li>
              <li><a href="./faqs.html" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="./index.html" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="./index.html" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="./index.html" className="hover:text-white transition-colors">Security Disclosure</a></li>
              <li><a href="./index.html" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} FintechX Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SOC-2 Type II Certified</span>
            <span>256-Bit Encrypted</span>
            <span>FINRA/SIPC Compliant APIs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
